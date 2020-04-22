/**
 * 选择内容
 *
 * @param {*} textbox 结点对象
 * @param {number} startIndex 起始光标
 * @param {number} stopIndex 结束光标
 */
function selectText(textbox: any, startIndex: number, stopIndex: number) {
  if (textbox.createTextRange) {
    //ie
    const range = textbox.createTextRange();
    range.collapse(true);
    range.moveStart("character", startIndex); //起始光标
    range.moveEnd("character", stopIndex - startIndex); //结束光标
    range.select(); //不兼容苹果
  } else {
    //firefox/chrome
    textbox.setSelectionRange(startIndex, stopIndex);
    textbox.focus();
  }
}

/**
 *
 * 复制文字到剪贴板
 *
 * @param {(number | string)} text 需要复制的内容
 * @param {Function} [callBack = ()=>{}] 成功后的回调
 */
function copyText(text: number | string, callBack: Function = ()=>{}): boolean {
  // 数字没有 .length 不能执行selectText 需要转化成字符串
  const textString = text.toString();
  let input: any;
  if (!input) {
    input = document.createElement("input");
    input.id = "copy-input";
    input.readOnly = "readOnly"; // 防止ios聚焦触发键盘事件
    input.style.position = "absolute";
    input.style.left = "-1000px";
    input.style.zIndex = "-1000";
    document.body.appendChild(input);
  }

  input.value = textString;
  // ios必须先选中文字且不支持 input.select();
  selectText(input, 0, textString.length);
  document.execCommand("copy") ? callBack() : false
  input.blur();
  return true
}

export default copyText;