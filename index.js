(function(){
    var updateHours = function(){
        var fecha = new Date(),
        hours = fecha.getHours(),
        ampm,
        minutes = fecha.getMinutes(),
        seconds = fecha.getSeconds(),
        weekday = fecha.getDay(),
        day = fecha.getDate(),
        month = fecha.getMonth(),
        year = fecha.getFullYear();

    var pHours = document.getElementById('hours'),
        pAMPM = document.getElementById('ampm'),
        pMinutes = document.getElementById('minutes'),
        pSeconds = document.getElementById('seconds'),
        pWeekday = document.getElementById('weekDay'),
        pDay = document.getElementById('day'),
        pMonth = document.getElementById('month'),
        pYear = document.getElementById('year');

    var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    pWeekday.textContent = semana[weekday]
    pDay.textContent = day
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dieciembre']
    pMonth.textContent = meses[month]
    pYear.textContent = year

    if (hours >= 12) {
        hours = hours - 12
        ampm = 'PM';
    }else {
        ampm = 'AM';
    }

    if (hours == 0) {
        hours = 12;
    }

    pHours.textContent = hours;
    pAMPM.textContent = ampm;

    if (minutes < 10) { minutes = "0" + minutes };
    if (seconds < 10) { seconds = "0" + seconds };
    
    pMinutes.textContent = minutes;
    pSeconds.textContent = seconds;


    };
    
    
    updateHours();
    var interval = setInterval(updateHours, 1000)

}())