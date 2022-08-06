window.onload = function (){
    document.getElementById('add-button').onclick = addBook;
}
async function addBook(event){
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const isbnInput = document.getElementById('isbn');
    const publisheddateInput = document.getElementById('publishedDate');
    const authorInput = document.getElementById('author');
    const response = await fetch('http://localhost:3000/books',{
        method: 'POST',
        body: JSON.stringify({
            title: titleInput.value,
            isbn: isbnInput.value,
            publishedDate: publisheddateInput.value,
            author: authorInput.value
        }),
        headers: {
             Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-type': 'application/json'
        }
    });
    const data = await response.json();
    document.getElementById('book-add-form').reset();
    console.log(data);
    window.location = 'index.html';
}