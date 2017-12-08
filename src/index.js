const minimist = require('minimist');
const readline = require('readline');

const argv = minimist(process.argv.slice(2));
console.log(argv);
const client = require('./client')(argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter command: ',
});

const prompt = () => {
  rl.prompt();
};

const printHelp = () => {
  console.log(`
  Crypto Moneybag
  ---------------
  Commands available:
    notifications
    buyPrice
  `);
};

const parseLine = (line, callback) => {
  switch (line) {
    case 'notifications': {
      client.getNotifications({}, (err, notifications) => {
        console.log(notifications);
        callback();
      });
      break;
    }

    case 'buyPrice': {
      client.getBuyPrice(
        {
          currencyPair: 'BTC-USD',
        },
        (err, result) => {
          console.log(result);
          callback();
        },
      );
      break;
    }

    case 'exit':
    case 'quit': {
      rl.close();
      break;
    }

    default:
      console.log(line);
      printHelp();
      callback();
  }
};

const handleLine = (line) => {
  parseLine(line, prompt);
};

const handleClose = () => {
  console.log('bye');
};

printHelp();
rl.prompt();
rl.on('line', handleLine).on('close', handleClose);
