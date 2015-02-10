var percents = {
  wholeList: [100, 50, 10, 20, 25, 200, 150],
  options: []
}

var outOf = {
  wholeList: [12, 24, 100, 60, 200, 40, 120],
  options: []
}

var answer;

function chooseAnswers() {
  outOf.answer = outOf.wholeList[Math.floor(Math.random()*outOf.wholeList.length)];
  percents.answer = percents.wholeList[Math.floor(Math.random()*percents.wholeList.length)];
  answer = percents.answer / 100 * outOf.answer;
};

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function makeOptions(obj) {
  obj.options = obj.wholeList.filter(function(x) {return x != obj.answer });
  shuffle(obj.options);
  obj.options = obj.options.slice(0, 3);
  obj.options.push(obj.answer);
  shuffle(obj.options);
}


function displayProblem() {
  var el = document.getElementById('answer');
  var displayAnswer;
  if (Math.floor(answer) == answer) {
   displayAnswer = answer
  } else {
    displayAnswer = answer.toFixed(1);
  }
  el.textContent = displayAnswer;
  for (i = 0; i < 4; i++)
  {
    var el = document.getElementById('p' + i);
    el.firstChild.nextSibling.textContent = percents.options[i] + "%";
  
    var el = document.getElementById('o' + i);
    el.firstChild.nextSibling.textContent = outOf.options[i];
  }
}

function next() {
  chooseAnswers();
  displayProblem();
  makeOptions(percents);
  makeOptions(outOf);
  displayProblem();
  document.getElementById('success').textContent = "";
  $('input[name=percent]').attr('checked',false);
  $('input[name=outof]').attr('checked',false);
}

next();

$(document).ready(function() {
  $('#checkbtn').click(function(evt){
    evt.preventDefault();
    percents.choice = percents.options[$('input[name="percent"]:checked').val()];
    outOf.choice = outOf.options[$('input[name="outof"]:checked').val()];
    if (percents.choice / 100 * outOf.choice == answer) {
      document.getElementById('success').textContent = "Correct!";
    } else {
      document.getElementById('success').textContent = "Try again!";
    }
  });
  
  $('#next').click(function(evt) {
    evt.preventDefault();
    next();
  });
});