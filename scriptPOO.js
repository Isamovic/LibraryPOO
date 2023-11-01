"use strict";

console.log("test");
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  #myLibrary = [];
  constructor() {
    this.addbtn = document.querySelector(".add-btn");
    this.submit = document.querySelector(".submit");
    this.form = document.querySelector(".form");
    this.container = document.querySelector(".container");
    this.author = document.querySelector("#author");
    this.pages = document.querySelector("#pages");
    this.title = document.querySelector("#title");
    this.read = document.querySelector("#read");

    this.addbtn.addEventListener("click", () => {
      this.form.classList.toggle("hidden");
    });

    this.submit.addEventListener("click", (e) => {
      e.preventDefault();
      this.container.classList.remove("hidden");
      this.addBookToLibrary();
      this.form.classList.toggle("hidden");
      this.displayBook(this.#myLibrary);
      this.valeurAZero();
    });

    document.addEventListener("click", (event) => {
      this.target = event.target.closest(".imgdelete");
      if (this.target) {
        this.#myLibrary.splice(Number(target.getAttribute("id")), 1);
        this.displayBook(this.#myLibrary);
      }
    });
  }

  addBookToLibrary() {
    this.titre = this.title.value;
    this.auteur = this.author.value;
    this.page = this.pages.value;
    this.lu = this.read.value;
    this.#myLibrary.push(new Book(this.titre, this.auteur, this.page, this.lu));
  }

  valeurAZero() {
    this.title.value = "";
    this.author.value = "";
    this.pages.value = "";
    this.read.value = "";
  }

  displayBook(arrbook) {
    this.container.innerHTML = "";
    arrbook.forEach((book, index) => {
      const { title, author, pages } = book;
      this.container.insertAdjacentHTML(
        "beforeend",
        `<div class="book-container" >
          <div class="cont-top">
            <div class="book">Bookname: ${title}</div>
            <div class="author">Author: ${author}</div>
            <div class="page">Page numbers: ${pages} page(s)</div>
          </div>
          <div class="cont-bottom">
           
              <div class="update">
                <div>update</div>
                <a href="#">
                <img src="pencil.svg" alt="update" class="imgupdate" id=${index} />
                </a>
              </div>
  
              <div class="delete">
                <div>Delete</div>
                <a href="#">
                <img src="delete.svg" alt="delete" class="imgdelete" id=${index} />
                </a>
              </div>
          </div>
        </div>`
      );
    });
  }
}

const biblio = new Library();
