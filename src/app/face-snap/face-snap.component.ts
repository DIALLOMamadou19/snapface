import { FaceSnap } from './../models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',  //balise html personnalisée qu'on utisera pour inserer 
  // le contenu html de ce compenent dans d'autre components
  imports: [], //tableau d'import des dépendances
  templateUrl: './face-snap.component.html', //indique le fichier template
  styleUrl: './face-snap.component.scss' // indique le fichier style du component
})
export class FaceSnapComponent implements OnInit {
  //Pour qu'une propriété puisse être injectée depuis l'extérieur d'un 
  // component, il faut lui ajouter le décorateur  @Input(). 
  // @Input()  crée comme un attribut HTML auquel on peut lier une valeur, 
  // tout comme vous l'avez fait avec l'attribut  src  de l'élément image !
  // Créez maintenant une propriété  faceSnap  de type  FaceSnap  
  // (votre nouveau type !) et mettez-lui ce décorateur
  @Input() faceSnap !: FaceSnap

  // déclaration d'attribut de class. 
  // ! ->  un bang, Pour "promettre" à TypeScript qu'on va les (attributs) initialiser plutard
  // Pour initialiser ces propriétés , nous allons utiliser la méthode  ngOnInit(). 
  // Pour l'utiliser, votre component doit implémenter l'interface  OnInit
  buttonText !: string
  userHasSnapped !: boolean
  //On va maintenant initialiser les quatre propriétés dans la méthode  ngOnInit()
  ngOnInit(): void {

    this.buttonText = 'Oh, Snap!'
    this.userHasSnapped = false
  }

  // Methode pour 
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap()
    } else {
      this.snap()
    }
  }
  snap() {
    this.faceSnap.onDeleteSnap()
    this.buttonText = 'Oops, UnSnap!'
    this.userHasSnapped = true
  }
  unSnap() {
    this.faceSnap.onAddSnap()
    this.buttonText = 'Oh, Snap!'
    this.userHasSnapped = false
  }
}
