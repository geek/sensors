'use strict';

// Load Modules

const Values = require('./values');


// Declare internals

const internals = {};


exports.parse = function (str) {

    if (!str) {
        return null;
    }

    const lines = [];
    const strParts = str.split('\n');
    for (let i = 0; i < strParts.length; ++i) {
        const result = internals.parseLine(strParts[i]);
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

    const stringifieds = [];
    for (let i = 0; i < arr.length; ++i) {
        const stringified = internals.stringifyObj(arr[i]);
        if (stringified) {
            stringifieds.push(stringified + '\n');
        }
    }

    return stringifieds.join('');
};


internals.parseLine = function (line) {

    const lineParts = line.split(';');
    if (!lineParts || lineParts.length !== 6) {
        return null;
    }

    const result = {
        id: lineParts[0],
        childId: lineParts[1],
        type: Values.types[lineParts[2]],
        ack: lineParts[3] === '1',
        payload: lineParts[5]
    };

    result.subType = Values.subTypes[result.type][lineParts[4]];

    // fallback on numbers
    if (result.subType === undefined) {
        result.subType = lineParts[4];
    }

    if (result.type === undefined) {
        result.type = lineParts[2];
    }

    return result;
};


internals.stringifyObj = function (obj) {

    let typeVal = -1;
    let subTypeVal = -1;

    const typeKeys = Object.keys(Values.types || {});
    for (let i = 0; i < typeKeys.length; ++i) {
        const typeKey = typeKeys[i];
        if (Values.types[typeKey] === obj.type) {
            typeVal = typeKey;
            break;
        }
    }

    const subTypes = Values.subTypes[obj.type];
    const subTypeKeys = Object.keys(subTypes || {});
    for (let i = 0; i < subTypeKeys.length; ++i) {
        const subTypeKey = subTypeKeys[i];
        if (subTypes[subTypeKey] === obj.subType) {
            subTypeVal = subTypeKey;
            break;
        }
    }

    return [obj.id || '255', obj.childId || '255', typeVal, obj.ack ? '1' : '0', subTypeVal, obj.payload].join(';');
};
