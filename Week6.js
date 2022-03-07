const form = document.myForm
function Espresso(){
    var sum1= 3*document.getElementById("Esp").value 
    return sum1
}
function Croissant(){
    var sum2= 4*document.getElementById("Cro").value 
    return sum2
}
function WildCaughtTuna(){
    var sum3= 5*document.getElementById("Tuna").value 
    return sum3

}
function sum(){
    var sum4= Espresso()+Croissant()+WildCaughtTuna()
    return sum4

}

document.getElementById("button").addEventListener("click", submit)

function submit(eventObject){
    eventObject.preventDefault()
    console.log(eventObject)
    var sum1= 3*document.getElementById("Esp").value 
    var sum2= 4*document.getElementById("Cro").value 
    var sum3= 5*document.getElementById("Tuna").value 
    var sum4= sum1+sum2+sum3
    console.log(sum4)
    document.getElementById("Total").innerText="Total: $"+sum4
}
