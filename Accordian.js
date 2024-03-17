const data = [{
    id: '1',
    question: "What is the DOM ?",
    answer: "In HTML, DOM stands for Document Object Model. It is a programming interface for web documents. The DOM represents the structure of a document as a tree where each node represents part of the document, such as elements, attributes, and text The HTML DOM provides a way for programs to dynamically access and manipulate the structure, style, and content of HTML documents.Through the DOM, developers can: Access Elements, Manipulate Content, Add or Remove Elements,Respond to Events,Modify Styles: You can change the CSS styles applied to elements, enabling dynamic styling effects.Overall, the DOM serves as an interface between HTML documents and programming languages like JavaScript, enabling dynamic and interactive web experiences."
},

{
    id: '2',
    question: "What are the accordion components ?",
    answer: "Accordion components are user interface elements commonly used in web development to organize and display content in a collapsible manner. They are often used to present information in a compact form while allowing users to expand and collapse sections as needed."
},

{
    id: '3',
    question: "What are the accordion components ?",
    answer: "Accordion components are user interface elements commonly used in web development to organize and display content in a collapsible manner. They are often used to present information in a compact form while allowing users to expand and collapse sections as needed."
},

{
    id: '4',
    question: "What are the accordion components ?",
    answer: "Accordion components are user interface elements commonly used in web development to organize and display content in a collapsible manner. They are often used to present information in a compact form while allowing users to expand and collapse sections as needed."
},

];


const AccordWrapper = document.querySelector(".accordion");

//generating data
function AccordData() {
    AccordWrapper.innerHTML = data.map(dataItem =>
        `<div class ="accordionItem">
        <div class ="accordion_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordionContent">
          <p>${dataItem.answer}</p>
        
        </div>
        </div>
        `).join(" ");
}

AccordData();


const GetTitle = document.querySelectorAll(".accordion_title");

console.log('==============================');
console.log(GetTitle);
console.log('==============================');

GetTitle.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if (currentItem.classList.contains("active")) {
            currentItem.classList.remove("active")
        }
        else {

            //removing the contents that is active
            let getAlreadyActiveClass = document.querySelectorAll(".active")

            getAlreadyActiveClass.forEach(currentActiveItem => {
                currentActiveItem.classList.remove("active")
            })

            currentItem.classList.add("active")
        }
    })
})