//Task1
console.log("lastElementChild is:"+document.body.lastElementChild.tagName);//the body has two elemnts: header and main so the element should be main 
console.log(document.body.children.length);

//Question:The difference in length between childNodes and children of, Explain why they differ?
console.log("childNodes length: "+document.body.childNodes.length)
console.log("children length: "+document.body.children.length)
console.log("The diffrence: "+(document.body.childNodes.length - document.body.children.length))
/*child Nodes return all the nodes in body (header , h1 , main , p , section , aside) but
children return only basic element nodes in body*/

/*Question:
Determine
What is the nodeType and nodeName of the first node in document.body.childNodes?*/
console.log("nodeType:", document.body.childNodes[0].nodeType);// 3 means text nodeType
console.log("nodeName:", document.body.childNodes[0].nodeName); 

//Is the first paragraph a sibling of the second, or a descendant?
//Yes, the first paragraph is a sibling of the second because they both in the same level and share the same parent element "section"

/*Question:
Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin?
Yes, because the browser treats whitespace and line breaks after elements as text nodes
*/
document.body.childNodes.forEach((Nodes, index) => {
  console.log(index, Nodes.nodeType, JSON.stringify(Nodes.textContent));
});

//Task2
const card = document.createElement("div");

card.classList.add("card");//Add class
card.dataset.role = "admin";//Add data-role
//Add h2 element
const headingElement = document.createElement("h2");
headingElement.textContent = "Access Panel"; 
//Add p element
const paragraphElement = document.createElement("p");
paragraphElement.textContent = "Authenticated";
//Add elements to the div
card.appendChild(headingElement);
card.appendChild(paragraphElement);
//Add div element to the body
document.body.appendChild(card);
//Change the paragraph
paragraphElement.textContent = "Welcome back, Admin";
//Add two classes to the div: "authenticated" and "highlight" using classList
card.classList.add("authenticated", "highlight");
