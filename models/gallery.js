const mongoose = require('mongoose');

const gallerySchema = new  mongoose.Schema({
    // name: String,
    // data: Buffer,
    // contentType: String
})

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;