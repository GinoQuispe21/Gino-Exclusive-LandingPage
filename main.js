let productIndex = 0;

let productInfos = document.querySelectorAll('.product-info');

setTimeout(()=> {
    productInfos[productIndex].classList.add('active')
},200);