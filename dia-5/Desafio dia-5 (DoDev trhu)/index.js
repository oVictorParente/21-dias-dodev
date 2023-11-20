let posto = prompt('Você está em um posto de combustível. Escolha qual serviço deseja realizar: \nAbastecer com gasolina (digite 1); \nAbastecer com álcool (digite 2); \nCalibrar os pneus (digite 3)')
if(posto === "3"){
        console.log('Pneus calibrados com sucesso. Volte sempre!')
}else if(posto === "1" || posto === "2") {
    let valor = prompt('Qual valor você deseja abastecer ?')
        switch(posto){
            case "1":
                console.log('O valor da gasolina está R$5. Você abasteceu ' + (valor / 5) + 'L')
                break;
            case "2":
                console.log('O valor do álcool está R$3. Você abasteceu ' + (valor / 3) + 'L')
                break;
        }
}else {
    console.log('Opção inválida, tente com 1, 2 ou 3')
}