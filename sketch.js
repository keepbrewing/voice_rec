function setup() {
  noCanvas();
  
  var speechRec = new p5.SpeechRec("en-US", gotSpeech);
  speechRec.start(true, false);

  var bot = new RiveScript();
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady(){
  	console.log("ready");
  	bot.sortReplies();
  }

  function brainError(){
  	console.log("error");
  }
  
  var output = select('#output');
  var user_input = select("#user_input");
  var button = select("#start");

  function gotSpeech(){
    if(speechRec.resultValue){
      input = speechRec.resultString;
      user_input.html(input);
      bot.reply("local-user", input).then(function(reply) {
    	  output.html(reply);
	    });
    }
  }
}
