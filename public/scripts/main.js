/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App()

app.cariMobilButton.addEventListener('click', () => {
    app.clear()
    app.run()
})

app.init()