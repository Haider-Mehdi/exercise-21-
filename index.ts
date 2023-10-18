let Cars = []

const BMW = {
    name: "BMW i7",
    color: "Tanzanite Blue Metallic",
    Type: "Luxury Sedan"
};

const Mercedes = {
    name: "Mercedes G-Class",
    color: "Black",
    Type: "Iconic Luxury SUV"
};

const Honda = {
    name: "Honda HRV",
    color: "Red",
    Type: "Mini SUV"
};

Cars.push(BMW)
Cars.push(Mercedes)
Cars.push(Honda)

// console.log("Information about Cars:");
// console.log(Cars);

function describeCars(Cars: any){
    for(let i of Cars){
        console.log(`\n ${i.name} in ${i.color} color is a stunning ${i.Type}.`)
    }

}
describeCars(Cars);