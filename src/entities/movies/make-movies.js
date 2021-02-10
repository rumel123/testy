const makemovie = ({ encrypt }) => {
    return function make({title,genre} = {}) {
        if (!title) {
            throw new Error("Please put title!")
        }
        if (!genre) {
            throw new Error("Please put title!")
        }
        return Object.freeze({
            getT: () => encrypt(title),
            getL: () => encrypt(genre)
        })
    }
}

module.exports = makemovie