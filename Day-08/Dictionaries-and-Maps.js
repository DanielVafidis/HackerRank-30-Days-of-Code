function processData(input) {
    //Enter your code here

    //split the input to keep envery line separated
    let split1 = input.split('\n');

    //init result object
    let split2 = {}

    //for all lines after the first one (the number of entries in the phone book) split the result and add to the object as key:value
    for (let i = 1; i <= split1[0]; i++) {
        split2[split1[i].split(' ')[0]] = split1[i].split(' ')[1]
    }

    //for every remaining lines of queries, log the phone number or not found
    for (i = parseInt(split1[0]) + 1; i < split1.length; i++) {
        if (split2[split1[i]]) {
            console.log(split1[i] + '=' + split2[split1[i]])
        }
        else {
            console.log('Not found')
        }
    }
} 