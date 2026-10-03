function disco(){
    var nombre = document.getElementById('nombre').value;
    var genero = document.getElementById('genero').value;
    var artista = document.getElementById('artista').value;
    var precio = document.getElementById('precio').value;
    var foto = document.getElementById('foto').value;
    
    var mensaje = "--- DATOS REGISTRADOS ---\n" +
                  "Nombre: " + nombre + "\n" +
                  "Genero: " + genero + "\n" +
                  "Artista: " + artista + "\n" +
                  "Precio: " + precio + "\n" +
                  "Foto: " + foto;

    alert(mensaje);
}

function cantante(){
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var trayectoria = document.getElementById('trayectoria').value;
    var foto = document.getElementById('foto').value;
    
    var mensaje = "--- DATOS REGISTRADOS ---\n" +
                  "Nombre: " + nombre + "\n" +
                  "Edad: " + edad + "\n" +
                  "Genero: " + genero + "\n" +
                  "Trayectoria: " + trayectoria + "\n" +
                  "Foto: " + foto;

    alert(mensaje);
}

function cancion(){
    var nombre = document.getElementById('nombre').value;
    var duracion = document.getElementById('duracion').value;
    var compositor = document.getElementById('compositor').value;
    var cantante = document.getElementById('cantante').value;

    var mensaje = "--- DATOS REGISTRADOS ---\n" +
                  "Nombre: " + nombre + "\n" +
                  "Duracion: " + duracion + "\n" +
                  "Compositor: " + compositor + "\n" +
                  "Cantante: " + cantante;

    alert(mensaje);
}

function playlist(){
    var nombre = document.getElementById('nombre').value;
    var usuario = document.getElementById('usuario').value;
    
    var mensaje = "--- DATOS REGISTRADOS ---\n" +
                  "Nombre: " + nombre + "\n" +
                  "Usuario: " + usuario;

    alert(mensaje);
}
