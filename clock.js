let userName = prompt("Kullanıcı Adını Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = userName;



function zaman() {
    let suan = new Date();  
    // saat 
    let saat = suan.getHours(); 
    // dakika 
    let dakika = suan.getMinutes(); 
    // saniye 
    let saniye = suan.getSeconds(); 
    // güne ekstra zaman
    var d = new Date(); 
    // günleri ekledik
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    // id tanımmladık
    let iceaktarma = document.querySelector("#myClock") 
    // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
}
let now = setInterval(zaman,100); 

