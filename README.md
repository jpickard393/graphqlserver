query reviewQuery($id: ID!) {
  review(id: $id) {
   rating,
   content
  }
}


query gamesQuery($id: ID!) {
  game(id: $id) {
    title,
    platform
  }
}
