 const lochs = document.querySelectorAll('.loch');
 const scoreBoard = document.querySelector('.score');
 const trumps = document.querySelectorAll('.trump');
 let lastloch;
 let timeUp = false;
 let score = 0;


 function randomTime(min, max) {
   return Math.round(Math.random() * (max - min) + min);
 }


 function randomloch(lochs) {
   const idx = Math.floor(Math.random() * lochs.length);
   const loch = lochs[idx];
   if (loch === lastloch) {
     return randomloch(lochs);
   }
   lastloch = loch;
   return loch;
 }


 function jump() {
   const time = randomTime(400, 1000);
   const loch = randomloch(lochs);
   loch.classList.add('up');
   setTimeout(() => {
     loch.classList.remove('up');
     if (!timeUp) jump();
   }, time);
 }


 function startGame() {
   scoreBoard.textContent = 0;
   timeUp = false;
   score = 0;
   jump();
   setTimeout(() => timeUp = true, 30000)
 }

 function randomTrump(trump){
  const randomPick = Math.floor(Math.random() * bigSize.length);
  const bigSize = ["url('eric.jpg')",
                 "url('friends.png')",
                 "url('hillary.jpeg')",
                 "url('immigrants.jpeg')",
                 "url('ivanka.jpeg')",
                 "url('kfc.jpg')",
                 "url('macdo.jpeg')",
                 "url('mexico.png')",
                 "url('obama.jpeg')",
                 "url('putin.jpg')",
                 ];
  return randomTrump(trump);
}


 function hit(e) {
   score++;
   this.parentNode.classList.remove('up');
   scoreBoard.textContent = score;
 }


 trumps.forEach(trump => trump.addEventListener('click', hit));

 //Random Video after game is finished?
 //Bing Ding Dong Soundefects?
 //When catched = Morphs to a orange?
 //Highscore list
 //Score < 4 = You are fake news
 //Score > 5 = I'm a very stable genius
 //Score > 7 = You will never catch me, even if you do


