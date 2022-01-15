const express = require('express');
const router = express.Router();

router.all('/user', (req, res, next) => {
  console.log('Por aqui paso');
  next()
})

router.get('/', (req, res) => {
  const data = [{name: 'juan'}, {name: 'pepe'}, {name: 'fulano'}, {name: 'ryan'}];
  res.render('index.html', {people: data, title: 'FreeRol'});
});

router.get('/contact', (req, res) => {
  res.render('contact.html', {name: 'Carlitos', title: 'FreeRol'});
});

router.get('/user', (req, res) => {
  res.json({
    username: 'Carlitos',
    lastname: 'Klepa'
  });
});

router.post('/user/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send('<h1>Petición POST recibida</h1>');
});

router.put('/user/:id', (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.id} actualizado`);
});

router.delete('/user/:userId', (req, res) => {
  res.send(`User ${req.params.userId} deleted`);
});

module.exports = router;
