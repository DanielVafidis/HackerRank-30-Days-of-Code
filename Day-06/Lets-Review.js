function processData(input) {

    //split the input on each line
    let data = input.split('\n');

    //loop through the different splitted arrays
    for (let i = 1; i < data.length; i++) {

        //init result for each array
        let res = [];
        let res2 = [];
        let arr = data[i]

        //push the odd / even characters in each array
        for (let j = 0; j < arr.length; j++) {
            (j % 2 === 0) ? res.push(arr[j]) : res2.push(arr[j]);
        }

        //join array to string
        res = res.join('');
        res2 = res2.join('');

        //log result on single line separated by space
        console.log(res + " " + res2);
    }
} 