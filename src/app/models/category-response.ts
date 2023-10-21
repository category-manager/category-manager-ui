export class CategoryResponse {
    data!: Map<string, any>;
    id!: string;
    children!: Array<CategoryResponse>;
    _children!: Array<CategoryResponse>;
}
