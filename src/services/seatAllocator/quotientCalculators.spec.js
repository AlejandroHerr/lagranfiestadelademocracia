import {
  dHondtQuotientCalculator,
  saintLagueQuotientCalculator,
  saintLagueModQuotientCalculator,
} from './quotientCalculators';

describe('services/seatAllocator/quotientCalculators', () => {
  describe('dHondtQuotientCalculator', () => {
    it("should calculate the D'Hondt quotient", () => {
      expect(dHondtQuotientCalculator({ seats: 0, votes: 1000 })).toBe(1000);
      expect(dHondtQuotientCalculator({ seats: 1, votes: 1000 })).toBe(500);
    });
  });
  describe('saintLagueQuotientCalculator', () => {
    it('should calculate the Saint-Lague quotient', () => {
      expect(saintLagueQuotientCalculator({ seats: 0, votes: 1000 })).toBe(1000);
      expect(saintLagueQuotientCalculator({ seats: 1, votes: 1000 })).toBe(1000 / 3);
    });
  });
  describe('saintLagueModQuotientCalculator', () => {
    it('should calculate the modified Saint-Lague quotient', () => {
      expect(saintLagueModQuotientCalculator({ seats: 0, votes: 1000 })).toBe(1000 / 1.4);
      expect(saintLagueModQuotientCalculator({ seats: 1, votes: 1000 })).toBe(1000 / 3);
    });
  });
});
