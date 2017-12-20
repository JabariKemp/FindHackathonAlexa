var https = require('https')

exports.handler = (event, context) => {

  try {

    if (event.session.new) {
      // New Session
      console.log("NEW SESSION")
    }

    switch (event.request.type) {

      case "LaunchRequest":
        // Launch Request
        console.log(`LAUNCH REQUEST`)
        context.succeed(
          generateResponse(
            buildSpeechletResponse("Welcome to an Alexa Skill, this is running on a deployed lambda function", true),
            {}
          )
        )
        break;

      case "IntentRequest":
        // Intent Request
        console.log(`INTENT REQUEST`)

          var one = event.request.intent.slots.Hack.value;
        switch(one) {
          
         
          
         case "Hack M T Y":
            one =  "August 26 th to 27th";
            break;
            case "Med Hacks":
            one = " September 8 th to 10th ";
            break;
            case "Penn Apps":
            one = "September 8 th to 10th";
            break;
            case "Big Red Hacks":
            one = "September 15 th to 17 th" ;
            break;
            case "Hack the North":
            one = "September 15 th to 17 th" ;
            break;
            case "Hop Hacks":
            one = "September 15 th to 17 th"; 
            break;
            case "Hack U Iowa":
            one = " September 16 th to 17 th";
            break;
            case "Lumo hacks":
            one = " September 16 th to 17 th";
            break;
            case "Ram Hacks":
            one = " September 16 th to 17 th";
            break;
            case "Hack Rice":
            one = " September 22 nd to 24 th";
            break;
            case "M Hacks X":
            one = "September 22 nd to 24 th";
            break;
            case "Hack State":
            one = "September 23rd to 24th";
            break;
            case "Hack Ron":
            one = "September 23rd to 24th";
            break;
            case "Boiler Make":
            one = "September 29th to October 1st";
            break;
            case "Hack Merced":
            one = "September 29th to October 1st";
            break;
            case "Shell Hacks":
            one = "September 29th to October 1st";
            break;
            case "Diamond Hac":
            one = "September 30th to October 1st";
            break;
            case "Edu Hacks":
            one = "September 30th to October 1st";
            break;
            case "Grizz Hacks 2":
            one = "September 30th to October 1st";
            break;
            case "Hack U T A":
            one = "September 30th to October 1st";
            break;
            case "Cal Hacks":
            one = "October 6th to 8th";
            break;
            case "Kent Hack Enough":
            one = "October 6th to 8th";
            break;
            case "We Can Code":
            one = "October 6th to 7th";
            break;
            case "Hack N A U":
            one = "October 7th to 8th";
            break;
            case "Hack U M B C":
            one = "October 7th to 8th";
            break;
            case "Knight Hacks":
            one = "October 7th to 8th";
            break;
            case "Mad Hacks":
            one = "October 7th to 8th";
            break;
            case "Tiger Hacks":
            one = "October 13th to 15th";
            break;
            case "Hack NY":
            one = "October 14th to 15th";
            break;
            case "Hack RU":
            one = "October 14th to 15th";
            break;
            case "Hack Harvard":
            one = "October 20th to 22nd";
            break;
            case "Hack JA":
            one = "October 20th to 21st";
            break;
            case "SD Hacks":
            one = "October 20th to 22nd";
            break;
            case "Vandy Hacks":
            one = "October 20th to 22nd";
            break;
            case "Dub Hacks":
            one = "October 21st to 22nd";
            break;
            case "Hack GSU":
            one = "November 3rd to 5th";
            break;
            case "Hack GT":
            one = "October 13th to 15th";
            break;
            case "Hack UMass V":
            one = "November 3rd to 5th";
            break;
            case "Hack Riddle":
            one = "November 11th to 12th";
            break;

               context.succeed(
          generateResponse(
            buildSpeechletResponse(c+one, true),
            {}
          )
        )

          default:
            throw "Invalid intent"
            break;
        }

        break;

      case "SessionEndedRequest":
        // Session Ended Request
        console.log(`SESSION ENDED REQUEST`)
        break;

      default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)

    }

  } catch(error) { context.fail(`Exception: ${error}`) }

}

// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse, sessionAttributes) => {

  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  }

}