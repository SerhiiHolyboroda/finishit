let f1 =  document.forms['f1'];
let hide = f1.elements['hide'];
let hide1 = f1.elements['hide1'];
let edit = f1.elements['edit'];
let style = f1.elements['style'];
let but = f1.elements['but'];
let a = f1.hide.value ;

let div1 = document.querySelector('#div1');
console.log(div1.innerHTML);
// hide.value = div1.innerTEXT;

// a.innerHTML += '<p>Lorem ipsum dolor sit amet</p>';
// console.log(a);

hide.style.display = 'none';
but.style.display = 'none';
hide1.style.display = 'none';
edit.addEventListener('click', function(){
    hide.style.display = 'block';
    hide1.style.display = 'none';
    but.style.display = 'block';
    hide.value = div1.innerHTML;

})

style.addEventListener('click', function(){
    hide1.style.display = 'block';
    hide.style.display = 'none';
    but.style.display = 'none';
})


but.addEventListener('click', function(){

    div1.innerHTML  = hide.value ;

})
