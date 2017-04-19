let shirtExpress = require('express');
let app = shirtExpress();
let cors = require('cors');
let shirtPie = require('./shirt.json');
app.use(cors());



app.get('/shirt/:shirtId', function (request, response){
  let shirtId = request.params.shirtId;
  console.log(shirtId);
  let index = parseInt(shirtId);
  console.log(index);
  let shirt = shirtPie[index];
  console.log(shirt);
  if (shirt) {
    response.send(shirt);
 }else {
   response.send('Sorry! We only have three Shirts at time time.')
 }
});


// app.get('/shirtPage', function (request, response){
//   response.sendFile('./index.html', {root: __dirname })
// })



app.listen(3000,function (){
 console.log( 'hello')
});
