// const parrafo = document.getElementById("parrafo");
// const parrafo = document.getElementsByTagName('p')
// const parrafo = document.getElementsByClassName('nombreClase')
// console.log(parrafo.textContent)
// let saludo = 'Hola'
// parrafo.textContent = saludo +  ' Jaime Zapata Valencia'
// const input = document.getElementById('input')
// input.value = parrafo.textContent
// const enlace = document.getElementById('enlace')
// enlace.href = 'https://www.google.com'
// enlace.target = '_blank'
// enlace.textContent = 'Google'
// const imagen = document.getElementById('imagen')
// imagen.alt = 'Esto es una imagen'
// imagen.src = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
// let numeros = []
// function calcularOperaciones(){
//     let numeroUno = document.getElementById('numeroUno')
//     let numeroDos = parseInt(document.getElementById('numeroDos').value)
//     let resultados = document.getElementById('resultados')
//     let suma = parseInt(numeroUno.value)+numeroDos
//     let contenedor = document.createElement('p')
//     let titulo = document.createElement('a')
//     titulo.href = 'https://www.google.com'
//     titulo.textContent = 'Esto es un enlace'
//     contenedor.textContent = suma
//     resultados.append(titulo,contenedor)
//     // contenedor.textContent = 'Eso es un parrafo creado desde JS'
//     console.log(contenedor)
//     numeros.push(parseInt(resultados.textContent))
//     console.log(numeros)
// }

const agregarImagen = () => {
  let numeroImagen = document.getElementById("imagen").value;
  let imagen = document.createElement("img");
  let imagenes = document.getElementById("imagenes");
  imagen.alt = "Pokemon #" + numeroImagen;
  imagen.src = "./assets/img/" + numeroImagen + ".png";
  imagenes.append(imagen);
  console.log(imagen);
};
