#pragma strict

function Start () {
}

var isOn : boolean;
isOn = false;

function Update () {
if(Input.GetKeyDown("space") && !isOn){
   //Flashlight on script
}
else if(Input.GetKeyDown("space") && isOn){
   //Flashlight off script
} 
}