//Muertes al dia
function calcularMuertes() {
    let dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let muertesD = new Array(7);
    let suma = 0;

    for (let i = 0; i < muertesD.length; i++) {
        let muertes = prompt("Capture el número de muertes del " + dia[i]);
        muertesD[i] = parseInt(muertes);
        suma += muertesD[i];
    }

    let promedio = suma / 7;
    let max = Math.max(...muertesD);
    let min = Math.min(...muertesD);    
    alert("Maximo: " + max);
    alert("Minimo: " + min);
    alert("Promedio: " + promedio);

    let cadena='';
    for(let indice in muertesD){
        cadena +='<div style="background-color:#086288; color:#FFFFFF; text-align:center; border:#97d7ff 5px solid;">'+dia[indice]+': ' +muertesD[indice]+ '</div>';
    }
    document.getElementById("impMuertes").innerHTML= cadena;
}

//Capturar nombre de alumnos
let alumnos = [];
function capturarAlumnos(){
    for (let i = 0; i < 10; i++){
        let nombre = prompt("Capture el nombre del alumno: " + (i+1));
        alumnos.push(nombre);
    }
    let lista  = '';
    alumnos.forEach(function(nombreA){
        lista +='<div style="background-color:#086288; color:#FFeC4; width:20%; text-align:center; border:#97d7ff 5px solid;">'+nombreA+'</div>';
        console.log(nombreA);
    });
    document.getElementById("impAlumnos").innerHTML=lista;
}
function eliminarAlumnos(){
    let eliminar = prompt("Capture el nombre del alumno que desea eliminar: ");
    let indice = alumnos.indexOf(eliminar)
        alumnos.splice(indice,1);
    let lista2  = '';
    for (let indice in alumnos) {
        lista2 += '<div style="background-color:#086288; color:#FFEC40; width:20%; text-align:center; border:#97d7ff 5px solid;">' + alumnos[indice] + '</div>';
    }
    document.getElementById("impAlumnos").innerHTML = lista2;
}

//E
let arregloB;
function imprimir_letra(){
    arregloB=new Array(5);
    for(let i=0;i<5;i++){
        arregloB[i]=new Array(4)
    }
    llenado_arregloB();
}
function llenado_arregloB(){
    for(let i=0; i<arregloB.length;i++){
        for(let j=0; j<4;j++){
            if (i === 0 || i === 2 || i === 4 || j === 0) {
                arregloB[i][j] = 'X';
            } else {
                arregloB[i][j] = '';
            }
        }
    }
    imprimir_arregloB();
}
function imprimir_arregloB(){
    let cadenaB='';
    for(let i=0; i<arregloB.length;i++){
        for(let j=0; j<4;j++){
            cadenaB += '<div style="display:inline-block; width:30px; height:30px; background-color:#086288; color:#FFE4C4; margin:2px;">' + arregloB[i][j] + '</div>';
        }
        cadenaB += '<br>';
    }
    document.getElementById("impLetra").innerHTML=cadenaB;
}

//Salario
function calcularSalario(){
    let puestoEmp, nivelEmp, horasEmp, total;
    let sueldoD = [120,180,280], sueldoP = [120,280,340], sueldoL = [240,520,890];
    puestoEmp = document.getElementById("puesto").value;
    nivelEmp = document.getElementById("nivel").value;
    horasEmp = document.getElementById("horas").value;
    switch(puestoEmp) {
        case "Diseñador":
            total = sueldoD[nivelEmp] * horasEmp;
            break;
        case "Programador":
            total = sueldoP[nivelEmp] * horasEmp;
            break;
        case "Lider":
            total = sueldoL[nivelEmp] * horasEmp;
            break;
        default:
            total = "Opcion no valida";
    }   
    
    document.getElementById("impTotal").innerHTML = 'Total: $'+ total;
}

//Agenda
let agenda = [["Lunes", "", "", ""],
                 ["Martes", "", "", ""],
                 ["Miércoles", "", "", "" ],
                 ["Jueves", "", "", ""],
                 ["Viernes", "", "", ""],
                 ["Sábado", "", "", ""],
                 ["Domingo", "", "", ""]];
function guardar_agenda(){
        let i=document.getElementById("dia").value;
        agenda[i][1] = document.getElementById("hora").value;
        agenda[i][2] = document.getElementById("evento").value;
        agenda[i][3] = document.getElementById("descrip").value;
        mostrar();
    }
    function mostrar(){
        var tabla='';
        for(var i=0;i<agenda.length;i++){
        tabla += '<tr>';
        tabla += '<td>'+agenda[i][0]+'</td>';
        tabla += '<td>'+agenda[i][1]+'</td>';
        tabla += '<td>'+agenda[i][2]+'</td>';
        tabla += '<td>'+agenda[i][3]+'</td>';
        tabla += '</tr>';
    }
    document.getElementById("table").innerHTML = tabla;
}
