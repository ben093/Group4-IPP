app.controller('MainController', function($rootScope, $scope, $http, userData, imageSets) {

    $scope.userData = userData.getUserData();

    //Send POST request with name,age,gender, and image selection set
    // $scope.sendPOST = function(){

    //     //create a json object to send
    //     var postData = ({
    //             name: $scope.userData.name,
    //             age:  $scope.userData.age,
    //             gender: $scope.userData.gender   
    //     });

    //     //send the POST
    //     $http.post("/api/user", postData).success(function(postData, response){
    //         console.log(response);
    //         $scope.postData = response;
    //     });
    // }

    //get the images from the back end
    $scope.getImages = function(){
        //GET request for the images
        $http.get('/api/images').success(function(data, response){
            $rootScope.images = data;
            console.log(data.length);
        });
    }

    //Run the getImages function after the entire page loads. This is key. 
    // This will be the only time that the images is retrieved from the database
    // because when I did it during the game page and the play game page
    // it was slow and tedious, this is a lot better. Trust me.
    $scope.$on("$viewContentLoaded", function(){
        $scope.getImages();
    });

    $scope.submit = function(){
    	//$scope.sendPOST();
        window.location = '#/game/animals';
    }
});

