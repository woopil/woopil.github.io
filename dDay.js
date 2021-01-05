//디데이 종료 일자 설정
var countDownDateTrans = new Date("Mar 31, 2021 00:00:01").getTime();
  
setInterval(function(){
    var now = new Date().getTime(); 
    var distanceTrans = countDownDateTrans - now;

    // 일, 시, 분, 초를 등록
    var dX = Math.floor(distanceXmas / (1000 * 60 * 60 * 24));
    var hX = Math.floor((distanceXmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mX = Math.floor((distanceXmas % (1000 * 60 * 60)) / (1000 * 60));
    var sX = Math.floor((distanceXmas % (1000 * 60)) / 1000);
   
    var dT = Math.floor(distanceTrans / (1000 * 60 * 60 * 24));
    var hT = Math.floor((distanceTrans % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mT = Math.floor((distanceTrans % (1000 * 60 * 60)) / (1000 * 60));
    var sT = Math.floor((distanceTrans % (1000 * 60)) / 1000);    
  
    document.getElementById("d-dayTrans").innerHTML = "Bye : " + dT +"일 " + hT + "시간 " + mT + "분 " + sT + "초 남았습니다.";
});

