var btn= document.querySelector(".checkBtn");
var result = document.querySelector(".output");



function score(){
    var c=0;
    var q1 =document.quiz.ques1.value;
    var q2 =document.quiz.ques2.value;
    var q3 =document.quiz.ques3.value;
    var q4 =document.quiz.ques4.value;
    var q5 =document.quiz.ques5.value;

    if(q1=="3"){c++}
    if(q2=="Isoceles"){c++}
    if(q3=="6"){c++}
    if(q4=="hypotenuse"){c++}
    if(q5=="Acute"){c++}

    quiz.style.display="none";



    if(c<=2){
        result.innerText= ("You scored " + c + ". "+ "Your score is too low!");
    }
    else if(c<=3){
        result.innerText= ("You scored " + c + ". "+ "Your score is average!");
    }
    else if(c<=4){
        result.innerText= ("You scored " + c + ". "+ "Your score is good!");
    }
    else if(c<=5){
        result.innerText= ("You scored " + c + ". "+ "Your score is excellent!");
    }

}

btn.addEventListener("click", score);