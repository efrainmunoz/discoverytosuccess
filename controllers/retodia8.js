var express = require('express');
var router = require('express').Router();
var path = require('path');

router.use(express.static(__dirname + '/../assets'));

router.get('/retodia8', function (req, res) {
    res.sendFile('retodia8.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;
