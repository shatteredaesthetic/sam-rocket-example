import T from 'union-type';
import F from 'flyd';

export const stream = F.stream();

export const Actions = T({
  start: [], abort: [], dec: [], launch: [], reset: [], inc: []
});

export const start = () => stream(Actions.start());
export const abort = () => stream(Actions.abort());
export const launch = () => stream(Actions.launch());
export const reset = () => stream(Actions.reset());
export const dec = () => stream(Actions.dec());
export const inc = () => stream(Actions.inc());
