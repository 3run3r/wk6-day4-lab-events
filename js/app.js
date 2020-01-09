document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete All';
  deleteButton.addEventListener('click', handleDelete);

  const body = document.querySelector('body');
  body.appendChild(deleteButton);

  console.log('JavaScript loaded');
});

const handleFormSubmit = function (event) {
  event.preventDefault();

  const newItem = document.createElement('li');

  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  newItem.textContent = `${title}, ${author}, ${category}`;

  const unorderedList = document.querySelector('#reading-list');
  unorderedList.appendChild(newItem);

  event.target.reset();

};

const handleDelete = function () {

  const unorderedList = document.querySelector('#reading-list');
  unorderedList.innerHTML = "";

};
