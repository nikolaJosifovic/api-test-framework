import { todayHumanRedableUTC, todayHumanRedable, listOfValidDates, DATE_BEFORE_EPOCH } from '../fixtures/date';
import { toUnixTime } from '../support/conversions';

context('Date Strings to Unix Timestamps', () => {

    it('Test list of valid dates in human redable format impoted as strings and comapre them wit api', () => {
        // loop for all dates
        listOfValidDates.forEach((date) => {
            // call the api
            cy.getTimestamp(date).then((timeStamp) => {
                // call function that is replicating api 
                let compareTime = toUnixTime(date);
                cy.log(timeStamp, compareTime)
                expect(timeStamp).to.eq(compareTime);
            });
        });
    });

    it('Test valid date as object', () => {
        // call the api
        cy.getTimestamp(todayHumanRedable).then((timeStamp) => {
            // call function that is replicating API 
            let compareTime = toUnixTime(todayHumanRedable);
            cy.log(timeStamp, compareTime)
            expect(timeStamp).to.eq(compareTime);
        });
    });

    it('Test time before epoch as string', () => {
        // call the api
        cy.getTimestamp(DATE_BEFORE_EPOCH).then((timeStamp) => {
            // call function that is replicating api 
            let compareTime = toUnixTime(DATE_BEFORE_EPOCH);
            cy.log(timeStamp, compareTime);
            expect(timeStamp).to.eq(compareTime);
        });
    });

    it('Test that sows how API is behaving', () => {
        // call the api with data from your time zone 
        cy.getTimestamp(todayHumanRedable).then((timeStamp) => {
            // call function that is replicating api but use data from UTC time zone
            expect(timeStamp).to.eq(toUnixTime(todayHumanRedableUTC));

        });
    });

});