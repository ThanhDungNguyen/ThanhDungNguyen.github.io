$(function(){
    console.log("Start ask8ball.js");
    $("#submitBtn").click(submit);
});

function submit() {
    let question = $("#question").val();
    console.log("Question: " + question);
}
