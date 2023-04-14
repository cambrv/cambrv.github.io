/**
 * @author Camily Bravo
 * @version 1.0
 */
/**
 * Sección de declaración de variables
 */
 const txtprincipal= document.getElementById("txtprincipal");
 const bt_encriptar= document.getElementById("bt_encriptar");
 const bt_desencriptar= document.getElementById("bt_desencriptar");
 const bt_copiar= document.getElementById("bt_copiar");
 const msj_final = document.getElementById("msjfinal");
 const msj_inicial= document.getElementsByClassName("msjinicial");
 const mumu= document.getElementById("img");
 const m1 =document.getElementById("m1");
 const m2 =document.getElementById("m2");
//.
    /**
     * Sección de funciones
     */
function encriptar (){
   let mensaje = txtprincipal.value;
   let encriptado= mensaje.replace(/e/gm, "enter");
   encriptado = encriptado.replace(/o/gm, "ober");
   encriptado = encriptado.replace(/i/gm, "imes");
   encriptado = encriptado.replace(/a/gm, "ai");
   encriptado = encriptado.replace(/u/gm, "ufat");
   mumu.style.display= "none";
   m1.style.display= "none";
   m2.style.display= "none";
   msj_final.style.display="inline";
   bt_copiar.style.display="block";
   msj_final.value = encriptado;
}
function desencriptar() {
   let mensaje = txtprincipal.value;
   let desencriptado= mensaje.replace(/enter/gm, "e");
   desencriptado = desencriptado.replace(/ober/gm, "o")
   desencriptado = desencriptado.replace(/imes/gm, "i")
   desencriptado = desencriptado.replace(/ai/gm, "a")
   desencriptado = desencriptado.replace(/ufat/gm, "u")
   mumu.style.display= "none";
   m1.style.display= "none";
   m2.style.display= "none";
   bt_copiar.style.display="block";
   msj_final.style.display="block";
   msj_final.value= desencriptado;
}
function copiar(){
   let mensaje= document.querySelector("#msjfinal");
   navigator.clipboard.writeText(mensaje.value);
}
function validar() {
   const textarea = document.getElementById("txtprincipal");
   const contenido = textarea.value.trim();
 
   // Expresión regular para validar que solo hay letras minúsculas y sin tildes
   const validacion = /^[a-zñáéíóúü\s]*$/;
 
   if (contenido.length === 0) {
      document.getElementById("msj_alerta").textContent ="El campo está vacío, prueba escribiendo algo :)";
      bt_encriptar.disabled= true;
      bt_desencriptar.disabled= true;
   } else if (!validacion.test(contenido)) {
      document.getElementById("msj_alerta").textContent ="El mensaje solo debe contener letras minúsculas y sin tildes, intenta de nuevo.";
      bt_encriptar.disabled= true;
      bt_desencriptar.disabled= true;
   } else {
      document.getElementById("msj_alerta").textContent ="El mensaje es válido, ¡Ahora puedes encriptar o desencriptar!";
      bt_encriptar.disabled= false;
      bt_desencriptar.disabled= false;
   }
 }
document.addEventListener("keyup", e => {
   if (e.target == txtprincipal) validar()
})
document.addEventListener("click", e=> {
   if (e.target == bt_encriptar) encriptar()
   if (e.target == bt_desencriptar) desencriptar()
   if (e.target == bt_copiar) copiar()
});
