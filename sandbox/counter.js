const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.update({
    TableName: 'td_notes_sdk',
    Key: {
        user_id: 'ABC',
        timestamp: 1
    },
    // Atomic Counter
    UpdateExpression: 'set #v = #v + :incr',
    ExpressionAttributeNames: {
        '#v': 'Views'
    },
    ExpressionAttributeValues: {
        ':incr': 1
    }
}, (err, data)=> {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});