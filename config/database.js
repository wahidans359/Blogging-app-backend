const mongoose = require('mongoose');
require("dotenv").config();
const connecWithDb = () =>
{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB connected successfully"))
    .catch((error) =>
    {
        console.log("DB Facing connection issues");
        console.error(error);
        process.exit(1);
    })
}
module.exports = connecWithDb;