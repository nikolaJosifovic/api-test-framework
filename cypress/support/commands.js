import {API_VERSION, UNIX_TIMESTAMP_CONVERTER, CACHED} from '../fixtures/routes/routes'

/**
 * Gets timestamp
 * @param payload date string (2023-03-02 17:37:35) or Unix Timestamp (1677775055)
 */
Cypress.Commands.add('getTimestamp', (payload) => {
    cy.request('GET', API_VERSION + UNIX_TIMESTAMP_CONVERTER + CACHED + payload).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    });
});
