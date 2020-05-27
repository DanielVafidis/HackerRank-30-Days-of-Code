function main() {
    const n = parseInt(readLine(), 10);
    let dec = n;
    let sum = 0;
    let res = 0;
    while (dec > 0) {
        (dec % 2 === 0) ? ((res < sum) ? (res = sum, sum = 0) : sum = 0) : sum++;
        dec = parseInt(dec / 2);
    }
    console.log((sum > res) ? sum : res);
}