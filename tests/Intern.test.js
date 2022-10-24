const Intern = require('../lib/Intern');

describe('Intern class', () => {
    
    describe('getSchool', () => {
        it('returns a string', () => {
            expect(new Intern('Steve', '1', 'email', 'school name').getSchool()).toBe('school name');
        });
    });


    describe('getRole', () => {
        it('returns a string', () => {
            expect(new Intern('Steve', '1', 'email', 'school name').getRole()).toBe('Intern');
        });
    });

});