const chalk = require('chalk');

const greet = require('./greet');
const styledMsg = chalk.bgRed.yellow(greet('Xola'));
console.log(styledMsg)

var figlet = require('figlet');

figlet(greet('Mishy'), function(err, data) {
    // if (err) {
    //     console.log('Something went wrong...');
    //     console.dir(err);
    //     return;
    // }
    console.log(data)
});
