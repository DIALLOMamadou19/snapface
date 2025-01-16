/**
                  * Naviguez entre les routes en utilisant router
  * Une autre approche pour changer de route dans une application Angular
  * Nous pouvez injecter le Router dans nos components et changer de route programmatiquement.
  * Ça veut dire que nous pouvons déclencher les changements de route depuis des méthodes dans
  * nos components.
  * Pour injecter le Router, c'est aussi simple qu'avec un service. Il se fait 
  * sur un constructor.
  * Maintenant il ne reste plus qu'à appeler la méthode  navigateByUrl()  du 
  * Router depuis la méthode  onContinue(). Et faire appelle au methode 
  * dans le template lorsque l'evenememt souhaité se produit. 
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router: Router){}

  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

}
