
// Tek satırlık yorum.
/* Çoklu Yorum */
/*
console.log("Hello world!")

//Değişkenler

let masterBranch = "me"
let branchesMaster= "not me"

console.log(masterBranch == branchesMaster)

console.log(1 + 1)
console.log(2 - 1)
console.log(2 * 3)
console.log(2 / 1)
console.log(2 ** 3)

let kapali = true
let acik = false
let bilinmiyor = undefined
let one = 1

console.log(kapali == acik == bilinmiyor == one)

const nums = "yuzu" // Değiştirilemez

let numberAnd = [1, "reend", 3]

console.log(numberAnd)

numberAnd[0] = 21

console.log(numberAnd)

// !!! İlkel olmayan veri türleri değerlerine göre değil, isimlerine göre karşılaştırılır.

let nums1 = [1, 2, 3]
// let nums2 = [1, 2, 3] Eşit değil.
let nums2 = nums1 // Eşit. 

const PI = Math.PI 

console.log(Math.round(9.50))

console.log(Math.floor(9.81))

console.log(Math.ceil(8.75))

console.log(Math.min(5, 10 ,15, 20))

console.log(Math.max(5, 10, 15, 20))

const random = Math.random()

const randomNums = Math.floor(Math.random() * 11)

let myName = "akin"
let mySecondName = "birdal"

console.log(myName + " " + mySecondName)
*/

// Scopes

ad = "akın" // Pencere (Windows) kapsamı. Her zaman, her yerden erişilebilir.
let ismim = "birdal" // Küresel (Global) kapsamı. Harici kod bloğu hariç erişebilir. (örn: if bloğunda kapsam dışıdır.
{ let tavuk = "popeyes" } // Yerek (Local) kapsamı. Sadece harici kod bloğunun içinden erişilebilir. (örn: if bloğunda kapsamda, if bloğu dışında kapsam dışıdır.)

// Objeler
let birObje = {} // İçi boş bir obje!

const projeHakkında = {
    projeName: "Re://Down",
    amac: "İndirme yöneticisi.",
    yil: 2024,
    yazildigiDiller: ["HTML", "CSS", "JavaScript", "Node.js"],
    gelistirici: undefined,
    projeLisansli: "A-GPL 3-0 Or later",
    mensei: "Turkey",
    aktifPasif: true,
    "phone number": "null"
};


console.log(projeHakkında.projeName)
console.log(projeHakkında.amac)
console.log(projeHakkında.yil)
console.log(projeHakkında.gelistirici)
console.log(projeHakkında["phone number"])

console.log(Object.keys(projeHakkında))
console.log(Object.values(projeHakkında))
console.log(Object.entries(projeHakkında))
console.log(projeHakkında.hasOwnProperty('name'))
// Objeyi değiştirilemez yapar: Object.freeze(projeHakkında)
// Objeyi değiştirilemez yapar, ancak mevcut değerler değiştirilebilir: Object.seal(projeHakkında)