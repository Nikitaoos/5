"use strict";
function calculate(){
let x=document.forms[0].price;
    let y=document.forms[0].count;
    let x1=document.forms[0].price1;
    let y1=document.forms[0].count1;
    let x2=document.forms[0].price2;
    let y2=document.forms[0].count2;
    let x3=document.forms[0].price3;
    let y3=document.forms[0].count3;
    let x4=document.forms[0].price4;
    let y4=document.forms[0].count4;
    let x5=document.forms[0].price5;
    let y5=document.forms[0].count5;
    let x6=document.forms[0].price6;
    let y6=document.forms[0].count6;
    let x7=document.forms[0].price7;
    let y7=document.forms[0].count7;
    let result=x.value*y.value+x1.value*y1.value+x2.value*y2.value+x3.value*y3.value+x4.value*y4.value+x5.value*y5.value+x6.value*y6.value+x7.value*y7.value;
    let res=document.getElementById("result");
    if(result<0)
    {res.innerHTML="Введены неправильные данные";}
    else{res.innerHTML="Стоимость: "+result+" рублей";}
}