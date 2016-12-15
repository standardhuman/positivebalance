var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const model = {
  activities: [
    {
        name: 'run',
        moreorless: 1,
        quantity: 1,
        unit: 'mile',
        weight: 5,
        didido: 1,
        howmanyunits: 0
    }, {
        name: 'drink',
        moreorless: -1,
        quantity: 1,
        unit: 'drinks',
        weight: 6,
        didido: 1,
        howmanyunits: 0
    }
  ]  
}
app.get('/', function (req, res) {
  res.send(model)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
