function main() {
    const N = parseInt(readLine(), 10);

    //if N is even
    if (N % 2 === 0) {
        //if N is greater than 20
        if (N > 20) {
            console.log("Not Weird")
        }
        //if N is Greater than 5
        else if (N > 5) {
            console.log("Weird")
        }
        //if N is greater than 1
        else if (N > 1) {
            console.log("Not Weird")
        }
    }
    //if N is odd
    else {
        console.log("Weird")
    }
}
