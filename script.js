/* while (true) {
    let edad = parseInt(prompt('Ingrese su edad'));
    edad < 18 ? alert('No puede conducir') : alert('Ya puede conducir')
}; */


/* while(true){
let cali = parseInt(prompt('Ingrese su calificacion'));
cali >= 0 && cali <= 2 ? alert('Muy deficiente') :
cali === 3 || cali === 4 ? alert('Insuficiente') :
cali === 5 || cali === 6 ? alert('Suficiente') :
cali === 7 ? alert('Bien') :
cali === 8 || cali === 9 ? alert('Notable') :
cali === 10 ? alert('Sobresaliente') : 
cali > 0 || cali < 10 ? alert('numero fuera de rango') : null ;
} */


/* let frases = '';
while (confirm('quiere ingresar una frase')){
let frase = prompt('ingrese otra frase')
frases =  `${frases}-${frase}`
}
document.write(frases) */


const Letras = ['T', 'R', 'W', 'A', 'G', 'M',
 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
for (let index = 0; index < 3; index++) {
let dni = prompt('ingrese su numero de DNI entre 0 y 99999999')
dni > 99999999 || dni < 0 || dni != Number ? alert('dni debe ser un numero') : 
console.log(dni)
alert(Letras[posicion = dni % 23])
}
