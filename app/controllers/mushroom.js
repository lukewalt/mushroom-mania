app.controller('MushCtrl', function($scope, mushroomFactory){
    console.log("Using MushCtrl");
    mushroomFactory.getMushrooms().then((val)=>{
        let objs = val.mushrooms

        $scope.shrooms = function iterate(obj, stack) {
                for (var property in obj) {
                    if (obj.hasOwnProperty(property)) {
                        if (typeof obj[property] == "object") {
                            iterate(obj[property], stack + '.' + property);
                        } else {
                            console.log(property + "   " + obj[property]);
                            $('#output').append($("<div/>").text(stack + '.' + property))
                        }
                    }
                }
            }

        $scope.shrooms(objs, '')
    })
})
