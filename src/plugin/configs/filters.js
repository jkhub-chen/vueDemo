// toFixed 四舍五入bug
Number.prototype.toFixed = function(s) {
  var str=this.toString();
  var model=`([0-9]+\\.[0-9]{${s}})[0-9]*`
  return str.replace(new RegExp(model), '$1');//抹零
  // var num = this > 0 ? 0.5 : -0.5
  // return (parseInt(this * Math.pow(10, s) + num) / Math.pow(10, s)).toString()
}

export function formatMoney(num) {
  var money
  if(typeof num ==="string"){
    money=num.replace(/([0-9]+\.[0-9]{2})[0-9]*/, '$1');//抹零
  }else{
    money = Number(num).toFixed(2);
  }
  if (money == 'NaN') return '0.00';
  if (money.indexOf('.') == -1){
    money = money + '.00';
  } else if(money.substr(-2, 1)=='.'){
    money = money + '0';
  }
  var now = money.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g, '$1,');
  return now;
}
export function moneyToInt(num) {
  return parseInt(num.split('.')[0])
}
export function formatMoneyToW(num) {
  var money = num
  var now = ""
  if (money < 10000) {
    now = money + "元"
  } else {
    now = money / 10000 + "万"
  }
  
  return now;
}

export function formatDate(str) {
  if (!str) return '-'
  return moment(str, ["YYYYMMDDhhmmss", "YYYY-MM-DD HH:mm:ss"]).format('YYYY-MM-DD')
}

export function formatDateTime(str) {
  if (!str) return '-'
  return moment(str, ["YYYYMMDDhhmmss", "YYYY-MM-DD HH:mm:ss"]).format('YYYY-MM-DD HH:mm:ss')
}

export function formatDateTimes(str) {
  if (!str) return '-'
  return moment(str, ["YYYYMMDDhhmmss", "YYYY-MM-DD HH:mm:ss"]).format('YYYY-MM-DD HH:mm')
}

export function telHide(tel) {
  return tel.substring(0, 3) + "****" + tel.substring(7, 11);
}

export function tailNumber(num, len) {
  return num.substr(num.length - len);
}
