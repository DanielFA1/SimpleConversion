function bin(){

    const valor = document.getElementById('binario-input').value
    
    if(valor.match(/^[0-1]+$/g) === null){
        
        let SemBin = document.getElementById("SemBinario")
        SemBin.className = ""
        return

    } else{
        document.getElementById("SemBinario")
        SemBinario.className = "hide"
    }

    let decimal = 0
    for(let index = valor.length - 1; index >= 0; index--){
        decimal += parseInt(valor[index]) * Math.pow(2, valor.length - 1 - index) 
    }


    document.getElementById("resultado").value = decimal
}
