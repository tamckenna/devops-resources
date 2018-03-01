exports.handler = (event, context, callback) => {
    var input = event.queryStringParameters.input;
    /////////////////////////////////////
    //DON"T CHANGE ANYTHING ABOVE HERE!!!
    /////////////////////////////////////
    
    //Implement Code Here
    
    var policyNumber = "";
    var effectiveDate = "";
    var premiumAmount = 0;
    
    /////////////////////////////////////
    //DON"T CHANGE ANYTHING BELOW HERE!!!
    /////////////////////////////////////
    const response = { statusCode: 200, body: JSON.stringify({
        policynumber: policyNumber,
        effectivedate: effectiveDate,
        premiumamount: premiumAmount,
    }) };
    callback(null, response);
};
