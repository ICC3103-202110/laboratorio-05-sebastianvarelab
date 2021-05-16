function app (bill,tip_p){
    return bill,tip_p
}
function view (bill,tip_p,tip,total){
    while(true){
        var chalk= require ("chalk")
    var figlet= require("figlet");
    figlet("Tip Calculator App", function(err,data){
        if (err){
            console.log("Something went wrong...");
            console.dir(err);
            return 
        }
        console.log(chalk.blue(data))
    });
        var prompt = require ("prompt-sync")()
        var bill= prompt( "Bill Amount?")
        var tip_p = prompt ("Tip(%)?") 
        var tip = bill*(tip_p/100)
        tip= tip.toFixed(2)
        var total= parseFloat(bill)+parseFloat(tip)
        var {printTable} = require ("console-table-printer");
        var testCases=[
            {Bill_Amount: bill, Tip_porcentage: tip_p, Tip: tip, Total: total},
        ];
        printTable(testCases);
    }
    return True
        
}
function update (bill,tip_p,tip,total){
    return bill,tip_p,tip,total
}
var chalk= require ("chalk")
var figlet= require("figlet");
figlet("Tip Calculator App", function(err,data){
    if (err){
        console.log("Something went wrong...");
        console.dir(err);
        return 
    }
    console.log(chalk.blue(data))
});
tip_p=0
bill=0
tip=0
total=0


