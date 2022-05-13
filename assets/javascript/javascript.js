// estructura de control whille y if else

// do...while
// let n = Number(prompt("Ingrese un numero natural"))
// let f=1
// let c=0
// do{
//     c++
//     f=f*c
// }while(c=n)

// console.log(f)

// if 
let cantAprobados=Number(prompt("Ingrese la cantidad de aprobados"))

if (cantAprobados!=0){

    let cantNotasCargadas=1
    let superaElNueve=0
    
    do{
        
        let nota=Number(prompt("Ingrese su nota"))
        cantNotasCargadas++
        
        if (nota>=9){
            superaElNueve++
        }
        
    }while(cantNotasCargadas<=cantAprobados)
    
    let mayorA_Nueve
    mayorA_Nueve = 100*superaElNueve/cantAprobados
    alert(mayorA_Nueve+"%")
}else{ 
    alert("Nadie aprobó")
}

// dwhile(){

// }