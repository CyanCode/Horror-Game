var speed : float = 10.0;
var deftime : float = 3.0;
var monsterenabled = false;

function enablevar(){
//Enable variable to start update function
//Enabled through trigger script
	monsterenabled = true;
}

function Update(){
	if(monsterenabled){
	
		//Move the monster 
		transform.Translate(Vector3(0,0,speed) * Time.deltaTime);
		Debug.Log("Monster successfully moved");
		
		animation.Play("monsterslow");
	}
}
