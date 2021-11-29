/* while (true) {
    let edad = parseInt(prompt('Ingrese su edad'));
    edad < 18 ? alert('No puede conducir') : alert('Ya puede conducir')
}; 
*/


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

/* let numero = 0;
while (confirm('quiere ingresar un numero')){
numero = numero + (numero = prompt('ingrese un numero'))
typeof(numero) == 'string' ? alert('debe ingresar un numero') : null;
}
document.write(numero) */


/* const Letras = ['T', 'R', 'W', 'A', 'G', 'M',
 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
for (let index = 0; index < 3; index++) {
let dni = prompt('ingrese su numero de DNI entre 0 y 99999999')
dni > 99999999 || dni < 0 || dni != Number ? alert('dni debe ser un numero') : 
console.log(dni)
alert(Letras[posicion = dni % 23])
}
 */


/* for (let index = 1; index < 31; index++) {
for (let i = 0; i < index; i++) {
    document.write(index)
}
document.write('<br>')
}
 */





/* let bucle = true
while (bucle) {
let numero = parseInt(prompt('ingrese un numero menor de 50'))
if (numero <= 50) {
    for (let index = numero; index > 1; index--) {
        for (let i = index; i > 1; i--) {
                   document.write(index)
               } 
                document.write('<br>')
               
               }
bucle = false
}
} */


/* let bucle = true
while (bucle) {
    let numero = parseInt(prompt('ingrese un numero menor de 50'))
    if (numero <= 50) {
for (let index = 2; index < 31; index++) {
for (let i = 1; i < index; i++) {
        document.write(i)
}
document.write('<br>')
}
bucle = false;
    }
} */
 

    
/* for (let index = 1; index <= 500; index++) {
for (let i = 1; i <= 1; i++) {
        document.write(index)
        
        if (index % 4 === 0) {
            document.write('(Multiplo de 4)')
        }
        if (index % 9 === 0) {
            document.write('(Multiplo de 9)')
        }
        if (index % 5 === 0) {
            document.write('<br> ----------------------------')
        }
        document.write('<br>')
}
} */




/* let filas = parseInt(prompt('ingrese un numero filas'))
let columnas = parseInt(prompt('ingrese un numero columnas'))
let numero = columnas * filas
document.write('<table>')
for (let index = 0; index < filas; index++) {
    document.write('<tr>')
for (let i = 0; i < columnas; i++) {
        document.write(`<td> ${numero-= 1}`)
}
document.write('</td>')
document.write('</tr>')
}
document.write('</table>') */

