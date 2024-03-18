//-------------variables----------------//
const botonEncriptar = document.querySelector(".btnEncriptar");
const textoAEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".textoAlerta");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedorTarjeta");
const botoncopiar = document.querySelector(".btnCopiar");
const botonDesencriptar = document.querySelector(".btnDesencriptar");

//-------------Presiona encriptar----------------//
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoAEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\!@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f`]/g, "");
    console.log(txt);
    if(texto==""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe quedar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    } 
    
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener mayusculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        contenido.remove();
        botoncopiar.style.visibility ="inherit";
    }   
});

    //-------------Presiona deseencriptar----------------//
    botonDesencriptar.addEventListener("click", e=>{
        e.preventDefault();
    let texto = textoAEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\!@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f`]/g, "");
    console.log(txt);
    if(texto==""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe quedar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    } 
    
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener mayusculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        contenido.remove();
        botoncopiar.style.visibility ="inherit";
    }   
});

    //-------------Presiona copiar----------------//
    botoncopiar.addEventListener("click", e=>{
        e.preventDefault();
        let copiar = respuesta;
        copiar.select();
        document.execCommand("Copy");
});