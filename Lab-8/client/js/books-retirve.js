
window.deleteBook = deleteBook;
window.logout = logout;

window.onload = function () {
    if (sessionStorage.getItem('accessToken')) {
        fetchBooks();
        document.getElementById("logout").onclick = logout;
    } else {
        window.location = 'signIn.html';
    }
}

async function fetchBooks() {

    const response = await fetch(`http://localhost:3000/books/`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();

    if (!result.error) {
        let html = "";
        result.data.forEach(book => {
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
        document.getElementById('books-table').innerHTML = html;
    } else {
        document.getElementById('books-table').innerHTML = result.message;
    }
}

async function deleteBook(id) {
    console.log(id);
    const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
        alert(result.message);
    } else {
        document.getElementById(`tr${id}`).remove();
    }
}


function logout() {
    sessionStorage.removeItem('accessToken');
    window.location = 'index.html';
}