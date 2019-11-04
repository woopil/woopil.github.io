//디데이 종료 일자 설정
var countDownDateXmas = new Date("Dec 25, 2019 00:00:01").getTime();
var countDownDateTicket = new Date("Nov 5, 2019 14:00:00").getTime();
  
setInterval(function(){
    var now = new Date().getTime();
    var distanceXmas = countDownDateXmas - now;
    var distanceTicket = countDownDateTicket - now;
    var distanceHome = countDownDateTicket - now;

    // 일, 시, 분, 초를 등록
    var dX = Math.floor(distanceXmas / (1000 * 60 * 60 * 24));
    var hX = Math.floor((distanceXmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mX = Math.floor((distanceXmas % (1000 * 60 * 60)) / (1000 * 60));
    var sX = Math.floor((distanceXmas % (1000 * 60)) / 1000);
  
    var dT = Math.floor(distanceTicket / (1000 * 60 * 60 * 24));
    var hT = Math.floor((distanceTicket % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mT = Math.floor((distanceTicket % (1000 * 60 * 60)) / (1000 * 60));
    var sT = Math.floor((distanceTicket % (1000 * 60)) / 1000);
  
    var dH = Math.floor(distanceHome / (1000 * 60 * 60 * 24));
    var hH = Math.floor((distanceHome % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mH = Math.floor((distanceHome % (1000 * 60 * 60)) / (1000 * 60));
    var sH = Math.floor((distanceHome % (1000 * 60)) / 1000);
  
    document.getElementById("d-dayXmas").innerHTML = "X-Mas : " + dX +"일 " + hX + "시간 " + mX + "분 " + sX + "초 남았습니다.";
    document.getElementById("d-dayTicket").innerHTML = "Buy Ticket : " + dT +"일 " + hT + "시간 " + mT + "분 " + sT + "초 남았습니다.";
    document.getElementById("d-dayTicket").innerHTML = "Home : " + dH +"일 " + hH + "시간 " + mH + "분 " + sH + "초 남았습니다.";
});

