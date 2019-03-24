const fs = require('fs');

const get = (source, path) => {
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
const matchFn = (matchValue, matchKey) => value => get(value, matchKey) === matchValue;
const readFile = (...args) =>
  new Promise((resolve, reject) => {
    fs.readFile(...args, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

const writeFile = (...args) =>
  new Promise((resolve, reject) => {
    fs.writeFile(...args, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

const main = async () => {
  const rawRegions = await readFile('./src/data/newRegions.json', 'utf-8');
  const regions = JSON.parse(rawRegions);

  const rawResults = await readFile('./src/data/newResults.json', 'utf-8');
  const results = JSON.parse(rawResults);

  const provinces = regions.filter(matchFn(2, 'type'));
  const ccaas = regions.filter(matchFn(1, 'type')).map(ccaa => ({
    id: ccaa.id,
    provinces: provinces.filter(matchFn(ccaa.id, 'ccaaCode')).map(({ id }) => id),
  }));

  console.log(ccaas);
  // const newResults = results.map(({ id, regionId, data, parties, ...result }) => {
  //   const region = newRegions.find(reg => reg.oldId === regionId);
  //   return {
  //     ...result,
  //     regionId: region.id,
  //     id: region.id,
  //     electoralData: data,
  //     resultsByParty: parties,
  //   };
  // });

  // await writeFile('./src/data/newRegions.json', JSON.stringify(newRegions, null, 2));
  // await writeFile('./src/data/newResults.json', JSON.stringify(newResults, null, 2));
};

main();
