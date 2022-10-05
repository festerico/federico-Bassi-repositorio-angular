// titulo h1 "¿Estas buscando un desarrollador Web?"
const cambiarPregunta = () => document.getElementById("titulo").innerHTML = "Lo encontraste!";
document.getElementsByTagName("h1")[0].style.color = "white";



let volverAPreguntar = () => document.getElementById("titulo").innerHTML = "¿Estas buscando un desarrollador Web?";
document.getElementsByTagName("h1")[0].style.color = "white";


//probando API de chuck norris para el footer


async function obtenerApi() {
    const response = await fetch("https://api.chucknorris.io/jokes/random")

    const data = await response.json();

    const { value, icon_url } = data;

    const idChuck = document.querySelector("#chuckId").querySelector("#chuck").textContent = "The latest news about Chuck Norris: " + value;
};
obtenerApi()


async function recargar() {
    const response = await fetch("https://api.chucknorris.io/jokes/random")

    const data = await response.json();

    const { value } = data;
    document.querySelector("#chuckId").querySelector("#chuck").textContent = "The latest news about Chuck Norris: " + value;
}


// login


const button = document.getElementById('btn');

button.addEventListener('click', (e) => {
    e.preventDefault();
    // data = {
    //     username: username.value,
    //     password: password.value
    // }


});

function chequear() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const pass = parseInt(password);
    let usuario = "federico";
    let clave = 1234;

    if (username == usuario && pass == clave) {
        alert("puedes editar la pagina.")
        for (let el of document.querySelectorAll('.lapiz_editor')) el.style.visibility = 'visible';
    } else {
        alert
            ("el usuario o la contraseña no son correctos.")
    };

}