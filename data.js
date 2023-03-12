// WRITE YOUR CODE BELOW THIS LINE

// 1
const favouriteBook = {
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    year: 2003,
    age: function(currentYear) {
		return currentYear - this.year;
	},
    characters: ["Ashoke", "Gogol", "Sonia", "Maxine"]
};

let ageOfMyFavBook = favouriteBook.age(2023);
console.log(ageOfMyFavBook);

// 2
console.log(console);

// 3
console.log(console.log);

// 4
for (let i = 0; i < 5; i++) {
	console.count();
}

// 5
console.log(Object.keys(favouriteBook));

// 6
let aNumber = 47;
console.log(aNumber.toString(), typeof aNumber.toString());

// 7
let writers = "George Orwell, Ernest Hemingway, Jane Austen, Agatha Christie, Oscar Wilde";
const writersArray = writers.split(", ");
writersArray[0] = "William Shakespeare";
console.log(writersArray);

// 8
let writersPlus = writersArray.join("+");
console.log(writersPlus);

// 9
writersArray.push("Fyodor Dostoyevsky");
writersArray.push("Johann Wolfgang Goethe");
console.log(writersArray);
// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;


try {
	toExport = [
		{name: "favouriteBook", content: favouriteBook, type: "object"},
		{name: "ageOfMyFavBook", content: ageOfMyFavBook, type: "number"},
		{name: "aNumber", content: aNumber, type: "number"},
		{name: "writers", content: writers, type: "string"},
		{name: "writersArray", content: writersArray, type: "array"},
		{name: "joinWriters", content: joinWriters, type: "string"}
	]
} catch (error) {

	toExport = {error: error.message}

}

export {toExport};
