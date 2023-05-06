const AWS = require('aws-sdk')

const iam = new AWS.IAM()



const params = {
    GroupName:'S3Admins',
    PolicyArn:'arn:aws:iam::317428004288:policy/newuserfullpolicy'
}

iam.detachGroupPolicy(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})