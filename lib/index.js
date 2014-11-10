// Load Modules

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


exports.stringify = function (arr) {

    if (!arr) {
        return null;
    }

    if (!Array.isArray(arr)) {
        arr = [arr];
    }

    var stringifieds = [];
    for (var i = 0, il = arr.length; i < il; ++i) {
        var stringified = internals.stringifyObj(arr[i]);
        if (stringified) {
            stringifieds.push(stringified + '\n');
        }
    }

    return stringifieds.join('');
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
        ack: lineParts[3] === '1',
        payload: lineParts[5]
    };

    result.subType = Values.subTypes[result.type][lineParts[4]];

    return result;
};


internals.stringifyObj = function (obj) {

    var typeVal = -1;
    var subTypeVal = -1;

    var typeKeys = Object.keys(Values.types || {});
    for (var i = 0, il = typeKeys.length; i < il; ++i) {
        var typeKey = typeKeys[i];
        if (Values.types[typeKey] === obj.type) {
            typeVal = typeKey;
            break;
        }
    }

    var subTypes = Values.subTypes[obj.type];
    var subTypeKeys = Object.keys(subTypes || {});
    for (i = 0, il = subTypeKeys.length; i < il; ++i) {
        var subTypeKey = subTypeKeys[i];
        if (subTypes[subTypeKey] === obj.subType) {
            subTypeVal = subTypeKey;
            break;
        }
    }

    return [obj.id || '255', obj.childId || '255', typeVal, obj.ack ? '1' : '0', subTypeVal, obj.payload].join(';');
};