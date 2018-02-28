exports.handler = (event, context, callback) => {
    var input = event.queryStringParameters.input;
    /////////////////////////////////////
    //DON"T CHANGE ANYTHING ABOVE HERE!!!
    /////////////////////////////////////
    
    //Implement Code Here
    
    var outputValue = "OUTPUT_VALUE_HERE";
    
    /////////////////////////////////////
    //DON"T CHANGE ANYTHING BELOW HERE!!!
    /////////////////////////////////////
    const response = { statusCode: 200, body: JSON.stringify({ output: outputValue, }) };
    callback(null, response);
};
