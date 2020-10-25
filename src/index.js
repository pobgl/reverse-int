module.exports = function reverse (n) {
  if (n < 0) n = Math.abs(n);
  let result = ('');
  result += String(n).split('').reverse().join('');
  return result;
}
