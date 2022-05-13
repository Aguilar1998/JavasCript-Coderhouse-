

// if else and while
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

