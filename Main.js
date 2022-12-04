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

const blogtag = document.getElementsByClassName("blogs");
for (const blog of blogtag) {
  blog.style.border = "2px solid orange";
  blog.style.borderRadius = "10px";
  blog.style.margin = "10px";
  blog.style.padding = "10px";
}
