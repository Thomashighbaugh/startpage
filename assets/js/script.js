/*
 * Inspired by https://github.com/jeroenpardon/sui
 * And https://github.com/TB-96/Evening-Startpage
 * Made by Thomas Leon Highbaugh
 *
 */

function startTime() {
  var currentDate = new Date();
  var hr = parseInt(currentDate.getHours());
  var min = parseInt(currentDate.getMinutes());
  var sec = parseInt(currentDate.getSeconds());
  //Add a zero in front of numbers<10
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("header-time").innerHTML = hr + ":" + min;

  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  var date = currentDate.toLocaleDateString("en-US", dateOptions);
  document.getElementById("header-date").innerHTML = date;

  var time = setTimeout(function () {
    startTime();
  }, 60);
}

const quotes = [
  "Om Jayanti Mangala Kali \n  Bhadrakali Kapalini \n   Durga Kshama Shiva Dhatri \n   Svaha Svadha Namostuthe.",
  "Jaya Bhagavati Devi Namo Vara De\n Jaya Paapa Vinaashini Bahu Phala De \n Jaya Shumbha Nishumbha Kapaala Dhare\n Prannamaami Tu Devi Naraartihare ",
  "“Listen, O lord of the meeting rivers,\n things standing shall fall,\n but the moving ever shall stay.”\n ― Basava",
  "“The logic is simple: if you do the right things, the right things will happen to you even without your intent.” \n - Sadhguru",
  "“When Shiva beats his Damru – Evil Shakes; while the Wise Awakes!” - True Krishna Priya",
];
document.getElementById("header-quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

$(document).ready(function () {
  $("#togglebookmarks").click(function () {
    $("#hiddenbookmarks").toggle();
  });
});

document.addEventListener(
  "click",
  function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("#link")) return;
    // Otherwise, run your code...
    document.body.style.opacity = 0;
  },
  false
);

document
  .getElementById("container")
  .addEventListener("DOMContentLoaded", startTime());
