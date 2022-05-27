/*
 * @Author: Aisanyi
 * @Date: 2021-05-25 15:39:18
 * @LastEditors: Aisanyi
 * @LastEditTime: 2022-05-27 14:25:00
 * @Description: 生成水印
 */
let mo: MutationObserver | null;
interface MaterConfig {
  content?: string;
  container?: HTMLElement;
  width?: string;
  height?: string;
  textAlign?: string;
  textBaseline?: string;
  font?: string;
  fillStyle?: string;
  rotate?: number;
}

/**
 * 生成水印
 * @param content 文字内容
 * @param container  dom节点
 * @param width 水印宽
 * @param height 水印高
 * @param textAlign 文字对齐方式
 * @param textBaseline 文字居中方式
 * @param font 字体的字号以及字体
 * @param fillStyle 字体颜色
 * @param rotate 旋转角度
 */
export default function waterMark(config: MaterConfig): void {
  const {
    content = "禁止外传",
    container = document.body,
    width = "100px",
    height = "60px",
    textAlign = "center",
    textBaseline = "middle",
    font = "12px Microsoft Yahei",
    fillStyle = "rgba(184, 184, 184, 0.6)",
    rotate = 20,
  } = config;
  const oldDiv = document.querySelectorAll(".watermarkDiv");
  if (oldDiv.length !== 0) {
    oldDiv.forEach((v) => {
      container.removeChild(v);
    });
  }
  const canvas = document.createElement("canvas");

  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  const ctx: any = canvas.getContext("2d");

  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate((Math.PI / 180) * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);

  const base64Url = canvas.toDataURL();
  const watermarkDiv = document.createElement("div");
  const styleStr = `
    position:absolute;
    top:0;
    left:0;
    width: ${container.offsetWidth}px;
    height:${container.offsetHeight}px;
    z-index: 4;
    pointer-events:none;
    background: url('${base64Url}')`;

  watermarkDiv.classList.add("watermarkDiv");
  watermarkDiv.setAttribute("style", styleStr);
  container.insertBefore(watermarkDiv, container.firstChild);

  // 这里检测水印的dom有没有被修改
  const MutationObserver = window.MutationObserver;
  if (MutationObserver) {
    mo = new MutationObserver(function () {
      const __wm = document.querySelector(".watermarkDiv");
      // 在水印dom变动时 重新绘制水印
      if ((__wm?.getAttribute("style") !== styleStr) || !__wm) {
        // 避免一直触发
        mo?.disconnect();
        mo = null;
        waterMark({
          content,
          container,
          width,
          height,
          textAlign,
          textBaseline,
          font,
          fillStyle,
          rotate,
        });
      }
    });
    mo?.observe(container, {
      attributes: true,
      subtree: true,
      childList: true,
    });
  }
}

export function clear(container = document.body): void {
  const oldDiv = document.querySelectorAll(".watermarkDiv");
  if (oldDiv.length !== 0) {
    oldDiv.forEach((v) => {
      container.removeChild(v);
    });
  }
  mo?.disconnect();
}
