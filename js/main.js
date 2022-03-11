///VEZBA



///




$(document).ready(function (){
    //localStorage.removeItem('nizProizvoda');
    $("button").parent().next().hide();
    $(".vise").click(function() {
        $(this).parent().next().toggle('slow');
              
    })

      $(".kupi").click(function(){
        $('html,body').animate({scrollTop:$('#forma').offset().top},'600')
     })
    $('#autor').hide()
    $('#Autorblok').click(function(e){
        e.preventDefault();
        $("#autor").toggle(500);
    });
    $('#lista2').hide();
    $('#meni li').hover(function(){
        $(this).find('ul').stop(true,true).slideDown(700);
    },function(){
        $(this).find('ul').stop(true,true).fadeOut(700);
    })
    $('#ReklamaX').click(function(){
        $(this).parent().css("display","none");
    })
    var dugmeGore=$("#dugmeGore");
    $(window).scroll(function(){
        if($(window).scrollTop()<200){
            dugmeGore.css('display','none')
        }
        else{
            dugmeGore.css('display','block')
        }
    })
     $('#sredina1').click(function(e){
         e.preventDefault()
         $('html,body').animate({scrollTop:$('#sredina').offset().top},'500')
     })
     $('#forma1').click(function(e){
        e.preventDefault()
        $('html,body').animate({scrollTop:$('#forma').offset().top},'500')
    })
    $('#AdresaPRodavnice1').click(function(e){
        e.preventDefault()
        $('html,body').animate({scrollTop:$('#AdresaPRodavnice').offset().top},'500')
    })
    dugmeGore.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},'500')
    })
    
    $.ajax({
        url:"json/Satovi.json",
        method:"GET",
        dataType:"json",
        success:function(data){
            document.getElementById('sredina').innerHTML=unosProizvoda(data)
           
            tabelaHover()    
        }
            
    });
    $.ajax({
        url:"json/Satovi.json",
        method:"GET",
        dataType:"json",
        success:function(data){
            console.log(data);
            document.getElementById('listaArtikl').innerHTML=ucitajBrend(data);
            
        }
    })
    $("#sortiranjeProizvoda").change(function(){
        $.ajax({
            url:"json/Satovi.json",
            method:"GET",
            dataType:"json",
            success:function(data){
                //console.log(data);
                let listaProizvoda=document.getElementById('sortiranjeProizvoda');
                let selektovani=listaProizvoda.selectedIndex;
                console.log(selektovani);
                if(selektovani==0){
                    document.getElementById('sredina').innerHTML=unosProizvoda(data);
                    tabelaHover()
                    setovan(data);
                }
                if(selektovani==1){
                    if(!prazan()){
                        let nizStorage=dohvati()
                        //console.log(nizStorage);
                        let noviNizStorage=nizStorage.sort(function (a,b){
                            if(a.Brend.ImeBrenda>b.Brend.ImeBrenda){
                                return -1
                            }
                            if(a.Brend.ImeBrenda<b.Brend.ImeBrenda){
                                return 1
                            }
                            return 0
                        })
                        setovan(noviNizStorage);
                        document.getElementById('sredina').innerHTML=unosProizvoda(noviNizStorage);
                        tabelaHover()    
                    }
                    else{
                        let novinizObican=data.sort(function (a,b){
                            if(a.Brend.ImeBrenda>b.Brend.ImeBrenda){
                                return -1
                            }
                            if(a.Brend.ImeBrenda<b.Brend.ImeBrenda){
                                return 1
                            }
                            return 0
                        })
                        document.getElementById('sredina').innerHTML=unosProizvoda(novinizObican);
                        setovan(novinizObican);
                        tabelaHover() 
                    }
                }
                if(selektovani==2){
                    
                    if(!prazan()){
                        let nizStorage=dohvati()
                        //console.log(nizStorage);
                        let noviNizStorage=nizStorage.sort(function (a,b){
                            if(a.Brend.ImeBrenda>b.Brend.ImeBrenda){
                                return 1
                            }
                            if(a.Brend.ImeBrenda<b.Brend.ImeBrenda){
                                return -1
                            }
                            return 0
                        })
                        setovan(noviNizStorage);
                        document.getElementById('sredina').innerHTML=unosProizvoda(noviNizStorage);
                        tabelaHover()    
                    }
                    else{
                        let novinizObican=data.sort(function (a,b){
                            if(a.Brend.ImeBrenda>b.Brend.ImeBrenda){
                                return 1
                            }
                            if(a.Brend.ImeBrenda<b.Brend.ImeBrenda){
                                return -1
                            }
                            return 0
                        })
                        document.getElementById('sredina').innerHTML=unosProizvoda(novinizObican);
                        setovan(novinizObican);
                        tabelaHover() 
                    }
                }
                if(selektovani==3){
                    //console.log("ss");
                    if(!prazan()){
                        let novinizCena=dohvati()
                        let sortirannizCena=novinizCena.sort(function(a,b){
                            return a.Cena-b.Cena
                        })
                        setovan(sortirannizCena)
                        document.getElementById('sredina').innerHTML=unosProizvoda(sortirannizCena)
                        tabelaHover();
                    }
                    else{
                        let novinizCena=data.sort(function(a,b){
                            return a.Cena-b.Cena
                        })
                        setovan(novinizCena);
                        document.getElementById('sredina').innerHTML=unosProizvoda(novinizCena)
                        tabelaHover();
                    }
                }
                if(selektovani==4){
                    if(!prazan()){
                        let novinizCena=dohvati()
                        let sortirannizCena=novinizCena.sort(function(a,b){
                            return b.Cena-a.Cena
                        })
                        setovan(sortirannizCena)
                        document.getElementById('sredina').innerHTML=unosProizvoda(sortirannizCena)
                        tabelaHover();
                    }
                    else{
                        let novinizCena=data.sort(function(a,b){
                            return b.Cena-a.Cena
                        })
                        setovan(novinizCena);
                        document.getElementById('sredina').innerHTML=unosProizvoda(novinizCena)
                        tabelaHover();
                    }
                }
            }
        })
       
    })
    /*$("#filteri").hide();
    $("#filter").click(function(){
        $('#filteri').slideToggle();
    })*/
    $.ajax({
        url:"json/Brendovi.json",
        method:"GET",
        dataType:"json",
        success:function(data){
            document.getElementById("brend").innerHTML=prikazBrenodva(data);
        }

    })
    $.ajax({
        url:"json/Pol.json",
        method:"GET",
        dataType:"json",
        success:function(data){
            document.getElementById("Pol").innerHTML=ucitajPol(data)
        }
    })
    $("#DugmeFilter").click(function(){
        var listaBrend=document.getElementById("brend").selectedIndex;
        var listaPol=document.getElementById("Pol").selectedIndex;
        console.log(listaBrend)
        console.log(listaPol)
        $.ajax({
            url:"json/Satovi.json",
            method:"GET",
            dataType:"json",
            success:function(data){
                var nizBrend=[];
                var nizPol=[];
                var nizCene=[];
                var regCena=/^[0-9]{2,}$/
                $("#maxCena").next().html("")
                $("#minCena").next().html("")
                if(listaBrend!=0){
                    
                    var vrednostBrend=$("#brend option:selected").val()
                     nizBrend=data.filter(el=>el.Brend.idBrend==vrednostBrend)
                     setovan(nizBrend)
                }
                if(listaPol!=0){
                    var vrednostPol=$("#Pol option:selected").val()
                    if(nizBrend.length!=0){
                         nizPol=nizBrend.filter(el=>el.pol.idPol==vrednostPol);
                         
                    }
                    else{
                         nizPol=data.filter(el=>el.pol.idPol==vrednostPol)
                    }
                    setovan(nizPol)
                }
                var maxCena=$('#maxCena').val()
                var minCena=$("#minCena").val()
                console.log(typeof(maxCena))
                
                if(maxCena==""){
                    maxCena=1000000000;
                }
                if(minCena==""){
                    minCena=0
                }
                if(minCena>maxCena){
                    $("#maxCena").next().html("<p>Minimalna cena je veca od maksimalne</p>")
                    $("#minCena").next().html("<p>Minimalna cena je veca od maksimalne</p>")
                    return
                }
               

               
                
                if(listaBrend!=0 && listaPol!=0){
                    nizCene=nizPol.filter(el=>el.Cena>=minCena &&el.Cena<=maxCena)
                }
                if(listaBrend==0 && listaPol!=0){
                    nizCene=nizPol.filter(el=>el.Cena>=minCena &&el.Cena<=maxCena)
                }
                if(listaBrend!=0 && listaPol==0){
                    nizCene=nizBrend.filter(el=>el.Cena>=minCena &&el.Cena<=maxCena)
                }
                if(listaBrend==0 && listaPol==0){
                    nizCene=data.filter(el=>el.Cena>=minCena &&el.Cena<=maxCena)
                }
                
                
                setovan(nizCene)
                ispisProizvoda(nizCene)
        
            }
            })
        
        
    })
})
function ispisProizvoda(niz){
    if(niz.length==0){
        document.getElementById('sredina').innerHTML="Ne postoji takav artikl u ponudi"
        document.getElementById('sredina').classList.add("jaka")
       
    }
    else{
    document.getElementById('sredina').innerHTML=unosProizvoda(niz);
    document.getElementById('sredina').classList.remove("jaka")
    tabelaHover()
    }
}
    

