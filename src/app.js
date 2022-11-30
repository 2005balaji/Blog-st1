class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`

let outputbox = document.getElementById('popupContact');

function helperAddPost() {
  outputbox.style.display = 'flex';
}
// 2. `helperPost()`

function helperPost() {
  let title = document.getElementById('title').value;
  let detail = document.getElementById('detail').value;
  let blog = new Blog(title, detail);
  blog.addTitle();
  blog.addDescription();

  outputbox.style.display = 'none';
}
