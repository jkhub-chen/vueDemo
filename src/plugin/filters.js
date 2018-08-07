// 保留小数点后两位（四舍五入）
const formatMoney = num => {
  let money;
  if(typeof num ==="string"){
    money=num.replace(/([0-9]+\.[0-9]{2})[0-9]*/, '$1');//抹零
  }else{
    money = Number(num).toFixed(2);
  }
  if (money === 'NaN') return '0.00';
  if (money.indexOf('.') === -1){
    money = money + '.00';
  } else if(money.substr(-2, 1) ==='.'){
    money = money + '0';
  }
  const now = money.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g, '$1,');
  return now;
}

// 取小数点的整数部分
const moneyToInt = num => {
  const numb = num.toString();
  return parseInt(numb.split('.')[0])
}

// 优化位数展示
const formatMoneyToW = num => {
  const money = num
  let now = ""
  if (money < 10000) {
    now = money + "元"
  } else {
    now = money / 10000 + "万"
  }
  return now;
}


// 隐藏手机号中间四位
const telHide = tel => {
  const tels = tel.toString();
  return tels.substring(0, 3) + "****" + tels.substring(7, 11);
}

const dong = num => {
  // const chen = parseInt(num);
  if(num === "" || num ==null){
    console.log(num,'1')
  }
  if(!isNaN(num)){
    console.log(num,'2')
  }else{
    console.log(num,'3')
  }
}

export {
  formatMoney,
  moneyToInt,
  formatMoneyToW,
  telHide,
  dong
}
