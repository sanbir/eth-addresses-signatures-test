const {generateWallet} = require("./generateWallet")
require("dotenv").config()

async function main() {
    const mnemonic = process.env.MNEMONIC

    const wallet0 = generateWallet(mnemonic, 0)
    const wallet1 = generateWallet(mnemonic, 1)
    const wallet2 = generateWallet(mnemonic, 2)

    console.log(wallet0.address)
    console.log(wallet1.address)
    console.log(wallet2.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
