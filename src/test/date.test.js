import {exactDate} from '../date';
import {oneDayInMilliseconds} from '../constants';

describe('date', () => {
	describe('#exactDate', () => {
		it('should throw an error if an invalid object is provided to the exactDate function', () => {
			expect(() => exactDate({someFunction: ''})).toThrowError();
		});
	});

	describe('AlexDate', () => {
		let exactly;
		const dateFake = {
			now() {return 1603754192138}
		};
		beforeAll(() => {
			exactly = exactDate(dateFake);
		});

		describe('#constructor', () => {
			it('should throw an error when no number is passed in', () => {
				expect(() => exactly()).toThrowError('Value must be provided to constructor.');
			});

			it('should throw an error when a non-number is passed in', () => {
				expect(() => exactly('abc')).toThrowError('Value provided to constructor must be a number.');
			});
		});

		describe('#after', () => {
			it('should set the adjustment multiplier to 1', () => {
				const d = exactly(1).day.after.now();
				expect(d).toBeGreaterThan(dateFake.now());
			});
		});

		describe('#ago', () => {
			it('should subtract the provided number of provided units from the current date', () => {
				const d = exactly(1).day.ago();
				expect(d).toBeLessThan(dateFake.now());
			});

			it('should throw an error when no unit of time is provided', () => {
				expect(() => exactly(1).ago()).toThrowError('Method "ago" cannot be called before specifying unit of time.');
			});
		});

		describe('#before', () => {
			it('should set the adjustment multiplier to -1', () => {
				const d = exactly(1).day.before.now();
				expect(d).toBeLessThan(dateFake.now());
			});
		});

		describe('#date', () => {
			it('should subtract the given number of units to the current datetime when units and adjustment multiplier are provided', () => {
				const now = dateFake.now();
				const d = exactly(1).day.before.date(now);

				//Account for the possible very slight difference in time between two datetime calculations.
				expect(now - d).toEqual(oneDayInMilliseconds);
			});

			it('should throw an error when no unit of time is provided', () => {
				expect(() => exactly(1).date(dateFake.now())).toThrowError('Method "date" cannot be called before specifying unit of time.')
			});

			it('should throw an error when no adjustment multiplier is provided', () => {
				expect(() => exactly(1).day.date(dateFake.now())).toThrowError('Method "date" cannot be called before specifying whether before or after.');
			});

			it('should throw an error when the input is now a number', () => {
				expect(() => exactly(1).day.before.date('my birthday')).toThrowError('Date must be passed in as a number.');
			});
		});

		// describe('#day', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).day).toBeInstanceOf(AlexDate);
		// 	});
		// });

		// describe('#days', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).days).toBeInstanceOf(AlexDate);
		// 	});
		// });

		describe('#from', () => {
			it('should set the adjustment multiplier to 1', () => {
				const d = exactly(1).day.from.now();
				expect(d).toBeGreaterThan(dateFake.now());
			});
		});

		// describe('#hour', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).hour).toBeInstanceOf(AlexDate);
		// 	});
		// });

		// describe('#hours', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).hours).toBeInstanceOf(AlexDate);
		// 	});
		// });

		// describe('#minute', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).minute).toBeInstanceOf(AlexDate);
		// 	});
		// });

		// describe('#minutes', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).minutes).toBeInstanceOf(AlexDate);
		// 	});
		// });

		describe('#now', () => {
			it('should subtract the given number of units to the current datetime when units and adjustment multiplier are provided', () => {
				const now = dateFake.now();
				const d = exactly(1).day.before.now();

				//Account for the possible very slight difference in time between two datetime calculations.
				expect(now - d).toEqual(oneDayInMilliseconds);
			});

			it('should throw an error when no unit of time is provided', () => {
				expect(() => exactly(1).now()).toThrowError('Method "now" cannot be called before specifying unit of time.')
			});

			it('should throw an error when no adjustment multiplier is provided', () => {
				expect(() => exactly(1).day.now()).toThrowError('Method "now" cannot be called before specifying whether before or after.');
			});
		});

		// describe('#second', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).second).toBeInstanceOf(AlexDate);
		// 	});
		// });

		// describe('#seconds', () => {
		// 	it('should set the unit of time', () => {
		// 		expect(exactly(1).seconds).toBeInstanceOf(AlexDate);
		// 	});
		// });
	});
});