window.addEventListener('load',function(){
  var divContainer = document.getElementById('div1');
  var link = divContainer.firstElementChild;
  /*Viendo los atributos de la etiqueta a */
  console.log(link);
 //Solo es para hacer consultas de qué atributos tiene
  console.log(link.attributes); 

  console.log(link.href); 
  link.href = "https://es-la.facebook.com/";

  console.log(link.className);
  //Me lista especificamente el atributo clase 
  console.log(link.classList);

  /*Viendo los atributos del boton*/
  var boton = divContainer.lastElementChild;
  console.log(boton);
  console.log(boton.attributes);
  console.log(boton.name = 'entrada');
  console.log(boton.type);
  console.log(boton.className);

 /*getAttribute -- obtener*/
 var boton2 = document.querySelector('button');
 console.log(boton2);
 console.log(boton2.getAttribute('class'));
 console.log(boton2.getAttribute('name'));
 console.log(boton2.getAttribute('type'));

 /*hasAttribute valor booleano true, false*/
 if(div.hasAttribute('class')){

 }else {
   
 }
 console.log(boton2.hasAttribute('class'));
 console.log(boton2.hasAttribute('id'));

 /*setAttribute*/
 boton2.setAttribute('class','red');
 console.log(boton2.className);
 console.log(boton2.classList)
 
 /*removeAttribute*/
 boton2.removeAttribute('class');


});