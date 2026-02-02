const prompt = require("prompt-sync")({sigint:true}) 

const destination = prompt ("Masukkan destinasi perjalanan anda :");
console.log(destination);

const distance = prompt("masukkan berapa km perjalanan yang akan ditempuh :");
console.log(distance);

const speed = prompt ("masukkan kecepatan perjalanan dalam kilometer :")
console.log(speed)

const time = distance / speed ; 

console.log ("Waktu perjalanan yang akan anda tempuh ke " + destination + " adalah " + time + " jam")
