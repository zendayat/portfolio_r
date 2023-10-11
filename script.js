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

// const SliderL = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('stop');
//         }else{
//             entry.target.classList.remove('stop')
//         }
//     });
// });

const hiddenElements = document.querySelectorAll('.name_hidden');
const slidingElements = document.querySelectorAll('.top_l');
hiddenElements.forEach((el) => Observer.observe(el))
slidingElements.forEach((el) => SliderL.observe(el))