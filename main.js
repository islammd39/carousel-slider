
const images = [
    'images/slide-1.jpg',
    'images/slide-2.jpg',
    'images/slide-3.jpg',
    'images/slide-4.jpg',
    'images/slide-5.jpg',
    'images/slide-6.jpg',
    'images/slide-7.jpg',
    'images/slide-8.jpg',
    'images/slide-9.jpg',
]
let indexOfImages = 0
setInterval(() => {
    if(indexOfImages === images.length){
        indexOfImages = 0;
    }
    const slide = images[indexOfImages]
    console.log(slide);
    indexOfImages ++;
}, 2000);