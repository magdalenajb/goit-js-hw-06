const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);


const title = document.querySelectorAll("h2");
for (let i = 0; i < categoriesList.length; i++) {
console.log(`Category: ${title[i].textContent}`);
console.log(`Elements: ${categoriesList[i].querySelectorAll("li").length}`);
}

//--------------------------------------------------

// for (let i = 0; i < categoriesList.length; i++) {
// const liItem = categoriesList[i];
// }

//for (let i = 0; i < categoriesList.length; i++) {
 //const liItem = categoriesList[i];
 //const title = liItem.querySelector("h2").textContent;
  
 //console.log(`Category: ${title} ${liItem.querySelectorAll("li").length}`);
 //console.log(categoriesList[i].querySelectorAll("li").length);
//}




