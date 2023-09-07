class Component {
  render() {
    throw new Error("Turunan harus menggunakan method render")
  }
} // sesuai perintah pada pdf challenge 2 untuk memberikan parent class Component yang turunannya Car

class Car extends Component {
	static list = []

	static init(cars) {
		this.list = cars.map((i) => new this(i))
	}

	constructor(props) {
    super()
		this.capacity = props.capacity
		this.image = props.image
		this.rentPerDay = props.rentPerDay
		this.manufacture = props.manufacture
		this.model = props.model
		this.type = props.type
		this.description = props.description
		this.transmission = props.transmission
		this.year = props.year
		this.id = props.id
	}
	numberSplit(number) {
		const result = []
		const string = number.toString()
		const reversedString = string.split('').reverse()

		for (let i = 0; i < reversedString.length; i++) {
			if (i % 3 === 0 && i != 0) {
				result.push(`${reversedString[i]}.`)
			} else {
				result.push(reversedString[i])
			}
		}
		return result.reverse().join('')
	}
	render() {
		return `
      <div id="${this.id}" class="col-md-4 col-sm-6 col-12 carlist__card--gap m-0 p-0">
        <div class="carlist__card flex-column gap--large justify-content-between">
          <div class="gap--normal flex-column">
            <img class="carlist__image" src="${this.image}">
            <div class="gap--small flex-column">
              <p class="font--regular">${this.manufacture} ${this.model}/${this.type}</p>
              <p class="font--feature">Rp ${this.numberSplit(this.rentPerDay)} / hari</p>
              <p class="font--light">${this.description}</p>
            </div>
            <div class="gap--small flex-row">
              <img src="images/fi_users_card.svg">
              <p class="font--light">${this.capacity} orang</p>
            </div>
            <div class="gap--small flex-row">
              <img src="images/fi_settings.svg">
              <p class="font--light">${this.transmission}</p>
            </div>
            <div class="gap--small flex-row">
              <img src="images/fi_calendar.svg">
              <p class="font--light">Tahun ${this.year}</p>
            </div>
          </div>
          <button class="button--green button--transition text-nowrap button--fullwidth">Pilih Mobil</button>
        </div>
      </div>
    `
	}
}
