const express = require("express");
const app = express(); 

//informar para o express que estamos usando o json no body das requisições 
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
}); 

const herois =["MulherMaravilha", "Marvel"]

//endpoint read all - [GET] /herois 
app.get("/herois", function(req,res){ 
    res.send(herois.filter(Boolean));
}); 

//endpoint read by ID - [GET] /herois/:id  
app.get("/herois/:id", function(req,res){ 
    const id = req.params.id; 
    const item = herois[id-1] 
    res.send(item);
});

//endpoint create - [POST] / herois 
app.post("/herois", function(req, res){  
    //console.log(req.body); 
    
    //Acessa o nome do heroi no corpo da req
    const item = req.body.nome 
    //insere o nome na lista
    herois.push(item)
    res.send("Item inserido com sucesso") 

}); 

//endpoint Update - [PUT] /herois/:id 

app.put("/herois/:id", function(req,res){  
    const id = req.params.id; 
    const item = req.body.nome; 
    herois[id-1] = item; 
    res.send("Item atualizado com sucesso")
}) 

//endpoint delete - [DELETE] /herois/:id 
app.delete("/herois/:id", function(req,res){  
    const id = req.params.id;  

    delete herois[id-1]
    res.send("item removido com sucesso") 

})


app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
