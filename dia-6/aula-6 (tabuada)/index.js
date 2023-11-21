let numero = parseInt(prompt("Você escolherá um número e eu lhe entregarei a tabuada dele + a tabuada dos dois próximos números:"))
for(let numeroSeguinte = numero; numeroSeguinte <= numero + 2; numeroSeguinte++){
    console.log('tabuada do número: ' + numeroSeguinte)
    for(let contador = 0; contador <= 10; contador++){
        console.log(numeroSeguinte + " x " + contador + " = " + (numeroSeguinte * contador))
    }
}