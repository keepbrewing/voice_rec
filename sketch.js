function setup() {
  noCanvas();

  var foo = new p5.Speech();

  var bot = new RiveScript();
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady(){
  	console.log("ready");
  	bot.sortReplies();
  }

  function brainError(){
  	console.log("error");
  }

  var button = select('#submit');
  var user_input = select('#user_input');
  var output = select('#output');

  button.mousePressed(chat);

  function chat() {
    var input = user_input.value();
    bot.reply("local-user", input).then(function(reply) {
    	foo.speak(reply);
	});
  }
}