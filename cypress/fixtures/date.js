import {format, startOfToday } from 'date-fns';
import { zonedTimeToUtc, getTimezoneOffset  } from 'date-fns-tz';

export const DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';
export const UNIX_TIME_FORMAT = 't';

export function getUTCDate(){
    const date = startOfToday();
    const timeZone = getTimezoneOffset();// e.g. America/Los_Angeles
    return  zonedTimeToUtc(date, timeZone); // In May 6am in Los Angeles is 5pm UTC
}

/**
 * Human Redable dates
 */
export const todayHumanRedable = format(startOfToday(), DATE_FORMAT);
export const todayHumanRedableUTC = format(getUTCDate(), DATE_FORMAT);

export const DATE = '2023-03-03 22:22:22';
export const DATE_BEFORE_EPOCH = '1969-01-03 12:00:00';

export const listOfValidDates = [
    '1971-01-01 12:03:22', 
    '1999-12-31 11:59:59', 
    '2020-06-09 10:12:21'
];

/**
 * Unix timestamp dates
 */
export const todayUnixTimestamp = format(startOfToday(), UNIX_TIME_FORMAT);
export const todayUnixTimestampUTC = format(getUTCDate(), UNIX_TIME_FORMAT);

export const UNIX_DATE = '1677830826';
export const UNIX_DATE_BEFORE_EPOCH = '-31366800';

export const listOfValidUnixTimestamps = [
    '31575802', 
    '946637999', 
    '1591690341'
];