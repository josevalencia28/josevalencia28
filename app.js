const express = require('express');
const path = require('path');
const app = express();


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('views', 'ejs');

//middlewares
app.use((req,res,next) => {
    console.log('')
})
//routes

//static files

//start the server


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});