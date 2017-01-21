app.factory('mushroomFactory', function($http){
    return {
        getMushrooms: () => {
            return $http
                .get(`mushroom.json`)
                .then((response)=>{
                    console.log(response.data);
                    return response.data
                })
        }
    }
})
