//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(arr, str){
    for (let i = 0; i < arr.length; i++) {
        if (str.toLowerCase().includes(arr[i].toLowerCase())) {
            console.log(`Matched Dog Name ${arr[i]}`);
        } else {
            console.log("No Match");
        }
    }
}
findWords(dog_names, dog_string)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
    } return arr;
}
console.log(replaceEvens(arr))


//=================Code Wars Problem # 1 ===================
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//Simple multiplication


function simpleMultiplication(number){
    return number%2 ? number*9 : number*8
 }


 //============== Code Wars Problem # 2 ========================
 //Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 //Even or Odd

 
 function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }