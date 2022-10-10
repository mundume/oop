//Book constructor
function Book (title, author,isbn ){
    this.title = title
    this.author = author
    this.isbn = isbn

}

//ui constructor

function UI(){

}

//event listeners

document.getElementById('book-form').addEventListener('submit', (e)=>{
  ///get formm values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

     //instantiate a book 
  const book = new Book(title, author, isbn)

  //instantiate a Ui object
  const ui = new UI()
  
 


UI.prototype.clearFields= function(){
document.getElementById('title').value = ''
document.getElementById('author').value = ''
document.getElementById('isbn').value = ''
}

//show alert
UI.prototype.showAlert = function (message, className){
    //create a div
    const div = document.createElement('div')
    div.className =  `alert ${className}`
    //add text
    div.textContent = message
    //get parent
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    container.insertBefore(div, form)

    //timeout after 3s
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);

}

UI.prototype.deleteBooks = function(){
    
    const list = document.getElementById('book-list')
   list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete'))
    e.target.parentElement.parentElement.remove()
    ui.showAlert('deleted succesfully', 'success')
    

    e.preventDefault()
   })
  
    
}

//add book to list
UI.prototype.addBookToList = function (book){
const list = document.getElementById('book-list')

 //create a tr ekement

 const row=document.createElement('tr')
row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="" class='delete'>X</a></td>
`
list.appendChild(row)

}
//validation
if(title===''||author===''||isbn===''){
//error alert
ui.showAlert('fill in all fields','error' )
}else{
   
    /// add book to list
   ui.addBookToList(book)


   //show sucess
   ui.showAlert('book added', 'success')
   //clear fields
   ui.clearFields()

   //delete books
   ui.deleteBooks()
}


    e.preventDefault()
})