let adjective1 = prompt('Enter an adjective:')
let noun1 = prompt('Enter a noun:')
let verb1 = prompt('Enter a verb:')
let adverb1 = prompt('Enter an adverb:')
let athlete1 = prompt('Enter an NFL player:')
let athlete2 = prompt('Enter an NHL player:')

let story = `.`

let madLibOutputDiv = document.querySelector('#madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`