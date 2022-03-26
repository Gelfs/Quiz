

var startingMinutes = 5;
let time = startingMinutes * 60;

function timer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;


  timerdisplay.innerHTML = `You have ${minutes} minutes and ${seconds} remaining `;
  time--;
  if (time==0) {
    result()
  }
}


function result() {
    var c = 0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    if (q1=="Minecraft") {
      c++
    }
    if (q2=="Cory") {
      c++

    }
    if (q3=="Coke") {
      c++
    }
    if (c==3) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 100% on this QUIZ!!!</p><br> <p class='TheGrade'>Good Job studying!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==2) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 66% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==1) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 33% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==1) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 0% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
}
