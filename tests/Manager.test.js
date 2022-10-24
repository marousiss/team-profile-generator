const Manager = require('../lib/Manager');

describe('Manager class', () => {
    
    describe('getOfficeNumber', () => {
        it('returns a string', () => {
            expect(new Manager('Steve', '1', 'email', '10').getOfficeNumber()).toBe('10');
        });
    });


    describe('getRole', () => {
        it('returns a string', () => {
            expect(new Manager('Steve', '1', 'email', '10').getRole()).toBe('Manager');
        });
    });

});