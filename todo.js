const todos = [
	{
		body: 'wake up',
		completed: true
	},
	{
		body: 'prep breakfast',
		completed: false
	},
	{
		body: 'wake daughter up',
		completed: true
	},
	{
		body: 'see her finish her breakfast',
		completed: false
	},
	{
		body: 'get her dressed',
		completed: false
	},

	{
		body: 'send her to school',
		completed: false
	}
]
console.log(`you have ${todos.length} todos`)
console.log(todos)

todos.forEach(function (item, index) {
	console.log(`${index + 1}` & item)
})
//for(let count = 0; count<todos.length ;count++){

//  }
//}

// deleteTodo(todos,'keep sleeping')
// console.log(todos)

const getThingsToDo = function (todos) {
	return todos.filter(function (todo) {
		return todo.completed === false
	})
}

console.log(getThingsToDo(todos))


const sortTodos = function (todos) {
	todos.sort(function (a, b) {
		if (a.completed < b.completed) {
			return -1
		} else if (b.completed < a.completed) {
			return 1
		} else {
			return 0
		}
	})
}
sortTodos(todos)
console.log(todos)

