const titulo = prompt("Escribe un texto:")
const texto = titulo.toLowerCase()
const palabras = texto.split(" ")
const contador = {}

for(let i = 0; i < palabras.length; i++){
    let palabra = palabras[i]
    if (palabra !== " "){
        if(contador[palabra]){
            contador[palabra]++
        }
        else{
            contador[palabra] = 1
        }
    }
}
let final = "Conteo de palabras: \n\n"
for (let palabra in contador){
    final += `La palabra "${palabra}" : ${contador[palabra]} vez/veces\n`
}
alert(final)
console.log(contador)