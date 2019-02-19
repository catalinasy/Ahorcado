/*
// ==================================================
//     STAR WARS - Descubre el nombre de personaje!
// ==================================================

⚠️ Lee cada uno de los pasos, analizalos detenidamente y planteate la manera de resolverlos ANTES
de empezar a escribir código.



¿Qué vamos a hacer? (Explicación no técnica)
===================

Vamos a escribir un programa para adivinar letra por letra, simil al juego ahorcado

Al usuario se le va a pedir que haga un click con el mouse sobre el boton iniciar juego,
se muestra en pantalla la cantidad de letras que tiene la palabra.
El usuario solo debe usar las teclas del teclado para ingresar las letras.

*/

// ==================================================
// MUY IMPORTANTE RECUERDA QUE PARA SELECCIONAR UN ELEMENTO
// USAMOS EL DOM
// var NombreElemento = document.getElementById("nombreId");
// ==================================================


// ==================================================
// RECUERDA QUE PARA UNIR TODOS LOS ELEMENTOS DE UN ARREGLO
// USAMOS EL METODO .join()
// ArregloDeElementos.join(); // elemento1,elemento2,elemento3
// ArregloDeElementos.join("-"); // elemento1-elemento2-elemento3
// ==================================================

//////////////////////////////////////////
//PALABRA A ADIVINAR//////////////////////
var palabras = ["OBIWAN","YODA","ANAKIN","CHEWBACCA","R2D2","C3PO"];

//////////////////////////////////////////
//GENERA LA PALABRA A ADIVINAR////////////
var palabra = palabras[Math.floor(Math.random() * palabras.length)];

//////////////////////////////////////////
//variables globales//////////////////////
var intentosRestantes = 5;

// ==================================================
// Paso 1 - Escriba despues de este comentario
// Debo seleccionar a traves del DOM el id "intentos-restantes"
//
// document.getElementById("nombre-del-id");
//
// y asignarle la variable intentosRestantes
//
// document.getElementById("nombre-del-id").innerHTML = nombre_de_la_variable;;
// ==================================================

document.getElementById("intentos-restantes").innerHTML = intentosRestantes;


//////////////////////////////////////////
//ARREGLO QUE RECIBE LAS LETRAS CORRECTAS/
var letrasRespondidas = [];


// ==================================================
// Paso 2 - Escriba despues de este comentario
// Crea la funcion despues de este comentario
// function iniciarJuego(){
//
//		-Guardar la cantidad de letras en el arreglo letrasRespondidas usando "_".
//		para que en pantalla se vea asi "_ _ _ _" = "Y O D A" usando un bucle
//    for( cantidadDeLetrasDeLaPalabraAAdivinar){
//			letrasRespondidas[i] = "_";
//		}
//		-mostrar los guiones bajos en pantalla con el id="mostrar-palabra" usando
//    ArregloDeElementos.join(" "); // elemento1,elemento2,elemento3
//
//    -Seleccionamos el id="mostrar-resultado" el valor ""; (USANDO EL DOM)
//		document.getElementById("nombre-id").innerHTML = "";
//
// }
// ==================================================

function iniciarJuego(){
	for(var i = 0; i<palabra.length; i++){
		letrasRespondidas[i] = "_";
	}

	document.getElementById("mostrar-palabra").innerHTML = letrasRespondidas.join(" ");
	
	document.getElementById("mostrar-resultado").innerHTML = "";

}





// ==================================================
// Paso 3 - Escriba despues de este comentario
// Crea la funcion despues de este comentario que recibe la letra por parametro
// function recibeLetra(letra){
//
//		-Guardar en una variable llamada intento con el valor "false".
//
//		-usar un for que repita la misma cantidad de veces que la longitud de la palabra a adivinar
//      dentro del for(){
//						-Si la letra es igual a la letra recibida por parametro debo
//								-letrasRespondidas[i] es igual a letra
//								-intento es igual a true
//					}
//		document.getElementById("nombre-id").innerHTML = "";
//
//		llamar a la funcion mostrarVictoria(letrasRespondidas.join(""));
//		llamar a la funcion mostrarDerrota(intento);
// }
// ==================================================

function recibeLetra(letra){
	var intento = false;
	for( var i = 0; i<palabra.length; i++){
		if(palabra[i] == letra){
			intento = true;
			letrasRespondidas[i]=letra;
		}


		document.getElementById("mostrar-palabra").innerHTML = "";

	}
	mostrarVictoria(letrasRespondidas.join(""));
	mostrarDerrota(intento);
}



// ==================================================
// Paso 4 - Escriba despues de este comentario
// Crea la funcion despues de este comentario
// function mostrarVictoria(palabraRespondida){
//
//		-Si la palabra a adivinar es igual a la palabraRespondida debo
//			agregar en el id="mostrar-resultado" la palabra "¡GANASTE!"
//		-Sino solo debo mostrar la palabraRespondida con espacios en el id="mostrar-palabra"
//     		document.getElementById("nombre-id").innerHTML = nombreVariable.join(" ");
//
//
// }
// ==================================================

function mostrarVictoria(palabraRespondida){
	
	if(palabra==palabraRespondida){
		document.getElementById("mostrar-resultado").innerHTML = "Ganaste"
	} else {
		document.getElementById("mostrar-resultado").innerHTML = letrasRespondidas.join(" ");

	}
}



// ==================================================
// Paso 5 - Escriba despues de este comentario
// Crea la funcion despues de este comentario
// function mostrarDerrota(intento){
//
//		-Si el intento es igual a false debo
//			-restar los intentosRestantes -1
//
//			-Si los intentosRestantes son menos que cero debo
//      		agregar en el id="mostrar-resultado" la palabra "¡PERDISTE!"
//			-Sino solo debo mostrar los intentosRestantes en el id="intentos-restantes"
//
// }
// ==================================================

function mostrarDerrota(intento){
	if(intento==false){
		intentosRestantes-=1;
	}
	else if (intentoRestantes<0){
		document.getElementById("mostrar-resultado").innerHTML = "Perdiste!!!"
	}
	else {
		document.getElementById("intentos-restantes").innerHTML = intentosRestantes;
	}
}

//////////////////////////////////////////////////////////
//////////////////////  A CONTINUACIÓN .//////////////////
/////////NO TOCAR A MENOS QUE SEPAS LO QUE HACES//////////
//////////////////////////////////////////////////////////

  document.body.onkeydown = (function(evento) {

  	if (evento.which >= 48 && evento.which <= 90) {
  		let letra = String.fromCharCode(evento.which);
  		recibeLetra(letra);
  	}

  });
