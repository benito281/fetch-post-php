//console.log("funcionando")
let respuesta = document.getElementById('respuesta')
let formulario = document.getElementById('formulario')

/* formulario.addEventListener('submit', function(e){
    console.log("click!")
    e.preventDefault()
    let datos = new FormData(formulario)
    console.log(datos)
    console.log(datos.get('user'))
    console.log(datos.get('pass'))
    
    //callbacks, promises, async await
    fetch('post.php',{
        method: 'POST', //verbos http put get delete patch
        body: datos
    })
    .then( res => res.json()) //promesas
    .then( data => {
        console.log(data)
        if(data === "error"){
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ALERTA!! LOS CAMPOS NO DEBEN ESTAR VACIOS
            </div>
           `
        }else{
           respuesta.innerHTML =  `
           <div class="alert alert-primary" role="alert">
               ${data}
           </div>
       `  
        }
    })
}) */

formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    let datos = new FormData(formulario)
    const getData = async () => {
        const res = await fetch('post.php', {
            method: 'POST',
            body: datos
        })
        const data = await res.json()
        //return data
        if (data === "error") {
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ALERTA!! LOS CAMPOS NO DEBEN ESTAR VACIOS
            </div>
           `
        } else {
            respuesta.innerHTML = `
           <div class="alert alert-primary" role="alert">
               ${data}
           </div>
       `
        }
    }
    getData()
})

