export function fizzbuzz(){
  //tu código va aqui

let contador = 1;
let multiplo3 = 3;

while(contador <= 100){

if (contador % 3 === 0 && contador % 5 === 0){
  console.log("FizzBuzz")
}else if(contador % 3 === 0){
  console.log("Fizz")
}else if(contador % 5 === 0){
  console.log("Buzz")
}else{
  console.log(contador)
}
contador++;
}

}

fizzbuzz();