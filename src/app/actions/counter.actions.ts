import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  constructor(private store: NgRedux<IAppState>) {}

  increment(): void {
    this.store.dispatch({ type: CounterActions.INCREMENT });
  }

  decrement(): void {
    this.store.dispatch({ type: CounterActions.DECREMENT });
  }
}