function ucitajPol(data){
    let html="<option value='0'>Izaberi Pol</optiion>"
    for(p of data){
        html+=`<option value="${p.idPol}">${p.Imepola}</option>`
    }
    
    return html
}
function prikazBrenodva(data){
    let html="<option value='Izaberi'>Izaberi Brend</optiion>"
    for(p of data){
        html+=`<option value="${p.idBrend}">${p.ImeBrenda}</option>`
    }
    
    return html
}
function tabelaHover(){
    $(".tabela").hide();
    $('.blok').hover(function(){
        $(this).find('.tabela').stop(true,true).fadeIn();
    },function(){
        $(this).find('.tabela').stop(true,true).fadeOut();
    })
    $(".kupi").click(function(){
    $('html,body').animate({scrollTop:$('#forma').offset().top},'600')})
}

function prazan(){
    return localStorage.getItem('nizProizvoda')==null
}
function setovan(value){
    return localStorage.setItem('nizProizvoda',JSON.stringify(value))
}
function dohvati(){
    return JSON.parse(localStorage.getItem('nizProizvoda'))
}
function unosProizvoda(proizvodi){
    let html=""
    for(p of proizvodi){
        html+=`<div class="blok">
        <img src="img/${p.Slika.src}." alt="${p.Slika.alt}" class="slika"/><br/>
        <h1 data-id='${p.Brend.idBrend}'>${p.Brend.ImeBrenda}</h1>
        <h2 >${p.Brend.naziv}</h2>
        <h3 >${p.Cena} RSD</h3>
        <div class="dugmici">
            <button class="kupi btn btn-outline-warning" >Kupi</button>
            
        </div>
        <table class="tabela">
        <tr>
            <td>Pol</td>
            <td>${p.pol.Imepola}</td>
        </tr>
        <tr>
            <td>Kuciste</td>
            <td>${p.Kuciste}</td>
        </tr>
        <tr>
            <td>Narukvica</td>
            <td>${p.narukvica}</td>
        </tr>
        <tr>
            <td>Mehanizam</td>
            <td>${p.Mehanizam}</td>
        </tr>
        <tr>
            <td>Prečnik</td>
            <td>${p.Prečnik}mm</td>
        </tr>
        <tr>
            <td>Prikaz sata</td>
            <td>${p.Prikaz}</td>
        </tr>
        <tr>
            <td>Funkcije sata</td>
            <td>${p.Funkcije}</td>
        </tr>
        </table>
        </div>`
    }
    return html
}
function prikziBrend(data){
    
}
function ucitajBrend(data){
    
    let html="<option>Izaberi</optiion>"
    for(p of data){
        html+=`<option>${p.Brend.naziv}</option>`
    }
    
    return html
}
///VEYBA









