export interface MyDate {
	after: MyDate,
	ago(): number,
	before: MyDate,
	date(date: number): number,
	day: MyDate,
	days: MyDate,
	from: MyDate,
	hour: MyDate,
	hours: MyDate,
	minute: MyDate,
	minutes: MyDate,
	now(): number,
	second: MyDate
	seconds: MyDate
}

export interface TimeDifference {
	ago(): number,
	before: {
		date(date: number): number,
		now(): number
	},
	from: {
		date(date: number): number,
		now(): number
	}
}