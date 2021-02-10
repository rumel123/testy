const encrypts = ({ crypto, algorithm, password, iv }) => {
    return function encrypt(text, isLower) {
        let str = null
        if (text) {
            text = text.toString()
            if (isLower) text = text.toLowerCase();
            const cipher = crypto.createCipheriv(algorithm,password,iv)
            let encrypted = cipher.update(text,"utf8", "hex")
            encrypted += cipher.final("hex")
            str = encrypt
        }
        return str;       
    }
}

module.exports = encrypts