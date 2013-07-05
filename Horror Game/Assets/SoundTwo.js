var Sound : AudioClip;

function OnTriggerEnter(){
	yield WaitForSeconds(2);
	audio.PlayOneShot(Sound);
}