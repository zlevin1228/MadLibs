let athlete1 = prompt('(1/22) Enter an NFL player:')
let athlete2 = prompt('(2/22) Enter an NHL player:')
let ingverb = prompt('(3/22) Enter an -ing verb:')
let noun1 = prompt('(4/22) Enter a place:')
let adjective1 = prompt('(5/22) Enter an adjective:')
let noun2 = prompt('(6/22) Enter an idea (noun):')
let sport1 = prompt('(7/22) Enter a sport:')
let athlete3 = prompt('(8/22) Enter an NBA player:')
let athlete4 = prompt('(9/22) Enter an MLB player:')
let adjective2 = prompt('(10/22) Enter an adjective:')
let verb1 = prompt('(11/22) Enter a verb:')
let food1 = prompt('(12/22) Enter a food:')
let team1 = prompt('(13/22) Enter a sports team:')
let team2 = prompt('(14/22) Enter a sports team:')
let coach1 = prompt('(15/22) Enter a person:')
let noun3 = prompt('(16/22) Enter a plural noun:')
let adjective3 = prompt('(17/22) Enter an adjective:')
let adjective4 = prompt('(18/22) Enter an adjective:')
let edverb = prompt('(19/22) Enter an -ed verb:')
let noun4 = prompt('(20/22) Enter a plural noun')
let adjective5 = prompt('(21/22) Enter an adjective')
let verb2 = prompt('(22/22) Enter a verb')

let story = `In the year 2024, there was a Christmas that was like no other. The biggest headline of December involved ${athlete1} and ${athlete2}, who became known for their infamous journey that most importantly involved ${ingverb}. To begin their adventure, ${athlete1} and ${athlete2} took a journey to (the) ${noun1}. They had a(n) ${adjective1} ${noun2} there. They then continued on with their day where they went to the ${sport1} event. They met up with their friends ${athlete3} and ${athlete4}. They watched and began to have a(n) ${adjective2} time where they ${verb1} ${food1}. All of a sudden, halfway through the game, the ${team1}, who were facing ${team2}, were down a significant score. Their coach, ${coach1} had the idea to ask ${noun3} to join in the game to help them win! It was ${adjective3}! It gave the ${team1} the help they needed to win the game and take down the ${team2}. The people who were selected happened to be ${athlete1}, ${athlete2}, ${athlete3}, and ${athlete4}! Their performances were ${adjective4}! They then were able to sign a one-day deal with the team with conditions where they ${edverb} ${noun4}. They became the most ${adjective5} people on the planet! The news spread and they became a very relevant topic. Christmas then came around and they came up with a new idea to ${verb2} gifts with one another! This headline also made the news, and ${athlete1}, ${athlete2}, ${athlete3}, and ${athlete4} became everyone's favorite sports players. They knew they had revolutionized Christmas forever, all because ${coach1} made them even more famous than they already were! They had reinvented Christmas forever!`;

let madLibOutputDiv = document.getElementById('madLibOutput');
madLibOutputDiv.innerHTML = `<p>${story}</p>`;