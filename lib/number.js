exports.numberFormat = (number, format, toString = false) => {
  // TODO: handle the number with format
  let isDecimal = false;
  if (/^(10+)$/.test(format)) {
    //handle before decimal round, eg: 10 (ten digit rounding)
    number = Math.ceil(number / +format) * +format;
  }
  if (format === 'ceil') {
    //handle get ceil
    number = Math.ceil(number)
  }
  if (format === 'int') {
    //handle just get interger
    number = parseInt(number)
  }
  if (format === 'round') {
    //handle get round number
    number = Math.round(number)
  }
  let m;
  if (isDecimal = /^\%\.([0-9]+)f$/.test(format)) {
    //handle floating point, eg: %.2f (after decimal 2 digits)
    m = /^\%\.([0-9]+)f$/.exec(format);
    number = +(Math.round(number * Math.pow(10, m[1] || 0)) / Math.pow(10, m[1] || 0)).toFixed(m[1]);
  }
  //handle toString 
  if (toString === true) {
    let str = number.toString().split('.');
    // add comma in number
    number = str[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (isDecimal === true) {
      // add 0 for the decimal digit not enough;
      const len = (!str[1]) ? 0 : str[1].toString().length;
      number += '.' + (!!str[1] ? str[1] : '') + '0'.repeat(m[1] - len);
    }
  }

  return number
}