const { Router } = require('express')

const router = new Router()

router.get('/', (req, ras) => {
    return ras.json({ hello: 'Hello world' })
})

module.exports = router