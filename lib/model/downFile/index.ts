/**
 * 根据提供的文件流和文件名（带后缀）下载文件
 *
 * @param {Array<BlobPart>} data 需要处理的文件流
 * @param {string} fileName
 */
function downFile(data: Array<BlobPart>, fileName: string) {
  let url: string = window.URL.createObjectURL(new Blob(data));
  let link: HTMLAnchorElement = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("dowmload", fileName);
  document.body.appendChild(link);
  link.click();
}

export default downFile;
