import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Spot } from './spot.model';

export interface SpotState extends EntityState<Spot> {
  key: string;
}

export function createInitialState(): SpotState {
  return {
    key: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'spot' })
export class SpotStore extends EntityStore<SpotState> {
  constructor() {
    super(createInitialState());
  }
}
