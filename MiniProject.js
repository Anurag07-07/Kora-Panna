//Dark and Light Mode
const dark = document.querySelector('#dark')
dark.addEventListener('click', function () {
  document.body.classList.toggle('dark')
})

//Add Todo List
let map = new Map()
const Add = document.querySelector('#add')
Add.addEventListener('click', function (e) {
  e.preventDefault()
  const user = document.querySelector('#user').value
  const data = document.querySelector('#data').value
  if (!map.has(user)) {
    map.set(user, new Array())
    map.get(user).push(data)
  } else {
    map.get(user).push(data)
  }

  render()
})

//Show Database

function DeleteTodo(key){
  map.delete(key)
  render()
}

function createEle(key,value){
  const div = document.createElement('div')
  const span = document.createElement('span')
  const button = document.createElement('button')
  span.innerHTML = key+" "+value
  button.innerText = "Delete"
  button.setAttribute('onclick', `DeleteTodo('${key}')`)
  div.appendChild(span)
  div.appendChild(button)
  return div
}

function render(){
  const todo = document.querySelector('#todo')
  todo.innerHTML  = ""
  for (const [key,value] of map) {
    const create = createEle(key,value)
    todo.appendChild(create)
  }
  document.body.appendChild(todo)
}

