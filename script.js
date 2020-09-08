var firstName = prompt("What is your first name?");
//console.log(firstName);

var birthMonth = prompt("What month were you born in?");
//console.log(birthMonth);

if (birthMonth === "January") {
  var zodiacSign = "Capricorn";
}

else if (birthMonth === "February") {
  var zodiacSign = "Aquarius";
}

else if (birthMonth === "March") {
  var zodiacSign = "Pisces";
}

else if (birthMonth === "April") {
  var zodiacSign = "Aries";
}

else if (birthMonth === "May") {
  var zodiacSign = "Taurus";
}

else if (birthMonth === "June") {
  var zodiacSign = "Gemini";
}

else if (birthMonth === "July") {
  var zodiacSign = "Cancer";
}

else if (birthMonth === "August") {
  var zodiacSign = "Leo";
}

else if (birthMonth === "September") {
  var zodiacSign = "Virgo";
}

else if (birthMonth === "October") {
  var zodiacSign = "Libra";
}

else if (birthMonth === "November") {
  var zodiacSign = "Scorpio";
}

else if (birthMonth === "December") {
  var zodiacSign = "Sagittarius";
}

else {
  var zodiacSign = "Sign Unknown"
}

//console.log(zodiacSign)

document.querySelector(".result").innerHTML = `${firstName} your birth sign for the month of ${birthMonth} is probably ${zodiacSign}.`;