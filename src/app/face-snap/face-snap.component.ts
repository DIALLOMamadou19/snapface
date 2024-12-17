import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',  //balise html personnalisée qu'on utisera pour inserer 
                              // le contenu html de ce compenent dans d'autre components
  imports: [], //tableau d'import des dépendances
  templateUrl: './face-snap.component.html', //indique le fichier template
  styleUrl: './face-snap.component.scss' // indique le fichier style du component
})
export class FaceSnapComponent implements OnInit{  
  // déclaration d'attribut de class. 
  // ! ->  un bang, Pour "promettre" à TypeScript qu'on va les (attributs) initialiser plutard
  // Pour initialiser ces propriétés , nous allons utiliser la méthode  ngOnInit(). 
  // Pour l'utiliser, votre component doit implémenter l'interface  OnInit
  title !: string
  description !: string
  imageUrl !: string
  createdAt !: Date
  snaps !: number
  //On va maintenant initialiser les quatre propriétés dans la méthode  ngOnInit()
  ngOnInit(): void {
    this.title = 'Mbeur'
    this.description = 'He is my best friend of all times !!!'
    this.imageUrl = 'https://static6.depositphotos.com/1000792/646/v/450/depositphotos_6464182-stock-illustration-two-boys-go-to-school.jpg'
    this.createdAt = new Date()
    this.snaps = 0
  }
}
