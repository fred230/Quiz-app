const quizData=[
    {
        question1: ' Who is the president of kenya?',
        a: 'kibaki',
        b: 'Raila',
        c: 'Ruto',
        d: 'Uhuru',

        correct: 'd'


    },{
        question2: 'What is the best programming language?',
        a: 'java',
        b: 'Js',
        c: 'ECMA6',
        d: 'ECMA script',
        correct: 'b'





    },{
        question3: 'How many cities do we have in kenya?',
        a: '4',
        b:  '3',
        c:  '2',
        d:  '1',
        correct: 'a'
    },{
        question4: 'What time is lunch?',
        a: '1pm',
        b:  '3pm',
        c:  '2pm',
        d:  '1am',
        correct: 'a'



    },{
        question5: ' Who is the 3rd president of kenya?',
        a: 'kibaki',
        b: 'Raila',
        C: 'Ruto',
        d: 'Uhuru',

        correct: 'a'
    }





];

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submit = document.getElementById('submit')

let currentQuiz = 0;
loadQuiz();
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question1;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    



currentQuestion++;


}