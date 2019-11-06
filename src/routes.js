import { Router } from 'express'

const router = new Router()

router.get('/', (req, ras) => {
    return ras.json({ hello: 'Hello Gia' })
})

export default router