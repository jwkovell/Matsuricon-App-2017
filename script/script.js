
function getSchedule() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText);
      document.getElementById("printout").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "schedule.txt", true);
  xhttp.send();
}

getSchedule();
