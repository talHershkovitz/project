let online = false;


function updateOnline(){
    document.getElementById("login").href = "http://localhost:8080/user-page" ;
    document.getElementById("off_btn").style.display = 'block' ;
    document.getElementById("login").innerHTML = " איזור אישי" ;
    online= true;
}
function updateOfline(){
    document.getElementById("login").href = "http://localhost:8080/login-page" ;
    document.getElementById("off_btn").style.display = 'none';
    document.getElementById("login").innerHTML = " התחבר " ;
    online= false;
}
 
/* --------------- page load ---------- */

function loadPage()
{
    document.getElementById("header").innerHTML ='<div><img class="nav-img" src="/img/positive_logo.png" ><p style="display: inline-block;"><strong>   סטודיו פוזיטיב<br>     אוניברסיטת בן גוריון    </strong></p></div><nav><ul class="nav-ul"> <li><a href="http://localhost:8080/home-page" >דף הבית</a></li><li><a href="http://localhost:8080/class-schedule" >לוח שיעורים</a></li><li><a href="http://localhost:8080/price-page">מחירון</a></li><li><a href="http://localhost:8080/q&a">שאלות נפוצות</a></li><li><a href="http://localhost:8080/review" >חוות דעת</a></li> <li><a href="http://localhost:8080/about-us" >אודות</a></li></ul></nav><a id ="login" href="#" class="cta"> התחבר </a>';
    document.getElementById("footer").innerHTML =  '<div><button id="off_btn" onclick="updateOfline()"> התנתק </button> | <a href="http://localhost:8080/terms" target="_blank" >תקנון</a> |<a href="http://localhost:8080/about-us#contact">צור קשר</a> </div>'
    isOnline();
}


/* validation chack -------- */

function validate_contact_Form(){
    let x = document.forms["contact-form"]["text"].value;
    if (x == "") {
        alert("לא ניתן להגיש פניה ללא תוכן");
        return false;
      }
    else 
    alert("הפניה נשלח בהצלחה");
}

function validate_regi_Form(){
    let user_ty = document.getElementsByName("user-type");
    if(user_ty[2].checked == false){
        let file_value = document.forms["regi-form"]["filename"].value;
        if(file_value == ""){
            alert("יש להעלות תעודה מזהה על מנת ליצור פרופיל מסוג זה")
        }
    }
}
 /* ------- class page ------- */
function readMore(){
    document.getElementById("class_info").style.display = "block";
    document.getElementById("readLink").style.display = "none";
    document.getElementById("close_info").style.display = "block";

}
function closeInfo(){
    document.getElementById("class_info").style.display = "none";
    document.getElementById("close_info").style.display = "none";
    document.getElementById("readLink").style.display = "block";


}

/* -------------- class page -----------  */


/* price page */ 

function myFunctionPrice(user) {
    var table= document.getElementById("journal");
    for (var i = 1, row; row = table.rows[i]; i++) {
        if(row.className != user.className){row.style.visibility="collapse";}
        else {row.style.visibility="visible" ;}
    }
    
   }

   function myFunction2() {
    var table= document.getElementById("journal");
    for (var i = 0, row; row = table.rows[i]; i++) {
        {row.style.visibility="visible";}
    
        }
   }
   function checkIfChosen() {
    var radios = document.querySelectorAll('[name="price-check"]');
    var redirect = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
             redirect = true   
        }
        
    }
    if (redirect){
        window.location.href = "https://www.paypal.com/il/home";  
    } else   alert("נא לבחור פריט על מנת לעבור לתשלום")
   }

   /* -------- review page ---------- */
   function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


  /* --------- home page ----------------------- */
  /* ----- Class-Schedule-table-----------------*/


function LoadTable() {   /* initilize table*/
    loadPage();
    SetDates();
    SetLesson(Yoga,'11');  /* Add any lesson to WEEKLY table */
    SetLesson(Hiit2,'22');        
    SetLesson(Hiit,'32');
    SetLesson(Spinning, '21')
    SetLesson(Spinning2, '23')
    SetLesson(Pilates,'b15')
    SetLesson(Pilates,'c15')
    SetLesson(Kickbox,'33')
    SetLesson(Yoga2,'23')
    SetLesson(Kickbox2,'c34')
    SetButtons();

}


