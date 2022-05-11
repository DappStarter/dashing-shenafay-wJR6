require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good argue sure spot toy note soap arrow hover arctic obscure vicious'; 
let testAccounts = [
"0xee6151691f9c6c273cbdda19084f3a369d798056cc28b7bea4b3583e5610ae67",
"0xaff50ea5a473e564202ce5f634ac817f356c97a69cb408b2acdf54f118c6adfb",
"0x1c4303f7a3caad05642f8a015e05de84bc85ff585078f32374eced042a90ff82",
"0x48f6ba006034f5cdcc284360bd2a81c90fab416e5b2fb5a98b6dc62354544d57",
"0x0da66c6cef04573d2ff3409bb9d2d594be7f85bbc9474ff1a4fe07d67d402e7f",
"0xe714fb518be2c5d91939a3497d21d1093d6a8d93a043684bbf46f1fa4573345b",
"0x53273988e8f4fe33ecce17f3dcd5ea78f054a942b8fbed0d6654905dcbac0609",
"0xe48a946b29a1f07784a1549154044372023c9f5f307d6c2c98d61d3e088cc466",
"0x70da697bcc7178b7c0b7920762070296c98676cc45044101e66c92c2c024a17d",
"0x1c024a7ef76e79022d395172f43485f4faa7d6aed6343454a9b926b58128ad07"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


