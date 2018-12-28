'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Sensors = require('../');


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('Sensors', () => {

    describe('parse()', () => {

        it('parses a single line', () => {

            const result = Sensors.parse('12;6;0;0;3;1.4\n');
            expect(result[0].subType).to.equal('S_BINARY');
        });

        it('handles missing input string', () => {

            const result = Sensors.parse('');
            expect(result).to.equal(null);
        });
    });

    describe('stringify()', () => {

        it('stringifies an object', () => {

            const startString = '12;6;0;0;3;1.4\n';
            expect(Sensors.stringify(Sensors.parse(startString))).to.equal(startString);
        });

        it('handles missing input array', () => {

            const result = Sensors.stringify();
            expect(result).to.equal(null);
        });

        it('handles case when input isn\'t an array', () => {

            const input = {
                id: '12',
                childId: '6',
                type: 'presentation',
                ack: false,
                payload: '1.4',
                subType: 'S_BINARY'
            };
            const result = Sensors.stringify(input);
            expect(result).to.equal('12;6;0;0;3;1.4\n');
        });
    });
});
