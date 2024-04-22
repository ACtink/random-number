
 function getRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 4000 ) + 1

    return randomNumber
 }


 function greeting(){
    console.log("Hello Everyone")
 }





module.exports = {
    getRandomNumber,
    greeting
}