window.onload = function(){
    fetchBooks();
}
function fetchBooks(){
    fetch('http://localhost:3000/books')
        .then(response=>response.json())
        .then(books => displayBooks(books))
        .catch(err => {
            console.log('Can not display');
        });
}

function displayBooks(books){
    const tbody = document.getElementById('books-table');
    let html = '';
    books.forEach(book => {
        html += `
            <tr id="tr${book._id}">
                <th> ${book._id}</th>

                    <td> ${book.title} </td>
                    <td> ${book.isbn}</td>
                    <td> ${book.publishedDate}</td>
                    <td> ${book.author}</td>
                    <td>
                        <button type="button" class = "btn btn-primary" onClick= "deleteBook('${book._id}');"> DELETE </button>
                        <button type="button" class = "btn btn-primary" onClick= "editBook('${book._id}');"> EDIT </button>
                    </td>
            </tr>
        `
    });
    tbody.innerHTML = html;
}

function deleteBook(id){
    //console.log(id);
    fetch("http://localhost:3000/books/"+id,{
        method: 'DELETE'
    }).then(response =>{
        console.log(response);
        document.getElementById(`tr${id}`).remove();
    }).catch(err => console.log(err));
}

function editBook(id){
    window.location = 'edit-book.html?id=' + id;
}