const basicSet = (source, key, value) => ({
  ...source,
  [key]: value,
});

const setImmutableObject = (source, path, value) => {
  if (!Array.isArray(path)) {
    return basicSet(source, path, value);
  }

  if (path.length === 1) {
    return basicSet(source, path[0], value);
  }

  return {
    ...source,
    [path[0]]: setImmutableObject(source[path[0]], path.slice(1), value),
  };
};

export default setImmutableObject;
