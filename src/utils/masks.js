const Masks = {
    onlyNumber(str) {
        return str.replace(/[^0-9]/g, '')
    },

    onlyRomans(str) {
        return str.replace(/[^ivxlcdm]/gi, '').toUpperCase()
    }

}

export default Masks