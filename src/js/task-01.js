const list = document.querySelector('#categories');
const items = [...list.children];

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const category = item.children[0].textContent;
  console.log(`Category: ${category}`);
  const elements = item.children[1].children.length;
  console.log(`Elements: ${elements}`);
});
