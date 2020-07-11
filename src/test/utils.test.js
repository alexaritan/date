import {calculateTime, oneDayInMilliseconds, oneHourInMilliseconds, oneMinuteInMilliseconds, oneSecondInMilliseconds, timeCalculations} from '../utils';

describe('utils', () => {
	describe('#calculateTime', () => {
		it('should add the inputs properly', () => {
			expect(calculateTime(11, 8)).toBe(19);
		});

		it('should handle negative numbers', () => {
			expect(calculateTime(11, -8)).toBe(3);
			expect(calculateTime(-11, 8)).toBe(-3);
			expect(calculateTime(-11, -3)).toBe(-14);
		});

		it('should throw an error if no arguments are provided', () => {
			expect(() => calculateTime()).toThrowError('Input startTime must be a number.');
		});

		it('should throw an error if the first argument is not a string', () => {
			expect(() => calculateTime('a')).toThrowError('Input startTime must be a number.');
		});

		it('should throw an error if the second argument is missing', () => {
			expect(() => calculateTime(11)).toThrowError('Input adjustment must be a number.');
		});

		it('should throw an error if the second argument is not a string', () => {
			expect(() => calculateTime(11, 'a')).toThrowError('Input adjustment must be a number.');
		});
	});

	describe('#timeCalculations', () => {
		it('should return the desired object with proper inputs', () => {
			const result = timeCalculations(oneDayInMilliseconds, 11);
			expect(Object.keys(result).length).toBe(3);
			expect(result).toHaveProperty('ago');
			expect(result).toHaveProperty('before');
			expect(result).toHaveProperty('from');
		});

		it('should throw an error when if no arguments are provided', () => {
			expect(() => timeCalculations()).toThrowError('Input unit must be a number.');
		});

		it('should throw an error when the first argument is not a number', () => {
			expect(() => timeCalculations('abc')).toThrowError('Input unit must be a number.');
		});

		it('should throw an error when the second argument is not provided', () => {
			expect(() => timeCalculations(11)).toThrowError('Input numberOfUnits must be a number.');
		});

		it('should throw an error when the second argument is not a number', () => {
			expect(() => timeCalculations(11, 'abc')).toThrowError('Input numberOfUnits must be a number.');
		});

		describe('#ago', () => {
			it('should return the current datetime stamp minus the provided adjustment', () => {
				expect(timeCalculations(oneDayInMilliseconds, 2).ago()).toBe(Date.now() - (oneDayInMilliseconds * 2));
			});
		});

		describe('#before', () => {
			describe('#date', () => {
				it('should return the provided datetime stamp minus the provided adjustment', () => {
					const now = Date.now();
					expect(timeCalculations(oneDayInMilliseconds, 2).before.date(now + oneDayInMilliseconds)).toBe(now - oneDayInMilliseconds);
				});
			});

			describe('#now', () => {
				it('should return the current datetime stamp minus the provided adjustment', () => {
					expect(timeCalculations(oneDayInMilliseconds, 2).before.now()).toBe(Date.now() - (oneDayInMilliseconds * 2));
				});
			});
		});

		describe('#from', () => {
			describe('#date', () => {
				it('should return the provided datetime stamp plus the provided adjustment', () => {
					const now = Date.now();
					expect(timeCalculations(oneDayInMilliseconds, 2).from.date(now - oneDayInMilliseconds)).toBe(now + oneDayInMilliseconds);
				});
			});

			describe('#now', () => {
				it('should return the current datetime stamp plus the provided adjustment', () => {
					expect(timeCalculations(oneDayInMilliseconds, 2).from.now()).toBe(Date.now() + (oneDayInMilliseconds * 2));
				});
			});
		});
	});
});