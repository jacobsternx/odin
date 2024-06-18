/**
 * DevTools environment testing.
 */

function updateLabel() {
	var addend1 = getNumber1();
	console.log('addend1:', addend1);
	var addend2 = getNumber2();
	console.log('addend2:', addend2);
	var sum = addend1 + addend2;
	console.log('sum:', sum);
	label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
  }
  
  function sum(a, b) {
	let result = a + b; // DevTools pauses on this line.
	return result;
  }
  debug(sum); // Pass the function object, not a string.
  sum();
  Make sure the target function is in scope
  DevTools throws a ReferenceError if the function you want to debug is not in scope.
  
  
  (function () {
	function hey() {
	  console.log('hey');
	}
	function yo() {
	  console.log('yo');
	}
	debug(yo); // This works.
	yo();
  })();
  debug(hey); // This doesn't work. hey() is out of scope.
  