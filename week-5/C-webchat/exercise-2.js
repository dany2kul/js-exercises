/*

========
Task 2
========

Your second task is to send a new message to the server.

After writing a message in the input and clicking on the submit button,
send the message to store it on the remote server. Use the following API:

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/messages
Request Body: { "content": "some text" }


===============
Expected result
===============

After opening index.html in your browser, write a message in the input field and click
on the submit button. Then check the following:

1) The input field should be empty.
2) When you refresh the page in your browser, you should be able to see your new message in the message list.
*/
var classes = document.getElementById("message-list");
fetch("https://codeyourfuture.herokuapp.com/api/messages").then(function (response) {
    return response.text();
}).then(function (Help) {
    return classes.innerHTML = Help;
});

var clipboardTitle = "Javascript help";
var clipboardText = "i really need help with javascript,send help";
var requestBody = { title: clipboardTitle, text: clipboardText };

var postRequestParameters = {
    body: JSON.stringify(requestBody),
    method: 'POST',
    headers: {
        "content": "this is for daniella"
    }
};

fetch("https://codeyourfuture.herokuapp.com/api/clipboard", postRequestParameters);

// Write your code here
