import {TimeDifference} from './types';

export const oneSecondInMilliseconds = 1000;
export const oneMinuteInMilliseconds = oneSecondInMilliseconds * 60;
export const oneHourInMilliseconds = oneMinuteInMilliseconds * 60;
export const oneDayInMilliseconds = oneHourInMilliseconds * 24;

export const calculateTime = (startTime: number, adjustment: number): number => startTime + adjustment;

export const timeCalculations = (unit: number, numberOfUnits: number): TimeDifference => {
	const now = new Date().valueOf();
	return {
		ago: calculateTime(now, -1 * unit * numberOfUnits),
		before: {
			date: (date: number) => calculateTime(date, -1 * unit * numberOfUnits),
			now: calculateTime(now, -1 * unit * numberOfUnits)
		},
		from: {
			date: (date: number) => calculateTime(date, unit * numberOfUnits),
			now: calculateTime(now, unit * numberOfUnits)
		}
	}
};