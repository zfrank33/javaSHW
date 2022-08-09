//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
/*/
//let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
//let dog_names = ["Max","HAS","PuRple","dog"]
//function findWords(){
    //Your code goes here

function findWords(dog_string,dog_names){
    for(var i=0, _pj_a=dog_names.length; i<_pj_a; i+=1){
        if(dog_string.includes(dog_names[i])){
            return"Matched dog_name";
            else{
            console.log("No Matches")
        }
    }
}


/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

var str= ""
var position
var length

function get_middle(str){
    if ((str %2==0){
        position = str.length/2;
        length=2;
{   else
    position = (atr.length + 1)/2;
    length=1;
    
    return str.substr(position,position + length);       
}