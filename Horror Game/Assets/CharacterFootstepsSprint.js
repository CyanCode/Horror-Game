var FootstepsSprint : AudioClip;

function Start() 
{
    audio.clip = FootstepsSprint;
    audio.loop = true;
}

function Update()
{
    if (Input.GetKeyDown (KeyCode.W) && Input.GetKeyDown (KeyCode.LeftShift))
    audio.Play();
    //If W and Left Shift are down, play sprinting sound
    
    else if(Input.GetKeyUp (KeyCode.W) && Input.GetKeyUp (KeyCode.LeftShift))
    audio.Stop();
    //If W or Left are not down, stop sprinting sound
}