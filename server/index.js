const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );


const BaseUrl = "/api/messages";
app.post( BaseUrl, mc.create );
app.get( BaseUrl, mc.read );
app.put( `${BaseUrl}/:id`, mc.update );
app.delete( `${BaseUrl}/:id`, mc.delete );


const port = 3000;
app.listen(  port, () => {console.log(`Server running on port ${port}`);  }  );