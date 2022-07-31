import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  test(): string {
    return 'Hello!';
  }
}
