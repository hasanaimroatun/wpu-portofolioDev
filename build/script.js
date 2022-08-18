// event for each button (allProject, react, and responsive)

const res = document.querySelectorAll(".responsive");
const rct = document.querySelectorAll(".react");

const bAllProject = document.getElementsByClassName('button')[0];
bAllProject.addEventListener('click', function(){
    for(const r of res) {
        r.classList.replace('none', 'responsive')
    }
    for(const r of rct) {
        r.classList.replace('none', 'react')
    }
})

const bReact = document.getElementsByClassName('button')[1];
bReact.addEventListener('click', function(){
    for(const r of rct) {
        r.classList.replace('none', 'react')
    }
    for(const r of res) {
        r.classList.replace('responsive', 'none')
    }
})

const bResponsive = document.getElementsByClassName('button')[2];
bResponsive.addEventListener('click', function(){
    for(const r of res) {
        r.classList.replace('none', 'responsive')
    }
    for(const r of rct) {
        r.classList.replace('react', 'none')
    }
})

// event toggle for button
const button = document.querySelector('.projects');

button.addEventListener('click', function(e){
    if(e.target.className !== 'button'){
        bAllProject.classList.toggle('none')
        bReact.classList.toggle('none')
        bResponsive.classList.toggle('none')
    }
})