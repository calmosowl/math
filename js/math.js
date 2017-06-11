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
	min: 0,
	max: 20,
	octothorpe: ['+', '-', '*']
});

var example = document.querySelectorAll('.example');
example = Array.prototype.slice.call(example);
// var section = document.getElementById('section');
// var elements = section.getElementsByTagName('input');
function examination() {
	var input = example[i].children[4];
    input.onkeydown = (ev) => {
		if(ev.keyCode == 13){
			if(input.value == input.getAttribute('result')) {
				input.setAttribute('style', 'color: rgba(10, 242, 101, 0.4)');
				
			} else {input.setAttribute('style', 'color: rgba(242, 10, 10, 0.4)');}
		}
	}
}
/*==========================*/
for (var i = 0; i < example.length; i++) {
	math.setNums(example[i].children[0]);
	math.setNums(example[i].children[2]);
	math.setOctothorpe(example[i].children[1]);

	switch((example[i].children[1]).textContent) {
		case '+': 
			var result = +example[i].children[0].textContent + +example[i].children[2].textContent;
			example[i].children[4].setAttribute('result', result);

		break

		case '-':
			var result = +example[i].children[0].textContent - +example[i].children[2].textContent;
			example[i].children[4].setAttribute('result', result);
		break

		case '*':
			var result = +example[i].children[0].textContent * +example[i].children[2].textContent;
			example[i].children[4].setAttribute('result', result);
		break

		case '/':
			var result = +example[i].children[0].textContent / +example[i].children[2].textContent;
			example[i].children[4].setAttribute('result', result);
		break

		default:
			var result = +example[i].children[0].textContent + +example[i].children[2].textContent;
			example[i].children[4].setAttribute('result', result);
		break
	}
	examination();
	//console.log( input.value + ': ' + input.getAttribute('result') );
}
/*=========================*/


})();
}, false);

function MathMashine(options){
	let that = this;
	this.max = options&&options.max ? options.max: 10;
	this.min =  options&&options.min ? options.min: 0;
	this.octothorpe = options&&options.octothorpe ? options.octothorpe: ['+', '-'];
	this.numsPrototype = [0,0];
	this.data = {
		nums: [],
		octothorpe: '',
		result: 0,
		stamp: []
	};

	function random(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	}

	function randomOctothorpe(arr) {
    	var operator = Math.floor(Math.random() * arr.length);
    	var operatorSign = arr[operator];
    	return operatorSign;
	}
	
	function getStamp(obj) {
  		for (var key in obj) {
			that.data.stamp.push( obj[key] );
		}
    return that.data.stamp;
}
	
	this.data.nums = this.numsPrototype.map(function(item) {
  		return item = random(that.min, that.max);
	});

	//this.data.octothorpe = returnThis("+", "-");
	
	this.data.result = this.data.nums.reduce(function(sum, current) {
  		return sum + current;
	});

	getStamp(this.data);

	this.setNums = (el) => {
		el.textContent = random(that.min, that.max);
	}

	this.setOctothorpe = (el) => {
		el.textContent = randomOctothorpe(that.octothorpe);
	}
}

/*O_O_O_O_O*/

function isPositive(number) {
  return number > 0;
}