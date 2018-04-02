class Test {

    quiz(question, option1, option2, option3, answer, points= 0) {
      this.question = question;
      this.option1 = option1;
      this.option2 = option2;
      this.option3 = option3;
      this.answer = answer;
      this.points = points;
  
      this.askQuiz = function() {
        let testing = prompt(question + '\n' + option1 + '\n' + option2 + '\n' + option3);
        testing;
  
        if (testing == this.answer) {
          alert("Correct");
          this.points = 1;
  
        } else { alert("incorrect!"); this.points = 0;}
        }
      this.askQuiz();
  
  
      }
    }
  
      let test1 = new Test();
      let test2 = new Test();
      let test3 = new Test();
      let test4 = new Test();
      let test5 = new Test();
    
      let questionOne = test1.quiz("80 + 80 = ?", "A. 85,000", "B. 160", "C. 88", "B");
      let questionTwo = test2.quiz("Where is your nose?", "A. My face", "B. My house", "C. My bag", "A");
      let questionThree = test3.quiz("How many fingers am I holding up?", "A. 18", "B. I can't see you!", "C. 5", "B");
      let questionFour = test4.quiz("When is this project due?", "A. In one million years", "B. Yesterday", "C. Sunday", "C");
      let questionFive = test5.quiz("How long does it take to drive to Arkansas?", "A. 3,000 years", "B. 16 seconds", "C. Too long", "C")
    
      questionOne;
      questionTwo;
      questionThree;
      questionFour;
      questionFive;
    
      let totalPoints = (test1.points + test2.points + test3.points + test4.points + test5.points);
  
  

 
if (totalPoints == 5){
    alert("100%");
    document.getElementById('result').innerHTML = totalPoints;
}
else if (totalPoints == 3 || totalPoints == 4){
    alert("Mediocre");
    document.getElementById('result').innerHTML = totalPoints;
}
else if (totalPoints == 0 || totalPoints == 1 || totalPoints == 2){
    alert("Participation Trophy!!!!!");
    document.getElementById('result').innerHTML = totalPoints;
}
