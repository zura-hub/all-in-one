
const btnTaxi = document.querySelector('.btnTaxi')
btnTaxi.addEventListener('click', function () {
    
    if (btnTaxi.style.display = 'block') {
        btnTaxi.style.display = 'none'
    }
})

const start = document.querySelector('.btnTaxi')

start.addEventListener('click', function(){
    scryptingText() 
})



function scryptingText() {
    const text = 'ყოველი თქვენს მიერ გაკეთებული შეკვეთით, თქვენ ხელს უწყობთ სოციალური პასუხისმგებლობის ამაღლებას. დეტალუარი ინფორამციისთვის დააწექით ღილაკს ჩვენს შესახებ'
    const spaceTaxi = document.querySelector('.taxiHeader')
    let i = 0;
  
    function scrypting() {
      if (i < text.length) {
        spaceTaxi.innerHTML += text.charAt(i)
        i++
        setTimeout(scrypting, 100)
      } else {
        aboutBtn()
      }
    }
    scrypting();
  }
  
  function aboutBtn() {
    const spaceTaxi = document.querySelector('.about')
  
    setTimeout(function() {
      spaceTaxi.style.display = 'block'
    }, 4000);
}
  
  

