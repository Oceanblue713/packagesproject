var _ = require('lodash');                                   //L1
var wine = 'I like red wine';                                //L2
var h4Heading = document.querySelector('h4');                //L3
h4Heading.textContent = _.replace(wine, 'red', 'white');     //L4

var $ = require('jquery');
$('h4').css('color', 'white');
