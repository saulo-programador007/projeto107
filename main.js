function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mM_W_b-m7/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResult(error, results) {
    
}