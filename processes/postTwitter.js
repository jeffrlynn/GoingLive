// Import twitter package
var Twitter = require('twitter');

// Import the config (contains keys and tokens)
var config = require('./config')

// Twitter object that will call functions
var T = new Twitter(config);

var tweet = {

// this is the tweet message    
status: 'hello world!!' } 

// this is how we actually post a tweet,
// again takes three params 'statuses/update',
// tweet message and a call back function
T.post('statuses/update', tweet, tweeted) 

// this is the call back function which does something
// if the post was successful or unsuccessful.
function tweeted(err, data, response) {

    if(err){
        console.log("Something went wrong!");
    }

    else{
        console.log("Voila It worked!");
    }

} 