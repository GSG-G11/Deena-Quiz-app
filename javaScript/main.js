var modal = document.getElementById("myModal");
var btn = document.getElementById("descriptiveBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    console.log("btn", btn);
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const QuestionsData = [
    {
        //Q1
        question: "1. What does HTML stand for?",
        option1: "Home Tool Markup Language",
        option2: "Hyper Text Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        option4: "Hyperlinks",
        answer: "Hyper Text Markup Language",
    },
    {
        //Q2
        question: "2. Who is making the Web standards?",
        option1: "Microsoft",
        option2: "Google",
        option3: "The World Wide Web Consortium",
        option4: "Mozilla",
        answer: "The World Wide Web Consortium",
    },
    {
        //Q3
        question:
            "3. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        option1: "alt",
        option2: "src",
        option3: "title",
        option4: "longdesc",
        answer: "alt",
    },
    {
        //Q4
        question: "4. In HTML, onblur and onfocus are:",
        option1: "Event attributes",
        option2: "HTML elements",
        option3: "Style attributes",
        option4: "JavaScript",
        answer: "Event attributes",
    },
    {
        question: "5. Graphics defined by SVG is in which format?",
        option1: "XML",
        option2: "CSS",
        option3: "HTML",
        option4: "javaScript",
        answer: "XML",
    },
    {
        question:
            "6. In HTML, which attribute is used to specify that an input field must be filled out?",
        option1: "placeholder",
        option2: "formvalidate",
        option3: "required",
        option4: "validate",
        answer: "required",
    },
    {
        question: "7. Which input type defines a slider control?",
        option1: "controls",
        option2: "search",
        option3: "range",
        option4: "slider",
        answer: "range",
    },
    {
        question: "8. What does CSS stand for?",
        option1: "Cascading Style Sheets",
        option2: "Colorful Style Sheets",
        option3: "Computer Style Sheets ",
        option4: "Creative Style Sheets",
        answer: "Cascading Style Sheets",
    },
    {
        question: "9. Which HTML attribute is used to define inline styles?",
        option1: "style",
        option2: "styles",
        option3: "class",
        option4: "font",
        answer: "style",
    },
    {
        question: "10. Which CSS property controls the text size?",
        option1: "text-size",
        option2: "font-style",
        option3: "text-style",
        option4: "font-size",
        answer: "font-size",
    },
];
let question = document.getElementById("question");
let q1 = document.querySelector(".Q1");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let label4 = document.getElementById("label4");
let numOfQuestions = document.getElementById("numOfQuestions");
let textResult = document.getElementById("textResult");
let text = document.getElementById("text");
let score = document.getElementById("score");
let nextBtn = document.getElementById("nextBtn");
let count = 0;
function start() {
    q1.style.display = "block";
    score.style.display = "none";
    question.innerHTML = QuestionsData[0].question;
    label1.innerHTML = QuestionsData[0].option1;
    label2.innerHTML = QuestionsData[0].option2;
    label3.innerHTML = QuestionsData[0].option3;
    label4.innerHTML = QuestionsData[0].option4;
    option1.value = QuestionsData[0].option1;
    option2.value = QuestionsData[0].option2;
    option3.value = QuestionsData[0].option3;
    option4.value = QuestionsData[0].option4;
    // console.log(question);
    // let checke = document.querySelector('input[name="question"]:checked').value;
    // console.log(checke);
    count++;
}
let result = 0;
function next() {
    // nextBtn.style.display = "none";
    let check = document.querySelector('input[name="question"]:checked').value;
    // nextBtn.style.display = "block";
    if (check == QuestionsData[count - 1].answer) {
        result++;
        console.log(result);
    }

    if (count <= 9) {
        // document.querySelector(
        //     'input[name="question"]:checked'
        // )[0].checked = false;
        question.innerHTML = QuestionsData[count].question;
        label1.innerHTML = QuestionsData[count].option1;
        label2.innerHTML = QuestionsData[count].option2;
        label3.innerHTML = QuestionsData[count].option3;
        label4.innerHTML = QuestionsData[count].option4;
        option1.value = QuestionsData[count].option1;
        option2.value = QuestionsData[count].option2;
        option3.value = QuestionsData[count].option3;
        option4.value = QuestionsData[count].option4;
        numOfQuestions.innerHTML = `${count + 1}/10`;
        count++;
        console.log(check);
    } else if (count == 10) {
        q1.style.display = "none";
        textResult.style.display = "block";
        text.innerHTML = `${result}/10`;
        console.log(`the result is: ${result}`);
    }
}
function leaderBoard() {
    score.style.display = "block";
}
