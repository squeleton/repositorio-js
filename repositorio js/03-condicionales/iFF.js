//variables
var nombreCompleto, anoNacimiento, anoActual, edad, msg, cantidadCaracteres;

nombreCompleto = prompt("ingresa tu nombre").toUpperCase().trim();
anoNacimiento = Number(prompt("ingresa tu ano de nacimiento"));
anoActual = Number(prompt("ingresa el ano actual"));

///proceso logico

if(nombreCompleto ==="" || anoActual === 0 || anoNacimiento === 0)
{
    msg = "Ingresalosti sei perso i dati, inseriscili tutti"
}
else if (anoNacimiento > anoActual) 
{
msg = "El año de nacimiento no puede ser mayor al actual"
}
else
{
    ////obtener cantidad de caracteres de un string por medio de un array
    cantidadCaracteres = nombreCompleto.length;
    console.log(cantidadCaracteres);
    

    edad = anoActual - anoNacimiento; 

    if (edad <= 12)
    {
        msg = (`Ciao ${nombreCompleto} Tu sei un ragazzi`);
    }  
    else if (edad > 12 && edad <18)
    {
        msg = (`Ciao ${nombreCompleto} Sei un adolescente`);
    }
    else if (edad >= 18 && edad < 65)
    {
        msg = (`Ciao ${nombreCompleto} Sei un adulto, mi dispiace`);
    }
    else 
    {
        msg = (`Ciao ${nombreCompleto} sei anziano`);
    }
}



    //salida de datos 
alert(msg);

