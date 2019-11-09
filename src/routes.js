import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Gian Dal Pont',
        email: 'gian@gmail.com',
        password_hash: '12323423445',
    });

    return res.json(user);
});

export default routes;