/////

//Meni
var nizmeni1=["Početna","Prodavnica","Naručite","Kontakt"];
var nizMeniID=['a1','sredina1','forma1','AdresaPRodavnice1']
let meni=document.getElementById("lista2");
let unos=" ";
for(let j=0;j<nizmeni1.length;j++){
    unos+=`<li><a href="#" id='${nizMeniID[j]}' >${nizmeni1[j]}</a></li>`;
}
meni.innerHTML=unos;


//FORMA
var nizOption=["Izaberite","PayPal","Western Union","Visa","Mastercard","Gotovina","Cekovi"]
var lista=document.getElementById('lista');
var listaUnost=" ";
for(let k=0;k<nizOption.length;k++){
    listaUnost+="<option>"+nizOption[k]+"</option>"
}
lista.innerHTML=listaUnost;
var listaArtikl=document.getElementById("listaArtikl");
var listaArtiklUnos="<option>Izaberite</option>";

listaArtikl.innerHTML=listaArtiklUnos;
var ime=document.getElementById("ime"); 
var prezime=document.getElementById("prezime"); 
var adresa=document.getElementById("adresa"); 
var kontakt=document.getElementById("kontakt"); 
var narudzbina=document.getElementById("Narudzbina");
var grad=document.getElementById('grad');
var postanskiBroj=document.getElementById('postankiBroj');
var dugme=document.getElementById('dugmeForma')
let reime=/^[A-ZČĆŠĐŽ][a-zčćšđž]{1,14}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{1,19}){0,}$/;
let rebroj=/^06([0-6]|9)[0-9]{5,6}$/;
let readresa=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{0,10}){0,4}\s([0-9]{1,3}|[0-9]{1,3}[a-z])$/
var reGrad=/^[A-ZČĆŠĐŽ][a-zčćšđž]{1,10}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{1,15}){0,1}$/
var rePostanskiBroj=/^[0-9]{5}$/

var listaGreske=document.getElementById('listaGreske');

var greskaIme=''



