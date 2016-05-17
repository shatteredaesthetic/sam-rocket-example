import F from 'flyd';
import theme from './theme';

const stream = F.stream();

let _actions;
const setActions = (actions) => _actions = actions;

const representation = model => {
  switch (model.status) {
    case 'stopped':
      stream(theme.stopped(model, _actions)); break;
    case 'aborted':
      stream(theme.aborted(_actions)); break;
    case 'started':
      stream(theme.counter(model, _actions)); break;
    case 'launched':
      stream(theme.launched(_actions)); break;
  }
};

const nap = model => {
  if (model.status === 'started') {
    if (model.counter === 0) _actions.launch();
    if (model.counter > 0) setTimeout(() => _actions.dec(), 1000);
  }
};

const render = model => {
  console.log(model);
  representation(model);
  nap(model);
};

const observe = model => {
  F.map(render, model);
};

const init = () => {
  stream(theme.stopped({ counter: 10 }, _actions));
};

export default { stream, observe, init, setActions };
