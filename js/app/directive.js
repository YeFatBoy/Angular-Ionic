myApp.directive("contain", ['$location',function ($location) {

    var template_content = "";
    
    switch($location.url()){
        case "/":
        case "/find":
        case "/contact":
        case "/me":
            template_content = "<div ui-view></div>";
        break;
        default:
            template_content = "<ion-nav-view></ion-nav-view>";
        break;
    }

    var option = {
        restrict: "E",
        template:             // 替换HTML (使用scope中的变量) 
            template_content, 
        replace: true,        // 使用模板替换原始标记 
    };

    return option;

}]);