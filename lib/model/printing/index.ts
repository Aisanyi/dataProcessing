/**
 *
 * @param html 需要打印的html片段，如需要css样式，请一并传入
 */
export default function printing(html: string): boolean {
  let win: Window | null = window.open();
  if (win === null) return false;
  win.document.write(html);
  win.print();
  win.setTimeout(() => {
    if (win === null) return false;
    win.close();
  }, 0);
  return true;
}
