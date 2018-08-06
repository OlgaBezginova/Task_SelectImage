const form  = document.createElement('form');
const input = document.createElement('input');
const div   = document.createElement('div');

const imgNum = 5;
const falls = ['Angel','Kaieteur', 'Sutherland', 'Victoria', 'Yosemite'];

for(let i = 0; i < imgNum; i++){
    const newImg  = document.createElement('img'); 
    newImg.setAttribute('src', `img/img${i + 1}.jpg`); 
    newImg.setAttribute('alt', falls[i]);
    newImg.dataset.name = falls[i];
    div.appendChild(newImg);
}



//document.body.appendChild(div);