const { Router } = require('express');

const indexRouter = Router();

const links = [
  { href: '/', text: 'View Messages' },
  { href: '/new', text: 'Add Message' },
];

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) =>
  res.render('index', { messages: messages, links: links })
);
indexRouter.get('/new', (req, res) => {
  res.render('form', { links: links });
});
indexRouter.post('/new', (req, res) => {
  const { text, user } = req.body;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect('/');
});
indexRouter.get('/messages/:id', (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages[messageId];

  if (message) {
    res.render('message', { message: message, links: links });
  } else {
    res.status(404).send('Message not found');
  }
});

module.exports = indexRouter;
