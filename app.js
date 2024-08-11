const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const d = document.querySelector("#day");
const mon = document.querySelector("#month");
const dat = document.querySelector("#date");
const glowtext = document.querySelector(".glowtext");
const gearbig = document.querySelector("#gearbig");
const gearamall = document.querySelector("#gearamall");
const imfirst = document.querySelector("#imfirst");
const imsec = document.querySelector("#imsec");

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

  glowtext.innerHTML = day;
});
let day = new Date();

let date = day.getDay();
if (date == 0) {
  d.innerHTML = "SUN";
}
if (date == 1) {
  d.innerHTML = "MON";
}
if (date == 2) {
  d.innerHTML = "TUE";
}
if (date == 3) {
  d.innerHTML = "WED";
}
if (date == 4) {
  d.innerHTML = "THU";
}
if (date == 5) {
  d.innerHTML = "FRI";
}
if (date == 6) {
  d.innerHTML = "SAT";
}

let month = day.getMonth();
if (month == 0) {
  mon.innerHTML = "Jan";
}
if (month == 1) {
  mon.innerHTML = "Feb";
}
if (month == 2) {
  mon.innerHTML = "Mar";
}
if (month == 3) {
  mon.innerHTML = "Apr";
}
if (month == 4) {
  mon.innerHTML = "May";
}
if (month == 5) {
  mon.innerHTML = "Jun";
}
if (month == 6) {
  mon.innerHTML = "Jul";
}
if (month == 7) {
  mon.innerHTML = "Aug";
}
if (month == 8) {
  mon.innerHTML = "Sep";
}
if (month == 9) {
  mon.innerHTML = "Oct";
}
if (month == 10) {
  mon.innerHTML = "Nov";
}
if (month == 11) {
  mon.innerHTML = "Dec";
}

let dd = day.getDate();
dat.innerHTML = dd;
// -------glowblock------
