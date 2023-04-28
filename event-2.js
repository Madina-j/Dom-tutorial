////Event Delegation///

/// it allows users to append a SINGLE event listener to a parent element that adds it to all of its present(children) AND future descendants that match a selector
// - change the color of element
document.querySelector("#Football").addEventListener("click", function (e) {
  console.log("football is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});
