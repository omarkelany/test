const router = require('./controllers/router');

let port = process.env.APP_ENV === 'local' ? (process.env.APP_PORT_LOCAL) : (process.env.APP_PORT_PRODUCTION);
if (port === undefined){
   port = 8080
}

router.listen(port, () => console.log(`Server run on port ${port}`));