console.table(serviciosproductos);
const carro = [];

let contenedorServiciosProductos = document.getElementById('miserviproducto');
let tablaBody = document.getElementById('tablabody');

// Mostrar todas las cards de productos al cargar la página y antes de la ventanita de pregunta
renderizarServiciosProductos(serviciosproductos);



// Mostrando todas las cards de productos
function renderizarServiciosProductos(listaServiciosProductos) {
  contenedorServiciosProductos.innerHTML = ''; // Esto me limpia el  contenido previo
  for (const prod of listaServiciosProductos) {
    contenedorServiciosProductos.innerHTML += `
      <div class="card col-sm-2">
        <img class="card-img-top" src=${prod.foto} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">U$S ${prod.precio}</p>
          <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
        </div>
      </div>
    `;
  }


  let botones = document.getElementsByClassName('compra');// aca es donde le doy entidad a la familia de botones, lo vuelvo constante al botones, le agrego un escuchador de eventos, que cuando se haga click lo registre, y luego a que cosa le hizo click con el ID
for (const boton of botones){
  boton.addEventListener('click',()=>{ 
    console.log('Hiciste click en el boton id: ' +boton.id);
const ProdCarrito = serviciosproductos.find((serviProducto)=>serviProducto.id ==boton.id);
//hacer CONSOLE.LOG para chequear si funciona todo
console.log (ProdCarrito);
agregarACarrito(ProdCarrito);


  })    
}
}
 


//BUSCAR MODIFICAR PARA PONER PRECIO
function agregarACarrito(serviProducto){
  carro.push(serviProducto);
  
  console.table(carro);

//incrementar el total
let totalCarrito = carro.reduce((acumulador, serviProducto) => acumulador + serviProducto.precio, 0)
document.getElementById('total').innerText =`Total a pagar $:  ${totalCarrito}`;

//Lo dejé comentado a lo anterior, porque me hacia conflicto y no funcionaba el botón para finalizar compra con el cartelito que viene despues.





//ahora le voy a avisar al usuario que  lo que hizo fué agregar un producto al carrito
//alert ('agregaste 🎶'+serviProducto.nombre+' al carrito');
Swal.fire('agregaste 🎶'+serviProducto.nombre+' al carrito')



//para visualizar el producto en una tabla que el usuario pueda ver que compró
tablaBody.innerHTML +=`
<tr>
<td>${serviProducto.id}</td>
<td>${serviProducto.nombre}</td>
<td>${serviProducto.precio}</td>

</tr>
`;

}


//con esto limpiaria el carrito, la tabla de productos que ya se compró, y luego se puede reiniciar el total
function limpiarCarrito() {
  carro.length = 0; 
  tablaBody.innerHTML = ''; 
  document.getElementById('total').innerText = 'Total a pagar $: ';
}

//formulario,

//LocalStorage en este queda toda la info
//guardar datos
let carrito=JSON.parse(localStorage.getItem('carro')) || [];
let cantidad=document.getElementById('cantidad');
let listaServiciosProductos=JSON.parse(localStorage.getItem('listaServiciosProductos')) || [];
localStorage.setItem('usuarioActivo', 'Pablo');
localStorage.setItem('cantIngresos', 14);
localStorage.setItem('compraServiProducto',true);
//recuperacion de datos
console.log(localStorage.getItem('usuarioActivo'));
console.log(localStorage.getItem('cantIngresos'));
console.log(localStorage.getItem('compraServiProducto'));

const usuario = localStorage.getItem('usuarioActivo');
if(usuario != null){
 // alert(`Bienvenido de nuevo ${usuario}`);
 Swal.fire({
  title: 'Hola!',
  text: 'Bievenido/a nuevamente, vamos a hacer música !!! 🎶',
  imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhls6MlhDSEgybUd3-3MdBGFsGcTvjwc3IgGCSQK7mQ1FV06OIEdyhx9bkd7SfD-FiKkWCFDbAjeu4ltKhC7vPlhfgNAh7m1iPNXHfdm5wxsbtSxZTlusy31Wrku6KJXhdMrjXdn6ir_CRU7O0h_IF6U23Rm_xZN8O50vujz5zVULPj-rJlJTcycVfIEeV_/s1042/Logo%20PMQZ4.png',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
  }else{
    const usuNuevo ='Pablo';
    localStorage.setItem('usuarioActivo', usuNuevo);
  }

  //session storage en este no queda guardado la data si cierro pesataña
  
  sessionStorage.setItem('Gallardo', 'DT');
  sessionStorage.setItem('muchosTitulos', [7,7,8,8,9]);
  const TitulosGallardoDTRiver = sessionStorage.getItem('muchosTitulos').split (',').map((titulo)=>
  parseInt(titulo));
  console.log(TitulosGallardoDTRiver);

localStorage.removeItem('cantIngresos');

  



//localStorage
localStorage.setItem('carrito', JSON.stringify(carro));

const DateTime=luxon.DateTime;
const inicio=DateTime.now();
console.log(inicio.toLocaleString());
console.log(inicio.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS));

//finalizar compra

let Botonfinalizar = document.getElementById('BotonFinalizarCompra');




//Para poner el botón de finalizar la compra
Botonfinalizar.onclick = () => {

Toastify({
    text: "Gracias por tu compra! Ya podés acceder a tu archivo adquirido. Puede iniciar otra compra diferente si lo deseás",
    duration: 5000,
    gravity: 'top',
    position: 'right',
    close: true,
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    offset: {
        x: 150,
        y: 110
    },
}).showToast();


//Para limpiar el carrito y tabla de productos comprados, despues de los 4segundos
setTimeout(() => {
  limpiarCarrito();
}, 4000);
}

//Para remover la info una vez se cierre la pestaña
  document.getElementById('tablabody').innerHTML+=''
  cantidad.innerText=`${listaServiciosProductos.length}`;
  document.getElementById('total').innerText = 'Total a pagar $: ';
  localStorage.removeItem('listaServiciosProductos');
  const fin=DateTime.now();

// llamando a api propia



function obtenerJsonPropio() {
  const URLJSON = 'https://raw.githubusercontent.com/PMQZarg/PfJavaScriptPabloMarquez/main/artistas.json';
  fetch(URLJSON)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.artistas);
      let listaArtistas = data.artistas; // Declaracion de la lista de arrtistas
      listaArtistas.forEach(artistas => {
        document.getElementById('tablabody_artistas').innerHTML += `
          <tr>
            <td>${artistas.nombre}</td>
            <td>${artistas.generomusical}</td>
            <td>${artistas.Composición}</td>
            <td>${artistas.cantidadCanciones}</td>
          </tr>
        `;
      });
    })
    .catch(error => console.log(error));
}

obtenerJsonPropio();

//aplicando async await

async function pedirPost(){
  const URL = 'https://jsonplaceholder.typicode.com/post';
  const respuesta = await fetch(URL);
  const data = await respuesta.json();
  console.log(data);
  //inyeccion al dom para que se vea en la html
}