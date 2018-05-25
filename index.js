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
            let temp = getWB();
            numbers.push(temp);
            console.log(numbers);
        }
}

fiveWB();