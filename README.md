sensors
=======

My Sensors serial parser


## Methods

### parse

Parse a string representation of mysensors serial protocol: http://www.mysensors.org/build/serial_api.  The resulting
is an array that looks like the following:

```js
[
    {
        "id": "12",
        "childId": "6",
        "type": "presentation",
        "ack": false,
        "payload": "1.4",
        "subType": "S_LIGHT"
    }
]
```


### stringify

Returns a string representation of an array or single object.  The result looks like the following:

```
'12;6;0;0;3;1.4\n'
```