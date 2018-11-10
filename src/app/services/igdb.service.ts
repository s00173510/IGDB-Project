import { Injectable } from '@angular/core';
import { IGame } from 'src/models/game-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  gamesMaster: IGame[];   //Master list of games. Holds all currently stored games
  games : IGame[];  //List of games that can be filtered/search & is returned to components

  constructor() { }

  //Returns a list of games
  getGames() {
    return this.games
  }

  //Searches through the master list and puts results in the games list
  searchGames() {

  }

  //For Testing
  addSampleGames() {
    this.gamesMaster = [
      {
        gameID: 'GM1',
        title: 'Mirrors Edge',
        developer: 'DICE',
        publisher: 'EA',
        releaseDate: new Date('2008-10-19T00:00:00'),
        ageRating: [
          {
            type: 'PEGI',
            rating: '18'
          },
          {
            type: 'ESRB',
            rating: 'M'
          }
        ],
        genres: ['Action','First Person','Platformer'],
        platforms: ['PC','Xbox 360','Playstation 3'],
        avgRating: 90,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non eros viverra, fringilla massa rhoncus, dictum nulla. In rhoncus nunc sed ante maximus tincidunt. Praesent ut lectus nisl. Etiam elementum dictum elit at aliquet. Sed vitae vehicula massa, sed luctus velit. Morbi aliquam sodales tempor. Praesent tempus, felis et luctus porttitor, quam lectus elementum nulla, sit amet pretium nisi dolor vel eros. Nulla vestibulum eu velit ac semper. Morbi gravida rhoncus libero, a rhoncus sapien. Morbi non sem a ligula viverra fermentum elementum ac odio. Fusce eget justo eros.'
      },
      {
        gameID: 'GM2',
        title: 'Half Life',
        developer: 'Valve',
        publisher: 'Sierra',
        releaseDate: new Date('1999-08-12T00:00:00'),
        ageRating: [
          {
            type: 'PEGI',
            rating: '18'
          },
          {
            type: 'ESRB',
            rating: 'M'
          }
        ],
        genres: ['Action','First Person','Platformer'],
        platforms: ['PC','Playstation 2','OSX','Linux'],
        avgRating: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non eros viverra, fringilla massa rhoncus, dictum nulla. In rhoncus nunc sed ante maximus tincidunt. Praesent ut lectus nisl. Etiam elementum dictum elit at aliquet. Sed vitae vehicula massa, sed luctus velit. Morbi aliquam sodales tempor. Praesent tempus, felis et luctus porttitor, quam lectus elementum nulla, sit amet pretium nisi dolor vel eros. Nulla vestibulum eu velit ac semper. Morbi gravida rhoncus libero, a rhoncus sapien. Morbi non sem a ligula viverra fermentum elementum ac odio. Fusce eget justo eros.'
      },
      {
        gameID: 'GM3',
        title: 'The Elder Scrolls V: Skyrim',
        developer: 'Bethesda',
        publisher: 'Zenimax',
        releaseDate: new Date('2011-11-11T00:00:00'),
        ageRating: [
          {
            type: 'PEGI',
            rating: '18'
          },
          {
            type: 'ESRB',
            rating: 'M'
          }
        ],
        genres: ['Action','Adventure','First Person','Role Playing'],
        platforms: ['PC','Xbox 360','Xbox One',
                    'Playstation 3','Playstation 4',
                    'Nintendo Switch','Amazon Alexa'],
        avgRating: 80,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non eros viverra, fringilla massa rhoncus, dictum nulla. In rhoncus nunc sed ante maximus tincidunt. Praesent ut lectus nisl. Etiam elementum dictum elit at aliquet. Sed vitae vehicula massa, sed luctus velit. Morbi aliquam sodales tempor. Praesent tempus, felis et luctus porttitor, quam lectus elementum nulla, sit amet pretium nisi dolor vel eros. Nulla vestibulum eu velit ac semper. Morbi gravida rhoncus libero, a rhoncus sapien. Morbi non sem a ligula viverra fermentum elementum ac odio. Fusce eget justo eros.'
      }
    ]

    this.games = this.gamesMaster;
  }
}
