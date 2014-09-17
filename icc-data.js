//Data Structures for Decisions of the Indian Claims Commission

function Decision(type) {
  this.type = type;
}



var causeOfActionDecision = new Decision("causeOfAction");
/*"III-V" - Cause of Action, Accrual of Cause of Action, New Cause of 
Action Created by Indian Claims Commission Act, Splitting 
Claims 8*/

var standingDecision = new Decision("standing");
/*"VI-XI" - Standlng Before the Comnission, Parties, Successor in 
Interest */

var iccClaimsDecision = new Decision("iccClaims");
/*Claims Considered Under the Indian Claims Comnission Act */

var accountingClaimsDecision = new Decision("accountingClaims");
/*Claims Based on Federal Administration of Indian Affairs, 
Including Claims for Improper Handling of Indian Monies 
and Trust Lands */

var trustDecision = new Decision("trust");
/*Federal Trust Obligations, Trade and Intercourse Act */

var titleDecision = new Decision("title");
/*Title, Aboriginal Title, Recognized Title. Land Grants, 
Survey Errors */













console.log(blackRabbit.type);
