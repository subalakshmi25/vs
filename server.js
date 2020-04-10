/**
 * Represents a sequelize
 * Using @mysql 
 */

const express = require('express')
const { db } = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

const routes = {
  vendors: require('./routes/vendors'),
  products: require('./routes/products'),
  users: require('./routes/users'),
}

/** This is a routes  */

app.use('/vendors', routes.vendors)
app.use('/products', routes.products)
app.use('/users', routes.users)

db.sync({ alter: true })
  .then(() => {
    app.listen(5678, () => {

      // This will allow us to run  on port 5678

      console.log('Server started on http://localhost:5678')
    })
  })
  .catch(console.error)
