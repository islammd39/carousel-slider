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
let index = 0

const sliderImage = document.getElementById('carousel-img')
setInterval(() => {
    if (index === images.length) {
        index = 0;
    }
    const slide = images[index]
    sliderImage.setAttribute('src', slide)
    // console.log(sliderImage);
    index++;

}, 3000)

// this is just practice =====>>>>>>

class Data {
    constructor(name, clas, section, roll, age, bestFriend) {
        this.name = name;
        this.clas = clas;
        this.section = section;
        this.roll = roll;
        this.age = age;
        this.bestFriend = bestFriend;
    }
}

const oneStudent = new Data('Abbas', 'Four', 'A', 1, 9, 'Rohit')
const twoStudent = new Data('adnan', 'Four', 'B', 2, 10, 'Rofic')
console.log(twoStudent);