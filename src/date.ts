import {MyDate} from './types';
import {oneDayInMilliseconds, oneHourInMilliseconds, oneMinuteInMilliseconds, oneSecondInMilliseconds} from './constants';

class AlexDate implements MyDate {

	after: AlexDate = this;
	ago: () => number;
	before: AlexDate = this;
	date: (date: number) => number;
	#dateAPI: {now: () => number};
	day: AlexDate = this;
	days: AlexDate = this;
	from: AlexDate = this;
	hour: AlexDate = this;
	hours: AlexDate = this;
	minute: AlexDate = this;
	minutes: AlexDate = this;
	now: () => number;
	second: AlexDate = this;
	seconds: AlexDate = this;

	constructor(value: number, dateAPI: {now: () => number}) {
		//Check inputs.
		if(value === undefined) throw new Error('Value must be provided to constructor.');
		if(typeof value !== 'number') throw new Error('Value provided to constructor must be a number.');

		let unit: number;
		let plusMinus: number;

		this.ago = () => {
			if(unit === undefined) throw new Error ('Method "ago" cannot be called before specifying unit of time.');
			return this.#dateAPI.now() - (value * unit);
		};

		this.date = (date: number) => {
			if(unit === undefined) throw new Error ('Method "date" cannot be called before specifying unit of time.');
			if(plusMinus === undefined) throw new Error ('Method "date" cannot be called before specifying whether before or after.');
			if(typeof date !== 'number') throw new Error('Date must be passed in as a number.');
			return date + (plusMinus * value * unit);
		};

		this.#dateAPI = dateAPI;

		this.now = () => {
			if(unit === undefined) throw new Error ('Method "now" cannot be called before specifying unit of time.');
			if(plusMinus === undefined) throw new Error ('Method "now" cannot be called before specifying whether before or after.');
			return this.#dateAPI.now() + (plusMinus * value * unit);
		};

		//These have to be defined like this in order for them to act as functions without needing to be called as a function.
		//For example, d(3).days.ago() (what I want) vs d(3).days().ago() (what I don't want).
		Object.defineProperty(this, 'after', {
			get() {
				plusMinus = 1;
				return this;
			}
		});
		
		Object.defineProperty(this, 'before', {
			get() {
				plusMinus = -1;
				return this;
			}
		});

		Object.defineProperty(this, 'day', {
			get() {
				unit = oneDayInMilliseconds;
				return this;
			}
		});

		Object.defineProperty(this, 'days', {
			get() {
				unit = oneDayInMilliseconds;
				return this;
			}
		});

		Object.defineProperty(this, 'from', {
			get() {
				plusMinus = 1;
				return this;
			}
		});

		Object.defineProperty(this, 'hour', {
			get() {
				unit = oneHourInMilliseconds;
				return this;
			}
		});

		Object.defineProperty(this, 'hours', {
			get() {
				unit = oneHourInMilliseconds;
				return this;
			}
		});

		Object.defineProperty(this, 'minute', {
			get() {
				unit = oneMinuteInMilliseconds;
				return this;
			}
		});

		Object.defineProperty(this, 'minutes', {
			get() {
				unit = oneMinuteInMilliseconds;
				return this;
			}
		});

		Object.defineProperty(this, 'second', {
			get() {
				unit = oneSecondInMilliseconds;
				return this;
			}
		});

		Object.defineProperty(this, 'seconds', {
			get() {
				unit = oneSecondInMilliseconds;
				return this;
			}
		});
	}

}

export const exactDate = (dateAPI: {now: () => number} = Date): (value: number) => AlexDate => {
	if(dateAPI && !dateAPI.now) {
		throw new Error('Provided parameter must implement a `now()` function that returns a number. It is recommended that you do not pass anything in - just let it default to the built in Date library!');
	}

	return function(value: number): AlexDate {
		return new AlexDate(value, dateAPI);
	};
};