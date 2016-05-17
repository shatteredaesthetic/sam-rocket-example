import '../styles.css';
import main from './binder';
import * as action from './actions';
import state from './state';
import model from './model';

main(
  document.querySelector('#app'),
  { state, action, model }
);
