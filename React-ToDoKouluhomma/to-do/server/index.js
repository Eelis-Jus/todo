import express from 'express'
import cors from 'cors'
import { pool } from './helper/db.js'
import dotenv from 'dotenv'
import todoRouter  from './routers/todoRouter.js'
import userRouter  from './routers/userRouter.js'

//import * as  todoRouter  from './routers/todoRouter.js'
//import * as userRouter  from './routers/userRouter.js'
/*
"testStart": "cross-env NODE_ENV=test node index.js",
    "devStart": "cross-env NODE_ENV=development nodemon index.js",
    "test": "mocha *.test.js"
*/ 
dotenv.config()
const port = process.env.PORT

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/',todoRouter)
app.use('/user', userRouter)

app.use((err,req,res,next) => {
   const statusCode=err.statusCode || 500
   res.status(statusCode).json({error: err.message});
})

app.listen(port)

/*
app.get('/',(req,res) => {
//res.status(200).json({result: "Success"})
 //   const pool = openDb()

    pool.query('select * from task', (error, result)=>{
        if (error){
            return res.status(500).json({error: error.message})
        }
        return res.status(200).json(result.rows)
    })
})

app.post('/create',(req,res) =>{
//    const pool= openDb()

    pool.query('insert into task (description) values ($1) returning *',
        [req.body.description],
        (error,result) => {
            if(error){
                return res.status(500).json({error: error.message})
            }
            return res.status(200).json({id: result.rows[0].id})
        }
    )
})

app.delete('/delete/:id',(req,res)=>{
  //  const pool = openDb()
    const id = parseInt(req.params.id)
    pool.query('delete from task where id = $1',
        [id],
        (error,result) =>{
            if (error){
                return res.status(500).json({error: error.message})
            }
            return res.status(200).json({id: id})
        }
    )
})
*/
//const openDb = () =>{
 //   const pool = new Pool ({
  //      user: process.env.DB_USER,
      //  host: process.env.DB_HOST,
  //      database: enviroment === 'development' ? process.env.DB_NAME : process.env.TEST_DB_NAME,
    //    password: process.env.DB_PASSWORD,
//        port: process.env.DB_PORT
//    })
//    return pool
//}

