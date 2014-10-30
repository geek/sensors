// Load modules

var Code = require('code');
var Lab = require('lab');
var Sensors = require('../');


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Sensors', function () {

    describe('parse()', function () {

        it('parses a single line', function (done) {

            var result = Sensors.parse('12;6;0;0;3;1.4\n');
            expect(result[0].subType).to.equal('S_LIGHT');
            done();
        });
    });

    describe('stringify()', function () {

        it('stringifies an object', function (done) {

            var startString = '12;6;0;0;3;1.4\n';
            expect(Sensors.stringify(Sensors.parse(startString))).to.equal(startString);
            done();
        });
    });
});
