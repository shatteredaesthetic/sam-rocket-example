import F from 'flyd';
import T from 'union-type';
import { Actions } from './actions';

const COUNTER_MAX = 10;

let model = {
  counter: COUNTER_MAX,
  max: COUNTER_MAX,
  status: 'stopped'
};

const stream = F.stream(0);

const present = action => {
  Actions.case({
    start: () => { model = { ...model, status: 'started' } },
    abort: () => { model = { ...model, status: 'aborted' } },
    launch: () => { model = { ...model,  status: 'launched' } },
    reset: () => { model = { ...model, status: 'stopped', counter: model.max } },
    dec: () => { model = { ...model, counter: --model.counter } },
    inc: () => { model = { ...model, counter: ++model.counter } }
  }, action);
  stream(model);
};

const observe = actions => {
  F.map(present, actions);
};

export default { stream, observe };
