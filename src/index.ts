global.btoa = function (str) {
  return Buffer.from(str).toString('base64');
};
//@ts-ignore
global.window = this;

const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/d57ab336080f411f8b7e15a4a52c9cfa');

web3.eth.getBalance('0xa145ac099e3d2e9781c9c848249e2e6b256b030d', (err: any, res: any) =>
  console.log(err || res)
);
