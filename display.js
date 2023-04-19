let current = 0;
const limit = jsons.length;

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

function getLatestUnsolved() {
  const solved = getSolved();
  for (let i = 0; i < solved.length; i++) {
    if (jsons[i].statement == solved[i]) {
      current++;
    }
  }

  displayCurrentJson(jsons[current]);
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
  const elementTodo = document.querySelector('#code-todo');
  const elementTest = document.querySelector('#code-test');

  const currentJson = jsons[current];
  const todo = getCommentForCoding(currentJson);
  const test = getCommentForTesting(currentJson);
  elementTodo.innerHTML = todo;
  elementTest.innerHTML = test;
}

function getCommentForCoding(json) {
  let content = '';
  content += getCommentOfJson(json);
  content += `
export function func(input) {
  // TODO:
}`;
  return content;
}

function getCommentForTesting(json) {
  let content = '';
  content += getTestForCoding(json.inputExample);
  return content;
}

const space = ' ',
  tab = '    ',
  line = '\n';

function getCommentOfJson(json) {
  let content = '';
  for (var key in json) {
    var value = json[key];
    value = ('' + value).split('.').join('\n// ');
    if (!isIgnoredTags(key)) {
      content += '// ' + getKeyValueLine(key, value) + line;
    }
  }
  return content;
}

function getKeyValueLine(key, value) {
  return tab + key + ':' + space + value;
}

function isIgnoredTags(key) {
  return (
    key == 'tags' ||
    key == 'similarToProblem' ||
    key == 'outputExample' ||
    key == 'topicExplanation'
  );
}

function getTestForCoding(inputExample) {
  const generatedStringForPre = `

import { func } from '../func.js';

describe(statement, () => {
  it('expectation', () => {
    const input = ${JSON.stringify(inputExample)};
    const expected = true;
    const res = func(input);
    console.log('Returned: ');
    console.log(res);
    assert.equal(res, expected);
    // assert.deepEqual(res, expected);
  });
});`;
  return generatedStringForPre;
}

function copy(event) {
  copyToClipboard('code-todo', event);
}

function copyTest(event) {
  copyToClipboard('code-test', event);
}

function copyToClipboard(elementIdFrom, event) {
  const codeTodo = document.querySelector('#' + elementIdFrom);

  navigator.clipboard
    .writeText(codeTodo.innerText)
    .then(() => {
      showClipboardMessage('Code copied to clipboard', 'green', event);
    })
    .catch((err) => {
      showClipboardMessage('Failed to copy code: ' + err, 'red', event);
    });
}

function showClipboardMessage(messageText, backgroundColor, event) {
  const message = document.createElement('div');
  message.textContent = messageText;
  message.style.position = 'fixed';
  message.style.top = event.clientY + 20 + 'px';
  message.style.left = event.clientX + 20 + 'px';
  message.style.backgroundColor = backgroundColor;
  message.style.color = 'white';
  document.body.appendChild(message);
  setTimeout(() => {
    message.remove();
  }, 500);
}
