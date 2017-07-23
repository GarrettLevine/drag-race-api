# Drag Race API

An API to retrive information about _RuPaul's Drag Race_ Queens, Seasons, Episodes, and Challenges.

NOTE: There is rate limit of 100 requests per 15 minutes currently.

### Table of Contents
- <a href="#queens">Queen endpoints</a>
- <a href="#seasons">Seasons endpoints</a>
- <span href="#episodes">Episodes endpoints</span> <em>...coming soon</em>
- <span href="#challenges">Challenges endpoints</span> <em>...coming soon</em>

---

<h2 id="queens">Queen Endpoints</h2>

|Params |Example |
|-|-:|
|Limit |50|
|Offset| 0|

### GET a list of Queens
Retrieve an array of queens in _RuPaul's Drag Race_ herstory. Limit of 50 queens per request. Defaults to 20.

_example request:_
GET `https://drag-race-api.herokuapp.com/api/queens?limit=50`

_example response:_
```JS
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
## GET one queen
Retrieve one queen from the API based on their ID.

_example request_

GET `https://drag-race-api.herokuapp.com/api/queens/12`

example response:
```JS
  {
    name: 'Trixie Matel',
    winner: false,
    missCongeniality: false,
    seasons: [
      {
        id: 1,
        place: 6,
      },
    ],
    episodes: [
      {
        label: 'What a fun episode',
        id: 97,
      },
    ],
    quote: 'Okay, calm down there public school.',
    image_url: 'http://trixie-matel.com/213131.jpg',
  }
```
___
### Get all the winners

Retrive an array of all the winners of _Rupaul's Drag Race_ herstory.

_example request:_

`https://drag-race-api.herokuapp.com/api/queens/winners`

_example response:_
```JS
[
  {
    name: 'Bianca Del Rio.',
    winner: true,
    missCongeniality: false,
    season: {
      id: 7,
      place: 1,
    },
    episodes: [
      {
        label: 'What a fun episode',
        id: 97,
      },
    ],
    quote: "I'll show you versatility when Santino wins a sewing compitetion and Visage wears a fucking turtle neck.",
    image_url: 'http://bianca-del-rio.com/213131.jpg',
  },
  { ... },
]
```
___
### Get all Miss Congenialities

Retrive an array of Queens who have won Miss Congeniality/fan favourite.

_example request:_

`https://drag-race-api.herokuapp.com/api/queens/congeniality`

_example response:_
```JS
[
  {
    name: 'Latrice Royale',
    winner: false,
    missCongeniality: true,
    season: {
      id: 4,
      place: 8,
    },
    episodes: [
      {
        label: 'What a fun episode',
        id: 97,
      },
    ],
    quote: "Jesus is a biscuit, let him sop you up.",
    image_url: 'http://latrice-royal.com/213131.jpg',
  },
  { ... },
]
```
___

<h2 id="seasons">Seasons</h2>

### Get all the seasons

Get all seasons from _RuPaul's Drag Race_ herstory.

_example request:_
GET `https://drag-race-api.herokuapp.com/api/seasons`

_example response:_
```JS
  [
    {
      id: 1,
      seasonNumber: "01",
      winnerId: 9,
      image_url: 'www.smwo.com/werw.jpg',
      queens: [
        {
          id: 1,
          name: 'Victoria Porkchop Partner',
          place: 9,
        },
        {...},
      ],
      episodes: [ {...}, {...} ]
    },
    {...}
  ]
```

### Get Season

Get an individual season based on the ID.

_example request:_
GET `https://drag-race-api.herokuapp.com/api/seasons/1`

_example response:_
```JS
  {
    id: 1,
    seasonNumber: "01",
    winnerId: 9,
    image_url: 'www.smwo.com/werw.jpg',
    queens: [
      {
        id: 1,
        name: 'Victoria Porkchop Partner',
        place: 9,
      },
      {...},
    ],
    episodes: [ {...}, {...} ]
  }
```