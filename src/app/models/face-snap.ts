//N'hésitez pas à créer vos propres types, sous forme de classe par
// exemple, pour faciliter la manipulation de données dans votre application.

//Une propriété personnalisée est rendue injectable depuis l'extérieur 
// grâce au décorateur  @Input()
export class FaceSnap {
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
}