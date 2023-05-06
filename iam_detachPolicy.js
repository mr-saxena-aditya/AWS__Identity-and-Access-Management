const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    PolicyArn:"arn:aws:iam::317428004288:policy/newuserfullpolicy",
    UserName:"shraddha"
}

iam.detachUserPolicy(params , (err, data) => {
    if(err) {
        console.log(err, err.stack);
        
    }else {
        console.log(data);
        
    }
})