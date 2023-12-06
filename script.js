class MyString extends String {
    reverse() {
        return this.split('').reverse().join('')
    }

    ucFirst() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }

}
class MySecondString extends String {
    ucWords() {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
}

const str = new MyString('abcde') 
const str2 = new MySecondString('abcde abcde abcde') 
console.log(str.reverse());  // выведет 'edcba'
console.log(str.ucFirst());  // выведет 'Abcde'
console.log(str2.ucWords());  //выведет 'Abcde Abcde Abcde'

   

  
