function update(bill,tip_p){
    return {
        bill: bill,
        tip_p: tip_p,
        tip: (bill*tip_p/100).toFixed(2),
        total: (bill*(1+tip_p/100)).toFixed(2) 
    }
}

module.exports = {
    update
}