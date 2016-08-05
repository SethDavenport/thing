import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { IAppState, rootReducer } from './store';
import { CounterActions } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ],
  providers: [ CounterActions ],
})
export class AppComponent {
  title = 'app works!';
  @select() count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {
    ngRedux.configureStore(rootReducer, {});
  }
}
