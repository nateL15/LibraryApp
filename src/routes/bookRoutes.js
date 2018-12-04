const express = require('express');

const bookRouter = express.Router();

const books = [{
  title: 'bob doug',
  author: 'my dog',
  read: false
},
{
  title: 'gorillas',
  author: 'the boy',
  read: false
}
];

bookRouter.route('/')
  .get((req, res) => {
    res.render('books', {
      nav: [{
        link: '/books',
        title: 'Books'
      },
      {
        link: '/authors',
        title: 'Authors'
      }
      ],
      title: 'Library',
      books
    });
  });

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render('book', {
      nav: [{
        link: '/books',
        title: 'Books'
      },
      {
        link: '/authors',
        title: 'Authors'
      }
      ],
      title: 'Library',
      book: books[id]
  });

module.exports = bookRouter;