function SetDates() {          /Set 3 weeks dates/
  for (var day =0; day<21; day++) {
    date = new Date();
    date.setDate(5);
    date.setMonth(9);   
    dateDay = date.getDate() +day + '/' +date.getMonth()  
    console.log(dateDay)
    if(document.getElementById('date-picker'+day)!=null)
    document.getElementById('date-picker'+day).textContent      = ':'+' '+dateDay;   /SET week date/
}
  }   


function ShowWeek1() {         /* show week buttons*/
    var show1 = document.getElementById('week1');
    var show2 = document.getElementById('week2');
    var show3 = document.getElementById('week3');  
      show1.style.display = "block"; 
      show2.style.display = "none"
      show3.style.display = "none";
  }
  function ShowWeek2() {
      
    var show1 = document.getElementById('week1');
    var show2 = document.getElementById('week2');
    var show3 = document.getElementById('week3');  
     {
      show2.style.display = "block"; 
      show1.style.display = "none"
      show3.style.display = "none";}

  }
  function ShowWeek3() {
    var show1 = document.getElementById('week1');
    var show2 = document.getElementById('week2');
    var show3 = document.getElementById('week3');  
  
      show3.style.display = "block"; 
      show1.style.display = "none"
      show2.style.display = "none";

  }
        /Lessons Objects/
              const Yoga = new Lesson('יוגה','פלוס','11:00','9:00','משה נחמן','../HTML/class.html',12, 30,'#00ced1')    
              const Yoga2 = new Lesson('יוגה','פלוס','15:00','13:30','משה נחמן','../HTML/class.html',2, 15,'#00ced1')    
              const Hiit = new Lesson('היט','רגיל','17:00','16:00','אילן נחמן', '../HTML/class.html',24, 24,'	#FF00FF')
              const Hiit2 = new Lesson('היט','רגיל','14:00','13:00','אילן נחמן', '../HTML/class.html',22, 24,'	#FF00FF')
              const Spinning = new Lesson('ספינינג','רגיל','15:00','13:00','אייל גולן', '../HTML/class.html',20, 24,'#ff8c00')
              const Spinning2 = new Lesson('ספינינג','רגיל','15:00','13:00','אייל גולן', '../HTML/class.html',20, 24,'#ff8c00')
              const Pilates = new Lesson('פילאטיס','רגיל','11:00','9:00','יונתן סרן', '../HTML/class.html',18, 18,'#008000')
              const Kickbox = new Lesson('קיקבוקס','רגיל','20:00','19:00','אקסל רוז', '../HTML/class.html',5, 25,'#bdb76b')
              const Kickbox2 = new Lesson('קיקבוקס','רגיל','20:00','18:30','אקסל רוז', '../HTML/class.html',5, 25,'#bdb76b')

              function Lesson(name,studiotype,startHr,endHr,instructor,href,amountSigned,max,color) {
                this.name =name;
                this.studiotype = studiotype;
                this.startHr = startHr;
                this.endHr = endHr;
                this.instructor = instructor;
                this.href= href;  
                this.amountSigned=amountSigned;
                this.max=max;           
                this.color = color;           
            }
              function GetLesson(Lesson) {
                  return Lesson.name+' '+'<br>'+Lesson.startHr+' - '+Lesson.endHr+'<br>'+Lesson.instructor+'<br>'+Lesson.max+' משתתפים' }
   
                  
function SetLesson(Lesson,cell){   /* Lesson, Matrix by cell id */   
    if (document.getElementById('date-picker8')==null && cell.length>2 || document.getElementById('date-picker0')==null)     
      return

    var card_btn = document.createElement('button')
    card_btn.classList.add("btn_cls")
    card_btn.innerHTML = GetLesson(Lesson)                
    document.getElementById(cell).appendChild(card_btn)
    card_btn.style.background=Lesson.color;   
    card_btn.addEventListener("click",  function(){togglePopup(Lesson);} ) 
 }

 
var popup= 'popup'; /for closing the relevant popup/

