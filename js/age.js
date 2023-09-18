// Idea from ottomated
// His twitter: @Ottomated_ || https://twitter.com/ottomated_
// His twitch: Ottomated || https://www.twitch.tv/ottomated
// His github: ottomated || https://github.com/ottomated
// His site: https://ottomated.net/
// The ideia: https://ottomated.net/js/age.js

const liveAge = document.getElementById("age");

(function updateAge() {
  const actualAgeMs = new Date() - new Date(2003, 7, 22); //The operation results in the age in miliseconds

  const actualAgeParsed = actualAgeMs / (1000 * 60 * 60 * 24 * 365);
  // The above operation converts the age in miliseconds to years
  // 1 s = 1000 ms
  // 1 min = 60 s
  // 1 hour = 60 min
  // 1 day = 24 hours
  // 1 year = 365.5 hours (Floored it)
  // So, to convert miliseconds into seconds and successively, is needed to divide by
  // how much it corresponds in the aimed metric
  //
  // 1s  -  1000ms
  // xs  -  543022968990ms
  //
  //
  //  1s   1000ms
  //     /
  //  xs   543022968990ms
  //
  //
  //
  //   1s   1000ms
  //      \
  //   xs   543022968990ms
  //
  //
  //  1000 . x = 1 . 543022968990
  //
  //  x = 543022968990 / 1000
  //  And so on...
  //
  //
  // So, the value in miliseconds would be converted to a value in seconds
  // and with the result we would divide it by the corresponding value of 1 second
  // in minutes. There is a pattern.
  //
  // It's needed to divide the initial value and with its result divide again, and again,
  // and again...
  //
  // Divide is the same as multiply by the inverse of a number.
  // Then, dividing by the 60 is equals to multiply by 1/60
  //
  // To get the age in years, it's needed to divide the initial value by 1000, and then by 60,
  // and then by 60 again, and by 24...
  //
  // Nesting all the divisions, the result is:
  //
  // Initial value . 1/1000 . 1/60 . 1/60 . 1/24 . 1/365
  //
  // There we have a multiplication of fractions. A multiplication of fractions is resolved
  // by multiplying the numerator with the others numerators and the denominator with the tohers
  // denominators. Doing it, we have:
  //
  // Initial value . 1 / 1000 * 60 * 60 * 24 * 365
  //
  // And there we have a multiplication of a number with a fraction. The number can be re-writed
  // to "Initial value / 1", because dividing by 1 don't change the number. Then we have:
  //
  // Initial value / 1 . 1 / 1000 * 60 * 60 * 24 * 365
  //
  // And here have reached the operation to convert ms to years.
  //
  // Initial value . 1 / 1000 * 60 * 60 * 24 * 365 * 1
  //
  liveAge.innerText = actualAgeParsed.toString().substring(0, 10).replace(".", ",");

  setTimeout(updateAge, 2500);
})();
