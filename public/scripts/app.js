class App {
	constructor() {
		this.cariMobilButton = document.getElementById("carimobil")
		this.carListContainer = document.getElementById("carlist")
		this.tipeDriver = document.getElementById("tipedriver")
		this.tanggal = document.getElementById("tanggal")
		this.waktuJemput = document.getElementById("waktujemput")
		this.jumlahPenumpang = document.getElementById("jumlahpenumpang")
	}

	async init() {
		await this.load()
		this.run()
	}


	async run() {
		await this.loadFilter()
		Car.list.forEach((car) => {
			const node = document.createElement("slot")
			node.innerHTML = car.render()
			this.carListContainer.appendChild(node)
		})
	}

	async load() {
		const cars = await Binar.listCars()
		Car.init(cars)
	}

	async loadFilter() {
		const cars = await Binar.listCars((data) => {
			let filterPenumpang = true
			let filterWaktu = true
			let filterTipeDriver = true
			const dateAvailable = new Date(data.availableAt)
			const dateSewa = new Date(`${this.tanggal.value} ${this.waktuJemput.value}`)
			const isAvailable = this.tipeDriver.value === "true" && data.available
			const isNotAvailable = this.tipeDriver.value === "false" && !data.available

			if(this.jumlahPenumpang.value !== ""){
				filterPenumpang = data.capacity >= this.jumlahPenumpang.value
			}
			if(this.tanggal.value !== ""){
				filterWaktu = dateAvailable >= dateSewa
			}
			if(this.tipeDriver.value !== ""){
				filterTipeDriver = isAvailable || isNotAvailable
			}
			return filterPenumpang && filterWaktu && filterTipeDriver
		})
		
		Car.init(cars)
	}


	clear = () => {
		let child = this.carListContainer.firstElementChild;

		while (child) {
			child.remove();
			child = this.carListContainer.firstElementChild;
		}
	};
}