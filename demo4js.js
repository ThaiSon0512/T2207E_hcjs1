function  update(city) {
    var bg = document.getElementById("bg-fade");
    bg.style.display = "block";

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        //console.log(this.responseText);
        // chuyen thanh doi tuong cua js
        var data = JSON.parse(this.responseText);
        //console.log(data.main.name);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var h = data.name + ", " + data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = h;
        var p = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = p;

        bg.style.display = "none";

    }
    xhttp.open("get", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
    xhttp.send();
}
