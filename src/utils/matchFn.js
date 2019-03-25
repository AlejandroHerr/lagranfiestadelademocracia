import get from './get';

export default (matchValue, matchKey) => value => get(value, matchKey) === matchValue;
