/**
                * Naviguez entre les routes en utilisant routerlink
  * Il faut ajouter l'import RouterLink dépuis @angular/router dans le fichier Ts
  * Puis aller dans le template et ajouter la chaîne de caractères (url) qui correspond à la route 
  * vers laquelle on veut se diriger. 
  * par exemple : <a routerLink="facesnaps">FACESNAPS</a> 
  *  
  * Mais avant tout il faut ajouter la route dans app.routes.ts.
  * 
  * L'extension  RouterLinkActive  que vous avez importé permet d'attribuer 
  * une classe CSS au lien quand sa route est la route active. En fait, 
  * une route est considérée comme étant active lorsqu'elle-même ou l'un 
  * de ses enfants est la route sélectionnée.                
 */
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
