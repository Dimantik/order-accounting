const app = require('./app/app')
const port = require('./config').port;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
