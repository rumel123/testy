const patchmovie = ({ encrypt }) => {
    return function make(id,{title,genre} = {}) {
        if (!id) {
            throw new Error("Please enter a ID")
        }
        if (!title) {
            throw new Error("Please Enter a Title")
        }
        if (!genre) {
            throw new Error("Please Enter a genre")
        }
        return Object.freeze({
            getI: () => id,
            getT: () => encrypt(title),
            getG: () => encrypt(genre)
        })
    }
}

module.exports = patchmovie