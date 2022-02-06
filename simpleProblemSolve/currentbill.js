// for more  than 100 unit 6 tk for every unit more than 100
// for 1st 100 unit 5 tk per unit

function electricBill(unit) {
    let bill =0;
    if (unit <= 100) {
        bill = unit *5;
    }else if(unit> 200){
        let firstBill = 100 * 5;
        // let secondbill = 100 * 6;
        let remainBill = (unit -200)*7;
        bill = firstBill + secondbill + remainBill;
    }
    return bill;
}

console.log(electricBill(200));