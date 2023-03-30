// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];



//se cambio el getElementsByName por getElementById
const li = document.getElementById("lista-de-productos")

//se cambio el parametro del query selector a 'input'
const $i = document.querySelector('input');
//const $i2 = document.querySelector('input');
//console.log($i2.)
//console.log("el valor del input",$i.value);

function displayProductos(productos){
    for (let i = 0; i < productos.length; i++) {
      //creacion de elementos <div
      var d = document.createElement("div")
      d.classList.add("producto")

      //creacion de elementos <p
      var ti = document.createElement("p")
      ti.classList.add("titulo")

      ti.textContent = productos[i].nombre
      
      var imagen = document.createElement("img");
      imagen.setAttribute('src', productos[i].img);

      d.appendChild(ti)
      d.appendChild(imagen)

      li.appendChild(d)
    }
}
//para poder activar esta funcion se agregaron las lineas de codigo en una funcion mostrar productos
displayProductos(productos);

// se agrego un evento listener para detectar un cambio en un select

var select = document.getElementById('color');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    if(selectedOption.value=='')
    {
      console.log("impresion if",selectedOption.value);
      displayProductos(productos);
    }
    else{
      console.log("impresion else",selectedOption.value)
    
    var selectedOption = this.options[select.selectedIndex];
    console.log(". value: ",selectedOption.value);
    console.log("text: ",selectedOption.text);
    console.log("mostrando firstchild",li.firstChild);
    
    while (li.firstChild) {
       li.removeChild(li.firstChild);
      }//fin del while

      const texto = selectedOption.value;
      console.log("el texto recogido es",texto);

      const productosFiltrados = filtrado(productos, texto );

      for (let i = 0; i < productosFiltrados.length; i++) {
        var d = document.createElement("div")
        d.classList.add("producto")
  
        var ti = document.createElement("p")
        ti.classList.add("titulo")
        ti.textContent = productosFiltrados[i].nombre
    
        var imagen = document.createElement("img");
        imagen.setAttribute('src', productosFiltrados[i].img);
  
        d.appendChild(ti)
        d.appendChild(imagen)
  
        li.appendChild(d)
      }//termina for
    }
  }
  );

/*const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  console.log("mostrando firstchild",li.firstChild);
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log("el texto recogido es",texto);

  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }//termina for

}//termina funcion del filtro*/

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

