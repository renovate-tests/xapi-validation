const describeInteractionProp = require('../DescribeInteractionProp');
const describeOptionalProp = require('../DescribeOptionalProp');
const {
  languageMap,
  iri,
  extensions,
  interactionType,
  string,
} = require('../Factory');

const validData = {};

module.exports = test => {
  describeOptionalProp('name', languageMap, validData, test);
  describeOptionalProp('description', languageMap, validData, test);
  describeOptionalProp('type', iri, validData, test);
  describeOptionalProp('moreInfo', iri, validData, test);
  describeOptionalProp('extensions', extensions, validData, test);
  describeOptionalProp('interactionType', interactionType, validData, test);
  describeOptionalProp('correctResponsePattern', string, validData, test);

  describeInteractionProp(['choices'], 'choice', test);
  describeInteractionProp(['choices'], 'sequencing', test);
  describeInteractionProp(['scale'], 'likert', test);
  describeInteractionProp(['source', 'target'], 'matching', test);
  describeInteractionProp(['steps'], 'performance', test);

  // invalidComponentsError
};
