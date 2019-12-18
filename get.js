const request = require('request');

request('https://ghibliapi.herokuapp.com/films', function(err, response, body){
if(err){
    console.log('error:', error);
} else {
    let ppl = JSON.parse(body)
    ppl.map(movie => {
        console.log(movie.title)
    })
    //console.log(ppl)
}
})