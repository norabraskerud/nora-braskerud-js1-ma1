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


// Question 1

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

var paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


 
// Question 6

const resultsContainer = document.querySelector(".results");

console.log(resultsContainer.innerHTML)

resultsContainer.innerHTML ="<p> New Paragraph </p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function makeList (list) {
    for(var i = 0; i < list.length; i++); 
    console.log(list);
}

makeList("cats");

// Question 8

function createCatsContainer (cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++){

        let catsAgeMissing = "Age unknown";

        if (cats[i].age) {
            catsAgeMissing = cats[i].age; 
        } 

        html += `<div class= "cats">
                <h5> ${cats[i].name}</h5>
                <p> age: ${catsAgeMissing}<p>
                </div>`;
    }

    return html;

}

const newHTML = createCatsContainer(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHTML;