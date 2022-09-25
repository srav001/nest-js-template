import { IndexService } from './index.service';
export declare class IndexController {
    private readonly indexService;
    constructor(indexService: IndexService);
    getHello(): string;
}
