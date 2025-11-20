const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
const fileReader = () => {
    let firstname, lastname, age, hobbies;
    
    fs.readFile("./firstname.txt", "utf-8")
        .then(res => {
            firstname = res;
            return fs.readFile("./lastname.txt", "utf-8");
        })
        .then(res => {
            lastname = res;
            return fs.readFile("./age.txt", "utf-8");
        })
        .then(res => {
            age = res;
            return fs.readFile("./hobbies.txt", "utf-8");
        })
        .then(res => {
            hobbies = JSON.parse(res);
            console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);
        })
        .catch(err => {
            console.error("Fatal Error!:", err);
        });
};

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const asyncFileReader = async () => {
    try {
        const firstname = (await fs.readFile("./firstname.txt", "utf-8")).trim();
        const lastname = (await fs.readFile("./lastname.txt", "utf-8")).trim();
        const age = (await fs.readFile("./age.txt", "utf-8")).trim();
        const hobbiesArray = (await fs.readFile("./hobbies.txt", "utf-8")).trim();
        const hobbies = JSON.parse(hobbiesArray);
        
        console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);
    } catch (err) {
        console.error("Fatal Error!:", err);
    }
};

// Call both functions
fileReader();
asyncFileReader();