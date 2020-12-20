import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpotStore } from './spot.store';
import { Spot } from './spot.model';
import { tap } from 'rxjs/operators';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class SpotService {
  constructor(
    private spotStore: SpotStore,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  get() {
    return this.http.get<Spot[]>('https://api.com').pipe(
      tap((entities) => {
        this.spotStore.set(entities);
      })
    );
  }

  add(spot: Spot) {
    this.spotStore.add(spot);
  }

  update(id, spot: Partial<Spot>) {
    this.spotStore.update(id, spot);
  }

  remove(id: ID) {
    this.spotStore.remove(id);
  }

  //find all spot from mongodb
  getAllSpot(startTime: number, endTime: number, days: number): any {
    this.spotStore.setLoading(true);
    try {
      return this.http.get(`/api/spot`).subscribe((spot: Spot[]) => {
        console.log(spot);

        this.spotStore.set(spot.map((spot) => this.parseYMD(spot)));
        this.spotStore.setLoading(false);
      });
    } catch (err) {
      console.log(err);
      this.spotStore.setLoading(false);
    }
  }

  parseYMD(spot: Spot) {
    return spot as Spot;
  }
}
