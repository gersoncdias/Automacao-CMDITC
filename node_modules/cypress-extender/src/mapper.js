export const initCypressWithMap = () => {
    Cypress.Commands.add('map', {
        prevSubject: ['element'],
    }, (subject, callbackFn) => {
        const results = [];
        cy.wrap(subject).each(e => {
            results.push(callbackFn(e));
        });
        return cy.wrap(results);
    });
};
