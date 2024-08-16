const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const d = document.querySelector("#day");
const mon = document.querySelector("#month");
const dat = document.querySelector("#date");
const gearbig = document.querySelector("#gearbig");
const gearamall = document.querySelector("#gearamall");
const imfirst = document.querySelector("#imfirst");
const imsec = document.querySelector("#imsec");
// -----------------------------------------
const tthour = document.querySelector(".tthour");
const ttmin = document.querySelector(".ttmin");
const ampm = document.querySelector(".ampm");
const ttsec = document.querySelector(".ttsec");
const mtmonth = document.querySelector(".mtmonth");
const mtdate = document.querySelector(".mtdate");
const mtday = document.querySelector(".mtday");
// ------------------------------------------
setInterval(() => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  mn.style.transform = `rotate(${mm}deg)`;
  sc.style.transform = `rotate(${ss}deg)`;

  // gear set----------------
  gearbig.style.transform = `rotate(${-ss}deg)`;
  gearamall.style.transform = `rotate(${ss}deg)`;
  imfirst.style.transform = `rotate(${-ss}deg)`;
  imsec.style.transform = `rotate(${ss}deg)`;
  // -------------text set-------------
  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();
  if (h < 10) {
    tthour.innerHTML = `0${day.getHours()}`;
  } else {
    tthour.innerHTML = day.getHours();
  }
  if (m < 10) {
    ttmin.innerHTML = `0${day.getMinutes()}`;
  } else {
    ttmin.innerHTML = day.getMinutes();
  }
  if (s < 10) {
    ttsec.innerHTML = `0${day.getSeconds()}`;
  } else {
    ttsec.innerHTML = day.getSeconds();
  }

  if (h >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }

  let date = day.getDay();
  if (date == 0) {
    d.innerHTML = "SUN";
    mtday.innerHTML = "Sunday";
  }
  if (date == 1) {
    d.innerHTML = "MON";
    mtday.innerHTML = "Monday";
  }
  if (date == 2) {
    d.innerHTML = "TUE";
    mtday.innerHTML = "Tuesday";
  }
  if (date == 3) {
    d.innerHTML = "WED";
    mtday.innerHTML = "Wednesday";
  }
  if (date == 4) {
    d.innerHTML = "THU";
    mtday.innerHTML = "Thursday";
  }
  if (date == 5) {
    d.innerHTML = "FRI";
    mtday.innerHTML = "Friday";
  }
  if (date == 6) {
    d.innerHTML = "SAT";
    mtday.innerHTML = "Saturday";
  }

  let month = day.getMonth();
  if (month == 0) {
    mon.innerHTML = "Jan";
    mtmonth.innerHTML = "January";
  }
  if (month == 1) {
    mon.innerHTML = "Feb";
    mtmonth.innerHTML = "Febrary";
  }
  if (month == 2) {
    mon.innerHTML = "Mar";
    mtmonth.innerHTML = "March";
  }
  if (month == 3) {
    mon.innerHTML = "Apr";
    mtmonth.innerHTML = "April";
  }
  if (month == 4) {
    mon.innerHTML = "May";
    mtmonth.innerHTML = "May";
  }
  if (month == 5) {
    mon.innerHTML = "Jun";
    mtmonth.innerHTML = "June";
  }
  if (month == 6) {
    mon.innerHTML = "Jul";
    mtmonth.innerHTML = "July";
  }
  if (month == 7) {
    mon.innerHTML = "Aug";
    mtmonth.innerHTML = "August";
  }
  if (month == 8) {
    mon.innerHTML = "Sep";
    mtmonth.innerHTML = "September";
  }
  if (month == 9) {
    mon.innerHTML = "Oct";
    mtmonth.innerHTML = "October";
  }
  if (month == 10) {
    mon.innerHTML = "Nov";
    mtmonth.innerHTML = "November";
  }
  if (month == 11) {
    mon.innerHTML = "Dec";
    mtmonth.innerHTML = "December";
  }

  let dd = day.getDate();
  dat.innerHTML = dd;
  mtdate.innerHTML = dd;
});

// -------glowblock------
