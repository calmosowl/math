'use strict';
document.addEventListener("DOMContentLoaded", (ev) => {
	(()=>{
let log = document.getElementById('log');
function getLog(msg) {
    log.textContent += msg + "\n";
    var ot = log.scrollHeight - log.clientHeight;
    if (ot > 0) log.scrollTop = ot;
}

var math = new MathMashine({
	min: -20,
	max: 20
});

//math.setNums;
getLog(math.data.nums);
getLog(math.data.result);

console.dir(math);

let example = document.querySelectorAll('.example');
example = Array.prototype.slice.call(example);

let arr = [];
// example.forEach(function(example) {
//     console.log( example );
// });


})();
}, false);

function MathMashine(options){
	let that = this;
	this.max = options&&options.max ? options.max: 10;
	this.min =  options&&options.min ? options.min: 0;
	this.numsPrototype = [0,0];
	this.data = {
		nums: [],
		octothorpe: '',
		result: 0
	};

	function random(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	}
	
	this.data.nums = this.numsPrototype.map(function(item) {
  		return item = random(that.min, that.max);
	});

	this.data.result = this.data.nums.reduce(function(sum, current) {
  		return sum + current;
	});

	this.data.octothorpe = "";
}

/*O_O_O_O_O*/

function isPositive(number) {
  return number > 0;
}