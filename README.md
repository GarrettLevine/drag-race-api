# Drag Race API

An API to retrive information about _RuPaul's Drag Race_ Queens, Seasons and Episodes.

## Queen Endpoints
---
Retrieve an array of all the queens in _RuPaul's Drag Race_ herstory.

example request:
GET `https://drag-race.club/api/queens`

example response
```
[
  {
    name: 'Trixie Matel',
    winner: false,
    place: 6,
    season: {
      label: 7,
      id: '71231dqd1',
    },
    episodes: [
      {
        label: 'What a fun episode',
        id: '13131',
      },
    ],
    quote: 'Okay, calm down there public school.',
    image_url: 'http://trixie-matel.com/213131.jpg',
  },
  { ... },
]
```
---
Retrieve one queen from the API based on their ID.

example request

GET `https://drag-race.club/api/queens/59034065c3518b376ceed987`

example response:
```
  {
    name: 'Trixie Matel',
    winner: false,
    place: 6,
    season: {
      label: 7,
      id: '71231dqd1',
    },
    episodes: [
      {
        label: 'What a fun episode',
        id: '13131',
      },
    ],
    quote: 'Okay, calm down there public school.',
    image_url: 'http://trixie-matel.com/213131.jpg',
  }
```
