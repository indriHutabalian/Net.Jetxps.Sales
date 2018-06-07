export class ApiResponse<T> {
    T;
}

export class ApiResponseQuery<T> {
    query: PageQuery;
    result: T[];
}

export class PageQuery {
    constructor() {
        this.asc = true;
        this.count = 0;
        this.keyword = '';
        this.orderBy = 'UpdatedDate';
        this.sort = 'DESC';
        this.page = 1;
        this.size = 15;
        this.totalPage = 0;
        this.date = new Date();
    }

    asc: boolean;
    count: number;
    keyword: string;
    orderBy: string;
    sort: string;
    page: number;
    size: number;
    totalPage: number;
    date: Date;
}