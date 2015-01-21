Package.describe({
  name: 'thepumpinglemma:flat',
  summary: 'Meteor package that wraps the flat NPM package. See https://github.com/hughsk/flat for more details.',
  version: '1.1.0',
  git: 'https://github.com/ThePumpingLemma/meteor-flat.git'
});

Npm.depends({
  'flat': '1.5.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Flat');
  api.addFiles('lib/fake-module.js', ['client']);
  api.addFiles('.npm/package/node_modules/flat/index.js', ['client']);
  api.addFiles('thepumpinglemma:flat.js');
});

