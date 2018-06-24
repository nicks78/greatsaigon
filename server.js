const express = require('express')
const next = require('next')
const cors = require('cors')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
  const server = express();

  server.use(cors())
  
  server.get('/articles', (req, res) => {
    const actualPage = '/articles'
    app.render(req, res, actualPage)
  })

  server.get('/profile-article/:slug/:id', (req, res) => {
    const actualPage = '/profile-article';
    const queryParams = { slug: req.params.slug, id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/events', (req, res) => {
    const actualPage = '/events'
    app.render(req, res, actualPage)
  })
  server.get('/profile-event/:slug/:id', (req, res) => {
    const actualPage = '/profile-event';
    const queryParams = { slug: req.params.slug, id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/sign-in', (req, res) => {
    const actualPage = '/sign-in'
    app.render(req, res, actualPage)
  })

  server.get('/sign-up', (req, res) => {
    const actualPage = '/sign-up'
    app.render(req, res, actualPage)
  })

  server.get('/directory/:name', (req, res) => {
    const actualPage = '/directory'
    const queryParams = { name: req.params.name }     
    app.render(req, res, actualPage)
  })

  server.get('/search-page/:directory/:where/:what', (req, res) => {
    const actualPage = '/search-page'
    const queryParams = { what: req.params.what, where: req.params.where, directory: req.params.directory } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/profile-venue/:slug/:id', (req, res) => {
    const actualPage = '/profile-venue';
    const queryParams = { slug: req.params.slug, id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })



  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})