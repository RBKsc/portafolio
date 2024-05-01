let nameField =document.querySelector("[name=nombre]");
let asuntoField=document.querySelector("[name=asunto]")
let emailField=document.querySelector("[name=email]");
let mensajeField=document.querySelector("[name=mensaje]")

let setErrores = (message, campo, isError=true)=>{
    if (isError){
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error")
        campo.nextElementSibling.innerText=message;

    }else {
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error")
        campo.nextElementSibling.innerText=""; 
    }
}

let validarCampoVacio = (message, e) =>{
    let campo =e.target;
    let validarCampo=e.target.value;
    if(validarCampo.trim().length === 0){
        setErrores(message, campo);
    }else{
      setErrores("", campo, false);
    }
}

let validarFormato = e  =>{
    let campo =e.target;
    let validarCampo = e.target.value;
    let regex = new RegExp (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
     
        if(validarCampo.trim().length >9 && !regex.test(validarCampo)){
            setErrores("por favor, introduzca un email valido", campo)
        }else{
            setErrores("", campo, false);
        }
    }
let caracteres = e  =>{
    let campo =e.target;  
    let validarCampo = e.target.value;
    let regex = new RegExp (/^[a-zA-ZÀ-ÿ\s]{1,50}$/);
    if(validarCampo.trim().length > 50){
        setErrores("Solo acepta 50 caracteres", campo)
    } else{
        setErrores("", campo, false);   
    }
    }

    let texMensaje = e  =>{
        let campo =e.target;  
        let validarCampo = e.target.value;
        let regex = new RegExp (/^[a-zA-ZÀ-ÿ0-9\s]{1,300}$/);
        if(validarCampo.trim().length > 300){
            setErrores("Solo acepta 300 caracteres", campo)
        } else{
            setErrores("", campo, false);   
        }
        }

nameField.addEventListener("blur", (e)=> validarCampoVacio("Escribe tu nombre", e));
asuntoField.addEventListener("blur", (e)=> validarCampoVacio ("Escribe tu mail", e));
emailField.addEventListener("blur", (e)=> validarCampoVacio ("Escribe tu asunto", e));
mensajeField.addEventListener("blur", (e) => validarCampoVacio ("Escribe tu mensaje", e));

emailField.addEventListener("input", validarFormato);
nameField.addEventListener("input", caracteres);
asuntoField.addEventListener("input", caracteres);
mensajeField.addEventListener("input", texMensaje);







