app.controller('MushCtrl', function($scope, mushroomFactory){
    console.log("Using MushCtrl");
    mushroomFactory.getMushrooms().then((val)=>{

        console.log($scope.info);
        $scope.info = val.mushrooms

    })
})
