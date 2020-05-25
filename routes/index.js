const express = require('express');
const router = express.Router();

let user = null;

const profiles = [
    { name: 'Mike', city: 'Sydney', occupation: 'Doctor' },
    { name: 'Cindy', city: 'Perth' },
    { name: 'Joe', city: 'Sydney', occupation: 'Minister' }
]

router.get('/', (req, res, next) => {
    
    const data = {
        name: 'Home',
        date: req.timestamp,
        profiles: profiles,
        user
    }
    res.render('index', data);
})

router.get('/login', (req, res, next) => {
    res.render('login', null);
})

router.post('/login', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if(password === '123') {
        user = { username }
        res.redirect('/');
        return;
    }

    const data = {
        message: 'Please check your username or password'
    }
    res.render('error', data);
})

router.post('/join', (req, res, next) => {
    const body = req.body;
    profiles.push(body);

    res.redirect('/');
})

router.get('/json', (req, res, next) => {
    const data = { name: 'David', location: 'Sydney' };
    res.json(data);
})

router.get('/html', (req, res, next) => {
    const html = '<html><h1>This is an HTML response</h1></html>'
    res.send(html);
})

router.get('/query', (req, res, next) => {
    const query = req.query;
    res.json(query);
})

router.get('/params/:name/:location/:occupation', (req, res, next) => {
    const params = req.params;
    res.json({ params });
})



module.exports = router;
