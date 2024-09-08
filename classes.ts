class Ev {
    odaSayisi: number;
    pencereSayisi: number;
    kat: number;
    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.kat = kat;
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
    }
    yemekYe() {
        console.log(this.kat + " " + "Katli evde yemek yenildi.")
    }
}

let ev = new Ev(2, 3, 6)
ev.yemekYe();
console.log(ev.kat)


class Kisi {
    private _isim: string;

    constructor(isim: string) {
        this._isim = isim; // Constructor içinde başlatma
    }

    get isim(): string {
        return "Sayin : " + this._isim;
    }
    set isim(isim: string) {
        this._isim = isim;
    }
    kaydet() {
        console.log("Kisi kaydedildi")
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log("Satis yapildi")
    }
}
class Personel extends Kisi {
    maasOde() {
        console.log("Maas odendi")
    }
}

let kisi = new Kisi("Ozge")
let musteri = new Musteri("Ozge")
musteri.isim = "Ozge"

console.log(musteri.isim)
musteri.kaydet();
musteri.satisYap();

let personel = new Personel("Ozge");
personel.kaydet();
personel.maasOde();