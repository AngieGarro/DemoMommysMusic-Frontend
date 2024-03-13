//ACCIONES DE DESIGN
document.getElementById("btn_registro").addEventListener("click", transicRegister);
document.getElementById("btn_inicio").addEventListener("click", transicInicio);
window.addEventListener("resize",anchorPage);
//Variables:
var contains = document.querySelector('.contenedor_login-registro');
var form_Login = document.querySelector('.form_login');
var form_Register = document.querySelector('.form_registro');
var caja_Login = document.querySelector('.caja_trasera-login');
var caja_Register = document.querySelector('.caja_trasera-registro');

function anchorPage(){
    if (window.innerWidth > 850){
        caja_Login.style.display = "block";
        caja_Register.style.display = "block";
    }else{
        caja_Register.style.display = "block";
        caja_Register.style.opacity = "1";
        caja_Login.style.display = "none";
        form_Login.style.display = "block";
        form_Register.style.display = "none";
        contains.style.left = "0px";

    }
}
anchorPage();

function transicInicio(){
    if (window.innerWidth > 850){
        form_Register.style.display = "none";
        contains.style.left = "10px";
        form_Login.style.display = "block";
        caja_Register.style.opacity = "1";
        caja_Login.style.opacity = "0";
    }else{
        form_Register.style.display = "none";
        contains.style.left = "0px";
        form_Login.style.display = "block";
        caja_Register.style.display = "block";
        caja_Login.style.display = "none";
    }
}
function transicRegister(){
    if (window.innerWidth > 850){
        form_Register.style.display = "block";
        contains.style.left = "410px";
        form_Login.style.display = "none";
        caja_Register.style.opacity = "0";
        caja_Login.style.opacity = "1";
    }else{
        form_Register.style.display = "block";
        contains.style.left = "0px";
        form_Login.style.display = "none";
        caja_Register.style.display = "none";
        caja_Login.style.display = "block";
        caja_Login.style.opacity = "1";
    }
}

//ACCIONES DE REGISTRO
var form = document.getElementById('.form_registro');
if (form != null)
{
    function onSubmit(event) {
        if (event) { event.preventDefault(); }

        insertarUser();

        var alertSuccess = document.getElementById('alertaRegistro');
        if (alertSuccess.classList.contains('hidden'))
        {
            alertSuccess.classList.remove("hidden");
            alertSuccess.classList.add("visible");
        }

        console.log('submitted');

        this.reset();
    }
    form.addEventListener('submit', onSubmit, false);
    form.submit = onSubmit;
}

function insertarUser() {
    var datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        genero: document.getElementById("genero").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        pwrd: document.getElementById("pwrd").value
    };
    console.log(datos);

    fetch("http://localhost:8080/clientes/insertar", {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {'Content-Type': 'application/json'}
    })
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            //cargarClientes()
        )

}

