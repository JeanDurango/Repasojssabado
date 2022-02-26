// funcion para separar una cadena de texto
/*function nombrarPiloto(cadenatexto){ 
  return(cadenatexto.split(":")[1])
}*/
let nombrarPiloto=cadenatexto=>cadenatexto.split(":")[1]
// llamando la function
console.log(nombrarPiloto("ABC1234:JEAN"))

