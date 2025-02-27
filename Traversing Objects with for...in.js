function print(book){
    let sum="";
    for(let s in book){
        sum+=`${s}:${book[s]} `;
    }
    console.log(sum);
}
let book={title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937};
print(book);