function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// following two arrays are the 'dictionaries' to create problems

var outOf = [12, 24, 100, 60, 200, 40, 120];

var percents = [100, 50, 10, 20, 25, 200, 150];

//  choose the answers for the problem

var outOfAnswer = outOf[Math.floor(Math.random()*outOf.length)];

var percentsAnswer = percents[Math.floor(Math.random()*percents.length)];

var answer = percentsAnswer / 100 * outOfAnswer;

// make an array of options for the percents answer

var percentsOptions = percents.filter(function(p) { return p != percentsAnswer });

shuffle(percentsOptions);

percentsOptions = percentsOptions.slice(0, 3);

percentsOptions.push(percentsAnswer);

shuffle(percentsOptions);

// make an array of options for the out-of answer

var outOfOptions = outOf.filter(function(o) { return o != outOfAnswer });

shuffle(outOfOptions);

outOfOptions = outOfOptions.slice(0, 3);

outOfOptions.push(outOfAnswer);

shuffle(outOfOptions);

// display values

var el = document.getElementById('answer');
el.textContent = answer;

var el = document.getElementById('p0');
el.firstChild.nextSibling.textContent = percentsOptions[0] + "%";

var el = document.getElementById('p1');
el.firstChild.nextSibling.textContent = percentsOptions[1] + "%";

var el = document.getElementById('p2');
el.firstChild.nextSibling.textContent = percentsOptions[2] + "%";

var el = document.getElementById('p3');
el.firstChild.nextSibling.textContent = percentsOptions[3] + "%";

var el = document.getElementById('o0');
el.firstChild.nextSibling.textContent = outOfOptions[0];

var el = document.getElementById('o1');
el.firstChild.nextSibling.textContent = outOfOptions[1];

var el = document.getElementById('o2');
el.firstChild.nextSibling.textContent = outOfOptions[2];

var el = document.getElementById('o3');
el.firstChild.nextSibling.textContent = outOfOptions[3];