import {MyDate} from './types';
import {oneDayInMilliseconds, oneHourInMilliseconds, oneMinuteInMilliseconds, oneSecondInMilliseconds, timeCalculations} from './utils';

export const AlexDate = (value: number): MyDate => ({
	days: timeCalculations(oneDayInMilliseconds, value),
	hours: timeCalculations(oneHourInMilliseconds, value),
	minutes: timeCalculations(oneMinuteInMilliseconds, value),
	now: new Date().valueOf(),
	seconds:  timeCalculations(oneSecondInMilliseconds, value)
});