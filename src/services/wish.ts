import IWish from 'interfaces/models/wish';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class WishService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IWish>> {
    return this.apiService.get('/wish', params);
  }

  public current(): Observable<IWish> {
    return this.apiService.get('/wish/current');
  }

  public save(model: Partial<IWish>): Observable<IWish> {
    console.log(model);

    return this.apiService.post('/wish', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/wish/${id}`);
  }
}

const userService = new WishService(apiService);
export default userService;
