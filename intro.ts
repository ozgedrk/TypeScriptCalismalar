function greeter(isim:string){
return "Merhaba " + isim
}

let mesaj = greeter('OZQ')
console.log(mesaj)


let sayilar :Array<number> = [1,2,3]
let dizi :[number,string] = [2,"Ankara"]

enum Renk {Kirmizi,Siyah,Mavi}
let renk : Renk = Renk.Kirmizi

console.log(dizi[1])

let deger : any ="Ankara"
deger = 2
deger = {}

console.log(deger)

let deger2 : void = undefined

console.log(deger2)

function selamVer2() void{
    console.log("Merhaba")
    
}

