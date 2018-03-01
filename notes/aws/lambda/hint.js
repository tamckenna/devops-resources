exports.handler = (event, context, callback) => {
    var input = event.queryStringParameters.input;
    /////////////////////////////////////////////////////////////////////////////////////////////
    //Input URL Query String:
    //?input=2017006,2,03/01/2018,40000,M
    //?input=2018010,1,03/05/2018,5000,P
    //Insured Number,Period Number, Effective Date, Premium, Underwriting Company(M=>MEM, P=>PRV)
    /////////////////////////////////////////////////////////////////////////////////////////////
    //
    //Requirements:
    //The output JSON message should have the following:
    //  - Policy Number: UW Compnay + InsuredNumber + "-" + PeriodNumber (ie. "MEM2017006-02")
    //  - Effective Date as YYYYMMDD
    //  - Premium Amount with $
    //
    /////////////////////////////////////
    //DON"T CHANGE ANYTHING ABOVE HERE!!!
    /////////////////////////////////////
    
    //Parse Input String by Comma
    //input.split()
    
    //UW Company Prefix Setup
    
    //Period Number Suffix Setup
    
    //Policy Number Concatenation
    
    //Convert MM/DD/YYYY to YYYYMMDD
    
    //Setup Premium for Currency Display
    
    //Output Variables
    var responsePolicyNumber = policyNumber;
    var responseEffectiveDate = effectiveDate;
    var responsePremiumAmount = premium;
    
    /////////////////////////////////////
    //DON"T CHANGE ANYTHING BELOW HERE!!!
    /////////////////////////////////////
    const response = { statusCode: 200, body: JSON.stringify({
        policynumber: responsePolicyNumber,
        effectivedate: responseEffectiveDate,
        premiumamount: responsePremiumAmount,
    }) };
    callback(null, response);
};
