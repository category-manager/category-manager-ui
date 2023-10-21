export class Category {
    id!: string;
    data!: any;
    parents!: Set<string>;
    children!: Set<string>;
}
