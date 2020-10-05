const express = require('express');
const expHbs = require('express-handlebars');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));  //читає з фронта

app.use(express.static(path.join(__dirname, 'static')));
app.engine('.hbs', expHbs({     //двіжок , розштрення файлів, хто за нього відповідає
        extname: '.hbs'
    })
);

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
    res.render('main', {title: 'Hello World'});
    //res.end('OK');
});

app.post('/register', (req, res) => {
    //console.error(path.join(__dirname, 'static'));
    let body = req.body;
    //console.log('То до body ' + body);
    // console.log(req);
    //res.end('LOGIN page');
    res.render('main');
    // console.log(Object.assign(body));

    let arr_1 = [];
    let obj = Object.assign(body);
    arr_1.push(obj);
    let arr_2 = [];
    let x = Object.assign(obj);
    console.log(x);
});


app.listen(3000, (err) => {
    if (err) {
        return err
    }
    console.log('success');
});



