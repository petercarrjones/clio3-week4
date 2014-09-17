//Data Structures for Decisions of the Indian Claims Commission

function Decision(type) {
  this.type = type;
}

var docket1 =
{
  "Plaintiff" :  "Western and Eastern Cherokee Indians",
  "Defendent" :  "United States of America",
  "Docket" : "2",
  "Date" : "1948 11 15",
  "Title" :  "Opinion of the Commission",
  "Citation" :  "1 Ind. Cl. Comm. 1",
  "Pages"  :  "19",
  "Url" : "http:\/\/digital.library.okstate.edu\/icc\/v01\/iccv01p001.pdf",
  "Decision" : [
	{
	"type" : "iccCreation",
	"type" : "resJudicata"
	}
   ],
  "Dissent" : true
}

var docket3 =
{
  "Plaintiff" :  "Western Cherokee Indians",
  "Defendent" :  "United States of America",
  "Docket" : "3",
  "Date" : "1948 11 15",
  "Title" :  "Opinion of the Commission",
  "Citation" :  "1 Ind. Cl. Comm. 20",
  "Pages"  :  "11",
  "Url" : "http:\/\/digital.library.okstate.edu\/icc\/v01\/iccv01p020.pdf",
  "Decision" : [
	{
	"type" : "resJudicata"
	}
   ],
  "Dissent" : true
}

var docket5 = 
{
  "Plaintiff" :  "Eastern Cherokee Indians",
  "Defendent" :  "United States of America",
  "Docket" : "5",
  "Date" : "1948 11 15",
  "Title" :  "Opinion of the Commission",
  "Citation" :  "1 Ind. Cl. Comm. 31",
  "Pages"  :  "12",
  "Url" : "http:\/\/digital.library.okstate.edu\/icc\/v01\/iccv01p031.pdf",
  "Decision" : [
	{
	"type" : "resJudicata"
	}
   ],
  "Dissent" : true
}

var iccCreationDecision = new Decision("iccCreation");
/*"I-II" - Creation, Jurisdiction, Responsibilities of the Indian 
Claims Commission */

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

var resJudicataDecision = new Decision("resJudicata");
/*"VI-XI" - Standlng Before the Comnission, Parties, Successor in 
Interest */






console.log(docket1);
