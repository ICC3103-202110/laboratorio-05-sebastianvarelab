function update(input){
    const newTip = (input["bill"]*(input["tip_p"]/100)).toFixed(2)
    const newTotal = (input["bill"]*((100+input["tip_p"])/100)).toFixed(2)
    return {
        bill: input["bill"],
        tip_p: input["tip_p"],
        tip: newTip,
        total: newTotal
    }
}
    
module.exports = {
    update
}