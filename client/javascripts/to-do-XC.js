//jshint esversion: 6
if(localStorage.getItem("toDoList") != null ){
$(".comments").html(localStorage.getItem("toDoList"));
}
localStorage.clear();


let controller = function() {

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);




      console.log($(".comments").html());
      if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      //localStorage.removeItem$(".comments");

      } else {
        //localStorage.removeItem$(".comments");
        // Sorry! No Web Storage support..
      }
      localStorage.setItem("toDoList", $(".comments").html());

    }
  };


  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });


  $(".x button").on("click", function(event) {
  localStorage.clear();
  $(".comments").html(localStorage.getItem("toDoList"));

  });






};

$(document).ready(controller);
function appendItems() {
//  alert("test1");
  let $new_comment;
  //$new_comment = "JohnTest";
  //$(".comments").append($new_comment);
  if (typeof(Storage) !== "undefined")
  {
  //  alert("test2");
  // Code for localStorage/sessionStorage.
    /*
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);

   let keys = Object.keys(localStorage);
    for(let key of keys)
    {
      alert(`${key}: ${localStorage.getItem(key)}`);
    }
*/
//localStorage.removeItem($(".comments"));
//localStorage.clear();
    for (var i = 0; i < localStorage.length; i++)
    {
    //  alert("test4");
      //alert(localStorage.length);
      let key = localStorage.key(i);
      //alert(`${key}: ${localStorage.getItem(key)}`);
      $new_comment = localStorage.key(i);
    $(".comments").append($new_comment);
    //$(".comments").html(localStorage.getItem("toDoList"));
    //  alert(i);
    }

  }
  else
  {
  // Sorry! No Web Storage support..
//alert("test3");
  //$new_comment = "JohnTest";
  //$(".comments").append($new_comment);
  }
}
//alert(`${key}: ${localStorage.getItem(key)});
