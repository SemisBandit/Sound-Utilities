const mongoose = require('mongoose')
const mongoPath = 'YOUR_MONGODB_URL' //type ur mongo url



module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}