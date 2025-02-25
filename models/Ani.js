const mongoose = require('mongoose');

const aniSchema = new mongoose.Schema({
    baslik: {
        type: String,
        required: [true, 'Başlık alanı zorunludur']
    },
    icerik: {
        type: String,
        required: [true, 'İçerik alanı zorunludur']
    },
    gorsel: {
        data: Buffer,
        contentType: String,
        base64: String
    },
    paylasanKullanici: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gorunurlukTipi: {
        type: String,
        enum: ['herkese_acik', 'secili_kullanicilar', 'secili_gruplar'],
        default: 'herkese_acik'
    },
    izinVerilenKullanicilar: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    izinVerilenGruplar: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grup'
    }],
    durum: {
        type: String,
        enum: ['beklemede', 'onaylandi', 'reddedildi'],
        default: 'beklemede'
    },
    olusturmaTarihi: {
        type: Date,
        default: Date.now
    },
    onayTarihi: {
        type: Date
    },
    onaylayanAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ani', aniSchema); 