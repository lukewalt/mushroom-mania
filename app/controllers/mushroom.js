app.controller('MushCtrl', function($scope, mushroomFactory){
    console.log("Using MushCtrl");
    mushroomFactory.getMushrooms().then((val)=>{
        let objs = val.mushrooms

        // $scope.info = info
        console.log(objs);
        $scope.info = objs
    })
})
