const scopes = [
  'a11y',
  'accordion',
  'alert',
  'badge',
  'build',
  'button',
  'card',
  'checkbox',
  'datagrid',
  'date-picker',
  'dropdown',
  'form',
  'grid',
  'header',
  'i18n',
  'input',
  'label',
  'list',
  'login',
  'modal',
  'password',
  'progress-bar',
  'radio',
  'select',
  'sidenav',
  'signpost',
  'spinner',
  'stack-view',
  'stepper',
  'table',
  'tabs',
  'textarea',
  'timeline',
  'toggle',
  'tooltip',
  'tree-view',
  'vertical-nav',
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
  },
};
