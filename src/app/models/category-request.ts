export class CategoryRequest {
    requestType!: string;
    categoryId!: string;
    parents!: Set<string>;
    data!: Map<string, any>;
}
