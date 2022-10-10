app.use(express.static('public'))

const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darth Vader',
        quote: 'I find your lack of faith disturbing.'
      })
    })
  })

  app.use(bodyParser.json())
  app.put('/quotes', (req, res) => {
    console.log(req.body)
  })