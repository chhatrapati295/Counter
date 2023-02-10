const deBtn = document.querySelector('.deBtn')
const inBtn = document.querySelector('.inBtn')
const reBtn = document.querySelector('.reBtn')
const heading = document.querySelector('.heading')
let index = 0
heading.textContent = index
const headingColor = ()=>{
    if(index > 0){
        heading.style.color = 'green';
    }else if(index<0){
        heading.style.color = 'red';
    }else{
        heading.style.color = 'black';
    }
}
inBtn.addEventListener('click',()=>{
    index++;
    headingColor()
    heading.textContent = index
})
deBtn.addEventListener('click',()=>{
    index--;
    headingColor()
    heading.textContent = index
})
reBtn.addEventListener('click',()=>{
    index=0;
    headingColor()
    heading.textContent = index
})