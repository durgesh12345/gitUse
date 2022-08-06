const currentTime = document.getElementById("Current-time");
var date;
var time;

//  audio start function
var sound1 = new Howl({
    src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
    volume: 1.0,
    onend: function() {
        alert('We finished with the setup!');
    }
});
//  audio pouse function
function pauseAudio() {
    sound1.pause();
}


// function to take time and show time 
function myTimer() {
    date = new Date();
    time = date.toLocaleTimeString();
    currentTime.innerHTML = time;
}
setInterval(myTimer, 1000);

// function to take input and create a list item
function myFunction() {
    const hour = document.getElementById('input1').value
    const min = document.getElementById('input2').value
    const sec = document.getElementById('input3').value
    const zone = document.getElementById("zone").value
    var hr = parseInt(hour);
    var se = parseInt(sec);
    var mi = parseInt(min);
    var a = hr + ":" + se + ":" + mi + "" + zone;
    if (hour.length == 0 && min.length == 0 && sec.length == 0) {
        return alert('ENTER VALUE OF HOUR')
    }
    if (min.length == 0) {
        return alert('ENTER VALUE OF MINTUES ')
    }
    var li = document.createElement("li");
    var text1 = document.createTextNode(hour);
    var text2 = document.createTextNode(min);
    var text3 = document.createTextNode(sec);
    var zone1 = document.createTextNode(zone);
    li.appendChild(text1);
    document.getElementById("list").appendChild(li).innerHTML = hr + ":" + min + ":" + sec + " " + zone;;

    // take time value to compaire and show alert
    function run() {
        const currentDate = new Date();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        var zone1 = hours >= 12 ? "PM" : "AM";
        if (hours > 12) {
            hours = hours % 12;
        }
        if (hr == hour && mi == minutes && sec == seconds && zone == zone1) {
            sound1.play();
            console.log(sound1)
                // var a = alert('It time to Complete your task ')

        }
    }
    setInterval(run, 1000)

    // after click on submit button remove the input value
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    const list = document.getElementsByTagName("li")
    var i = 0;

    // set icon in the list item
    for (i = list.length - 1; i < list.length; i++) {
        localStorage.removeItem("a");
        var div = document.createElement("div");
        const img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/128/6861/6861362.png";
        div.className = "close";
        div.appendChild(img);
        list[list.length - 1].appendChild(div);
    }

    // remove button icon to remove the list item
    var remove = document.getElementsByClassName("close");
    for (var i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            this.parentElement.style.display = "none";
            pauseAudio()
            hr = 0;
            se = 0;
            mi = 0;
        }

    }
}