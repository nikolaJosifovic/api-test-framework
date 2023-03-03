import {format, startOfToday } from 'date-fns';

export const DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';
export const UNIX_TIME_FORMAT = 't';

export const today = format(startOfToday(), DATE_FORMAT);