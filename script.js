// ======================
// COUNTDOWN
// ======================


let birthday = new Date("July 17, 2026 00:00:00").getTime();



setInterval(function(){


let now = new Date().getTime();


let distance = birthday - now;



let days = Math.floor(
distance / (1000*60*60*24)
);


let hours = Math.floor(
(distance % (1000*60*60*24))
/(1000*60*60)
);



let minutes = Math.floor(
(distance % (1000*60*60))
/(1000*60)
);



let seconds = Math.floor(
(distance % 1000)
/1000
);



document.getElementById("countdown").innerHTML =

days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds";



},1000);








// ======================
// CAKE
// ======================



function showCake(){


document.getElementById("start")
.classList.add("hidden");



document.getElementById("cakeScreen")
.classList.remove("hidden");


}





let candlesLeft = 5;



function blowCandle(){


let candles =
document.querySelectorAll(".candle");



if(candlesLeft > 0){


candles[candlesLeft - 1]
.classList.add("off");



candlesLeft--;


}



if(candlesLeft === 0){


document.getElementById("wishMessage")
.innerHTML =
"Make a wish ❤️";


}



}










// ======================
// GIFTS
// ======================



function openGifts(){


document.getElementById("cakeScreen")
.classList.add("hidden");



document.getElementById("giftsScreen")
.classList.remove("hidden");


}








let gifts=[



`
طيبببب ❤️

انهارده اتولدت أحلى وأجمل بنت في الدنيا...

جودي طبعا 😍

كل سنة وانتي طيبة،
وكل سنة وانتي معايا،
وكل سنة واحنا مع بعض.

أنا بحبك أوي ❤️
`,





`
مش عارف أوصف الشعور اللي جوايا...

بس كل سنة وانتي حبيبتي ❤️

كل سنة وانتي فرحتي،
كل سنة وانتي سندي،
كل سنة وانتي أماني.

دلوعتي طبعا 😍
`,





`
نفسي أوريكي قد إيه بحبك ❤️

انتي مختلفة عن أي حد،
ومعاكي بحس بإحساس عمري ما حسيت بيه.

بحبك أوي يا جودي.
`,





`
حابب أشكرك على كل حاجة ❤️

على صبرك معايا،
وعلى وجودك جنبي.

انتي أحلى حاجة حصلتلي.
`,





`
Happy Birthday to my most beautiful girlfriend ❤️

Thank you for making me feel loved.

I love you so much ❤️
`

];







let currentGift = 0;








function openGift(number){



currentGift = number;



document.getElementById("envelope")
.style.display="block";



document.getElementById("messageBox")
.style.display="none";



document.getElementById("lastThing")
.classList.add("hidden");





// تغيير خلفية الهدية

document.getElementById("giftsScreen")
.style.backgroundImage =

`url(gift${number+1}.jpg)`;



}









function openEnvelope(){



document.getElementById("envelope")
.style.display="none";



document.getElementById("messageBox")
.style.display="block";



document.getElementById("messageBox")
.innerHTML =
gifts[currentGift];




// لو آخر هدية

if(currentGift === 4){


setTimeout(function(){


document.getElementById("lastThing")
.classList.remove("hidden");


},2000);



}



}









function showFinal(){



document.getElementById("giftsScreen")
.classList.add("hidden");



document.getElementById("lastThing")
.classList.add("hidden");



document.getElementById("finalScreen")
.classList.remove("hidden");



}