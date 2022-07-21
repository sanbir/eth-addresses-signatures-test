const {generateWallet} = require("./generateWallet")
require("dotenv").config()

async function main() {
    const mnemonic = process.env.MNEMONIC
    const message = process.env.MESSAGE

    const wallet = generateWallet(mnemonic, 0)
    const signature = await wallet.signMessage(message)
    console.log(signature)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
