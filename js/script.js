const form  = document.createElement('form');
const input = document.createElement('input');
const div   = document.createElement('div');

const imgNum = 5;

for(let i = 0; i < imgNum; i++){
    const newImg  = document.createElement('img'); 
    newImg.setAttribute('src', `img/img${i + 1}.jpg`);    
    div.appendChild(newImg);
}

