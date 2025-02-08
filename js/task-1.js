const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);


listItems.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li");
    
    console.log(`Category: ${title}`);
    console.log(`Element: ${elementsCount.length}`); 
  });