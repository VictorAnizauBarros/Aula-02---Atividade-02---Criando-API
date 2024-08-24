const express = require('express'); 
const app = express(); 
const port = 3000; 

app.use(express.json()); 

let data = ["item1" , "item2" , "item3"]; 

app.get('/items' , (req,res)=>{
    res.json(data); 
}); 

app.post('/items', (req,res)=>{
    const newItem = req.body; 
    data.push(newItem);
    res.status(201).json(newItem);
});
app.put('/items/:id', (req,res)=>{
    const itemID = req.params.id;
    const updatedItem = req.body;
    data[itemID] = updatedItem;
    res.json(updatedItem);
});
app.delete('/items/:id', (req,res)=>{
    const itemID = req.params.id;
    data.splice(itemID,1); 
    res.sendStatus(204);      
});

app.listen(port , ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})