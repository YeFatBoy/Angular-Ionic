myApp.controller('CommonController',['$scope','$location',function($scope,$location){
    
    $scope.menu = [
        {"href":"#/","icon":"ion-ios-chatbubble-outline","on_icon":"ion-ios-chatbubble","name":"微信"},
        {"href":"#/contact","icon":"ion-ios-personadd-outline","on_icon":"ion-ios-personadd","name":"通讯录"},
        {"href":"#/find","icon":"ion-ios-eye-outline","on_icon":"ion-ios-eye","name":"发现"},
        {"href":"#/me","icon":"ion-ios-person-outline","on_icon":"ion-ios-person","name":"我"},
    ];

    //微信列表
    $scope.userlist_items = [
        { "id": 0, "img" : "images/1.jpg", "name":"Venkman", "description" : "Back off, man. I'm a scientist." },
        { "id": 1, "img" : "images/2.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 2, "img" : "images/3.jpg", "name":"Ray", "description" : "Ugly little spud, isn't he?" },
        { "id": 3, "img" : "images/4.jpg", "name":"Winston", "description" : "That's a big Twinkie." },
        { "id": 4, "img" : "images/5.jpg", "name":"Tully", "description" : "Okay, who brought the dog?" },
        { "id": 5, "img" : "images/1.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 6, "img" : "images/2.jpg", "name":"Dana", "description" : "I am The Gatekeeper!" },
        { "id": 7, "img" : "images/3.jpg", "name":"Slimer", "description" : "Boo!" },
        { "id": 8, "img" : "images/4.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 9, "img" : "images/5.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 10, "img" : "images/1.jpg", "name":"Egon", "description" : "We're gonna go full stream." }
    ];

    //通讯录
    $scope.contact_items = [
        {
            "index" : "A",
            "list" : [
                { "id": 1, "img" : "images/1.jpg", "name":"A_A", "description" : "Back off, man. I'm a scientist." },
                { "id": 2, "img" : "images/2.jpg", "name":"A_A", "description" : "We're gonna go full stream." },
                { "id": 3, "img" : "images/3.jpg", "name":"A_A", "description" : "Ugly little spud, isn't he?" },
                { "id": 4, "img" : "images/4.jpg", "name":"A_A", "description" : "That's a big Twinkie." },
                { "id": 5, "img" : "images/5.jpg", "name":"A_A", "description" : "Okay, who brought the dog?" }
            ]
        },
        {
            "index" : "B",
            "list" : [
                { "id": 6, "img" : "images/1.jpg", "name":"B_B", "description" : "Back off, man. I'm a scientist." },
                { "id": 7, "img" : "images/2.jpg", "name":"B_B", "description" : "We're gonna go full stream." },
                { "id": 8, "img" : "images/3.jpg", "name":"B_B", "description" : "Ugly little spud, isn't he?" },
                { "id": 9, "img" : "images/4.jpg", "name":"B_B", "description" : "That's a big Twinkie." },
                { "id": 10, "img" : "images/5.jpg", "name":"B_B", "description" : "Okay, who brought the dog?" }
            ]
        },
        {
            "index" : "C",
            "list" : [
                { "id": 11, "img" : "images/1.jpg", "name":"C_C", "description" : "Back off, man. I'm a scientist." },
                { "id": 12, "img" : "images/2.jpg", "name":"C_C", "description" : "We're gonna go full stream." },
                { "id": 13, "img" : "images/3.jpg", "name":"C_C", "description" : "Ugly little spud, isn't he?" },
                { "id": 14, "img" : "images/4.jpg", "name":"C_C", "description" : "That's a big Twinkie." },
                { "id": 15, "img" : "images/5.jpg", "name":"C_C", "description" : "Okay, who brought the dog?" }
            ]
        },
    ];
}]);

myApp.controller('UserController', ['$scope','$ionicPopup','$timeout' ,'$http',function($scope,$ionicPopup,$timeout,$http) {

    //  confirm 对话框
    $scope.read = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: '标记为未读?',
            template: '标记为未读?'
        });
        confirmPopup.then(function(res) {
            if(res) {
                console.log('标记为未读');
            } else {
                console.log('没有标记');
            }
        });
    };
    $scope.delete = function() {
        var alertPopup = $ionicPopup.alert({
            title: '你真的那么忍心删除我吗？',
            template: '你真的那么忍心删除我吗？'
        });
        alertPopup.then(function(res) {
            console.log('谢谢你那么忍心');
        });
    };

    $scope.items = $scope.userlist_items;
   
    $scope.doRefresh = function() {
        $http.get('/Ionic/data/user.json')  //注意改为自己本站的地址，不然会有跨域问题
        .success(function(newItems) {
            $scope.items = newItems;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
}]);

myApp.controller('ContactsController',function($scope){
    $scope.items = $scope.contact_items;
});

myApp.controller('UserInfoController',['$scope','$stateParams',function($scope,$stateParams){

    var id = $stateParams.id;
    var userlist = $scope.contact_items;
    $scope.userinfo = userData(id);

    function userData(id){
        for(var i = 0; i < (userlist).length; i++){
            for(var j = 0; j < userlist[i]['list'].length; j++){
                if (id == userlist[i]['list'][j]['id']) {
                    return userlist[i]['list'][j];
                };
            }
        }
    }    
}]);

myApp.controller('FindController',['$scope',function($scope){
    $scope.wechat = "SuperShuYe";
}]);

myApp.controller('CenterController',['$scope',function($scope){
    $scope.wechat = "SuperShuYe";
}]);

myApp.controller( 'SettingController',['$scope','$ionicActionSheet','$timeout' ,function($scope,$ionicActionSheet,$timeout){
  $scope.show = function() {

      var hideSheet = $ionicActionSheet.show({
          destructiveText: '退出登录',
          titleText: '退出后不会删除任何历史数据，下次登录依然可以使用登录',
          cancelText: '取消',
          cancel: function() {
               // add cancel code..
             },
          buttonClicked: function(index) {
            return true;
          }
      });  
  };  
}]);
