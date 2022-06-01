function readFromLS(key)
{
   
    localStorage.setItem('Task', JSON.stringify( key ) );


}

function writeToLS(key, data)
{
    let todoArray = [{
        'todoKey': 'key',
        'todoData': 'data'

    }]

}

function deleteTodo(id)
{


}

export default{
    saveTodo,
    deleteTodo,
    getTodoList
}