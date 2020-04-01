document.addEventListener("scroll", function() {
  var progress_95_a = document.getElementsByClassName("progress")[0];
  var progress_80_a = document.getElementsByClassName("progress")[1];
  var progress_100_a = document.getElementsByClassName("progress")[2];
  var progress_90_a = document.getElementsByClassName("progress")[3];
  var progress_95_b = document.getElementsByClassName("progress")[4];
  var progress_80_b = document.getElementsByClassName("progress")[5];
  var progress_100_b = document.getElementsByClassName("progress")[6];
  var progress_90_b = document.getElementsByClassName("progress")[7];

  if (
    progress_95_a.getBoundingClientRect().top > -10 &&
    progress_95_a.getBoundingClientRect().top < 550
  ) {
    progress_95_a.classList.add("animate-95");
  }
  if (
    progress_80_a.getBoundingClientRect().top > -10 &&
    progress_80_a.getBoundingClientRect().top < 550
  ) {
    progress_80_a.classList.add("animate-80");
  }
  if (
    progress_100_a.getBoundingClientRect().top > -10 &&
    progress_100_a.getBoundingClientRect().top < 550
  ) {
    progress_100_a.classList.add("animate-100");
  }
  if (
    progress_90_a.getBoundingClientRect().top > -10 &&
    progress_90_a.getBoundingClientRect().top < 550
  ) {
    progress_90_a.classList.add("animate-90");
  }
  if (
    progress_95_b.getBoundingClientRect().top > -10 &&
    progress_95_b.getBoundingClientRect().top < 550
  ) {
    progress_95_b.classList.add("animate-95");
  }
  if (
    progress_80_b.getBoundingClientRect().top > -10 &&
    progress_80_b.getBoundingClientRect().top < 550
  ) {
    progress_80_b.classList.add("animate-80");
  }
  if (
    progress_100_b.getBoundingClientRect().top > -10 &&
    progress_100_b.getBoundingClientRect().top < 550
  ) {
    progress_100_b.classList.add("animate-100");
  }
  if (
    progress_90_b.getBoundingClientRect().top > -10 &&
    progress_90_b.getBoundingClientRect().top < 550
  ) {
    progress_90_b.classList.add("animate-90");
  }
});
