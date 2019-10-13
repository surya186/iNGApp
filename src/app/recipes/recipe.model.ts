export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(nam: string, desc: string, imgPath: string) {
        this.name = nam;
        this.description = desc;
        this.imagePath = imgPath;

    }
}