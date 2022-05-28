let paragraphs;
let word = "";
let words= "";
let wordCount = [0,0];
let clock = 0;
let id = 0;
let myIterval;
let wordList =[];
let wordNum = 0;
let link = "http://hipsum.co/api/?type=hipster-centric&sentences=2"
let text = document.getElementById("text");
let imput = document.getElementById("readyWord");


function wordArray(paragraph){
  paragraphs = paragraph[0];
  paragraphs.match( /\w+/g).map((n) => {words += `<span id="wordN${id}">${n} </span>`; wordList.push(n) ; id+=1})
  text.innerHTML = words;

  document.getElementById("readyWord").removeAttribute("disabled")
  myIterval = setInterval(function(){
    document.getElementById("timer").innerHTML = `Time: ${clock}`
    clock++;
  }, 1000);
}

//Backspace AltGraph CapsLock Tab 
//ArrowUp ArrowRight ArrowDown ArrowLeft NumLock Delete

function Key(event){
    var key = event.key
    if(key === " "){
      wordCount[1]+=1
      nextWord(word);
    }   
    else if(key != "Shift" && key != "NumLock" && key != "Delet" && key != "ArrowRight" && key != "ArrowLeft" && key != "ArrowDown" && key != "ArrowUp" && key != "Control" && key != "Alt" && key != "Enter" && key != "Backspace" && key != "AltGraph" && key !="CapsLock" && key !="Tab" ){
    word+=key;
  }  
}

function nextWord(words){
  console.log(  )
  if(words === wordList[wordNum]){
    let rightWord = document.getElementById(`wordN${wordNum}`)
    rightWord.className = "trueWord"
    wordCount[0] +=1;
    wordCount[1] +=words.length
  }
  else{
    let unrightWord = document.getElementById(`wordN${wordNum}`)
    unrightWord.className = "falseWord"
  }
  if(wordNum+1 == wordList.length){
    MPV();
    clearInterval(myIterval)
  }
  wordNum+=1;
  imput.value = "" 
  word = ""
}


function start(){
    // fetch(link)
    //   .then(response => response.json())
    //   .then(response => wordArray(response))
    wordArray(stringARr[Math.round(Math.random()*(2-0)+0)]);
    document.getElementById("startBtn").setAttribute("disabled","")
    document.getElementById("result").innerHTML = ""
}

function MPV(){
  let result = Math.round((wordCount[1]/5)/(clock/60))
  document.getElementById("result").innerHTML = `${result} WPM (words per minute)<p>Correct Words: ${wordCount[0]}</p>
  <p>Uncorrect Word: ${wordList.length-wordCount[0]}</p>`
  wordCount = [0,0]
  clock = 0
  words = ""
  text.innerHTML = ""
  document.getElementById("startBtn").removeAttribute("disabled")
}


const stringARr = [
  ["The milkman brought donuts, cheese (along with milk), and a bottle of whiskey to 10 houses."],
  ["But what happens when the string begins or ends with a non-alphanumeric character"],
  ["We are left with a string that begins and ends with whitespace that will appear in our array when we split it."]

]