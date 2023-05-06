
/**
 * [Code to Create New User using JavaScript]
 */

// Using AWS SDK for JavaScript
const AWS = require('aws-sdk')


// Creating new IAM Function
const iam = new AWS.IAM()

// Declaring params to send to IAM
const params = {
    UserName:'new_user_after_policy'
}

// Creating a new user using functions
iam.createUser(params, function(err, data){
    if(err) {
        console.log(err);
    }else {
        console.log(data);
    }
})