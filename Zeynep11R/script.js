function merhaba(){
    let ad,soyad,yas,takım;
    ad=document.getElementById("txtAd").value;
    takım=document.getElementById("lıstetakımlar").selectedIndex;
    document.getElementById("sonucbaslık").innerHTML="";
    console.log(takım);
    if(takım==0){
       document.body.style.backgroundColor="red";
       yazı.innerHTML="DAHA İLERİYE EN İYİYE"
       document.getElementById("resim").setAttribute("src","hacetepe.jpg");
    }
    else if(takım==1){
        document.body.style.backgroundColor="blue"
        yazı.innerHTML="CAG BİLİŞİM CAGİ SAVASMA BENİMLE"
        document.getElementById("resim").setAttribute("src","bogazici.jpg");
     }
     else if(takım==2){
        document.body.style.backgroundColor="green";
        yazı.innerHTML="DÜŞLE TASARLA HAYATA GEÇİR"
        document.getElementById("resim").setAttribute("src","ankara.jpg");

     }
     else if(takım==3){
        document.body.style.backgroundColor="orange";
         yazı.innerHTML="DAHA İLERİYE EN İYİYE"
         document.getElementById("resim").setAttribute("src","galatasaray.jpg");
     }
     else if(takım==4){
         document.body.style.backgroundColor="blue"
         yazı.innerHTML="NİTELİKLİ UCUZ YEMEK HERKESİN HAKKIDIR"
         document.getElementById("resim").setAttribute("src","istanbul.jpg");
    
    }
 }