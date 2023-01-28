import BookCollection from './modules/bookCollection.js';
import { DateTime } from './modules/luxon.js';

const bookCollection = new BookCollection();
bookCollection.displayBooks();

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;
  bookCollection.addBook(title, author);
  bookCollection.displayBooks();
  titleInput.value = '';
  authorInput.value = '';
});

// Nav bar buttons Setup

const listSectionButton = document.getElementById('btn_listSection');
const addSectionButton = document.getElementById('btn_addSection');
const contactSectionButton = document.getElementById('btn_contactSection');

const listSection = document.getElementById('list_section');
const addSection = document.getElementById('add_section');
const contactSection = document.getElementById('contact_section');

// List section button actions

addSectionButton.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
});

// Add section button actions

listSectionButton.addEventListener('click', () => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Contact section button actions

contactSectionButton.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'block';
});

// Date and Time Display

const currentTime = DateTime.local();
const formattedTime = currentTime.toFormat('MMMM dd yyyy, hh:mm:ss a');

const dateText = document.getElementById('date');
dateText.textContent = formattedTime;