function detectare(text) {
    let stare = "q0";

    for (let char of text) {
        switch (stare) {
            case "q0":
                stare = (char === 'c') ? "q1" : "q0";
                break;
            case "q1":
                if (char === 'a') {
                    stare = "q2";
                } else if (char === 'c') {
                    stare = "q1";
                } else {
                    stare = "q0";
                }
                break;
            case "q2":
                if (char === 't') {
                    stare = "q3";
                } else if (char === 'c') {
                    stare = "q1";
                } else {
                    stare = "q0";
                }
                break;
            case "q3":
                return true;
        }
    }

    return stare === "q3"; 
}

console.log(detectare("the cat is here"));  
console.log(detectare("c at is here"));
console.log(detectare("concatenation"));
console.log(detectare("the caat is here"));
