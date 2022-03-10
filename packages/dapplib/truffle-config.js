require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strategy dash screen proud gown light army gauge'; 
let testAccounts = [
"0x180b84731c21775527d1518a052b4b10fbf6f653734f8b8f5e757ff82bca19aa",
"0xb66da6912759f4cdefc4c20f0a07c6208bc4d4559c68c51f0b6bd87cf805b024",
"0x044cd097d07069eea2e5720c33d2facc1b50925d25c4c6a096bbce312ee4e5bd",
"0x1bbb3f60553f9abb464a64d2bca3036270cbe49f39cc1398d8db4722aa4b114c",
"0x2131f2cd24235e0615e6992fbc73f2b03d09ba8622067ef8f3fe37eecfbf1395",
"0x09e13a30a03673888230e998ee7ed27ee38f8c7afc70df37b4767c0b1c311450",
"0x4d3f99d6902d1f3bce5216ca9b563aa4df94c5a0e341b905bff1683679837ca5",
"0x730adfd11225163c4e3dc60e610661a61b3e150fc4681a45c5309666d41899e1",
"0x217212056b19d01127b34bde84975601901b61f763885f084a008dc521f15512",
"0x629c84a527729e758987a26245656e0d43385e4ae4e16100fe7421befd835cc8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


