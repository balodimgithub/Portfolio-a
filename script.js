const tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab){
    tab.addEventListener('click', function(e){
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(function(box){
            const panel = document.querySelector(e.target.dataset.target)
            if(panel==box){
                box.classList.add('animate1')
            }
            else{
                box.classList.remove('animate1');
            }
        })
    })
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')
     btn.addEventListener('click', () =>{
        btn.classList.toggle('open')
        // nav.classList.toggle('flex')
         nav.classList.toggle('hidden')
     })
    
})
