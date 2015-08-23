var express = require('express');
var router = express.Router();

var tmpData = {
    "gpio1": true,
    "gpio2": true,
    "gpio3": true
}

/* GET gpios listing. */
router.get('/', function(req, res, next) {
  res.send({"result":tmpData});
});

router.get('/:id', function(req, res, next) {
    var data = tmpData['gpio'+req.params.id]
    if(data) {
        res.send({"result":data});
    } else {
         res.send({"result":-1});
    }
    
});

router.put('/:id/:value', function(req, res, next) {
    var value = (req.params.value === 'on');
    tmpData['gpio'+req.params.id] = value;
    res.send({"result":tmpData['gpio'+req.params.id]});
});

module.exports = router;
