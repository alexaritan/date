import {TimeDifference} from './types';

export const oneSecondInMilliseconds = 1000;
export const oneMinuteInMilliseconds = oneSecondInMilliseconds * 60;
export const oneHourInMilliseconds = oneMinuteInMilliseconds * 60;
export const oneDayInMilliseconds = oneHourInMilliseconds * 24;

export const calculateTime = (startTime: number, adjustment: number): number => {
	//Check inputs
	if(startTime === undefined || typeof startTime !== 'number') throw new Error('Input startTime must be a number.');
	if(adjustment === undefined || typeof adjustment !== 'number') throw new Error('Input adjustment must be a number.');

	return startTime + adjustment
};

export const timeCalculations = (unit: number, numberOfUnits: number): TimeDifference => {
	//Check inputs
	if(unit === undefined || typeof unit !== 'number') throw new Error('Input unit must be a number.');
	if(numberOfUnits === undefined || typeof numberOfUnits !== 'number') throw new Error('Input numberOfUnits must be a number.');

	const now = Date.now();
	return {
		ago: () => calculateTime(now, -1 * unit * numberOfUnits),
		before: {
			date: (date: number) => calculateTime(date, -1 * unit * numberOfUnits),
			now: () => calculateTime(now, -1 * unit * numberOfUnits)
		},
		from: {
			date: (date: number) => calculateTime(date, unit * numberOfUnits),
			now: () => calculateTime(now, unit * numberOfUnits)
		}
	}
};