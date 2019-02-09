// message saying thank you and the person name

var show = document.querySelector(".name");

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("name");

// console.log(c);
var x = url.searchParams.get("email");
show.innerHTML = `${c} <br/> ${x}`;

// console.log(show);
