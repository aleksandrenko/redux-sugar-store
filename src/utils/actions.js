/**
 * generateActions
 * @param {Array} types - An array with all reducers
 * @returns {Object} Actions
 */
export default (types) => types.reduce((actions, type) => {
  actions[type] = (payload) => ({
    type,
    payload
  });

  return actions;
}, {});
