//modal 1
let headerButton = document.querySelectorAll('.header__modal-click')
let modal = document.querySelector('.modal__course')
let body = document.querySelector('body')
let modalClose = document.querySelector('.modal__close-icon')


let toggle = false;

headerButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        toggle = !toggle;
    
        if (toggle) {
            modal.style = `
            transition-duration: 500ms;
            opacity: 1;
            visibility: visible;
            `
            body.style.overflow = 'hidden'
        }
    })
})

modalClose.addEventListener('click', () => {
    toggle = !toggle;
    
    if (toggle) {
        modal.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }else{
        modal.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})


//modal2
let modalGift = document.querySelector('.modal__gift')
let modalGiftClose = document.querySelector('.modal__gift-close')
let modalGiftButton = document.querySelector('.modal__gift-button')
let modalGiftButtonMobile = document.querySelector('.modal__gift-button-mobile')

let toggle2 = false;

modalGiftButtonMobile.addEventListener('click', () => {
    toggle = !toggle;

    if (toggle) {
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
modalGiftButton.addEventListener('click', () => {
    toggle = !toggle;

    if (toggle) {
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }else{
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})

modalGiftClose.addEventListener('click', () => {
    toggle = !toggle;
    
    if (toggle) {
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }else{
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})



//modal2
let teamBlock = document.querySelectorAll('.team__block')
let modalTeam1 = document.querySelector('.modal__team-1')
let modalTeam2 = document.querySelector('.modal__team-2')
let modalTeam3 = document.querySelector('.modal__team-3')
let modalTeam4 = document.querySelector('.modal__team-4')
let modalTeamClose = document.querySelectorAll('.modal__team-close')

let toggle3 = false;
teamBlock[0].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
teamBlock[1].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam2.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
teamBlock[2].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam3.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
teamBlock[3].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam4.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})

//modal team close
modalTeamClose[0].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam1.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalTeamClose[1].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam2.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalTeamClose[2].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam3.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalTeamClose[3].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam4.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})



//modal 4
let modalVideoInvite = document.querySelector('.modal__video-invite')
let modalVideoButton = document.querySelector('.invit__link div img')

let toggle4 = false;
modalVideoButton.addEventListener('click', () => {
    toggle4 = !toggle4;

    if (toggle4) {
        modalVideoInvite.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
modalVideoInvite.addEventListener('click', () => {
    toggle4 = false;
    toggle6 = false;

    if (!toggle4) {
        modalVideoInvite.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})


//modal5
let modalContentButton = document.querySelector('.content__button')

let toggle5 = false;
modalContentButton.addEventListener('click', () => {
    toggle5 = !toggle4;

    if (toggle5) {
        modalVideoInvite.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})


//modal 6
let modalVideoReview1 = document.querySelector('.modal__video-review-1')
let modalVideoReview2 = document.querySelector('.modal__video-review-2')
let modalVideoReview3 = document.querySelector('.modal__video-review-3')
let modalVideoReview4 = document.querySelector('.modal__video-review-4')
let reviewBlock = document.querySelectorAll('.review__block')

let toggle6 = false;
reviewBlock[0].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[1].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[2].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[3].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
modalVideoReview1.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalVideoReview2.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview2.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalVideoReview3.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview3.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalVideoReview4.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview4.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})

//modal7
let modalAbout1 = document.querySelector('.modal__about-1')
let modalAbout2 = document.querySelector('.modal__about-2')
let modalAbout3 = document.querySelector('.modal__about-3')
let modalAbout4 = document.querySelector('.modal__about-4')
let modalAboutClose = document.querySelectorAll('.modal__about-close')

reviewBlock[4].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[5].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout2.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[6].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout3.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[7].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout4.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})


modalAboutClose[0].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout1.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalAboutClose[1].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout2.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalAboutClose[2].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout3.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalAboutClose[3].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout4.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})


let mobileMenuButton = document.querySelector('.header__link-burger')
let mobileMenuButton2 = document.querySelector('.header__burger-mobile')
let mobileMenu = document.querySelector('.mobile__menu-burger')
let mobileMenuClose = document.querySelector('.mobile__menu-close')

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.style = `
        transition-duration: 300ms;
        transform: translate(0);
    `
    body.style.overflow = 'hidden'
})
mobileMenuButton2.addEventListener('click', () => {
    mobileMenu.style = `
        transition-duration: 300ms;
        transform: translate(0);
    `
    body.style.overflow = 'hidden'
})
mobileMenuClose.addEventListener('click', () => {
    mobileMenu.style = `
        transition-duration: 300ms;
        transform: translate(-100%,0);
    `
    body.style.overflow = 'visible'
})



let form = document.querySelectorAll('#ltForm8754365 input')

form.forEach((elem) => {
    elem.setAttribute('required','')
    console.log(elem)
})



//link
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        mobileMenu.style = `
        transition-duration: 300ms;
        transform: translate(-100%,0);
        `
        body.style.overflow = 'visible'
        e.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}


const headerMenu = document.querySelector('.header__menu')

setInterval(() => {
    if (document.documentElement.scrollTop > 50) {
        headerMenu.style.background = '#1f1c1a'
    }else{
        headerMenu.style.background = 'none'
    }
},1000)

animateBlock = document.querySelector('.animate__arrow');

let toggle10 = false;
setInterval(() => {
    toggle10 = !toggle10

    if (toggle10) {
        animateBlock.style = `
            transform: translate(-30px)
        `
    }else{
        animateBlock.style = `
        transform: translate(0)
        `
    }
},1200)

animateBlock2 = document.querySelector('.animate__arrow-img')
let toggle11 = false

setInterval(() => {
    toggle11 = !toggle11

    if (toggle11) {
        animateBlock2.style = `
            margin-top: 50px;
            margin-left: 20px;
        `
    }else{
        animateBlock2.style = `
            margin-top: 20px;
            margin-left: 0;
        `
    }
},1200)


