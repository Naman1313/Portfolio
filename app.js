let typed = new Typed(".typing", {
    strings: [" WEB DEVELOPER", " BACKEND ENTHUSIAST", " UI/UX Explorer", " CODE CRAFTER"],
    backSpeed: 30,
    typeSpeed: 60,
    loop: true
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwj5o6ENTSaIU4Opeo3lhpwK6QhhYO7_ztl9hnv2-g4lisITqPaIezWseIjjTWpAcdf/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Your Info submitted Successfully!!!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})