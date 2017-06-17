# Drag Race API

An API to retrive information about _RuPaul's Drag Race_ Queens, Seasons and Episodes.

## Queen Endpoints
---
Retrieve an array of all the queens in _RuPaul's Drag Race_ herstory. Limit of 50 queens per request. Defaults to 20.

example request:
GET `https://drag-race.club/api/queens`

example response
```
[
  {
    name: 'Trixie Matel',
    winner: false,
    missCongeniality: false,
    season: {
      id: 1,
      place: 6,
    },
    episodes: [
      {
        label: 'What a fun episode',
        id: 97,
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

___
Create One Queen in the database

example request

POST `https://drag-race.club/api/queens/create`

example request body
```
{
  name: 'Katya',
  image_url: 'katya.jpg',
  seasons: [
    { seasonNumber: 7, place: 4 },
    { seasonNumber: A2, place: 2 },
  ],
  quote: 'I'm a biological female woman.',
  winner: false,
}
```

example response
```
{
  id: 1337,
  name: 'Katya',
  image_url: 'katya.jpg',
  quote: 'I'm a biological female woman.',
  winner: false,
}
```