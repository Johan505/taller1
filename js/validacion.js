const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	tipoDoc: /^[a-zA-Z\_\-]{1,2}$/, // Letras, numeros, guion y guion_bajo
    numDoc: /^[0-9]{5,10}/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    fecha: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,//fecha dia mes año
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	contraseña: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	tipoDoc: false,
	numDoc: false,
	nombre: false,
	apellido: false,
	fecha: false,
	correo: false,
    contraseña: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "tipodoc":
			validarCampo(expresiones.tipoDoc, e.target, 'tipoDoc');
		break;
        case "numDoc":
			validarCampo(expresiones.numDoc, e.target, 'numDoc');
		break
        case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "fecha":
			validarCampo(expresiones.fecha, e.target, 'fecha');
		break;
        case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "contraseña":
			validarCampo(expresiones.contraseña, e.target, 'contraseña');
			validarcontraseña2();
		break;
		case "contraseña2":
			validarcontraseña2();
		break;
		
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('group-form-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('group-form-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .form-input-error`).classList.remove('form-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('group-form-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('group-form-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .form-input-error`).classList.add('form-input-error-activo');
		campos[campo] = false;
	}
}

const validarcontraseña2 = () => {
	const inputcontraseña1 = document.getElementById('contraseña');
	const inputcontraseña2 = document.getElementById('contraseña2');

	if(inputcontraseña1.value !== inputcontraseña2.value){
		document.getElementById(`grupo__contraseña2`).classList.add('group-form-incorrecto');
		document.getElementById(`grupo__contraseña2`).classList.remove('group-form-correcto');
		document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__contraseña2 .form-input-error`).classList.add('form-input-error-activo');
		campos['contraseña'] = false;
	} else {
		document.getElementById(`grupo__contraseña2`).classList.remove('group-form-incorrecto');
		document.getElementById(`grupo__contraseña2`).classList.add('group-form-correcto');
		document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__contraseña2 .form-input-error`).classList.remove('form-input-error-activo');
		campos['contraseña'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos'); 
	let tipoDoc = document.getElementById('tipoDoc')
	if(tipoDoc.selected && campos.numDoc && campos.nombre && campos.apellido && campos.fecha && campos.correo && campos.contraseña && terminos.checked){
		formulario.reset();

		document.getElementById('form-msg-exito').classList.add('form-msg-exito-activo');
		setTimeout(() => {
			document.getElementById('form-msg-exito').classList.remove('form-msg-exito-activo');
		}, 5000);

		document.querySelectorAll('.group-form-correcto').forEach((icono) => {
			icono.classList.remove('group-form-correcto');
		});
	} else {
		document.getElementById('form-msg').classList.add('form-msg-activo');
	}
});

console.log(formulario)










