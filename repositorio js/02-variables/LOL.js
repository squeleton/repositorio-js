////1.datos de entrada que necesito
var nombre;
var apellido;
var anoNacimiento;
var anoActual;
var edad;
var mitad;
///otra forma de hacerlo es: var nombre, apellido, anoNacimiento, anoActual; 
nombre = prompt('Ingresa tu Nombre');
apellido = prompt('Ingresa tu Apellido');
anoActual = Number(prompt('Ingresa el ano actual'));
anoNacimiento = Number(prompt('Ingresa tu ano de nacimiento'));

////2. que voy hacer con esos datos
edad = anoActual - anoNacimiento;
mitad = anoNacimiento / anoActual;

////3. como y que tengo que mostrar a los usuarios(en este caso 2 formas de contatenar)
////document.write("Hola " + nombre + " " + apellido + ", tu edad es:  " + edad + " la division arroja: " + mitad);
document.write(`Hola ${nombre} ${apellido}, tu edad es ${edad}, la division arroja ${mitad}`);

