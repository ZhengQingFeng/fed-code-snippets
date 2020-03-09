export function getQueryParams(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return ''
}

export function getQueryParamsObj() {
  let paramsObj = {}
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => paramsObj[k] = v)
  return paramsObj
}