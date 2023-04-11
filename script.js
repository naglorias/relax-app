let relaxText =document.querySelector('.text');
let relaxCircle = document.querySelector('.circle');
let relaxAudio = document.getElementsByTagName('audio')[0];


    function breathing(){
relaxText.innerText = 'Breath In';
relaxCircle.style.animation = 'scaleUp 4s linear forwards'; 



setTimeout(function(){
    relaxText.innerText = 'Hold Breath';


    setTimeout(function(){
        relaxText.innerText = 'Breath Out';
        relaxCircle.style.animation = 'scaleDown 4s linear forwards '; 


    },1800)
},2800)
    }
    function musicPlaying(){
        document.querySelector('.play').onclick = ()=>{
            relaxAudio.play();
        }
        document.querySelector('.pause').onclick = ()=>{
            relaxAudio.pause();
        }

    }
    setInterval(breathing , 7000);
    breathing();
    musicPlaying();
