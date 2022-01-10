class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(actualCode === enteredCode.toUpperCase())
            return true
        else
            return false
        
            if(score ===3) {
                clear()
                backround(bg2)
                fill("black")
                textsize(40)
                text("TREASURE UNLOCKED",250, 200)
            }
    }

}