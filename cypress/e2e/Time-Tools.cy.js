import { today } from '../fixtures/date';

context('Date Strings to Unix Timestamps', () => {
// initial test to see if classes for converting time are working
    it('Verify timestamp', () => {
        cy.log(today)
        cy.getTimestamp(today).then((response) => {
            cy.log(response)
        });
        cy.toUnixTime(today).then((response) => {
            cy.log("Unix Time: " + response)
        });
        cy.unixToHumanTime('1677775055').then((response) => {
            cy.log("Human Time: " + response)
        });
    })
});