const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const toDoList = document.querySelector('#todo_list');

const createTodo = () => {
  if(!input.value.trim()){
    input.value = '';
    return false;
  }else{
    const div = document.createElement('div');
    const text = document.createElement('h3');
    const divsButton = document.createElement('div');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
  
    div.setAttribute('class', 'block_text');
    deleteButton.setAttribute('class', 'delete_button');
    editButton.setAttribute('class', 'edit_button');
    divsButton.setAttribute('class', 'divs_button');
  
    text.innerHTML = input.value;
    deleteButton.innerHTML = 'delete';
    editButton.innerHTML = 'edit';

    divsButton.append(deleteButton, editButton);
    div.append(text, divsButton);
    toDoList.prepend(div);

    deleteButton.onclick = () => div.remove();
    //!==========
    editButton.onclick = () => {
      const newTodo = prompt('Edit Todo:', text.textContent);
      if (newTodo !== null && newTodo !== '') {
        text.textContent = newTodo;
      }
    };    
    //!==========
  }
  return input.value = ''
}
createButton.onclick = () => createTodo();
window.addEventListener('keydown', (keyboardEvent)=>{
  if(event.code === 'Enter')createTodo()
});

createTodo();