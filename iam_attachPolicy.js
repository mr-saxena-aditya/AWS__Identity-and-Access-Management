const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    PolicyArn:"arn:aws:iam::317428004288:policy/newuserfullpolicy",
    UserName:"shraddha"
}


iam.attachUserPolicy(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})