const express=require('express');

const app=express();

const bodyParser=require('body-parser');

let detail=require('./detail');

app.use(bodyParser.urlencoded({extended:false}))


app.get('/', (req, res)=>{

    res.json(detail);
    res.end();
})


app.post('/', (req, res)=>{

    const data=req.body;
    detail.push(data);
    res.send("Details saved");
    res.end();
})

app.delete('/:jerseyno', (req, res)=>{

    const jerseyno= req.params.jerseyno;
    const newData=detail.filter(detail => detail.jerseyno !== jerseyno);
    detail=newData;
    res.send("deleted");
    res.end();
})

app.put('/:jerseyno', (req, res)=>{
    const jerseyno= req.params.jerseyno;
    const newplayer = req.body;
    const newData=detail.filter(detail => detail.jerseyno!==jerseyno);
    detail=newData;
    detail.push(newplayer);
    res.send("updated");
    res.end();

})

app.listen(3000, ()=>{

    console.log('node server started')
})