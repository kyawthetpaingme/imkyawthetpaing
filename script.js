setInterval(()=>{
    var good_night = document.getElementById("good_morning");
    var date = new Date();
    var hour = date.getHours();
    var morning_or_night = "";

    if (hour >= 6 && hour < 12){
        morning_or_night = "-Good Morning-";
    }
    else if (hour >= 12 && hour < 17){
        morning_or_night = "-Good Afternoon-";
    }
    else if (hour >= 17 && hour < 22){
        morning_or_night = "-Good Evening-";
    }
    else if (hour >=22 && hour > 6){
        morning_or_night = "-Good Night-";
    }
    good_night.textContent = morning_or_night;
});