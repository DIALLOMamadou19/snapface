//N'hésitez pas à créer vos propres types, sous forme de classe par
// exemple, pour faciliter la manipulation de données dans votre application.

//Une propriété personnalisée est rendue injectable depuis l'extérieur 
// grâce au décorateur  @Input()
export class FaceSnap {
    //cette proprietée est optionnelle 
    // car elle est declaree avec un point d'interrogation. 
    // elle peut etre undefined
    location ?: string 

    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number) {

    }

    onAddSnap(): void {
        this.snaps++
    }

    onDeleteSnap(): void {
        this.snaps--
    }
    
    //Methode pour ajouter une localisation si il y'en a
    setLocation(localisation : string) : void {
        this.location = localisation
    }
}