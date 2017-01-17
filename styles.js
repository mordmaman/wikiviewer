$( document ).ready(function() {
    console.log( "ready!" );

    $('#article').click(function(){
        console.log("clicked");

            $.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                console.log(data);
            },
            error: function (errorMessage) {
            }
        });
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
