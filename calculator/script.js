let screen=document.querySelector('#screen')
let btn=document.querySelectorAll('button')
for(let b of btn){
    b.addEventListener('click',(ev)=>{
        if(ev.target.innerText=='C'){
            screen.value='';
        }
        else if(ev.target.innerText=='='){
            try{
                screen.value=eval(screen.value)
            }
            catch(e){
                screen.value='Invalid Operation'
            }
        }
        else screen.value += ev.target.innerText;
    })
}