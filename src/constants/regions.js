export const regionTypes = {
  COUNTRY: 0,
  CCAA: 1,
  PROVINCE: 2,
};

export const regionKey = {
  [regionTypes.COUNTRY]: 'countryCode',
  [regionTypes.CCAA]: 'ccaaCode',
};

export const parentRegion = {
  [regionTypes.CCAA]: regionTypes.COUNTRY,
  [regionTypes.PROVINCE]: regionTypes.CCAA,
};

export const regionTypesList = [regionTypes.CCAA, regionTypes.COUNTRY, regionTypes.PROVINCE];
