//array of correct answers
const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const resultHolder = document.querySelector('.result');
const resultSpan = document.querySelector('.result span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers 
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 25;
        }
    })
    //show result container on page
    resultHolder.classList.remove('d-none');

    //scroll to top of page
    scrollTo(0,0);
    //animate score display
    let counter = 0;
    const output = setInterval(() => {
        resultSpan.textContent = `${counter}%`;
        if (counter === score){
            clearInterval(output);
        }
        counter++;
    }, 10);
});