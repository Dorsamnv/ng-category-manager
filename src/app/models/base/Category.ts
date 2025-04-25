export class Category {
    constructor(
        public id: number,
        public name: string,
        public slug: string,
        public image: string,
        public createdAt: Date,
        public updatedAt :Date
    ) {}
}
