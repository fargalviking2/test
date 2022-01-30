$(document).ready(function() {
    let imgArr = [
        './img/galery-2/image-2.webp',
        './img/galery-2/image-3.webp',
        './img/galery-2/image-4.webp',
        './img/galery-2/image-5.webp',
        './img/galery-2/image-6.jpg',
        './img/galery-2/image-7.jpg',
        './img/galery-2/image-8.jpg',
        './img/galery-2/image-9.jpg',
        './img/galery-2/image-10.jpg',
        './img/galery-2/image-11.jpg',
        './img/galery-2/image-12.jpg',
        './img/galery-2/image-13.jpg',
        './img/galery-2/image-14.jpg',
        './img/galery-2/image-15.jpg',
        './img/galery-2/image-16.jpg',
        './img/galery-2/image-17.jpg',
        './img/galery-2/image-18.jpg',
        './img/galery-2/image-19.jpg',
        './img/galery-2/image-20.jpg',

    ]

    let mainImg = $('.galery__work-img')
    let count = 0;

    let prevImg = $('.left__work-arrow');
    prevImg.click(function() {
        if (count == 1) {
            return
        }else{
            count--;
            mainImg.hide().attr('src', imgArr[count-1]).fadeIn(300)
        }
    })

    let nextImg = $('.right__work-arrow');
    nextImg.click(function() {
        if (count == imgArr.length) {
            return
        }else{
            count++;
            mainImg.hide().attr('src', imgArr[count-1]).fadeIn(300)
        }
    })
})