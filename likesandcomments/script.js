//INCREASE LIKE COUNTER

//Function that increases some variable by 1
var i = 0;
function plusOneLike(event) {
  event.preventDefault();
  document.querySelector(".like-count").textContent = ++i;
}

//Link that function to listen for a click event and then run
var a = document.querySelector("a");
a.addEventListener("click", plusOneLike);

//ADD NEW COMMENT TO THE PAGE

//Create a function that adds a new div comment and sets it's textContent to the textContent of the textarea
function newComment (event) {
  event.preventDefault();
  var comment = document.createElement("div");
  comment.setAttribute("class", "comment");
  comment.textContent = document.querySelector("textarea").value;
  var c = document.querySelector(".like");
  c.appendChild(comment);
  //clear the textarea after new comment is posted
  document.querySelector("textarea").value = "";

}

//Lunk that function to trigger on a click event of the button
var b = document.querySelector("button");
b.addEventListener("click", newComment);
