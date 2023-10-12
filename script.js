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
    dropDownMenu.classList.toggle('open');
}

const toggleBtn1 = document.querySelector('.toggle_btn1');
const toggleBtnIcon1 = document.querySelector('.toggle_btn i1');
const dropDownMenu1 = document.querySelector('.dropdown_menu1');

toggleBtn1.onclick = function() {
    dropDownMenu1.classList.toggle('open');
}

const toggleBtn2 = document.querySelector('.toggle_btn2');
const toggleBtnIcon2 = document.querySelector('.toggle_btn i2');
const dropDownMenu2 = document.querySelector('.dropdown_menu2');

toggleBtn2.onclick = function() {
    dropDownMenu2.classList.toggle('open');
}

const toggleBtn3 = document.querySelector('.toggle_btn3');
const toggleBtnIcon3 = document.querySelector('.toggle_btn i3');
const dropDownMenu3 = document.querySelector('.dropdown_menu3');

toggleBtn3.onclick = function() {
    dropDownMenu3.classList.toggle('open');
}