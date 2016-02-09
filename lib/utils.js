module.exports.extend = function (obj1, obj2) {
    var obj3 = {};
    var attrname;

    for (attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }

    return obj3;
};

module.exports.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

module.exports.isObject = function (object) {
    return (!!object) && (object.constructor === Object);
};

module.exports.makeArray = function (object) {
    var array = [];

    if (Array.isArray(object)) {
        return object;
    }

    for (var key in object){
        if (!object.hasOwnProperty(key)) continue;
        array.push(object[key]);
    }

    return array;
};