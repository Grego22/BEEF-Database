const pgPromise = require('pg-promise')

const databse = pgPromise({databse:'lecture'})

//DROP the TABLE
database.none('DROP TABLE pets')
  .then(()=>{
    console.log('successfully dropped the table 'pets'')
    //create a TABLE
    databse.none('CREATE TABLE "pets"(
                "id" SERIAL PRIMARY KEY
                "name" VARCHAR (100)NOT NULL
                "furcolor" VARCHAR (100) NULL
                "adoptedDate" TIMESTAMP
                "breed" VARCHAR(100) NOT NULL
            ').then()( => {
              console.log('successfully created table "pets"')


            })
  })
  .catch((error)=>{
    console.log(error, 'nope')
  })
