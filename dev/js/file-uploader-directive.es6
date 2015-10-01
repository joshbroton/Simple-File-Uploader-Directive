angular.module('simpleFileUploader', [])

.directive('simpleFileUploader', function() {
    return {
        restrict: 'E',
        replace: 'true',
        template: function(element, attrs) {
            var html = [];
            html.push('<span class="simple-file-uploader" ng-class="{\'has-file\': ' + attrs.ngModel + ' != \'\'}">');
            html.push('<label for="' + attrs.id + '">' + attrs.label + '</label>');
            html.push('<input type="file" id="' + attrs.id + '" on-file-change="' + attrs.onFileChange + '" />');
            html.push('</span>');
            html = html.join('');
            return html;
        },
        link: function(scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.onFileChange);
            element.bind('change', onChangeHandler);
        }
    }
});
