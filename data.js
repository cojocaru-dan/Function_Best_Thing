// WRITE YOUR CODE BELOW THIS LINE



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
