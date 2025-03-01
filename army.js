window.onload = () => {

    var Word = document.getElementById('word');
    var military = document.getElementById('military');
    var btn = document.getElementById('btn');


    const Alphabet = {
        A: "ALPHA ",
        B: "BRAVO " ,
        C: "CHARLIE ",
        D: "DELTA " ,
        E: "ECHO ",
        F: "FOXTROT ",
        G: "GOLF " ,
        H: "HOTEL " ,
        I: "INDIA ",
        J: "JULIET " ,
        K: "KILO " ,
        L: "LIMA ",
        M: "MIKE ",
        N: "NOVEMBER ",
        O: "OSCAR ",
        P: "PAPA ",
        Q: "QUEBE ",
        R: "ROMEO ",
        S: "SIERA ",
        T: "TANGO ",
        U: "UNIFORM ",
        V: "VICTOR ",
        W: "WHISKEY " ,
        X: "X-RAY ",
        Y: "YANKEE ",
        Z: "ZULU ",
        0: "-----",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        '.': ".-.-.-",
        ',': "--..--",
        '?': "..--..",
        '=': "-...-",
        '-': "-....-",
        '/': "-..-.",
        '"': ".-..-.",
        ' ': '- '
    };

    var dashb1 = [
        'dash1.jpg', 'nafban.jpg', 'dash3.jpg', 'dash2.jpg', 'dash.jpg'

  ];
  var tim = setInterval(tea, 2000);
  var num3 = 0;
  function tea(){
    var dashb = document.getElementById('dashb');
    num3++;
    if(num3 == dashb1.length){
        num3 = 0;
    }

    dashb.src = dashb1[num3];
  }
    
    function Translate(){
        military.innerHTML = "";
        for(var word of Word.value){
        
            var text = Alphabet[word.toUpperCase()];
            military.innerHTML += text;
        }
    }

    function validateText(){
        if(Word.value == ""){
            Swal.fire({
                icon:'warning',
                title:'',
                text:'we can not translate a blank',
                footer:'&copy tea_boy_2025'
            });
        }else {
            Swal.fire({
                icon:'success',
                title:'',
                text:'your name translated successifully',
                footer:'&copy tea_boy_2025'
            });
            Translate();

            document.getElementById('mname').style.display = "block";
            document.getElementById('main').style.display = "none";
        }
    }

    btn.addEventListener('click', validateText);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function refresh(){
    document.getElementById('mname').style.display = "none";
    document.getElementById('main').style.display = "block";
  }