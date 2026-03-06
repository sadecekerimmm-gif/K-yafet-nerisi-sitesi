
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/outfits",(req,res)=>{
  res.json([
    {name:"Casual Outfit",style:"casual"},
    {name:"Street Outfit",style:"streetwear"}
  ])
})

app.post("/api/ai-suggest",(req,res)=>{
  const {place,weather,style} = req.body

  res.json({
    suggestion:`${style} stilinde ${place} için uygun kombin önerisi`
  })
})

app.listen(5000,()=>{
  console.log("Server running on 5000")
})
