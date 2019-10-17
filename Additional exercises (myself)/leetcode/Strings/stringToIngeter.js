//solution 1

var myAtoi = function(str) {
  const parsedString = str.trim().split(' ')[0];
  const intVal = parseInt(parsedString, 10);

  const converted = Number.isNaN(intVal) ? 0 : intVal;
  if (converted === 0) return 0;

  const signMultiple = converted > 0 ? 1 : -1;
  const adjuster = converted > 0 ? -1 : 0;
  return (
    signMultiple * Math.min(Math.abs(converted), Math.pow(2, 31) + adjuster)
  );
};

//solution 2

var myAtoi = function(str) {
  cleanedStr = str.trim();
  let int = parseInt(cleanedStr, 10);
  if (cleanedStr.length <= 0 || isNaN(int)) {
    return 0;
  }

  max = Math.pow(2, 31) - 1;
  min = -1 * Math.pow(2, 31);

  if (int > min && int < max) {
    return int;
  }
  if (int < 0) {
    return min;
  } else {
    return max;
  }
};