function togglePopup(Lesson){
    if (Lesson == null)
    document.getElementById(popup).classList.toggle("active");                
else
    if (Lesson.max == Lesson.amountSigned){
    document.getElementById("popup").classList.toggle("active");
    popup='popup'
                                          }
    else /* if sign is available*/
     preSignPopup(Lesson)
}

function preSignPopup(Lesson) {
    SetHref(Lesson);
    document.getElementById("details").classList.toggle("active");
    popup='details'
    document.getElementById('lesson-details').innerHTML = (ExpandLesson(Lesson))
}

function ExpandLesson(Lesson){
    
    return  'סוג שיעור:  '+Lesson.name + '<br>'
            + ' מנוי:  '+Lesson.studiotype +'<br>'
            + 'שעות פעילות:  '+Lesson.startHr+' - '+Lesson.endHr+'<br>'
           +'שם המדריך: '+Lesson.instructor+'<br>'
           +'משתמשים רשומים :' + Lesson.amountSigned +'/'+Lesson.max+'<br>'
           +'מקומות פנויים: '+(Lesson.max-Lesson.amountSigned);  
}

 function GetHref(Lesson){
    location.href = Lesson.href;
 }
function SetHref(Lesson){    
    var href_btn =document.getElementById('href1')     
    href_btn.addEventListener("click",  function(){GetHref(Lesson);})                  
}

  /* --------------------- q&a ---------------------- */

  
  var q_and_a_pricing =  [ {q:'האם יש הנחה לסטודנטים ',a:'ישנם מחירים מיוחדים לסטודנטים, יש להסתכל בדף המחריון לצפייה במחיר לסטודנט'},{q:'מה כולל מנוי שנתי ?' ,a:'כניסה לכל השיעורים במהלך השבוע הכלולים בסוג המנוי'},{q:'מהם אמצעי התשלום ? ', a:'ניתן לשלם באתר באשראי או בקופות הסטודיו במזומן בשעות הפעילות ' }]
  var q_and_a_classes =  [ {q:'שאלה : מה הן שעות השיעורים?', a:' ניתן לראות את לוח השיעורים בדף לוח שיעורים'},{q:'האם יש מגבלה לכמות השיעורים שאליהם אני יכול להכנס? ', a:'אין הגבלה, ניתן להרשם למספר שיעורים כל עוד הם אינם במקביל' },{q:'האם ניתן לבצע אימונים אישיים בסטודיו?', a:'לא ניתן, יש להצטרף לאחת הקבוצות הפעילות בזמני השיעורים ' }]
  var q_and_a_contact =  [ {q:'כיצד ניתן ליצור קשר עם הסטודיו ? ', a:'ניתן להשתמש בדף צור קשר למסירת הודעה' },{q:'מתי ניתן להתקשר למשרד?', a:'ניתן להתקשר למשרד הסטודיו בימי ראשון עד חמישי מ9:00-15:00 ' }]
  var q_and_a_healthProblem =  [ {q:'לתושב -מאיזה גיל ניתן להתאמן ? ', a:'ניתן להתאמן מגיל 16 באישור רפואי ובהצצגת תעודת זהות' },{q:'באיזו תדירות מותר להתאמן?', a:'בהתאם לגיל המתאמן, המטרות שהציב לעצמו ונקודת הפתיחה איתה התחיל' },{q:'יש לי אישור בדיקת קורונה שלילית, האם אני יכול להכנס לסטודיו?', a:'כן , במידה ויש ברשותך תוצאת קורונה שלילית. את הבדיקה יש להציג בכניסה.' },{q:'האם אני צריך להראות את התו הירוק בכל כניסה?', a:'כן, בכדי להכנס לאוניברסיטה יש להציג תו ירוק. אין צורך להציג זאת גם בכניסה סטודיו' }]
  
  
   function questions_answers(currentSubject){
      var HTMLString = ''
       for (i = 0; i < currentSubject.length; i++) {
           HTMLString += '<div onClick="showAnswer('+i+')" class=qa_div> <div>   <p>'+ currentSubject[i].q +'</p>  <p id="q&a_'+i+'" class="qa_answer">'+ currentSubject[i].a +' </p>  </div> </div>'
       }
       document.getElementById("qa_container").innerHTML= HTMLString
   }
   function showAnswer(argument){
      var elAnswer= document.getElementById('q&a_'+argument+'') 
       if ( elAnswer.style.display == 'block'){
           elAnswer.style.display = 'none'
       }
       else elAnswer.style.display ='block'
   
   
   }
   
   function init_qa(){
       loadPage();
       questions_answers(q_and_a_pricing);
   }
   

   /* --------------- user page -------------- */
   function restartCalory(){
       document.getElementById("user_calory").innerHTML = '0';
   }

   /* --------------- page load ----------- */

   function isOnline(){
    if(online== false){
        document.getElementById("login").href = "http://localhost:8080/login-page" ;
        document.getElementById("off_btn").style.display = 'none';
        document.getElementById("login").innerHTML = " התחבר " ;
    }
    else{
        document.getElementById("login").innerHTML = " איזור אישי" ;
        document.getElementById("off_btn").style.display = 'block' ;
        document.getElementById("login").href = "http://localhost:8080/user-page" ;
    }
}


   /*  USERS OBJECTS --------------------*/

   const Tal = new User ('Tal','Hershko','Talala@tal.com','1\1\2000','1.30','50')
   const Liraz = new User ('Liraz','Banana','dganim@tal.com','1\1\1967','1.52','51')



   function User(fname,lname, email,birthday, height, weight){
       this.fmame = fname;
       this.lname = lname;
       this.email = email;
       this.birthday = birthday;
       this.height=height;
       this.weight = weight;
   }

   function SetUser(User){ 

    console.log(User.fname+'set userrrrrrr');
     document.getElementById('user_name').innerHTML = User.fname+User.lname
     document.getElementById("user_email").innerHTML = User.email
     document.getElementById('user_bd').innerHTML = User.birthday
     document.getElementById('height').innerHTML =  User.height
     document.getElementById('weight').innerHTML = User.weight
     document.getElementById('user_bmi').innerHTML = (weight / ((height * height)  / 10000)).toFixed(2);
       
}
   

   function SetButtons() {
    
   var bmi= document.getElementById("btn_bmi") 
   console.log(bmi)  // Function for calculating BMI
   bmi.addEventListener("click", function(){ calculateBMI();})

    var calc= document.getElementById("calculator") 
    calc.addEventListener("click", function(){ BmiPopup();})

        
   var upBtn= document.getElementById("updateBtn");
   upBtn.addEventListener("click",  function(){DetailsPopup();} ) 
   var formUpdate= document.getElementById('setDetails');

   formUpdate.addEventListener("click", function(){getFormData();})
   var cancel =document.getElementById("return");
   console.log(123)
   cancel.addEventListener("click", function(){DetailsPopup();})
}

