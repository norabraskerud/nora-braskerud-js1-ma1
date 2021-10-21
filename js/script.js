// Question 1
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function complain (cat) {
    console.log(cat);
}

complain("Meow!");

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

console.log(heading);


// Question 3

heading.style.fontSize = "2em";

// Question 4

console.dir(heading.className);

heading.className = "Subheading";

console.log(heading.className);

// Question 5

const paragraphs = document.querySelectorAll("p");


for (let i = 0; i < paragraphs.length; i++);
console.log(paragraphs);


 