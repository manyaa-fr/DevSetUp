const express = require("express")

const app = express()

const port = process.env.PORT || 9090

app.use(express.json())

app.get ("/", (req, res)=>{
    res.send("This is Home route")
})

app.listen(port, ()=>{
    console.log(`The server is running at port ${port}`)
})