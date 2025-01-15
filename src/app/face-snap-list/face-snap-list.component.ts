/*
  Pour pouvoir utiliser un service dans un component, il faut utiliser le
  système d'injection de dépendances (dependency injection ou DI) que vous
  fournit Angular. C'est très simple : vous passez un argument du type du
  service au constructor du component, et Angular vous mettra à disposition
  la bonne instance du service. Concrètement pour votre application, dans 
  FaceSnapListComponent 
*/
import { FaceSnapService } from './../services/face-snaps.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps !: FaceSnap[]

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {

    //Instances de faceSnap
    this.faceSnaps = this.faceSnapService.getFaceSnaps()
  }
}
