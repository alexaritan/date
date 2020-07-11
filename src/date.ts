import {MyDate} from './types';
import {oneDayInMilliseconds, oneHourInMilliseconds, oneMinuteInMilliseconds, oneSecondInMilliseconds, timeCalculations} from './utils';

export const AlexDate = (value: number): MyDate => {
	//Check input.
	if(value === undefined || typeof value !== 'number') throw new Error('Input must be a number.');

	return {
		days: timeCalculations(oneDayInMilliseconds, value),
		hours: timeCalculations(oneHourInMilliseconds, value),
		minutes: timeCalculations(oneMinuteInMilliseconds, value),
		now: () => Date.now(),
		seconds:  timeCalculations(oneSecondInMilliseconds, value)
	};
};