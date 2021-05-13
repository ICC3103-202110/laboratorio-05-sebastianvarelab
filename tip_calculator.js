function app (bill,tip_p){
    return bill,tip_p
}
function view (bill,tip_p,tip,total){
    return tip 
}
function update (bill,tip_p){
    return bill,tip_p
}
tip_p=0
bill=0
var prompt = require ("prompt-sync")()
var bill= prompt( "Bill Amount?")
var tip_p = prompt ("Tip(%)?") 
var tip = bill*(tip_p/100)
tip= tip.toFixed(2)
var total= parseFloat(bill)+parseFloat(tip)
console.log(tip)
console.log(total)

