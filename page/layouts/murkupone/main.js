const contentOne = document.querySelector('.main-section_anima-one');
const contentTwo = document.querySelector('.main-section_anima-two');
const adaptiveMedia = document.querySelector('.main-header__navigation-but')
let valueContentOne = 0
let valueContentTwo = 0
contentOne.style.opacity = valueContentOne
contentTwo.style.opacity = valueContentTwo
let body = document.querySelector('body')
let valueScroll


const navigation = document.querySelectorAll('.main-header__navigation > ul li')
let xValue = 2
adaptiveMedia.onclick = () => {
    
    x = window.matchMedia('(max-width: 900px)')

    if(x.matches && xValue == 2) {
        xValue = 1
        navigation[1].style.visibility = "visible"
        navigation[2].style.visibility = "visible"
        navigation[3].style.visibility = "visible"
        navigation[4].style.visibility = "visible"
        navigation[5].style.visibility = "visible"  
    } else if(x.matches && xValue == 1) {
        xValue = 2
        navigation[1].style.visibility = "hidden"
        navigation[2].style.visibility = "hidden"
        navigation[3].style.visibility = "hidden"
        navigation[4].style.visibility = "hidden"
        navigation[5].style.visibility = "hidden"
        
    }
}

//функция скролинга по body
body.onscroll = function() {
    let scroll = document.documentElement.scrollTop
    valueScroll = scroll
    addOpacity()
}

function addOpacity() {
   if ((valueScroll >= 600) && (valueScroll <= 1400) && (valueContentOne < 1)) {
        valueContentOne = valueContentOne + 0.1
        contentOne.style.opacity = valueContentOne       
   } 
   if ((valueScroll >= 1500) && (valueScroll <= 2300) && (valueContentTwo < 1)) {   
        valueContentTwo = valueContentTwo + 0.1
        contentTwo.style.opacity = valueContentTwo  
   } 
}






