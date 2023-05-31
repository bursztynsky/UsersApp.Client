import { User } from '../user.model';
import BaseResult from './base-result.model';

export default class UsersResult extends BaseResult {
  public content: User[];

  constructor(message: string, statusCode: number, content: User[]) {
    super(message, statusCode);
    this.content = content;
  }
}
