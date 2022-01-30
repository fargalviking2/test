$(document).ready(function() {
    let imgArr = [
        './img/galery-1/image-2.webp',
        './img/galery-1/image-3.webp',
        './img/galery-1/image-4.webp',
        './img/galery-1/image-5.webp',
        './img/galery-1/image-6.webp',
        './img/galery-1/image-7.webp',
        './img/galery-1/image-8.webp',
        './img/galery-1/image-9.webp',
        './img/galery-1/image-10.webp',
        './img/galery-1/image-11.webp',
        './img/galery-1/image-12.webp',
        './img/galery-1/image-13.webp',
        './img/galery-1/image-14.webp',
        './img/galery-1/image-15.webp',
        './img/galery-1/image-16.webp',
        './img/galery-1/image-17.webp',
        './img/galery-1/image-18.webp',
    ]

    let mainImg = $('.galery__main-img')
    let count = 0;

    let prevImg = $('.left__arrow');
    prevImg.click(function() {
        if (count == 1) {
            return
        }else{
            count--;
            mainImg.attr('src', imgArr[count-1]).fadeIn(500)
        }
    })

    let nextImg = $('.right__arrow');
    nextImg.click(function() {
        if (count == imgArr.length) {
            return
        }else{
            count++;
            mainImg.hide().attr('src', imgArr[count-1]).fadeIn(300)
        }
    })
})