//copy the array
var arrayCopy = testArray.slice();

// selects element by ID, appends <li> to it
var sendData = function() {
        var activity_name = $('#activityName').val();
        $('#dropDown').append('<li>' + activity_name + '</li>');
    };

// selects element by ID, appends input as label
var sendData = function() {
        var activity_name = $('#activityName').val();
        var howManyUnits = $('#howManyUnits').val();
        $('#dropDown').append('<li>' + activity_name + '</li>' +
          '<input id = 'howManyUnits' + 'unitName'>' + howManyUnits + '</input>');
    };

    <div>
        <p>Did I do it?</p>
        <label for="yep">Yep:</label>
        <input type="radio" name="didIDo" id="yep" value="+1">
        <label for="nope">Nope:</label>
        <input type="radio" name="didIDo" id="nope" value="-1">
    </div>

// selects element by ID and appends a BIG snippet
var sendData = function() {
        var activity_name = $('#activityName').val();
        var howManyUnits = $('#howManyUnits').val();
        var template =

        '<div>'+
            '<p>'+'Did I do it?'+'</p>'+
            '<label for="yep">'+'Yep:'+'</label>'+
            '<input type="radio" name="didIDo" id="yep" value="+1">'+
            '<label for="nope">'+'Nope:'+'</label>'+
            '<input type="radio" name="didIDo" id="nope" value="-1">'+
        '</div>';

        $('#dropDown').append(template);
    };

// form creation
    <div>
        TODO: populate dropdown with all activity.name
        TODO: onClick, update button with activity.name from dropdown, didIdo, howManyUnits
        <label for="dropDown"></label>
        <ul id="dropDown" name="dropDown">

        </ul>
    </div>

    <div>
        <p>Did I do it?</p>
        <label for="yep">Yep:</label>
        <input type="radio" name="didIDo" id="yep" value="+1">
        <label for="nope">Nope:</label>
        <input type="radio" name="didIDo" id="nope" value="-1">
    </div><br>

    <div>
        <label for="howManyUnits">How many units?</label>
        <input type="number" id="howManyUnits" name="howManyUnits" placeholder="1, 10..." />
    </div>
    <br>

    <div>
        <button type="button" name="button" onclick="<!-- update activity object with didIDo and howManyUnits ">Update</button>
        onClick: update didIDo, howManyUnits
    </div>

    var potentialElement = activities.filter(function(element) {
        return element.name === activity_name;
    });

// check is array contains particular object, if not, create new. if so, update original (not working)
    if (potentialElement.length === 0) {
        activities.push({
            name: activity_name,
            unitName: activityUnit,
            minQty: minQty,
            moreorless: moreorless,
            weight: weight,
            didIDo: didIDo,
            howManyUnits: howManyUnits,
        });
    } else {
        for (var i = 0; i < activities.length; i++) {
            // if activity exists, overwrite
            if (potentialElement.name === activities[i].name) {
                activities[i].name = activity_name;
                activities[i].unitName = activityUnit;
                activities[i].minQty = minQty;
                activities[i].moreorless = moreorless;
                activities[i].weight = weight;
                activities[i].didIDo = didIDo;
                activities[i].howManyUnits = howManyUnits;
            }
        }
    };
