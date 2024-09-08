var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.kat = kat;
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + " " + "Katli evde yemek yenildi.");
    };
    return Ev;
}());
var ev = new Ev(2, 3, 6);
ev.yemekYe();
console.log(ev.kat);
var Kisi = /** @class */ (function () {
    function Kisi(isim) {
        this._isim = "";
        this._isim = isim; // Constructor içinde başlatma
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return "Sayin : " + this._isim;
        },
        set: function (isim) {
            this._isim = isim;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kisi kaydedildi");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log("Satis yapildi");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maas odendi");
    };
    return Personel;
}(Kisi));
var kisi = new Kisi("Ozge");
var musteri = new Musteri("Ozge");
musteri.isim = "Engin";
console.log(musteri.isim);
musteri.kaydet();
musteri.satisYap();
var personel = new Personel("Ozge");
personel.kaydet();
personel.maasOde();
