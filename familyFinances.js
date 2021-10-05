
let contas = {
    gastos : [100, 373.50,87.98,457.80],
    entradas : [2500]
 }
 
 function soma(lista){
    let total = 0;
    
    for(let valor of lista){
       total += valor
    }
    return total
 }
 
 function saldo(){
   
   const gastosTotal = soma(contas.gastos)
   const entradasTotal = soma(contas.entradas)
 
   const saldoTotal = entradasTotal - gastosTotal;
 
   if (saldoTotal >= 0){
      console.log(`Seu saldo é positivo: ${saldoTotal}`)
 
   } else {console.log(`Seu saldo é negativo: ${saldoTotal}`)}
 
 }
 
 saldo()
 