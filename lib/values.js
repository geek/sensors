exports.types = {
    '0': 'presentation',
    '1': 'set',
    '2': 'req',
    '3': 'internal',
    '4': 'stream'
};


exports.subTypes = {
    presentation: {
        '0': 'S_DOOR',
        '1': 'S_MOTION',
        '2': 'S_SMOKE',
        '3': 'S_LIGHT',
        '4': 'S_DIMMER',
        '5': 'S_COVER',
        '6': 'S_TEMP',
        '7': 'S_HUM',
        '8': 'S_BARO',
        '9': 'S_WIND',
        '10': 'S_RAIN',
        '11': 'S_UV',
        '12': 'S_WEIGHT',
        '13': 'S_POWER',
        '14': 'S_HEATER',
        '15': 'S_DISTANCE',
        '16': 'S_LIGHT_LEVEL',
        '17': 'S_ARDUINO_NODE',
        '18': 'S_ARDUINO_RELAY',
        '19': 'S_LOCK',
        '20': 'S_IR',
        '21': 'S_WATER',
        '22': 'S_AIR_QUALITY',
        '23': 'S_CUSTOM',
        '24': 'S_DUST',
        '25': 'S_SCENE_CONTROLLER'
    },
    req: {
        '0': 'V_TEMP',
        '1': 'V_HUM',
        '2': 'V_LIGHT',
        '3': 'V_DIMMER',
        '4': 'V_PRESSURE',
        '5': 'V_FORECAST',
        '6': 'V_RAIN',
        '7': 'V_RAINRATE',
        '8': 'V_WIND',
        '9': 'V_GUST',
        '10': 'V_DIRECTION',
        '11': 'V_UV',
        '12': 'V_WEIGHT',
        '13': 'V_DISTANCE',
        '14': 'V_IMPEDANCE',
        '15': 'V_ARMED',
        '16': 'V_TRIPPED',
        '17': 'V_WATT',
        '18': 'V_KWH',
        '19': 'V_SCENE_ON',
        '20': 'V_SCENE_OFF',
        '21': 'V_HEATER',
        '22': 'V_HEATER_SW',
        '23': 'V_LIGHT_LEVEL',
        '24': 'V_VAR1',
        '25': 'V_VAR2',
        '26': 'V_VAR3',
        '27': 'V_VAR4',
        '28': 'V_VAR5',
        '29': 'V_UP',
        '30': 'V_DOWN',
        '31': 'V_STOP',
        '32': 'V_IR_SEND',
        '33': 'V_IR_RECEIVE',
        '34': 'V_FLOW',
        '35': 'V_VOLUME',
        '36': 'V_LOCK_STATUS',
        '37': 'V_DUST_LEVEL',
        '38': 'V_VOLTAGE',
        '39': 'V_CURRENT'
    },
    set: {
        '0': 'V_TEMP',
        '1': 'V_HUM',
        '2': 'V_LIGHT',
        '3': 'V_DIMMER',
        '4': 'V_PRESSURE',
        '5': 'V_FORECAST',
        '6': 'V_RAIN',
        '7': 'V_RAINRATE',
        '8': 'V_WIND',
        '9': 'V_GUST',
        '10': 'V_DIRECTION',
        '11': 'V_UV',
        '12': 'V_WEIGHT',
        '13': 'V_DISTANCE',
        '14': 'V_IMPEDANCE',
        '15': 'V_ARMED',
        '16': 'V_TRIPPED',
        '17': 'V_WATT',
        '18': 'V_KWH',
        '19': 'V_SCENE_ON',
        '20': 'V_SCENE_OFF',
        '21': 'V_HEATER',
        '22': 'V_HEATER_SW',
        '23': 'V_LIGHT_LEVEL',
        '24': 'V_VAR1',
        '25': 'V_VAR2',
        '26': 'V_VAR3',
        '27': 'V_VAR4',
        '28': 'V_VAR5',
        '29': 'V_UP',
        '30': 'V_DOWN',
        '31': 'V_STOP',
        '32': 'V_IR_SEND',
        '33': 'V_IR_RECEIVE',
        '34': 'V_FLOW',
        '35': 'V_VOLUME',
        '36': 'V_LOCK_STATUS',
        '37': 'V_DUST_LEVEL',
        '38': 'V_VOLTAGE',
        '39': 'V_CURRENT'
    },
    internal: {
        '0': 'I_BATTERY_LEVEL',
        '1': 'I_TIME',
        '2': 'I_VERSION',
        '3': 'I_ID_REQUEST',
        '4': 'I_ID_RESPONSE',
        '5': 'I_INCLUSION_MODE',
        '6': 'I_CONFIG',
        '7': 'I_FIND_PARENT',
        '8': 'I_FIND_PARENT_RESPONSE',
        '9': 'I_LOG_MESSAGE',
        '10': 'I_CHILDREN',
        '11': 'I_SKETCH_NAME',
        '12': 'I_SKETCH_VERSION',
        '13': 'I_REBOOT',
        '14': 'I_GATEWAY_READY'
    }
};