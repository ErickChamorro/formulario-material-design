
	var formulario = document.formulario_registro,
		elementos = document.elements;

	// funciones
	var enviar = function(e){
		if (!validarInputs()) {
			console.log('Falto validar los inputs');
			e.preventDefault();
		}else if(!validarRadios()){
			console.log('Falto validar los radios');
			e.preventDefault();
		}else if(!validarCheckbox()){
			console.log('Acepta los terminos y condiciones');
			e.preventDefault();
		}else{
			console.log('Envia correctamente');
			//comentar esto cuando el formulario este listo
			e.preventDefault();
		};
	};


	//funciones blur y focus  (esto es para comprobar si hay texto dentro de los inputs y al clickear fuera de los inputs vuelva a como estaba al principio)
	var focusInput = function(){
		this.parentElement.children[1].className = "label active";
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
	};

	var blurInput = function(){
		if (this.value <= 0) {
			this.parentElement.children[1].className = "label";
			this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
		}
	};

	//eventos
	formulario.addEventListener("submit", enviar);

	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
			elementos[i].addEventListener("focus", focusInput);
			elementos[i].addEventListener("blur", blurInput);
		}
	};