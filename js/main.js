let todoInput
let errorInfo
let addBtn
let ulList
let divEdit
let popupInfo
let popupInput
let btnAccept
let btnCancel
let editTodo

const main = () => {
	prepareDOMElements()
	prepareDomEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	divEdit = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	btnAccept = document.querySelector('.accept')
	btnCancel = document.querySelector('.cancel')
}

const prepareDomEvents = () => {
	addBtn.addEventListener('click', addTodo)
	ulList.addEventListener('click', checkClick)
	btnCancel.addEventListener('click', closePopup)
	btnAccept.addEventListener('click', addEdit)
	todoInput.addEventListener('keyup', enterClick)
}

const addTodo = () => {
	if (todoInput.value !== '') {
	const	liItems = document.createElement('li')
		liItems.textContent = todoInput.value
		ulList.append(liItems)
		creatTools(liItems)
		errorInfo.textContent = ''
		todoInput.value = ''

	} else {
		errorInfo.textContent = 'wpisz tresc zadania'
	}
}

const creatTools = (liItem) => {
	const divTodo = document.createElement('div')
	liItem.append(divTodo)
	divTodo.classList.add('tools')
	for (let j = 0; j < 3; j++) {
	const btn = document.createElement('button')
		divTodo.append(btn)

		if (j === 0) {
			btn.classList.add('complete')
		const	i = document.createElement('i')
			btn.append(i)
			i.classList.add('fas', 'fa-check')
		} else if (j === 1) {
			btn.classList.add('edit')
			btn.textContent = 'EDIT'
		} else {
			btn.classList.add('delete')
			i = document.createElement('i')
			btn.append(i)
			i.classList.add('fas', 'fa-times')
		}
	}
}

const checkClick = click => {
	if(click.target.matches('.complete')){
		click.target.closest('li').classList.toggle('completed')
		click.target.classList.toggle('completed')
	}
	else if(click.target.matches('.edit')){
divEdit.style.display='flex'
editTodo = click.target.closest('li')
popupInput.value=editTodo.firstChild.textContent
popupInfo.textContent=''
}
else if(click.target.matches('.delete')){
	click.target.closest('li').remove()
	const allToDos = document.querySelectorAll('li')
if(allToDos.length == 0){
	errorInfo.textContent='Brak zadań'
}
}

}

const closePopup = () =>{
	divEdit.style.display='none'
}

const addEdit = () =>{
	if(popupInput.value!==''){
		editTodo.firstChild.textContent=popupInput.value
		closePopup()
	}
	else{
		popupInfo.textContent = "Musisz podac tresc zadania"
	}
	
}

const enterClick = (click) => {

	if(click.key === 'Enter'){
	addTodo()}
}






document.addEventListener('DOMContentLoaded', main)
