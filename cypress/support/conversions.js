import { isMatch, format} from 'date-fns';
import { DATE_FORMAT, UNIX_TIME_FORMAT } from '../fixtures/date'


class DateWrongFormatError extends Error {
    constructor(message = "Date is in wrong format! Fomat should be ", ...args) {
      super(message, ...args);
      this.message = message + DATE_FORMAT;
    }
}

class UnixTimeWrongFormatError extends Error {
    constructor(message = "Unix Time is in wrong format! Fomat should be in seconds ", ...args) {
      super(message, ...args);
      this.message = message + UNIX_TIME_FORMAT;
    }
}


/**
 * To Unix Time
 * @param payload date string (2023-03-02 17:37:35)
 * Get tme from human readable format to unix time
 */
export function toUnixTime(date) {
    if (isMatch(date, DATE_FORMAT) === true){
        return Date.parse(date)/1000
    } else {
        throw new DateWrongFormatError();
    }
};

/**
 * Unix to human Time
 * @param payload Unix Time string (1677775055)
 * Takes unix timestamp and converts it to human redable time in format (2023-03-02 17:37:35)
 */
export function unixToHumanTime(unixTime) {
    if (isMatch(unixTime, UNIX_TIME_FORMAT) === true){
        return format(new Date(unixTime * 1000), DATE_FORMAT);
    } else {
        throw new UnixTimeWrongFormatError();
    }
};