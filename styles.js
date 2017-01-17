$( document ).ready(function() {
    console.log( "ready!" );
    $("#random").click(function(){
                $.get("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&callback=?",function(data){
                console.log(data);
                });
        // $.getJSON("https://en.wikipedia.org/wiki/Special:Random", function(json) {
        // console.log(html(JSON.stringify(json)));
    });
});

// $.getJSON("/json/cats.json", function(json) {
//   $(".message").html(JSON.stringify(json));
// });

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://projectwhatup.us:5000/api/posts', false);
// xhr.send();
// xhr.responseText;

// $.getJSON("https://api.github.com/users/jeresig?callback=?",function(json){
//   console.log(json);
// });
