const wrapper = document.createElement('wrapper');
const form    = document.createElement('form');
const input   = document.createElement('input');
const div     = document.createElement('div');
const img     = document.createElement('img'); 
const p       = document.createElement('p'); 

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
    if(!i){
        newInput.setAttribute('checked', true);  
        newImg.classList.add('active');
    }
    newP.textContent = falls[i];
    newP.insertBefore(newInput, newP.firstChild); 
    form.appendChild(newP);    
}

wrapper.appendChild(div);
wrapper.appendChild(form);
document.body.appendChild(wrapper);

const imgs = document.querySelectorAll('img');

function clearActive(){
    for(let i = 0; i < imgNum; i++){
        imgs[i].classList.remove('active');
    }
}

form.addEventListener('change', function(event) {
    if (!event || !event.target || event.target.tagName !== 'INPUT') {
        return;
    }
    
    clearActive();
    
    const selectedItem = event.target.getAttribute('value');
    for(let i = 0; i < imgNum; i++){
        if(imgs[i].dataset.name === selectedItem){
            imgs[i].classList.add('active');
        }
    }    
});
