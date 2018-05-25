let numbers = [];



getWB = function()
{
    let WB = Math.ceil(Math.random() * 69);
    
    return WB;
}



fiveWB = function()
{
    for (let i=0; i<5; i++)
        {
            getWB();
            
            if (numbers.indexOf(getWB()) !== -1 )
                {
                    getWB();
                }
            
            else
            {
                numbers.push(getWB());
            }
        }
    
    numbers.sort(function(a,b)
    {
        return a - b;    
    })
    
    console.log(numbers);
}

fiveWB();