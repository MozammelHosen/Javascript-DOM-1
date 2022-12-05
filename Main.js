const h3tag = document.getElementsByTagName("h3");
// for off loop
for (const h3 of h3tag) {
  console.log(h3.innerText);
}
const ptag = document.getElementsByTagName("p");
for (const p of ptag) {
  console.log(p.innerText);
}
const idtag = document.getElementById("MyBlogs2");
idtag.style.textAlign = "center";
idtag.innerText = "This is Good Products In our life";
idtag.style.margin = "20px";

// add element
const article = document.createElement("article");
article.classList.add("blogs");
const h3 = document.createElement("h3");
h3.innerText = "My Awesome Blogs-5";
const p = document.createElement("p");
p.innerText =
  "My Best Awesome Blogs In the World . So I m Very Happy In My Life";
article.appendChild(h3);
article.appendChild(p);

// add appendChild
const addSection = document.getElementById("blogs");
addSection.appendChild(article);

// Add Element InnerHTML
const articles = document.createElement("article");
article.innerHTML = `
<h3>Hello World</h3>
<p>Hello World In the World Wide In our Village</p>
`;

// add style
const blogtag = document.getElementsByClassName("blogs");
for (const blog of blogtag) {
  blog.style.border = "2px solid orange";
  blog.style.borderRadius = "10px";
  blog.style.margin = "10px";
  blog.style.padding = "10px";
}
const li = document.createElement("li");
li.innerText = "Blogs-5";
const addElement = document.getElementById("Blogs-list");
addElement.appendChild(li);

// remove
const removes = document.getElementById("Blogs-list");
const four = removes.children[3];
// console.log(four);
removes.removeChild(four);

// add

