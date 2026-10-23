let titulo = prompt("Escribe una oración:")
let texto = titulo.toLowerCase()
let contador = {}

for(let i = 0; i < texto.length; i++){
    let letra = texto[i]
    if (letra !== " "){
        if(contador[letra]){
            contador[letra]++
        }
        else{
            contador[letra] = 1
        }
    }
}

console.log(contador)