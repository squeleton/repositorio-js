///primero declaro mis variables y entradas de datos
var nombre, apellido, apellido2, nombreCompleto, nombresFamiliares;
var arrayNombre = []; ///Inicializo en arreglo vacio(no es necesario)
var arrayFamiliares =[];
var arrayGeneral= [];


nombre = prompt("Ingresa tu nombre").trim();
apellido = prompt("Ingresa tu apellido").trim();
apellido2 = prompt("Ingresa tu segundo apellido").trim();
nombresFamiliares = prompt("Coloca los nombres de tu familia separados por una (,)").trim();

if(nombre === `` || apellido === `` || apellido2 === `` || nombresFamiliares === `` )
{
    alert(`Te falataron datos, asegurate de ingresarlos todos!`);
}
else if(nombresFamiliares.includes(`,`) === false)
{
    alert("Coloca tus comas!!!!!!! ( , )");
}

else{
    ///logica
arrayNombre.push(nombre);
arrayNombre.push(apellido);
arrayNombre.push(apellido2);

arrayFamiliares = nombresFamiliares.split(` , `);

arrayGeneral = arrayNombre.concat(arrayFamiliares);

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;
arrayFamiliares = `Hola ${arrayNombre[0]} tus familiares son ${arrayFamiliares[0]}`;

//y por ultimo la salida de datos
console.log(arrayNombre);
alert(nombreCompleto);
console.log(arrayFamiliares);
alert(arrayFamiliares);
}
