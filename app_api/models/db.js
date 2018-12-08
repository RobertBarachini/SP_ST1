console.log("a")

var mongoose = require('mongoose');
require('./userIdentity');

console.log("b")

var dbURI = 'mongodb://localhost/sp';
mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true });

console.log("c")

mongoose.connection.on('connected', function() {
  console.log('Mongoose je povezan na ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose napaka pri povezavi: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose je zaprl povezavo');
});

console.log("d")

var pravilnaUstavitev = function(sporocilo, povratniKlic) {
  mongoose.connection.close(function() {
    console.log('Mongoose je zaprl povezavo preko ' + sporocilo);
    povratniKlic();
  });
};

// Pri ponovnem zagonu nodemon
process.once('SIGUSR2', function() {
  pravilnaUstavitev('nodemon ponovni zagon', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Pri izhodu iz aplikacije
process.on('SIGINT', function() {
  pravilnaUstavitev('izhod iz aplikacije', function() {
    process.exit(0);
  });
});

// Pri izhodu iz aplikacije na Heroku
process.on('SIGTERM', function() {
  pravilnaUstavitev('izhod iz aplikacije na Heroku', function() {
    process.exit(0);
  });
});