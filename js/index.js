// Codigo que le pida al usuario su edad y si es mayor de edad, le pregunte su nombre y apellido y lo salude 
// "hola cristian", si Node, le ponga en el DOM, lo siento no eres mayor de edad

let persona = prompt('teclea tu edad');
if (persona >= 18) {
    let nombre = prompt('introduce tu nombre');
    let apellido = prompt('escribe tu apellido');
    document.write ("hola", nombre + apellido);
}else {
    document.write ('lo siento no eres mayor de edad');
}