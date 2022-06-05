var i=0, text;
text = 'Welcome to my Portfolio';

function mengetik()
{if (i < text.length){
        document.getElementsByClassName('sapa').innerHTML += text.charAT(i);
    setTimeout(mengetik, 50)}
}
mengetik();