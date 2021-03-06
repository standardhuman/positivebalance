// "database"
var activities = [
    {
        minQty: 1,
        moreorless: 1,
        name: "run",
        unitName: "mile",
        weight: 6
    }
];

// populate Update Section with activity_name, didIdo, howManyUnits and button for each element in activities array
function updateView() {
    $('#items').empty();
    activities.forEach(function(element) {
        var template = '<form class="template">' +
        '<div id="' + element.name + '">' + '<span class="items">' + '<p>' + 'Did you ' + '<span>' + element.name + '</span>' + '?  ' + '<label for="yep">' + 'Yep:' + '</label>' + '<input class="' + element.name + 'yep " type="radio" name="didIDo" id="yep"> ' + '<label for="nope">' + 'Nope:' + '</label>' + '<input class= "yepnope" type="radio" name="didIDo" id="nope">' + '</p>' + '<div class="' + element.name + 'showOnYep ">' + '<label for="howManyUnits">' + 'How many times did you ' + element.name + ' ' + element.minQty + ' ' + element.unitName + '?</label> ' + ' <input id="howManyUnits-' + element.name + '" type="number" class="howManyUnits" name="howManyUnits" placeholder="1, 10..." />' + '<button type="button" name="button" onclick="updateActivity(' + element.name + ')">' + 'Update ' + element.name + '</button>' + '</span>' + '</div>' + '</div>' + '</form>';

        $('#items').append(template);
        document.getElementById('howManyUnits-' + element.name).addEventListener('keypress', function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                add2Props(element.name);
            }
        });

        $('.' + element.name + 'showOnYep').css({display: "none"});

        $('#' + element.name).find('.' + element.name + 'yep').focusin(function() {
            $('.' + element.name + 'showOnYep').slideToggle();
        });

    });

};

// update views on initial page load
$(document).ready(function() {
    updateView();
    updateSummaryView();
    updateFinalNumView();
});

// on update click:
function updateActivity(arg) {
    // modify didIDo and howManyUnits properties on activity objects
    var activity_name = arg.id;
    var elementNameConcat = '#' + arg.id;
    var howManyUnits = $(elementNameConcat).find('.howManyUnits').val();
    var didIDo;
    if ($(elementNameConcat).find('.yep:checked').val()) {
        didIDo = 'yep';
    } else {
        didIDo = 'nope';
    };

    var actConst = {
        name: activity_name,
        didIDo: didIDo,
        howManyUnits: howManyUnits
    };

    // once all values are stored, update the correct activity in our main activties array
    activities = activities.map(function(element) {
        if (element.name === actConst.name) {
            element.howManyUnits = actConst.howManyUnits;
            element.didIDo = actConst.didIDo;
        }
        return element;
    })
    console.log("activities:", activities);
    updateSummaryView();
    updateFinalNumView();
}

// create new activity object in activities array and refresh Update Section
function createNew() {
    var activity_name = $('#activityName').val();
    var moreorless;
    if ($('#more:checked').val()) {
        moreorless = 1;
    } else {
        moreorless = -1;
    };
    var unitName = $('#activityUnit').val();
    var minQty = $('#min_qty').val();
    var weight = $('#activity_weight').val();

    var actConst = {
        name: activity_name,
        unitName: unitName,
        minQty: minQty,
        moreorless: moreorless,
        weight: weight
    };

    var potentialElement = activities.filter(function(element) {
        return element.name === actConst.name;
    });

    if (potentialElement.length === 0) {
        activities.push(actConst);
        // $('#items').append(template);
        // console.log("After push(createNew):", activities);
        return;
    } else {
        activities = activities.map(function(element) {
            if (element.name === actConst.name) {
                element = actConst;
            }
            return element;
        })
    };
    updateView();
}

// dynamically update activty name in Create New Activity section
function blurFunc() {
    document.getElementById('doSpan').innerHTML = $('#activityName').val();
};

// summarize certain properties of each activity
function updateSummaryView() {
    $('#summary').empty();
    activities.forEach(function(element) {
        var unitTotal = (element.moreorless * (element.howManyUnits * element.minQty) * element.weight);
        var template =
        // if didIDo = “yep”, then display “activityName + (howManyUnits * minQty = total) + unitName”
        '<div id="' + element.name + '-summary' + '">' + '<ul>' +
        // '<li>' +element.name+ ': ' +unitTotal+ ' ' +element.unitName+ '</li>'+
        '<li>' + element.name + ': ' + unitTotal + '</li>' + '</ul>' + '</div>';
        $('#summary').append(template);
    });
};

function finalNum() {
    return activities.reduce(function(acc, element) {
        var unitTotal = (element.moreorless * (element.howManyUnits * element.minQty) * element.weight);
        return unitTotal + acc;
    }, 0)
}

function updateFinalNumView() {
    $('#finalNum').empty();
    var template = '<div class="title" id="finalNum">' +
    '<p>' +
    'Balance: ' +
    '<span id="balance">' + finalNum() + '</span>' + '</p>' + '</div>';
    $('#finalNum').append(template);
};
