interface removeNode {
  [propName: string]: any;
}

/**
 * 去除数据中空的属性
 *
 * @param {(removeNode | Array<any>)} data 需要操作的数据
 * @param {string} [removeAttr="children"] 要删除的属性的属性名
 * @returns
 */
function removeChild(
  data: removeNode | Array<removeNode>,
  removeAttr: string = "children"
) {
  let delDatas = JSON.parse(JSON.stringify(data));
  function noChild(delData: any) {
    let childArr: any[] = [];
    if (delData) {
      if (Object.prototype.toString.call(delData) === "[object Array]") {
        delData.forEach((v: removeNode) => {
          if (
            v[removeAttr] !== undefined &&
            (v[removeAttr] === null ||
              (Object.prototype.toString.call(v[removeAttr]) ===
                "[object Array]" &&
                v[removeAttr].length === 0) ||
              v[removeAttr] === "")
          ) {
            delete v[removeAttr];
            childArr.push(v);
          } else {
            noChild(v[removeAttr]);
          }
        });
      } else if(Object.prototype.toString.call(delData) === "[object object]") {
        noChild(delData[removeAttr]);
      }
      if (
        childArr.length !== 0 &&
        Object.prototype.toString.call(delData) !== "[object Array]"
      ) {
        delData[removeAttr] = childArr;
      }
    }
    return delData;
  }
  return noChild(delDatas);
}

export default removeChild;
