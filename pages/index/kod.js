setInterval(VeriCek, 1000) //1 saniyede bir vericek fonksiyonuna gönderiyoruz


let tablo;

function VeriCek(istenen) {

  $.get("http://kutso.tk/api/find/batu-nodemcu", function (Data) { 
    $(".result").html(Data);

    tablo = document.querySelector("#table");                                       // id'ye göre filtreleyip tabloyu çektik

    Sifirla();                                                                      //tabloyu sıfırladık

    //Yazdırma İşlemi

    if (Data.length > 1) {                                                          //eğer birden çok data varsa
      Data.forEach(LastData => {
        Yazdir(LastData.UserToken, JSON.stringify(LastData.sensors), LastData.time)     // döngüye alıp teker teker yazdırıyoruz
      });
    }
    else {
      Yazdir(Data.UserToken, JSON.stringify(Data.sensors), Data.time);                  //eğer 1 veri avrsa direkt yazdırıyoruz
    }
    //Yazdırma İşlemi

    TekrarEdenleriSil();                                                            //tekrar eden verileri temizledik

  });


}


function TekrarEdenleriSil() {

  let elemanlar = [];
  let yeniElemanlar = [];
  let silinenler = [];

  elemanlar.push(tablo.rows);


  for (let i = 0; i < elemanlar[0].length; i++) {

    let tabloEleman = elemanlar[0][i];

    for (let j = i + 1; j < elemanlar[0].length; j++) {

      var eleman = elemanlar[0][j];

      if (eleman.cells[0].outerText == tabloEleman.cells[0].outerText) {

        console.log(j, `${eleman.cells[0].outerText} silinecek`)

        silinenler.push(j)

        // yeniElemanlar = Object.entries(elemanlar[0][j]).splice(j,1);

      //  break;
      }
   //   else {
       // yeniElemanlar.push(elemanlar[0][j].cells[0].outerText)
      //  break;
     // }
    }

  }

  console.log(silinenler);

  for (let i = 1; i < elemanlar[0].length; i++) {

    let eleman = elemanlar[0][i];

    for(let j = 0; j < silinenler.length; j++) {

      let yasakli = silinenler[j];
      //console.log(i , yasakli)

      if(i != parseInt(yasakli) )
      {

      yeniElemanlar.push(eleman.cells[0].outerText)
      break;
      }

    }

  }

  elemanlar = yeniElemanlar;

  console.log(elemanlar);









  /* for (let i = 0; i < yeniElemanlar.length; i++) {
 
     Yazdir(yeniElemanlar[i].outerText);
 
   }
 */

  /* if (tablo.rows[i].getElementsByTagName("td")[0] && tablo.rows[i - 1].getElementsByTagName("td")[0]) {                                   //eğer mevcut index'e bağlı olan tablodaki eleman boş değilse
 
     if (tablo.rows[i].getElementsByTagName("td")[0].outerText == tablo.rows[i - 1].getElementsByTagName("td")[0].outerText) {             //eğer bu index'teki eleman ile bir alt index'teki elemanın ilk değerleri (tokenleri) aynıysa
 
       tablo.removeChild(tablo.rows[i]);                                                                                                    // o satırı sil
 
     }
 
   }
*/

}


function Sifirla() {
  document.body.innerHTML = "<table id=\"table\" border = \"1\">" +

    "<th>token</th>" +
    "<th>sensorler</th>" +
    "<th>time</th>" +

    "</table>";
}


function Yazdir(token, sicaklik, time) {
  tablo = document.querySelector("#table");

  let Tr = document.createElement("tr");

  let tokenTd = document.createElement("td")
  let sicaklikTd = document.createElement("td")
  let timeTd = document.createElement("td")

  tokenTd.textContent = token;
  sicaklikTd.textContent = sicaklik;
  timeTd.textContent = time;

  Tr.appendChild(tokenTd);
  Tr.appendChild(sicaklikTd);
  Tr.appendChild(timeTd);


  tablo.appendChild(Tr);
}