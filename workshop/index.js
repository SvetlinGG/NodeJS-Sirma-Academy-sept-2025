const express = require('express');

const app = express();
const port = 4000;
const HBS = '.hbs'

//app.use(express.static('public'));
//app.use('/static', express.static('/public'));
app.use('/static', express.static(__dirname + '/public'));
const expressHbs = require('express-handlebars');

const handlebars = expressHbs.create({extname: HBS});
app.engine(HBS, handlebars.engine);
app.set('view engine', HBS);



app.get('/dogs', (req, res) => {
    const dogs = [
        { name: 'Sharo', breed: 'Superdog'},
        { name: 'K9', breed: 'German Shepherd'}];

    res.render('dogs', {dogs});
});

app.get('/condition', (req, res) => {
    res.render('condition', {summer: false});
})

app.get('/', (req, res) => {
    res.render('home');
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hello my first web server</h1>');
// });

app.post('/', (req, res) => {
    // req body something with if and send back response

    // app.delete('/')
    // app.patch
    // app.put
});



app.get('/about', (req, res, next) => {  // here is Middleware

    console.log('Middleware');
    next();
}, (req, res) => {
    res.send('This is about page')
});

app.use('/user/:userId', (req, res, next) => {
    const userId = req.params.userId;
    // Check if user exists in db/session

    let userExist = false;
    if ( !userExist) { 
        res.redirect('/login')
    }else {
        next()
    }

});
app.get('/user/:userId', (req, res) => {
    res.send('User home page');
});
app.get('/login', (req, res) => {
    res.send('Login Page')
});
app.get('/courses', handleGetCourses);
app.post('/courses', handlePostCourses)

function handleGetCourses(req, res){
    res.render('courses')
};
function handlePostCourses(req, res){
    console.log('This is post request');
    
}

app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);

    if ( userId === 4){
        res.send('This is Ivan');

    }else if ( userId === 5){
        res.send('This is Dani')
    }else{
        res.send('Not Found')
    }
});


app.listen(port, () => { console.log(`Server is listen on ${port}`)})
