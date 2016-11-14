var positiveBalance = angular.module('positiveBalance', [])

    .controller('ActivityController', function ActivityController($scope) {
        $scope.create = {}

        $scope.activityList = [{
            name: 'run',
            moreorless: 1,
            quantity: 1,
            unit: 'mile',
            weight: 5,
            didido: 1,
            howmanyunits: 0
        }, {
            name: 'drink',
            moreorless: -1,
            quantity: 1,
            unit: 'drinks',
            weight: 6,
            didido: 1,
            howmanyunits: 0
        }];

        $scope.combinedNum = {};
        $scope.dailyTotal = function() {
            var total = 0;
            for (var i = 0; i < $scope.activityList.length; i++) {
                $scope.activityList[i].points = (($scope.activityList[i].quantity * $scope.activityList[i].howmanyunits) * $scope.activityList[i].weight / 10) * $scope.activityList[i].moreorless;
                total += $scope.activityList[i].points;
            }
            $scope.combinedNum.total = total;

        }
        $scope.addNewActivity = function() {
            var index = $scope.activityList.findIndex(function(activity) {
              return activity.name === $scope.create.newActivityName;
            });
            console.log("index:", index);
            if (index !== -1) {
              $scope.activityList[index].unit = $scope.create.newActivityUnit;
              $scope.activityList[index].quantity = $scope.create.newActivityAmount;
              $scope.activityList[index].moreorless = $scope.create.newActivityMoreorless;
              $scope.activityList[index].weight = $scope.create.newActivityWeight;
              $scope.activityList[index].points = 0;
              $scope.activityList[index].howmanyunits = 0;
              console.log("activity List after update", $scope.activityList)
            } else {
              $scope.activityList.push({
                name: $scope.create.newActivityName,
                unit: $scope.create.newActivityUnit,
                quantity: $scope.create.newActivityAmount,
                moreorless: $scope.create.newActivityMoreorless,
                weight: $scope.create.newActivityWeight,
                points: 0,
                howmanyunits: 0
            });
          }
        }

        $scope.convertMoreorLess = function() {
            $scope.moreorlessModel = {};
            console.log($scope.create.newActivityMoreorless);
            if ($scope.create.newActivityMoreorless == 1) {
                $scope.moreorlessModel.moreorless = "more";
            } else {
                $scope.moreorlessModel.moreorless = "less";
            }
            return $scope.moreorlessModel.moreorless;
        }
    });
