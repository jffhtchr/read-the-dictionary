import BigButton from './components/BigButton';
import Info from './components/Info';

// Create Story Button
var createStoryButtons = document.querySelectorAll(".rtd__header__button")
Array.prototype.forEach.call(createStoryButtons, function(el) {
    var bigButton = new BigButton({el:el})
})

// Info Button
var infoButtons = document.querySelectorAll(".rtd__info-button")
Array.prototype.forEach.call(infoButtons, function(el) {
    var info = new Info({el})
})