const covid = require('../index');

async function consoleWrite() {
    let res = await covid.find({ country: "all" });
    console.log(res)
}

async function countryWrite() {
    let res = await covid.find({ country: "USA"})
    console.log(res)
}



 consoleWrite();

countryWrite();
