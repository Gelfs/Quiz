

var startingMinutes = 1;
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

document.addEventListener("visibilitychange", function() {
    result();
});



function result() {
	  var c = 0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;

    if (q1=="Epic") {
      c++
    }
    if (q2=="Same") {
      c++

    }
    if (q3=="Script") {
      c++
    }
    if (q4=="Santiago") {
      c++
    }
    if (q5=="Funds") {
      c++
    }
    if (q6=="Ray Allen") {
      c++
    }
    if (q7=="Robert") {
      c++
    }
    if (q8=="Chicago") {
      c++
    }
    if (q9=="Dogs") {
      c++
    }
    if (q10=="I now have depression") {
      c++
    }


    if (c==10) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 100% on this QUIZ!!!</p><br> <p class='TheGrade'>Good Job studying!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==9) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 90% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==8) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 80% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==7) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 70% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==6) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 60% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==5) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 50% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==4) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 40% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==3) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 30% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==2) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 20% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==1) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 10% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }
    if (c==0) {
      document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "<p class='TheGrade'>You got a 0% on this QUIZ!!!</p><br> <p class='TheGrade'>I believe you can better!</p>" +"<br><br>This was made out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")
    }

}

// document.write("<h2 class='heading'>Thank you for taking my quiz!</h2><br>" + "You scored "+c+" out of 3.<br>" +"This was maded out of boredom by Gelfs" + "<link rel='stylesheet' href='quiz.css'>")-->
