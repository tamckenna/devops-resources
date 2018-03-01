exports.handler = (event, context, callback) => {
    var input = event.queryStringParameters.input;
    //Example Input URL Query String:
    //?input=2017006,2,03/01/2018,40000,M
    //Insured Number,Period Number, Effective Date, Premium, Underwriting Company(M=>MEM, P=>PRV)
    /////////////////////////////////////////////////////////////////////////////////////////////
    //
    //Requirements:
    //The output JSON message should have the following:
    //Policy Number: UW Compnay + InsuredNumber + PeriodNumber (ie. "MEM2017006-02")
    //Effective Date as YYYYMMDD
    //Premium Amount with $
    //
    /////////////////////////////////////
    //DON"T CHANGE ANYTHING ABOVE HERE!!!
    /////////////////////////////////////
    
    
    
    
    //Implement Code Here
    
    
    
    
    //Output Variables
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
