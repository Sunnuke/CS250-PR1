# ASLINGO
A learning website designed to teach users American Sign Language (ASL). The website aims to teach users through quizzes and lesson modules.

## **Team Members**
- **Javier Rivera**
- **Trystan McCutcheon**
- **Utsav Ray**
- **Amber Rama**


FRESH FROM CLONE?
Directory:
CSS
- style.cc #Our css file which we use for the entire website to set design choices like font, text-alignment, and other properties of UI design

docs/uml/slices
- amber-view-quiz-score #Diagrams to help explain our view for how users would view their quiz score after taking an exam
- Javier-View-ASL-Sign-Information #Explaining the Javascript backend for how we store and process the ASL signs
- Trystan-Answer-Quiz-Question #Diagrams to explain the process of students taking and submitting quiz answers

HTML
- index.html #The front page to start a quiz
- quiz.html #The quiz page that has the ASL video with 4 different answer options

JAVASCRIPT
- aslingo.js #Objects with unique ASL words containing an id, word (English), source (video), question, and answer
- question.js #Methods for questions with getter and setters
- quiz.js #Methods for quizzes with getter and setters
- user.js #Methods for users with getter and setters

Practices
- We found it best to work on this project in any IDE that works with Github, JS, Python, HTML. We used Visual Studios Code and Github Desktop to fetch and pull changes.
- This project is a website with the backend programed within the repository. Everything can be cloned into most IDEs and does not require any further installations for the base model given currently.

TESTING/WHAT TO SEE WHEN IT WORKS
- Run the HTML index.html file using your default browser in Visual Studios this can only be Microsoft Edge or Chrome
- Youtube Videos do not load if it's ran locally so if you want to see the videos embedded in your test you will need to run using Live Stream on VS code or run off a server
- You should see the ASLingo logo along with a start quiz button, this leads into the quiz with the YouTube video and 2x2 grid buttons for answering the question. There is a text label that tracks correct answer amounts.
