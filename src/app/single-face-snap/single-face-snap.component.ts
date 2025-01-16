/**
 * Afin de récupérer les informations de la route activée, vous allez injecterActivatedRoutedans 
 * SingleFaceSnapComponent, sans oublier d'enlever le décorateur  @Input()  de la propriété  faceSnap
 * Ensuite, dans  ngOnInit(), vous allez pouvoir récupérer le paramètre  id  via le snapshot de la route
 * (un snapshot est un aperçu instantané d'une valeur qui change au cours du temps)
 * Afin de pouvoir récupérer un FaceSnap par son id, je vous propose d'ajouter une méthode à FaceSnapsService, 
 * en refactorisant snapFaceSnapById par la même occasion.
 * Du coup, depuis SingleFaceSnapComponent, vous pouvez appeler la méthode  getFaceSnapById()  du service pour
 * récupérer le FaceSnap correspondant à l'  id  récupéré
 */
import { FaceSnapService } from '../services/face-snaps.service';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',  // balise html personnalisée qu'on utisera pour inserer 
  // le contenu html de ce compenent dans d'autre components
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink], //tableau d'import des dépendances
  templateUrl: './single-face-snap.component.html', //indique le fichier template
  styleUrl: './single-face-snap.component.scss' // indique le fichier style du component
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap !: FaceSnap
  buttonText !: string
  userHasSnapped !: boolean

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.prepareInterface()
    this.getFaceSnap()
  }

  // Methode pour voir si un image est snapper ou pas et le snap ou le unsnap
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap()
    } else {
      this.snap()
    }
  }

  // Methode pour ajouter un snap
  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
    this.buttonText = 'Oops, UnSnap!'
    this.userHasSnapped = true
  }

  // Methode pour enlever un snap
  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap')
    this.buttonText = 'Oh, Snap!'
    this.userHasSnapped = false
  }

  // Methode pour initialiser le comportement du bouton pour snap ou unsnap et si le user a snappé ou pas 
  private prepareInterface() {
    this.buttonText = 'Oh, Snap!'
    this.userHasSnapped = false
  }

  // Methode pour récupérer un faceSnap par son id
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId)
  }
}
