/// var y entradas
var cantidad, promedio;
var notas = [];
var sumatoria = 0;


cantidad = Number(prompt("Ingrese la cantidad de notas a promediar"));
///logica
for(var i = 1; i <= cantidad; i++)
{
    notas.push(Number(prompt(`Ingresa la nota ${i}`)));

    sumatoria = sumatoria + notas[i - 1];
}

promedio = sumatoria / cantidad;



//salidas
(alert(`El promedio de las ${cantidad} notas es: ${Math.floor(promedio)}`));
console.log(notas);
