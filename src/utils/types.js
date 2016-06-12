import NOT_ALLOWED_TYPES from './disallowed';

/**
 * Get all types
 * @param {Array} reducers - an array with all reducers
 * @returns {Array} types - an array with the names of all redusers
 */
export default (reducers) => reducers.reduce((acc, reducer) => {
  const type = Object.keys(reducer)[0];

  if (NOT_ALLOWED_TYPES.indexOf(type.toLowerCase()) !== -1) {
    throw Error(`rdxStore can not accept reducer named "${type}".`);
  }

  acc.push(type);

  return acc;
}, []);

