var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

xhr.onload = function() {
var data = JSON.parse(this.response)

data.forEach(movie => {
    console.log(movie.title)
})
}

xhr.send()

