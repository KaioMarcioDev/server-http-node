const http = require('node:http')
const port = 8080
const {randomUUID} = require('crypto')
const users = []
const server = http.createServer((req,res)=>{
    

   if(req.url=== "/users"){
    if(req.method === "GET"){
       return res.end(JSON.stringify(users))
    }
    if(req.method === "POST"){
        req.on("data",(data)=>{
            const dataUser = JSON.parse(data)
            const user = {
                id: randomUUID(),
                ...dataUser
            }
            users.push(user)

        }).on("end",()=>{
            return res.end(JSON.stringify(users))
        })

        
    }
   
   }

})

server.listen(port,()=>{
    console.log("Servidor iniciado na port:",port)
})