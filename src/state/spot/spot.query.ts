import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { SpotState, SpotStore } from './spot.store';

@Injectable({ providedIn: 'root' })
export class SpotQuery extends QueryEntity<SpotState> {
  getAllState$ = this.selectAll();

  constructor(protected store: SpotStore) {
    super(store);
  }
}
