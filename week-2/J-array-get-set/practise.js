var mentors = ["Daniel", "Mozafar", "Etza"]
console.log(mentors);
var firstName = mentors[0]
console.log(firstName);
var numberOfMentors = mentors.length
console.log(mentors.length);
var lastName = mentors[numberOfMentors - 2]
console.log(lastName);
mentors[0] = "Luke"
console.log(mentors);
mentors.push("yohanes")
console.log(mentors);

var scores = [1, 5, 3, 2, 4]
var scoresSorted = scores.sort();
console.log(scoresSorted);


var students = ["Daniella", "Austin", "Akey"]
var people = mentors.concat(students);
console.log(people);
var x = mentors.slice(0, 3);
console.log(x);




var x = mentors.map()

console.log(x);


function upper(z) {
    return z.toUpperCase();
}