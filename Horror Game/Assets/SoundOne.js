#pragma strict

var triggeronce = false;
var scareClip : AudioClip;

function OnTriggerEnter(){
	if(!triggeronce){
		audio.Play();
		Debug.Log("Sound executed");
		triggeronce = true;
	}
}
