let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter an noun:')
let verb = prompt('Enter an verb:')
let adverb = prompt('Enter an adverb:')

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.querySelector('#madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`