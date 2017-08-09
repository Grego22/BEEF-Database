const pgPromise = require('pg-promise')

const databse = pgPromise({databse:'lecture'})

//DROP the TABLE
database.none('DROP TABLE pets')
  .then(()=>{
    console.log('successfully dropped the table 'pets'')
  })
  .catch((error)=>{
    console.log(error, 'nope')
  })
