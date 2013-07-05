public var ManagerOne : MonsterMove;
public var varhandler : MonsterMove;
var animateobject : GameObject;

var triggeronce = false;

function OnTriggerEnter(){
	if(!triggeronce){
		ManagerOne = GameObject.Find("MonsterOneVisual").GetComponent(MonsterMove);	
		ManagerOne.enablevar();
		Debug.Log("Monster Trigger Started");
		Debug.Log("Finished Triggering");
		triggeronce = true;
	}
}