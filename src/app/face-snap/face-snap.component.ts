import { UpperCasePipe } from '@angular/common';
import { FaceSnap } from './../models/face-snap';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',  // balise html personnalisée qu'on utisera pour inserer 
  // le contenu html de ce compenent dans d'autre components
  imports: [UpperCasePipe], //tableau d'import des dépendances
  templateUrl: './face-snap.component.html', //indique le fichier template
  styleUrl: './face-snap.component.scss' // indique le fichier style du component
})
export class FaceSnapComponent {
  
  //Pour qu'une propriété puisse être injectée depuis l'extérieur d'un 
  // component, il faut lui ajouter le décorateur  @Input(). 
  // @Input()  crée comme un attribut HTML auquel on peut lier une valeur, 
  // tout comme vous l'avez fait avec l'attribut  src  de l'élément image !
  // Créez maintenant une propriété  faceSnap  de type  FaceSnap  
  // (votre nouveau type !) et mettez-lui ce décorateur
  @Input() faceSnap !: FaceSnap

  constructor(private route: Router) { }

  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
