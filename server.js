const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express(  
  () => console.log('Server up and running')
).listen(PORT);
