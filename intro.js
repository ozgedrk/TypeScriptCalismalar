function greeter(isim) {
    return "Merhaba " + isim;
}
var mesaj = greeter('OZQ');
console.log(mesaj);
var sayilar = [1, 2, 3];
var dizi = [2, "Ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 0] = "Kirmizi";
    Renk[Renk["Siyah"] = 1] = "Siyah";
    Renk[Renk["Mavi"] = 2] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
console.log(dizi[1]);
var deger = "Ankara";
deger = 2;
deger = {};
console.log(deger);
var deger2 = undefined;
console.log(deger2);
function selamVer2() { }
void {
    console: console,
    : .log("Merhaba")
};
