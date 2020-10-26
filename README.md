# exact-date
Make working with dates easy with this super lightweight date library! Includes TypeScript support!

## Get Started
Install it

`yarn add @alexaritan/exact-date`

Then import it

`import {exactDate} from '@alexaritan/exact-date';`

Even the most complex of date calculations can be done easily. For example, need to calculate the datetime of 3 hours less than 11 days from now?

```
const exactly = exactDate();
const elevenDaysFromNow = exactly(11).days.from.now();
const threeHoursBefore11DaysFromNow = exactly(3).hours.before.date(elevenDaysFromNow);
```

Compatible with the built-in Date library's formatting functionality.

```
new Date();
// 2020-07-10T22:53:54.038Z

const elevenDaysFromNow = exactly(11).days.from.now();
new Date(elevenDaysFromNow);
// 2020-07-21T22:53:54.038Z
```

## Usage

`const exactly = exactDate();` Accepts an optional Date API as a parameter (anything that implements a `now()` function that returns a number). It defaults to the built in `Date` library if nothing is provided. It is not recommended that you pass anything in - this dependency injection is to make the unit tests predictable.

Returns a function that accepts a number and provides access to all sorts of date manipulation functions.

`exactly(number)` Returns an object with a bunch of date-related fields and functions.

### Fields and functions
- `after`
  - exactly(12).seconds.after.now();
- `ago()`
  - exactly(2).days.ago();
- `before`
  - exactly(1).hour.before.now();
- `date(number)`
  - exactly(4).minutes.after.date(Date.now());
- `day/days`
  - exactly(2).days.ago();
- `from`
  - exactly(11).days.from.now();
- `hour/hours`
  - exactly(1).hour.from.now();
- `minute/minutes`
  - exactly(10).minutes.ago();
- `now()`
  - exactly(2).minutes.from.now();
- `second/seconds`
  - exactly(1).second.from.now();

### Constants
If you don't want to harness the power of the date calculations, you can still use the provided constants.

```
import {oneDayInMilliseconds, oneHourInMilliseconds, oneMinuteInMilliseconds, oneSecondInMilliseconds} from '@alexaritan/date';`

console.log(oneSecondInMilliseconds);
// 1000
```