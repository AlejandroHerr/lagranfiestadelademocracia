export default (source, path) => {
  if (path === undefined || path === null) {
    return source;
  }

  if (Array.isArray(path)) {
    return path.reduce(
      (retValue, keyPath) => (retValue === undefined || retValue === null ? retValue : retValue[keyPath]),
      source,
    );
  }

  return source[path];
};
