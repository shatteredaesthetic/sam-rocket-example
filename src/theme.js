import h from 'snabbdom/h';

const reset = actions => (
  h('button', { on: { click: actions.reset } }, [ 'Reset' ])
);

const btnRow = actions => (
  h('div.btn-row', [
    h('button.cfg', { on: { click: actions.inc } }, [ "+" ]),
    h('button.cfg', { on: { click: actions.dec } }, [ "-" ])
  ])
);

const counter = ({ counter }, actions) => {
  return h('div.counter', [
    h('h3.count', [ `Countdown: ${counter}` ]),
    h('button', { on: { click: actions.abort } }, [ 'Abort' ])
  ]);
};

const stopped = ({ counter }, actions) => {
  return h('div.counter', [
    h('div.config', [
      h('h3.count', [ `Countdown: ${counter}` ]),
      btnRow(actions)
    ]),
    h('button', { on: { click: actions.start } }, [ 'Start' ])
  ]);
};

const aborted = actions => h('div.counter', [
  h('h1.count', 'Aborted...'),
  reset(actions)
]);

const launched = actions => h('div.counter', [
  h('h1.count', 'Launched!'),
  reset(actions)
]);

export default { counter, stopped, aborted, launched };
