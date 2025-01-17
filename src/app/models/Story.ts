import { StoryCategory } from "./StoryCategory";

export class Story {
    public id: number;
    public title: string;
    public category: StoryCategory;
    public englishTrans: string;
    public banglaTrans: string;

    constructor(id: number, title: string, category: StoryCategory, englishTrans: string,
        banglaTrans: string
    ) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.banglaTrans = banglaTrans;
        this.englishTrans = englishTrans;
    }
}
