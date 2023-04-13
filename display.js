let current = 0;
const limit = jsons.length;

console.log(jsons.length);
for (let i = 0; i < jsons.length; i++) {
  const json = jsons[i];
}

function nextFunction() {
  current++;
  if (current < limit) {
    displayCurrentJson(jsons[current]);
  } else {
    current = 0;
    displayCurrentJson(jsons[current]);
  }
}

function previousFunction() {
  current--;
  if (current < limit && current >= 0) {
    displayCurrentJson(jsons[current]);
  } else {
    current = jsons.length - 1;
    displayCurrentJson(jsons[current]);
  }
}

function displayCurrentJson(json) {
  const jsonContainer = document.querySelector('#json-container');

  let content = '<tr><th>Key</th><th>Value</th></tr>';
  if (isSolved(json)) {
    content +=
      '<tr><td>' +
      'Problem' +
      '</td><td><pre style="color:green">' +
      'Solved' +
      '</pre></td></tr>';
  } else {
    content +=
      '<tr><td>' +
      'Problem' +
      '</td><td><pre style="color:grey">' +
      'TODO' +
      '</pre></td></tr>';
  }
  for (var key in json) {
    var value = json[key];
    value = value.toString().split('.').join('.\n');
    if (key == 'statement') {
      content +=
        '<tr><td>' + key + '</td><td><pre><b>' + value + '</b></pre></td></tr>';
    } else {
      content +=
        '<tr><td>' + key + '</td><td><pre>' + value + '</pre></td></tr>';
    }
  }
  jsonContainer.innerHTML = content;
  displayComment();
}

function isSolved(json) {
  const title = json.statement;
  const solved = getSolved();

  for (let i = 0; i < solved.length; i++) {
    const element = solved[i];
    if (title == element) {
      return true;
    }
  }
  return false;
}

function displaySolvedProblems() {
  const jsonContainer = document.querySelector('#json-solved');
  const solved = getSolved();
  const count = solved.length;
  jsonContainer.innerHTML = 'Solved: ' + count + '/' + limit;
}

function displayComment() {
  const jsonContainer = document.querySelector('#comment-for-code');
  const currentJson = jsons[current];
  const comment = getCommentForCoding(currentJson);
  jsonContainer.innerHTML = comment;
}

function getCommentForCoding(json) {
  let content = '';
  for (var key in json) {
    var value = json[key];
    value = value.toString().split('.').join('.\n');
    if (
      key == 'tags' ||
      key == 'similarToProblem' ||
      key == 'outputExample' ||
      key == 'topicExplanation'
    ) {
    } else {
      content += '//&nbsp' + key + ':&nbsp' + value + '</br>';
    }
  }
  content +=
    'function main(input){</br>' + '&nbsp&nbsp//&nbspTODO:&nbsp' + '</br>}';

  return content;
}