dugme.addEventListener('click',function(){
    var ispisGreske="<ul>"
    var nizGreske=[];
    var validacijaliste=true;
    var imeVrednost=ime.value;
    console.log(imeVrednost)
    if(!reime.test(imeVrednost)){
        /*ime.nextElementSibling.innerHTML="<p>Pogresan unos imena</p>";
        ime.classList.add('greska')*/
        nizGreske.push("Ime treba biti u formatu npr:Ana ili Ana Marija")
       
    }
    else{
       /* ime.nextElementSibling.innerHTML=" ";
        ime.classList.remove('greska')*/
    }
    var prezimeVrednost=prezime.value;
    if(!reime.test(prezimeVrednost)){
        /*prezime.nextElementSibling.innerHTML="<p>Pogresan unos prezimena</p>";
        prezime.classList.add('greska')*/
        nizGreske.push('Prezime treba biti u formatu npr:Pop ili Pop Jovanov');
        
    }
    else{
        /*prezime.nextElementSibling.innerHTML=" ";
        prezime.classList.remove('greska')*/
        
    }
    var kontaktvrednost=kontakt.value;
    console.log(kontaktvrednost)
    if(!rebroj.test(kontaktvrednost)){
        console.log(kontaktvrednost)
       /* kontakt.nextElementSibling.innerHTML="<p>Pogresan unos kontakta</p>";
        kontakt.classList.add('greska');*/
        nizGreske.push('Kontakt treba biti npr:06*******');
        
    }
    else{
       /* kontakt.nextElementSibling.innerHTML=" ";
       /* kontakt.classList.remove('greska')*/
        
    }
    var adresavrednost=adresa.value;
    if(!readresa.test(adresavrednost)){
       /* adresa.nextElementSibling.innerHTML="<p>Pogresan unos adrese</p>";
        adresa.classList.add('greska');*/
        nizGreske.push('Adresa treba biti u formatu npr:Visnjicka 48');
        console.log(adresavrednost)
        
    }
    else{
        adresa.nextElementSibling.innerHTML=" ";
        adresa.classList.remove('greska')
    }
    var selektovani=lista.selectedIndex;
    if(selektovani==0){
        lista.classList.add('greska');
       /* lista.previousElementSibling.innerHTML="<p>Morate izabrati nacin placanja</p>";
        lista.previousElementSibling.classList.add('greskaLista');*/
        validacijaliste=false;
    } 
    else{
        lista.classList.remove('greska')
        /*lista.previousElementSibling.innerHTML="<p>Izabran nacin placanja</p>";
        lista.previousElementSibling.classList.remove('greskaLista');*/
    }
    var selektovaniartikl=listaArtikl.selectedIndex;
    if(selektovaniartikl==0){
        listaArtikl.classList.add('greska');
       /* listaArtikl.previousElementSibling.innerHTML="<p>Morate izabrati artikl</p>";
        listaArtikl.previousElementSibling.classList.add('greskaLista');*/
        validacijaliste=false;
    } 
    else{
        listaArtikl.classList.remove('greska');
       /* listaArtikl.previousElementSibling.innerHTML="<p>Izabran artikl</p>"
        listaArtikl.previousElementSibling.classList.remove('greskaLista');*/
    }
    var gradvrednost=grad.value;
    
     if(!reGrad.test(gradvrednost)){
        /* grad.nextElementSibling.innerHTML="<p>Pogresan unos grada</p>";
         grad.classList.add('greska');*/
         nizGreske.push('Grad treba biti u formatu npr:Beograd');
     }
     else{
       /*  grad.nextElementSibling.innerHTML=" ";
         grad.classList.remove('greska')*/
     }
     var postanskiBrojvrednost=postanskiBroj.value;
     if(!rePostanskiBroj.test(postanskiBrojvrednost)){
      /*  postanskiBroj.nextElementSibling.innerHTML="<p>Pogresan unos postanskog broja</p>";
        postanskiBroj.classList.add('greska');*/
        nizGreske.push('Postanski broj  treba biti u formatu npr:11060 ');
        
    }
    else{
        console.log('sss');
       /* postanskiBroj.nextElementSibling.innerHTML=" ";
        postanskiBroj.classList.remove('greska')*/
        nizGreske.pop();
    }
    if(nizGreske.length==0 && validacijaliste){
        ispisGreske+=`<li>Porudzbina je uspešno izvršena </li> `  
        listaGreske.classList.add('proslaValidacija'); 
    }
    else{
        for(let i=0;i<nizGreske.length;i++){
            ispisGreske+=`<li>${nizGreske[i]}</li>`
            listaGreske.classList.add('validacijafalse');
        }
        
    }
    ispisGreske+='</ul>'
    listaGreske.innerHTML=ispisGreske;

})





