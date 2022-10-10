class Book {
    constructor(title, author, isbn){
     this.title = title
     this.author = author
     this.isbn = isbn
    }
}


class UI {
   addBookToList(book){
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

   showAlert(message, className){
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
   deleteBooks(){
    const list = document.getElementById('book-list')
    list.addEventListener('click', (e)=>{
     if(e.target.classList.contains('delete'))
     e.target.parentElement.parentElement.remove()
     
     
 
     e.preventDefault()
    })
   
   }

   clearFields(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
   }
    
}

//local storage
 class Store {
   static getBooks(){
   let books 
   if(localStorage.getItem('books')===null){
    books=[]
   }else{
    books = JSON.parse(localStorage.getItem('books'))
   }
   return books

    }
   static displayBooks () {
const books = Store.getBooks()
books.forEach(book=>{
   const ui = new UI
    //add book to UI
    ui.addBookToList(book)
})
    }
    static addBook (book){
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    }
   static removeBook (isbn){
    console.log(isbn)

    }
 
 }
//dom load event
 document.addEventListener('DOMContentLoaded', Store.displayBooks)
document.getElementById('book-form').addEventListener('submit', (e)=>{
    ///get formm values
      const title = document.getElementById('title').value
      const author = document.getElementById('author').value
      const isbn = document.getElementById('isbn').value

      const book = new Book(title, author, isbn)

  //instantiate a Ui object
  const ui = new UI()

      
      if(title===''||author===''||isbn===''){
        //error alert
        ui.showAlert('fill in all fields','error' )
        }else{
           
            /// add book to list
           ui.addBookToList(book)
           //add to LS
        Store.addBook(book)
        
           //show sucess
           ui.showAlert('book added', 'success')
           //clear fields
           ui.clearFields()
        
           //delete books 
           ui.deleteBooks()

           //remove from LS
           Store.removeBook(e.target.parentElement.parentElement.textContent)
         

           ui.showAlert('deleted succesfully', 'success')
        }
        
        
            e.preventDefault()
        })
      
