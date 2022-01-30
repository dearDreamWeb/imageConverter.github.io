import './css/reset.css';
import './css/index.css';

const file: HTMLInputElement = document.querySelector('#file')!;
const canvas: HTMLCanvasElement = document.querySelector('#canvas')!;
const downListDom: HTMLUListElement = document.querySelector('.down_list')!;

//创建文件读取相关的变量  
let imgBase64Data = '';
let fileName = '';

file.onchange = null;
file.onchange = () => {
  start();
}

const uploadFile: () => Promise<string> = () => {
  return new Promise((resolve) => {
    const fileData = file.files![0];
    fileName = file.files![0].name.split('.')[0];
    //创建读取文件的对象  
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgFile = e.target!.result as string;
      resolve(imgFile)
    };
    //正式读取文件  
    reader.readAsDataURL(fileData);
  })
}


const canvasImage = (imgBase64Data: string) => {
  const ctx = canvas.getContext('2d')!;
  const canvasW = canvas.width;
  const canvasH = canvas.height;
  const img = new Image();
  img.src = imgBase64Data;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvasW, canvasH);
    const dataUrl = canvas.toDataURL('image/x-icon')

    canvas.toBlob((blob) => {
      const linkDom = document.createElement("a");
      const liDom = document.createElement('li');
      linkDom.textContent = fileName;
      // downListDom
      liDom.appendChild(linkDom);
      downListDom.appendChild(liDom);
      linkDom.download = fileName + ".ico";
      linkDom.href = window.URL.createObjectURL(blob!);
    }, 'image/vnd.microsoft.icon')
  }
}


const start = async () => {
  imgBase64Data = await uploadFile();
  canvasImage(imgBase64Data)
}

// https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob
``