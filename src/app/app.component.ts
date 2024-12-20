import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps !: FaceSnap[]

  // mySnap !: FaceSnap
  // myOtherSnap !: FaceSnap
  // myLastSnap !: FaceSnap

  ngOnInit(): void {

    //Instances de faceSnap
    this.faceSnaps = [
      new FaceSnap(
        'Mbeur',
        'He is my best friend of all times !!!',
        'https://static6.depositphotos.com/1000792/646/v/450/depositphotos_6464182-stock-illustration-two-boys-go-to-school.jpg',
        new Date(),
        0
      ),

      new FaceSnap(
        'Cousin 4',
        'they are my best team of all times !!!',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkNFUeiy5MrMhbF2jhK_qMGpHK-3Rmk2-dA&s',
        new Date(),
        0
      ),

      new FaceSnap(
        'Foot',
        'It is my favorite game of all times !!!',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr56dMjTTikb7JgAZrkRsCgg44fDUedvTHAQ&s',
        new Date(),
        0
      )
    ]
    //Ajout d'une localisation à l'instance situé à l'index 1
    this.faceSnaps[1].setLocation('every where')

  }
}
