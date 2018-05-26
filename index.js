let numbers = [];


//FUNCTION GETS VALUE FOR A SINGLE WHITE BALL
getWB = function()
{
    WB = Math.ceil(Math.random() * 69);
    
    return WB;
}


//GETS VALUES FOR EACH OF THE FIVE WHITE BALLS
fiveWB = function()
{
    for (let i=0; i<5; i++)
        {
            getWB();
            
            //CHECKS FOR DUPLICATES AFTER DRAWING A NUMBER
            if (numbers.indexOf(WB) !== -1)
                {
                    getWB();
                }
            
            numbers.push(WB);
        }
    

    //SORTS ARRAY AFTER ALL NUMBERS SELECTED
    numbers.sort(function(a,b)
    {
        return a - b;    
    });
    
    
    getPB();
    
}




//GETS VALUE FOR A SINGLE POWERBALL
getPB = function()
{
    PB = Math.ceil(Math.random() * 26);
    
    numbers.push(PB);
    console.log(numbers);
    
}










