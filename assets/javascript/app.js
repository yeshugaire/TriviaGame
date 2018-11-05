var panel = $("#quiz-area");

// Questions
var questions = [{
  question: "What is the only mammal born with horns?",
  answers: ["Goat", "Deer.", "Giraffe", "Elephant"],
  correctAnswer: "Giraffe"
}, {
  question: "What flightless bird is featured on New Zealand’s one dollar coin?",
  answers: ["Kiwi", "Ostrish", "Eagle", "chicken"],
  correctAnswer: "Kiwi"
}, {
  question: "The aardvark is native to which continent?",
  answers: ["Asia", "Africa", "Australia", "Europe"],
  correctAnswer: "Africa"
}, {
  question: "What is the name for a mammal this is born incompletely developed and usually carried in the mother’s pouch??",
  answers: ["Marsupial", "Kangaroo", "Bison", "Lion"],
  correctAnswer: "Marsupial"
}, {
  question: "What is the name for the offspring of a male lion and a female tiger?",
  answers: ["Ligar", "Tilon", "cubs", "kids"],
  correctAnswer: "Ligar"
}, {
  question: "What spiny venous fish, common in home aquariums, has become an invasive species in the Caribbean Sea and U.S. Atlantic coastal waters?",
  answers: ["Lionfish", "eel", "Stone Fish", "boxfish"],
  correctAnswer: "Lionfish"
}, {
  question: "The dingo is a type of feral dog native to which country?",
  answers: ["Aurtralia", "Nepal", "South Africa", "China"],
  correctAnswer: "Skeeter"
}, {
  question: "What is the largest rodent found in North America?",
  answers: ["Guinea pig", "Beaver", "Capybara", "Rat"],
  correctAnswer: "Beaver"
}];

// Variable for the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// click events

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
