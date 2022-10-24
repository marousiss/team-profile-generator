const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('getName', () => {
        it('returns a string', () => {
            expect(new Employee('Steve', '1', 'email').getName()).toBe('Steve');
        });
    });

    describe('getId', () => {
        it('returns a string', () => {
            expect(new Employee('Steve', '1', 'email').getId()).toBe('1');
        });
    });

    describe('getEmail', () => {
        it('returns a string', () => {
            expect(new Employee('Steve', '1', 'email').getEmail()).toBe('email');
        });
    });

    describe('getRole', () => {
        it('returns a string', () => {
            expect(new Employee('Steve', '1', 'email').getRole()).toBe('Employee');
        });
    });

});