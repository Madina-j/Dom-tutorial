///////// Event Probagation ////////
///// boolean - give event capturing or event bubbling
///// if true - out to inside(capturing), esle bubbling (inside to out)
window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);
document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true
);
// // if you need stop event probagation document.querySelector(".div2").addEventListener(
//   "click",
//   function (e) {
//    e.stopPropagation()
//     console.log("DIV 2");
//   },
//   true
// );

//if need div2 far off once (57:40) set all fals, div2 {once:true}

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true
);
///////// target property: button, if you add insid consolr.log : e.target is shows element name
///// if you add e.target.innerText = "Change text after clicked"
document.querySelector(".button").addEventListener(
  "click",
  function (e) {
    e.preventDefault(); // - apply prevent difault method on to our architect
    console.log(e.target);
  },
  true
);
// if prevent default method:refresh(redirect page) change in HTML <button> to <a href=""class="button">Click</a>
//
