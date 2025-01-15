import { SnapType } from './snap-type.type';
//N'hésitez pas à créer vos propres types, sous forme de classe par
// exemple, pour faciliter la manipulation de données dans votre application.

//Une propriété personnalisée est rendue injectable depuis l'extérieur 
// grâce au décorateur  @Input()
export class FaceSnap {
    //cette proprietée est optionnelle 
    // car elle est declaree avec un point d'interrogation. 
    // elle peut etre undefined
    location?: string
    id: string

    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number) {
        this.id = crypto.randomUUID().substring(0, 8)
    }

    onAddSnap(): void {
        this.snaps++
    }

    onDeleteSnap(): void {
        this.snaps--
    }

    //Methode qui gére la logique pour snapper par rapport au type de snap 
    snap(snapType: SnapType) {
        if (snapType === 'snap') {
            this.onAddSnap()
        } else if (snapType === 'unSnap') {
            this.onDeleteSnap()
        }
    }

    //Methode pour ajouter une localisation si il y'en a
    setLocation(localisation: string): void {
        this.location = localisation
    }

    withLocation(localisation: string): FaceSnap {
        this.setLocation(localisation)
        return this
    }
}