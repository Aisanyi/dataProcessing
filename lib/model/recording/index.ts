declare let MediaRecorder: any;

interface videoConfig {
  audio: any;
  video: any
}


/**
 *  录制
 */
export default class Record {
  mediaRecorder: any = null;
  chunks: Array<any> = [];
  url: string = "";
  type: string = "";
  videoConfig: videoConfig = {
    audio: true,
    video: {
      width: { ideal: 1280, max: 1920 },
      height: { ideal: 720, max: 1080 },
    },
  };
  constructor(type: string) {
    this.type = type;
  }
  // 创建录像
  create() {
    switch (this.type) {
      case "camera":
        this.videoConfig = {
          audio: true,
          video: {
            width: { ideal: 1280, max: 1920 },
            height: { ideal: 720, max: 1080 },
          },
        };
        break;
      case "desktop":
        this.videoConfig = {
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: "desktop",
            },
          },
        };
        break;
    }
    navigator.mediaDevices.getUserMedia(this.videoConfig).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = (e: any): void => {
        this.chunks.push(e.data);
      };
      this.mediaRecorder.onstop = () => {
        this.url = window.URL.createObjectURL(
          new Blob(this.chunks, {
            type: "video/x-msvideo",
          })
        );
      };
    });
  }

  // 开始录制
  start() {
    this.mediaRecorder.start();
  }

  // 录制结束
  stop() {
    this.mediaRecorder.stop();
  }

  // 重新开始录制
  init() {
    this.chunks = [];
    this.create();
  }

  // 下载
  down() {
    let win = window.open(this.url);
    if (win === null) return false;
    win.close();
  }
}
