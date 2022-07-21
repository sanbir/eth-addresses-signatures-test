const ethers = require("ethers")

const generateWallet = function(mnemonic, index) {
    return ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${index}`)
}

module.exports = {
    generateWallet
}
