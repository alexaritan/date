# AlexDate
Make working with dates easy!

## Get Started
Install it

`yarn add @alexaritan/date`

Then import it

`import {AlexDate} from '@alexaritan/date';`

## Usage

Even the most complex of date calculations can be done easily. For example, need to calculate the datetime of 3 hours less than 11 days from now?

```
const elevenDaysFromNow = AlexDate(11).days.from.now;
const threeHoursBefore11DaysFromNow = AlexDate(3).hours.before.date(elevenDaysFromNow);
```

Compatible with the built-in Date library's formatting functionality.

```
new Date();
// 2020-07-10T22:53:54.038Z

const elevenDaysFromNow = AlexDate(11).days.from.now;
new Date(elevenDaysFromNow)
// 2020-07-21T22:53:54.038Z
```

## Constants
If you don't want to harness the power of the date calculations, you can still use the built in constants.

`import {oneDayInMilliseconds, oneHourInMilliseconds, oneMinuteInMilliseconds, oneSecondInMilliseconds} from '@alexaritan/date';`