let games = [{id:'1', title: 'One', platform: ['Switch']},
{id:'2', title: 'Two', platform: ['Glitch']},
{id:'3', title: 'Three', platform: ['Which']}
]

let authors = [{id:'1', name:'Alpha', verified: true}, 
    {id:'2', name:'Bravo', verified: false},
    {id:'3', name:'Charlie', verified: true}
]

let reviews = [{id:'1', rating:9, content:'lorem ipsum', author_id:'1', game_id:'2'},
    {id:'2', rating:2, content:'ipsum ipsum', author_id:'1', game_id:'1'},
    {id:'3', rating:5, content:'Lorum Lorum Lorum', author_id:'2', game_id:'3'}
]

export default {games, reviews, authors}