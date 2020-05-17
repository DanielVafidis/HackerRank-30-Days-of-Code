// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    //set the tip + tax + total value
    let tip = meal_cost / 100 * tip_percent;
    let tax = meal_cost / 100 * tax_percent;
    let total = meal_cost + tip + tax;

    //if decimals are > 0.5 => ceil total, else floor total
    if ((total - Math.floor(total)) * 2 > 1) {
        console.log(Math.ceil(total));
    }
    else {
        console.log(Math.floor(total));
    }
}