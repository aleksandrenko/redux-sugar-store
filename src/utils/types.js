import NOT_ALLOWED_TYPES from './disallowed';

/**
 * Get all types
 * @param {Array} reducers - an array with all reducers
 * @returns {Array} types - an array with the names of all redusers
 */
export default (reducers) => reducers.reduce((acc, reducer) => {
  const type = Object.keys(reducer)[0];
  const NOT_EXISTING_INDEX = -1;

  if (NOT_ALLOWED_TYPES.indexOf(type.toLowerCase()) !== NOT_EXISTING_INDEX) {
    throw Error(`rdxStore can not accept reducer named "${type}".`);
  }

  acc.push(type);

  return acc;
}, []);

