import get from './get';
import setImmutableObject from './setImmutableObject';

export default (source, path, updateFn) => {
  const previousValue = get(source, path);

  return setImmutableObject(source, path, updateFn(previousValue, path, source));
};
