var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event) {

    console.log(event);

    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "selfie") {
        speak();
    }
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}

setTimeout(function()
{
    img_id = "png_2.png";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);

setTimeout(function()
{
    img_id = "dababy convertible.jpg";
    take_snapshot();
    speak_data = "Taking your next selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 10000);

setTimeout(function()
{
    img_id = "mario t pose.jpg";
    take_snapshot();

}, 15000);



function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="Png_2.png"){
            document.getElementById("result1").innerHTML = '<img id="Png_2.png" src="'+data_uri+'"/>';
        }
        if(img_id=="dababy convertible.jpg"){
            document.getElementById("result2").innerHTML = '<img id="dababy convertible.jpb" src="'+data_uri+'"/>';
        }
        if(img_id=="mario t pose.jpg"){
            document.getElementById("result3").innerHTML = '<img id="mario t pose.jpg" src="'+data_uri+'"/>';
        }
    });
}