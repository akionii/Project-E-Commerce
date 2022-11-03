import createSchema from 'part:@sanity/base/schema-creator'; // First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type'; // Then import schema types from any plugins that might expose them
import product from './product';
import banner from './banner';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([ product, banner ]),
})