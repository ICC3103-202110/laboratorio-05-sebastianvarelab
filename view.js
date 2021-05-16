const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { initModel } = require('./model');
function inputForm(model){
    return inquirer.prompt([
        {
            name: "bill",
            type: "number",
            message: "Bill Amount ?",
            default:  model.bill,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Please enter a valid number'
                }
            }
        },
        {
            name: "tip_p",
            type: "number",
            message: "Tip (%) ?",
            default: model.tip_p,
            validate: function(value){
                if(value >= 0 && value <= 100){
                    return true
                } else {
                    return 'Remember that % values must be betwenn 0 and 100'
                }
            }
        }
    ])
}
module.exports = {
    view, 
    inputForm
}
function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'doom'
            }
        )
    )
}
function getTable(model){
    return [
        {"Bill Amount": "$" + model.bill,
        "Tip (%)": model.tip_p + "%",
        "Tip": "$" + model.tip,
        "Total": "$" + model.total}
    ]
}
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}