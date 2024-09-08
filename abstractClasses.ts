abstract class KrediBase {
    constructor() {

    }
    kaydet(): void {
        console.log("Kaydedildi")
    }

    abstract hesapla(): void;
}

class TuketiciKredi extends KrediBase {

    constructor() {
        super();
    }

    hesapla(): void {
       console.log("Tuketici kredisine gore hesaplam yapildi")
    }
  
}

class MortgageKredi extends KrediBase {

    constructor() {
        super();
    }

    hesapla(): void {
       console.log("Konut kredisine gore hesaplam yapildi")
    }
    baskaBirOperasyon(){

    }
  
}

let tuketiciKredi = new TuketiciKredi()
tuketiciKredi.hesapla()
tuketiciKredi.kaydet()


let mortgageKredi = new MortgageKredi()
mortgageKredi.hesapla()
mortgageKredi.kaydet()
mortgageKredi.baskaBirOperasyon()


let kredi : KrediBase

kredi = new TuketiciKredi()
kredi = new MortgageKredi()