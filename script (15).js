function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

<p id="count"></p>
   <script>
      var count = 0;
      var button = document.getElementById("myButton");
      var countDisplay = document.getElementById("count");
      button.addEventListener("click", function() {
         count++;
         countDisplay.innerHTML = count;
         });