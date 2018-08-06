const form  = document.createElement('form');
const input = document.createElement('input');
const div   = document.createElement('div');
const img   = document.createElement('img'); 
const p     = document.createElement('p'); 

const imgNum = 5;
const falls = ['Angel','Kaieteur', 'Sutherland', 'Victoria', 'Yosemite'];

for(let i = 0; i < imgNum; i++){
    /*Create images*/
    const newImg  = img.cloneNode(false); 
    newImg.setAttribute('src', `img/img${i + 1}.jpg`); 
    newImg.setAttribute('alt', falls[i]);
    newImg.dataset.name = falls[i];
    div.appendChild(newImg);
    
    /*Create inputs*/
    const newP = p.cloneNode(false);
    const newInput = input.cloneNode(false);
    newInput.setAttribute('type', 'radio');
    newInput.setAttribute('name', 'falls');
    newInput.setAttribute('value', falls[i]); 
    newP.textContent = falls[i];
    newP.insertBefore(newInput, newP.firstChild); 
    form.appendChild(newP);    
}


