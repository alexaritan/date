export interface MyDate {
	days: TimeDifference,
	hours: TimeDifference,
	minutes: TimeDifference,
	now: number,
	seconds: TimeDifference
}

export interface TimeDifference {
	ago: number,
	before: {
		date(date: number): number,
		now: number
	},
	from: {
		date(date: number): number,
		now: number
	}
}