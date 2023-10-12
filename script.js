const Observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
});

const Fade = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('appear');
        }else{
            entry.target.classList.remove('appear')
        }
    });
});

const hiddenElements = document.querySelectorAll('.name_hidden');
const appearingElements = document.querySelectorAll('.me_info');
hiddenElements.forEach((el) => Observer.observe(el));
appearingElements.forEach((el) => Fade.observe(el));

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
}