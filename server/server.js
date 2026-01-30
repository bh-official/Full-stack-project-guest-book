import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"
    
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/guestbook', async (req, res) => {
    const data = await db.query(`SELECT id, msg_name, content, created_at FROM guestbook ORDER BY created_at DESC`)
    const messages = data.rows
    res.status(200).json(messages)
})



// app.post('/guestbook', async (req, res) => {
//   try {
//     if (!req.body) {
//       return res.status(400).json({ error: "No request body received" })
//     }
//     const { msg_name, content } = req.body

//     if (!msg_name || !content) {
//       return res.status(400).json({ error: "Name and message are required" })
//     }

//     await db.query(
//       `INSERT INTO guestbook (msg_name, content) VALUES ($1, $2)`,
//       [msg_name, content]
//     )

//     res.status(201).json({ message: "added message" })
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ error: err.message })
//   }
// })


app.post('/guestbook', async (req, res) => {
    const userData = req.body
    const dbQuery = await db.query(`INSERT INTO guestbook (msg_name, content) VALUES ($1, $2)`, [userData.msg_name, userData.content])

    res.status(200).json({message: "added message"})
})

// app.delete('/guestbook/', async (req, res) => {
//     const id = req.params.id
//     const result = await db.query(`DELETE FROM guestbook WHERE id = $1 RETURNING *`, [id])

//     console.log("DELETED:", result.rows)

//     res.status(200).json({message: "deleted message"})
// })


// temp delete
app.delete('/guestbook/:id', async (req, res) => {
  const { id } = req.params

  const result = await db.query(
    `DELETE FROM guestbook WHERE id = $1 RETURNING *`,
    [id]
  )

  console.log("ROWS DELETED:", result.rows)
  
  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Nothing deleted" })
  }

  res.status(200).json({ message: "deleted" })
})


app.put('/guestbook/:id', async (req, res) => {
  const { id } = req.params
  const { msg_name, content } = req.body

  await db.query(
    `UPDATE guestbook
     SET msg_name = $1, content = $2
     WHERE id = $3`,
    [msg_name, content, id]
  )

  res.json({ message: "updated message" })
})




app.listen(4242, () => {
    console.log(`Server started on port http://localhost:4242`)
})