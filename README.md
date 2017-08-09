# Drag Race API

An API to retrive information about _RuPaul's Drag Race_ Queens, Seasons, Episodes, and Challenges.

NOTE: There is rate limit of 100 requests per 15 minutes currently.

### Table of Contents
- <a href="#queens">Queen endpoints</a>
- <a href="#seasons">Seasons endpoints</a>
- <a href="#episodes">Episodes endpoints</a>
- <span href="#challenges">Challenges endpoints</span> <em>...coming soon</em>

---

<h2 id="queens">Queen Endpoints</h2>

### GET a list of Queens
Retrieve an array of queens in _RuPaul's Drag Race_ herstory. Limit of 50 queens per request. Defaults to 20.

|Params |Example |Default|
|-|-:|-:|
|Limit |50| 25|
|Offset| 25| 0|

_example request:_
GET `http://www.nokeynoshade.party/api/queens?limit=50`

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

GET `http://www.nokeynoshade.party/api/queens/12`

example response:
```JS
  {
    name: 'Trixie Matel',
    winner: false,
    missCongeniality: false,
    seasons: [gi
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

`http://www.nokeynoshade.party/api/queens/winners`

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

`http://www.nokeynoshade.party/api/queens/congeniality`

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
GET `http://www.nokeynoshade.party/api/seasons`

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
GET `http://www.nokeynoshade.party/api/seasons/1`

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

### Get all queens in a season

Get all queens that appeared in a season based on the season ID.

_example request:_
GET `http://www.nokeynoshade.party/api/seasons/1/queens`

_example response:_
```JS
  {
    [
      {
        "id": 1,
        "name": "Victoria 'Porkchop' Parker",
        "winner": false,
        "missCongeniality": false,
        "image_url": "https://vignette3.wikia.nocookie.net/logosrupaulsdragrace/images/5/50/Victoria_Parker.jpg",
        "quote": "Would you fuck me? I'd fuck me.",
        "seasons": [
          {
            "seasonNumber": "1",
            "seasonId": 1,
            "place": 9
          }
        ]
      },
      { ... }
    ]
  }
```
___
<h2 id="episodes">Episodes Endpoints</h2>

### Get all episodes
Get a list of episodes in the entire herstory.

|Params |Example |Default|
|-|-:|-:|
|Limit |50| 25|
|Offset| 25| 0|

_example request:_
GET `http://www.nokeynoshade.party/api/episodes`

_example response:_
```JS
  {
    [
      {
       "id": 1,
       "title": "Drag on A Dime",
       "episodeInSeason": 1,
       "seasonId": 1,
       "airDate": "2009-02-02",
      },
      { ... }
    ]
  }
```

### Get episode by ID

Get an epiosde by a specific ID

_example request:_
GET `http://www.nokeynoshade.party/api/1`

_example response:_
```JS
  {
    "id": 1,
    "title": "Drag on A Dime",
    "episodeInSeason": 1,
    "seasonId": 1,
    "airDate": "2009-02-02",
  },
```

### GET all episodes in a season

Get all the episodes in a specific season

_example request:_
GET `http://www.nokeynoshade.party/api/seasons/1/episodes`

_example response:_
```JS
  {
    [
      {
       "id": 1,
       "title": "Drag on A Dime",
       "episodeInSeason": 1,
       "seasonId": 1,
       "airDate": "2009-02-02",
      },
      { ... }
    ]
  }
```

### GET all episodes a queen has been on

Get all the episodes in a specific queen

_example request:_
GET `http://www.nokeynoshade.party/api/queens/1/episodes`

_example response:_
```JS
  {
    [
      {
       "id": 1,
       "title": "Drag on A Dime",
       "episodeInSeason": 1,
       "seasonId": 1,
       "airDate": "2009-02-02",
      },
      { ... }
    ]
  }
```

