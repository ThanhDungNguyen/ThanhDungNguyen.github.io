$(function(){
    console.log("Start ask8ball.js");
    $("#submitBtn").click(submit);
});

function submit() {
    let questionValue = $("#question").val();
    console.log("Question: " + questionValue);
    $.ajax({
        type: "GET",
        url: "/",
        data: { question: questionValue}
    }).done(successHandler).fail(failHandler);
}

function successHandler(data) {
    console.log("Success Handler: " + data);
}

function failHandler(jqXHR, status, error) {
    console.log("Error: " + error);
}
