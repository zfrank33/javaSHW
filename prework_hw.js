// Q 1
function helloName(userName){
    console.log("hello "+ userName)
}
var userName =prompt('Enter user name')

helloName(userName)

//question 2
function first_odd() {
    for (var i = 0, _pj_a = 1101; i < _pj_a; i += 1) 
    if (i % 2 ! =0:)
    console.log(i);
}  
      
      first_odd();
         
// Q 3
var a_list, maximum;
function max_num_in_list(a_list) {
    maximum = a_list[0];
}
for (var i = 0, _pj_a = a_list.length; (i < _pj_a); i += 1) {
    if ((a_list[i] > maximum)) {
        maximum = a_list[i];
        return maximum;
    }
}
a_list = [10, 20, 30, 40, 50];
console.log(max_num_in_list(a_list));



// Q4
var a_year;

function is_leap_year(a_year) {
  if (a_year % 400 === 0) {
    return true;
  } else {
    if (a_year % 100 === 0) {
      return false;
    } else {
      if (a_year % 4 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}

a_year = Number.parseInt(input());
console.log(is_leap_year(a_year));

// Q 5

var a_list;

function is_consecutive(a_list) {
    return sorted(a_list) === list(range(min(a_list), max(a_list) + 1));
  }
  
  a_list = [2, 3, 4, 5, 6, 7];
  console.log(is_consecutive(a_list));
  a_list = [1, 2, 4, 5];
  console.log(is_consecutive(a_list));