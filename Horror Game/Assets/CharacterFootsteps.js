var Footsteps : AudioClip;

function Start() 
{
    audio.clip = Footsteps;
    audio.loop = true;
}

function Update()
{
    if (Input.GetKeyDown (KeyCode.W) || Input.GetKeyDown (KeyCode.S))
    audio.Play();
    //If W or S is down, play footsteps sound
    
    else if(Input.GetKeyUp (KeyCode.W) || Input.GetKeyUp (KeyCode.S))
    audio.Stop();
    //If W or S is not down, stop footsteps sound
}