function DetailsPopup () {   
    if (document.getElementById('overlay-details').style.display != 'block') {
  document.getElementById('overlay-details').style.display = 'block';
  document.getElementById('content-details').style.display = 'block'; }

    else {
       document.getElementById('overlay-details').style.display = 'none'
       document.getElementById('content-details').style.display = 'none'}
    }

    function BmiPopup () {   
        console.log(document.getElementById('bmi-content').style.display != 'block')
        if (document.getElementById('bmi-content').style.display != 'block'){
  
      document.getElementById('bmi-content').style.display = 'block';
      document.getElementById('overlay-details').style.display = 'block'; }
    
        else {
           document.getElementById('overlay-details').style.display = 'none'
           document.getElementById('bmi-content').style.display = 'none'}
        }
    


    
 
  function GetUser(User) {
      return User.fname +''+User.email;
  }

  function getFormData(User) {
   User = Liraz;
   if (validate_regi_Form) {
  User.fname = document.querySelector('#first-name').value
  User.lname = document.querySelector('#last-name').value
  User.email = document.querySelector('#email').value
  User.birthday= document.querySelector('#birthdate').value
  User.height= document.querySelector('#height').value
  User.weight = document.querySelector('#weight').value 
  
 SetUser(User)}
  }

console.log('pre butonnnnnnnnnn')
/*-------- BMI Function-----------------*/

window.onload = () => {

};
  
function calculateBMI() {

    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document.querySelector("#height").value);
            console.log(height+" גובה")
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document.querySelector("#weight").value);
            console.log(weight+"  משקל")
  
    let result = document.querySelector("#result"); 

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}

