const router = require('./router');
const User = require('../db/migrations/users');
const {doneCreateItem: doneCreateItem} = require('../responses');

router.post('/user', async (req, res) => {
    if (req.body.username && req.body.email){
        const user = await User.create({
            username: req.body.username,
            email: req.body.email
        });
        res.json(doneCreateItem(user));
    }
    res.send('<h1>Hello World!</h1>')
});