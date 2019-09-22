module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let count2 = 0;
  let count5 = 0;
let factorial = arr.map(function(item) {
  let value;
  let step;
  if(item.includes("!!") == false) {
    value = +item.slice(0, -1);
    step = 1;
  } else {
  	value = +item.slice(0, -2);
  	step = 2;
  };
  for(let i = value; i > 0; i = i - step) {
  	for( let j = i; j % 2 ==0; j = j/2) {
      count2++;
  	};
  	for(j = i; j % 5 ==0; j = j/5) {
      count5++;
  	};
  };
});
return Math.min(count2, count5);
};