const express = require ('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    wish.fetchAllwishes(wishesFromFile =>{
        console.log(wishesFromFile)
        res.render('index', {mywishes : wishesFromFile});
    });
    res.render('index');
});

app.post('/wish', (req, res) =>{
    let userData = req.body.userWish;
    let newWish = new wish(userData);

    newWish.saveWish();
    res.redirect('/')
});



const port = 5000;

app.listen(port,() => {
    console.log('server is running at ${port}.')
});