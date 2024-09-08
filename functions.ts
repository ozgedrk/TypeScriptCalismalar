function topla(x: number, y: number): number {
    return x + y;
}

let topla2 = function (x: number, y: number): number {
    return x + y;
}

let topla3 = function (x: number, y?: number): number {
    if (y) {
        return x + y;
    }
    return x;
}

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join(" "); 
}
function davetEt2(...digerleri:string[]):string{
    return digerleri.join(" "); 
}

console.log(davetEt("Ozge","Busra","Selin"))
console.log(davetEt2("Ozge","Ahmet","Mehmet","Sude"))
console.log(topla(2, 3))
console.log(topla2(5, 3))
console.log(topla2(4, 8))
console.log(topla3(4))
console.log(topla3(4,89))