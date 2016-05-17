import clazz from 'snabbdom/modules/class';
import props from 'snabbdom/modules/props';
import style from 'snabbdom/modules/style';
import lstnr from 'snabbdom/modules/eventlisteners';
import { init } from 'snabbdom';
import F from 'flyd';

const patch = init([ clazz, props, style, lstnr ]);

const binder = (state, action, model) => {
  state.setActions(action);
  model.observe(action.stream);
  state.observe(model.stream);
}

export default (elem, samObj) => {
  binder(samObj.state, samObj.action, samObj.model);

  let root = elem;
  const newV = repr => {
    root = patch(root, repr);
  }
  F.map(newV, samObj.state.stream);
  samObj.state.init();
}
