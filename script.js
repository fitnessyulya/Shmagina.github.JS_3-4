var body = document.querySelector('body');
var header = document.createElement('h4');
header.classList.add('topic')
header.innerText = 'Тест по программированию';
body.appendChild(header);

var wrapper = document.createElement('ol');
wrapper.classList.add('wrapper');

function createQuestion(questionNumber) {
    var questionWrapper = document.createElement('li');
    questionWrapper.classList.add('question-wrapper');
    var question = document.createElement('h4');
    question.innerText = 'Вопрос №' + questionNumber;
    questionWrapper.appendChild(question);

    var answersWrapper = document.createElement('ul');
    answersWrapper.classList.add('answers-wrapper');

    for (var j = 1; j <= 3; j++) {
        createAnswer(j, answersWrapper);
    }

    questionWrapper.appendChild(answersWrapper);
    wrapper.appendChild(questionWrapper);
}

function createAnswer(answerNumber, wrapper) {
    var answer = document.createElement('li');
    var label = document.createElement('label');

    label.classList.add('squaredOne');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    label.appendChild(checkbox);
    answer.appendChild(label);
    var answerText = document.createTextNode('Вариант ответа №' + answerNumber);
    label.appendChild(answerText);

    wrapper.appendChild(answer);
}

for(var i = 1; i <= 3; i++) {
    createQuestion(i);
}

body.appendChild(wrapper);
var button = document.createElement('button');
button.classList.add('btn-lg');
button.innerText = 'Проверь мои результаты';
body.appendChild(button);