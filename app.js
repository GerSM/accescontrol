const express = require('express')

//Routes
const { registrationsRouter } = require('./routes/registrations.routes')

//Utils
const { db } = require('./utils/database.utils')

//Init app
const app = express()

//Endpoints
app.use(express.json())

app.use('/api/v1/register', registrationsRouter)

 db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));


app.listen(3001, () => {
    console.log('Runing app in port 3001');
})