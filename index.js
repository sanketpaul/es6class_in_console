class Lybrery {
    constructor(booklist) {
        this.BookList = booklist;
        this.issuedbook = {};
    }
    getbooklist = () => {
        this.BookList.forEach(element => {
            console.log(element)

        });
    }
    issuebook=(bookname,user)=>{
        console.log(this.issuedbook[bookname])
        if(this.issuedbook[bookname]==undefined){
            this.issuedbook[bookname]=user
        }
        else{
            console.log(`this book already issued by ${this.issuedbook[bookname]}`)
        }
    }
    returnbook=(bookname)=>{
        delete this.issuedbook[bookname];
    }
}
