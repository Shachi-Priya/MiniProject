let counter=1;

document.getElementById("radio"+counter).checked = true;
counter++;

setInterval(function(){
    document.getElementById("radio"+counter).checked = true;
    counter++;
    if(counter>5)
    {
        counter=1;
    }
},10000)
