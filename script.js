const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav =document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

function computecost()
{
    var one=document.getElementById("one").value;
    var two=document.getElementById("two").value;
    var three=document.getElementById("three").value;

    document.getElementById("1cost").value=one*799 + two*849 + three*799;
    document.getElementById("2cost").value=one*799 + two*849 + three*799;
}
