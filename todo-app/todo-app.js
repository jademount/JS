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
// you have 4 todos left
// add a p for each todo above 
let count = []
todos.forEach(function (e) {
    if (e.completed === false)
        count.push(e)

})

console.log(count)
const unfinishedCount = document.createElement('p')
unfinishedCount.textContent = `You have ${count.length} todos left.`
document.querySelector('body').appendChild(unfinishedCount)


count.forEach(function (e) {
    let unfinishedTodo = document.createElement('p')
    unfinishedTodo.textContent = e.body
    document.querySelector('body').appendChild(unfinishedTodo)
})




//const p = document.querySelectorAll('p')
//p.forEach(function (p) {
//    if (p.textContent.includes('the')) {
//        p.remove()
//   }
//})