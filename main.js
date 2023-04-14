function headerSctyoting() {
    const spaceForText = document.querySelector('.header')
    const textForHeader = 'T A X I'
    let i = 0

    function scryptingHeader() {
        if (i < textForHeader.length) {
            spaceForText.innerHTML += textForHeader.charAt(i)
            i++
            setTimeout(scryptingHeader, 500)
        }
    } scryptingHeader()
}

headerSctyoting()


function deliveryScripting() {
    const spaceDelivery = document.querySelector('.delivery')
    const textForDelivery = 'DELIVERY'
    i = 0;

    function scryptingDelivery() {
        if (i < textForDelivery.length) {
            spaceDelivery.innerHTML += textForDelivery.charAt(i)
            i++
            setTimeout(scryptingDelivery, 500)
        }
    } scryptingDelivery()
}

deliveryScripting()

const headerTaxiLInk = document.querySelector('.header')


headerTaxiLInk.addEventListener('click' , function(){
    window.open('./taxi.html')
})

const headerDelivery = document.querySelector('.delivery')

headerDelivery.addEventListener('click' , function(){
    window.open('./delivery.html')
})






