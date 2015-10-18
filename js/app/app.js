var myApp = angular.module('userApp', ['ionic']);

//路由
myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', { url: '/', templateUrl: 'views/userlist.html'})
        .state('contact', { url: '/contact', templateUrl: 'views/contact.html'})
        .state('contact/userinfo', { url: '/contact/userinfo/:id', templateUrl: 'views/contact/userinfo.html'})
        .state('find', { url: '/find', templateUrl: 'views/find.html'})
		.state('me', { url: '/me', templateUrl: 'views/center.html'})
        .state('me/setting', { url: '/me/setting', templateUrl: 'views/center/setting.html'})
        .state('me/setting/about', { url: '/me/setting/about', templateUrl: 'views/center/setting_about.html'})
        .state('me/setting/common', { url: '/me/setting/common', templateUrl: 'views/center/setting_common.html'})
        .state('me/setting/message', { url: '/me/setting/message', templateUrl: 'views/center/setting_message.html'})
        .state('me/setting/private', { url: '/me/setting/private', templateUrl: 'views/center/setting_private.html'})
        .state('me/setting/safe', { url: '/me/setting/safe', templateUrl: 'views/center/setting_safe.html'});
    $urlRouterProvider.otherwise("/");
});


myApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


