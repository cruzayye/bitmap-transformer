class BitmapHeader {
    constructor (buffer) {
        this.pixelOffset = buffer.readUnit32(offset);
    }
}

module.exports = BitmapHeader;