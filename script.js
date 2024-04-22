let p1=prompt("Digite seu nome");
let p2=prompt("Digite seu poder");
let p3=prompt("Digite o nome de um Vilão");
let p4=prompt("Digite um Lugar");
let msg=document.getElementById("msg");

msg.innerHTML=`<p>Olá, ${p1} o seu poder é ${p2} e você vai enfrentar o(a) ${p3} no(em) ${p4}</p>`

