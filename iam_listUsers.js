const AWS = require('aws-sdk')


const iam = new AWS.IAM({apiVersion: '2010-05-08'})

iam.listUsers(function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})