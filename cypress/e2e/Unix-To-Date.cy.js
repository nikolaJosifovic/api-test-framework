import { todayUnixTimestamp, todayUnixTimestampUTC, listOfValidUnixTimestamps, UNIX_DATE_BEFORE_EPOCH } from '../fixtures/date';
import { unixToHumanTime } from '../support/conversions';

context('Unix Timestamps to Date Strings', () => {

    it('Test list of valid dates in unix timestampes imported as strings and compared with api', () => {
        // loop for all dates
        listOfValidUnixTimestamps.forEach((date) => {
            // call the API
            cy.getTimestamp(date).then((timeStamp) => {
                // call function that is replicating API 
                let compareTime = unixToHumanTime(date);
                cy.log(timeStamp, compareTime)
                expect(timeStamp).to.eq(compareTime);
            });
        });
    });

    it('Test valid UNIX time as object', () => {
        // call the API
        cy.getTimestamp(todayUnixTimestamp).then((timeStamp) => {
            // call function that is replicating API 
            let compareTime = unixToHumanTime(todayUnixTimestamp);
            cy.log(timeStamp, compareTime)
            expect(timeStamp).to.eq(compareTime);
        });
    });

    it('Test time before epoch as string', () => {
        // call the API
        cy.getTimestamp(UNIX_DATE_BEFORE_EPOCH).then((timeStamp) => {
            // call function that is replicating API 
            let compareTime = unixToHumanTime(UNIX_DATE_BEFORE_EPOCH);
            cy.log(timeStamp,compareTime)
            expect(timeStamp).to.eq(compareTime);
        });
    });

});