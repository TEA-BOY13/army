   
   var morah = [
        'morah1.mp3', 'morah2.mp3', 'morah3.mp3', 'morah4.mp3', 'morah5.mp3', 'morah6.mp3', 'morah7.mp3', 'morah8.mp3'
    ];
    var nnr2 = [
        'salute.jpg', 'worrio.jpg', 'sf.jpg', 'sf4.jpg', 'buffolo.jpeg', 'worrio1.jpg', 'squad1.jpg', 'sf3.jpg'

  ];
    var num = 0;
    var num2 =0;

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

    function next(){
        var song = document.getElementById('song');
        num++;
        if(num == morah.length){
            num = 0;
        }
        song.src = morah[num];

        var nnr1 = document.getElementById('nnr1');
          num++;
          if(num == nnr2.length){
              num = 0;
          }

          nnr1.src = nnr2[num];
    }

    function prev(){
        var song = document.getElementById('song');
        num--;
        if(num < 0 ){
            num = 0;
        }
        song.src = morah[num];

        var nnr1 = document.getElementById('nnr1');
        num--;
        if(num2 < 0){
            num2 = 0;
        }

        nnr1.src = nnr2[num2];

    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
  
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }