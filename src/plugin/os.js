//客户端判断

export default{
  _android: function() {
    return /Android/i.test(navigator.userAgent);
  },
  _ios: function() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  isWechat: function() {
    return /MicroMessenger/i.test(navigator.userAgent);
  },
  isAndroid: function() {
    return this._android() && !this.isWechat();
  },
  isIOS: function() {
    return this._ios() && !this.isWechat();
  }
}
