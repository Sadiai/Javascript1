var a=1;
while (a<=10) {
    document.write(a+") Hello world <br>");
    a=a+1 ;
}

var b=10;
document.write("<ul>");
while (b>=1) {
    document.write("<li>"+ a + ")hello world<br>" + "</li>") ;
    b=b-1 ;
}
document.write("</ul>") ;


var c=1;
do{
    document.write(c +")hello world <br>");
    c=c+1;
}while (c<=10) ;

for (var d=1; d<=10; d++){
     if(d%2==0){
         document.write(d+")Even num <br>");
     }
 }

 var e=[10,20,30,50];
 document.write(e[3]);
