window.onload = () => {
  // declaración de variables
  const form = document.getElementById('grocery');
  const input = document.getElementById('writeList');
  const list = document.querySelector('ol');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newItemText = input.value;

    if (newItemText.trim() !== '') {
      // Crea nuevos elementos de una lista
      const newItem = document.createElement('li');

      // Crear un elemento span para el círculo rojo (eliminar)
      const deleteButton = document.createElement('span');
      deleteButton.className = 'delete';
      deleteButton.textContent = 'X';
      newItem.appendChild(deleteButton);

      // Crear un elemento span para el círculo verde (editar)
      const editButton = document.createElement('span');
      editButton.className = 'edit';
      editButton.textContent = '✎';
      newItem.appendChild(editButton);

      // Crear un elemento span para el texto del elemento de la lista
      const itemText = document.createElement('span');
      itemText.textContent = newItemText;
      newItem.appendChild(itemText);

      list.appendChild(newItem);

      input.value = '';
    }
  });

  // Evento para eliminar elementos de la lista al hacer click en el botón rojo
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const listItem = e.target.parentElement;
      list.removeChild(listItem);
    }
  });

  // Evento para editar elementos de la lista al hacer click en el botón verde
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
      const listItem = e.target.parentElement;
      const itemText = listItem.querySelector('span:last-child');

      // Obtener el texto actual del elemento
      const currentText = itemText.textContent;

      // Mostrar un alert para editar el texto
      const updatedText = prompt('Editar elemento:', currentText);

      if (updatedText !== null) {
        itemText.textContent = updatedText;
      }
    }
  });

  // Evento para eliminar todos los items de la lista al hacer click en Clear List
  let clearButton = document.getElementById("clear");
  clearButton.addEventListener('click', () => {
    const listItems = list.querySelectorAll('li');
    listItems.forEach((item) => {
      list.removeChild(item);
    });
  });
}
