// Require Modules

var Values = require('./values');


// Declare internals

var internals = {};


exports.parse = function (str) {

    if (!str) {
        return null;
    }

    var lines = [];
    var strParts = str.split('\n');
    for (var i = 0, il = strParts.length; i < il; ++i) {
        var result = internals.parseLine(strParts[i]);
        if (result) {
            lines.push(result);
        }
    }

    return lines;
};


internals.parseLine = function (line) {

    var lineParts = line.split(';');
    if (!lineParts || lineParts.length !== 6) {
        return null;
    }

    var result = {
        id: lineParts[0],
        childId: lineParts[1],
        type: Values.types[lineParts[2]],
        ack: !!lineParts[3],
        payload: lineParts[5]
    };

    var type = result.type === 'set' ? 'req' : result.type;
    result.subType = Values.subTypes[type][lineParts[4]];

    return result;
};


