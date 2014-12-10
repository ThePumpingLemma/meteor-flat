if (Meteor.isClient) {
  Flat = {
    'flatten': module.exports.flatten,
    'unflatten': module.exports.unflatten
  };
} else {
  Flat = Npm.require('flat');
}

