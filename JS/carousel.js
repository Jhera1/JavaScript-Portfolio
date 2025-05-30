const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');


let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length -1 ? current + 1 : 0;
let prev = current > 0 ? current -1 : slides.length - 1;

// console.log('current', current);
// console.log('next', next);
// console.log('prev', prev);


const dummySlides = [
    //Slide 0
    //Slide 1
    //Slide 2
    //Slide 3
]

// create event listener for previous/next
// goToNext ()
// goToPrev ()
// updateIndexes(param)
// updateCSS()


// Decide how to call prev/next
// Update variables
// [Current] = newIndex
// [next] = current + 1 : 0
// [prev] = current - 1 : length - 1
// update css classes

const update = () => {
    slides.forEach((slide) => {
     slide.classList.remove('active', 'prev', 'next');
    })
    slides[current].classList.add('active');
    slides[prev].classList.add('prev');
    slides[next].classList.add('next');
}



const goToNum = (number) => {
    current = number;
    next = current < slides.length -1 ? current + 1 : 0;
    prev = current > 0 ? current -1 : slides.length - 1;
    update();
}





const goToNext = () => current < slides.length -1 ? goToNum(current + 1) : goToNum(0);
const goToPrev = () => current > 0 ? goToNum(current -1) : goToNum(slides.length - 1);

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
}

update();