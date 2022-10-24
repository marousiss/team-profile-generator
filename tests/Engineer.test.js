const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    
    describe('getGithub', () => {
        it('returns a string', () => {
            expect(new Engineer('Steve', '1', 'email', 'username').getGithub()).toBe('username');
        });
    });


    describe('getRole', () => {
        it('returns a string', () => {
            expect(new Engineer('Steve', '1', 'email', '10').getRole()).toBe('Engineer');
        });
    });

});