var arr = [],
    arrIndex = {};

addOrReplace({
    uid: 1,
    name: "bla",
    description: "cucu"
});

addOrReplace({
    uid: 2,
    name: "smth else",
    description: "cucarecu"
});

addOrReplace({
    uid: 1,
    name: "bli",
    description: "cici"
});

function addOrReplace(object) {
    console.log("object IS", object);
    var index = arrIndex[object.uid];
    console.log("AFTER index = arrIndex[object.uid]; VAL index BECOMES", index);
    if (index === undefined) {
        index = arr.length;
        console.log("AFTER index = arr.length; VAL index BECOMES", index);
        arrIndex[object.uid] = index;
        console.log("AFTER arrIndex[object.uid] = index; VAL arrIndex[object.uid] BECOMES", arrIndex[object.uid]);
    }
    arr[index] = object;
    console.log("AFTER arr[index] = object; VAL arr[index] BECOMES", arr[index]);
}
