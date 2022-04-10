let currid=0;
  function limpiar(){
    document.getElementById('info').value='';
    document.getElementById('serv').value='' ;
  }

  document.querySelector('#cancelar').addEventListener('click',function(){
      limpiar();      
   })

document.querySelector('#guardar').addEventListener('click',function(){
    const ev = new Array();
    const info= document.getElementById('info').value;
    const serv= document.getElementById('serv').value ;
    ev[0]=info;
    ev[1]=serv;
    guardar(ev);
    limpiar();      
 })

function guardar(ev) {
    let n=0;
    let objeto = {};

    if (ev[0]!=="" && ev[1] !== ""){
      n=evts();
      
      if (currid==0){
        if (n==0){
          n=1;
        }
        else{
          n+=1;
        }
        window.localStorage.setItem(0,n)
      }  
      else {
        n=currid;
      }

      objeto.datos = ev;
      window.localStorage.setItem(n,JSON.stringify(objeto))
 
      currid=0;
      location.reload()
    }
}

function evts() {
    let n=0;
    
    n=Number(window.localStorage.getItem(0))
  return n
}

function editar(ev){
  let id = ev.target.getAttribute('data-id')

  ev = window.localStorage.getItem(id)
  let data = JSON.parse(ev)
  
  document.getElementById('info').value = data.datos[0];
  document.getElementById('serv').value = data.datos[1];
  currid=Number(id)
}

function eliminar(ev){
  let id = ev.target.getAttribute('data-id')
  window.localStorage.removeItem(id) 
  currid=0;
  location.reload()
}

function viewfila(ev, id) {
    let fila = '<tr>'+
                    '<td>'+ ev.datos[1] + '</td>' +
                    '<td>'+ ev.datos[0] + '</td>' +
                    '<td>  <a class="editar btn btn-info" type="submit" value="" data-id=' + id + '>Editar</a></td>' +
                    '<td>  <a class="eliminar btn btn-danger" type="submit" value="" data-id=' + id + '>Eliminar</a></td>' +
                  '</tr>';
    return fila;
}

let tabla = '<table class="table table-striped">';
tabla += '<th scope="col">Servicio</th>';
tabla += '<th scope="col">Descripcion</th>';
tabla += '<th scope="col">Editar</th>';
tabla += '<th scope="col">Eliminar</th>';

const container = document.querySelector('section[class="section"]')
let ev = '';
n=evts();
if (n!==0){
  for (let i = 1; i <= n; i++) {
      ev = window.localStorage.getItem(i)
      let data = JSON.parse(ev)
      console.log(data)

      if (data !== null){
        tabla += viewfila(data, i);   
      }
    }
}

container.innerHTML = container.innerHTML + tabla

document.querySelectorAll('.editar').forEach((element) => {
  element.addEventListener('click', editar)
})
document.querySelectorAll('.eliminar').forEach((element) => {
  element.addEventListener('click', eliminar)
})