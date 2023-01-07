//Wiele funkcji używamy, poniewaz kod w funkcji nie wykonuje się do momentu do póki samy go nie wywołąmy przez co panuje ład w kodzie

let toDoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo

let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    toDoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');

    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    toDoInput.addEventListener('keyup', enterKeyCheck);
}

const addNewTodo = () => {
    if (toDoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = toDoInput.value;

        createToolsArea();

        ulList.append(newTodo);
        toDoInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = 'Wpisz treść zadania';
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    newTodo.append(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="ri-check-line"></i>'; //musi być innerHTML bo textContent jak string by potraktował

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="ri-close-fill"></i>';

    toolsPanel.append(completeBtn, editBtn, deleteBtn);
}

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed');
    } else if (e.target.matches('.edit')) {
        editTodo(e);
    } else if (e.target.matches('.delete')) {
        deleteTodo(e);
    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li');
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';
}

const closePopup = () => {
    popup.style.display = 'none';
}

const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display = 'none';
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!';
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove();
    const allTodos = ulList.querySelectorAll('li');

    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.';
    }
}

const enterKeyCheck = e => {
    if (e.key === 'Enter') {
        addNewTodo();
    }
}

//Jak w HTML damy button tag obok sb to nie ma przerw między przyciskami, drobny błąd języka

//Gdy cały dokument zostanie załadowany to odpal wtedy funkcje main

document.addEventListener('DOMContentLoaded', main);