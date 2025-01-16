import { SnapType } from '../models/snap-type.type';
/* 
                    ****** PARTAGEZ LES DONNEES *********
    créons un service qui va centraliser toutes les interactions avec les 
    FaceSnaps, afin que tous les éventuels components de votre application 
    dépendent des mêmes données.
    Un service est une classe, et la façon la plus simple de déclarer une classe 
    comme étant un service est d'utiliser le décorateur  @Injectable()  qui 
    s'importe depuis  @angular/core
    L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular
    d'enregistrer ce service à la racine de l'application. Ce sera très 
    souvent le cas pour vos services, car ça permet de s'assurer de n'avoir 
    qu'une seule instance du service, partagée par tous les partis intéressés.
    Il est important de savoir qu'un service n'a pas de méthode  ngOnInit().
*/
import { FaceSnap } from './../models/face-snap';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            'Mbeur',
            'He is my best friend of all times !!!',
            'https://static6.depositphotos.com/1000792/646/v/450/depositphotos_6464182-stock-illustration-two-boys-go-to-school.jpg',
            new Date(),
            160
        ).withLocation('In this word and in paradis'),

        new FaceSnap(
            'Cousin 4',
            'they are my best team of all times !!!',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkNFUeiy5MrMhbF2jhK_qMGpHK-3Rmk2-dA&s',
            new Date(),
            200
        ).withLocation('every where'),

        new FaceSnap(
            'Foot',
            'It is my favorite game of all times !!!',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr56dMjTTikb7JgAZrkRsCgg44fDUedvTHAQ&s',
            new Date(),
            300
        )
    ]

    // Methpode pour afficher/récuper les snaps
    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps]
    }

    // Methode pour afficher/récuper un seul faceSnap en récupérant son id
    getFaceSnapById(faceSnapId: string): FaceSnap{
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)

        if(!foundFaceSnap){
            throw new Error('FaceSnap not found !')
        }
        return foundFaceSnap
    }

    // Methode pour snap un image en récupérant son id 
    snapFaceSnapById(faceSnapId: string, snapType : SnapType) : void {
        const faceSnap = this.getFaceSnapById(faceSnapId)
        faceSnap.snap(snapType)
    }
}