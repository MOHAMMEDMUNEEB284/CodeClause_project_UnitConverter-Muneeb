function convert()
{
    const inputValue=parseFloat(document.getElementById("inputValue").value);
    const fromUnit=document.getElementById("fromUnit").value;
    const toUnit=document.getElementById("toUnit").value;
    let result;
    if(fromUnit==="CM" && toUnit==="INCH")
    {
        result=inputValue/2.54;
    }
    else if(fromUnit==="INCH" && toUnit==="CM")
    {
        result=inputValue*2.54;
    }
    else if(fromUnit==="CM"&& toUnit==="METER")
    {
        result=inputValue*100;
    }
    else if(fromUnit==="METER"&& toUnit==="CM")
    {
        result=inputValue*100;
    }
    else if(fromUnit==="INCH"&& toUnit==="METER")
    {
        result=inputValue*0.0254;
    }
    else if(fromUnit==="METER"&& toUnit==="INCH")
    {
        result=inputValue/0.0254;
    }
    else{
        result="Invalid conversion";
    }
    if(!isNaN(result)){
        document.getElementById("result").textContent=result.toFixed(2);
    }
    else{
        document.getElementById("result").textContent=result;
    }

}