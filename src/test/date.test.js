import {AlexDate} from '../date';

describe('date', () => {
	describe('#AlexDate', () => {
		it('should return the proper object when passed a number', () => {
			//Prepare a list of complex keys the return object should have
			const keys = ['days', 'hours', 'minutes', 'seconds'];

			//Test
			const result = AlexDate(11);
			expect(Object.keys(result).length).toBe(5);
			expect(result).toHaveProperty('now');
			for(const key of keys) {
				expect(result).toHaveProperty(key);
				expect(result[key]).toHaveProperty('ago');
				expect(result[key]).toHaveProperty('before');
				expect(result[key]).toHaveProperty('from');
			}
		});

		it('should throw an error if no input is provided', () => {
			expect(() => AlexDate()).toThrowError('Input must be a number.');
		})

		it('should throw an error if provided input is not a number', () => {
			expect(() => AlexDate('abc')).toThrowError('Input must be a number.');
		})
	});
});