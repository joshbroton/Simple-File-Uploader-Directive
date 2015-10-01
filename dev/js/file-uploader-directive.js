'use strict';

angular.module('simpleFileUploader', []).directive('simpleFileUploader', function () {
    return {
        restrict: 'E',
        replace: 'true',
        template: function template(element, attrs) {
            var html = [];
            /*html.push('<span class="simple-file-uploader" ng-click="');
            html.push(attrs.ngClick ? attrs.ngClick : attrs.ngModel + ' = !' + attrs.ngModel);
            html.push('" ng-class="{\'active\': ' + attrs.ngModel + '}">');
            html.push('<span class="simple-switch--toggle"></span>');
            html.push('<input type="checkbox"');
            html.push(attrs.name ? ' name="' + attrs.name + '"' : '');
            html.push(attrs.ngModel ? ' ng-model="' + attrs.ngModel + '"' : '');
            html.push(' />');
            html.push('</span>');*/
            html.push('<span class="simple-file-uploader" ng-class="{\'has-file\': ' + attrs.ngModel + ' != \'\'}">');
            html.push('<label for="' + attrs.id + '">' + attrs.label + '</label>');
            html.push('<input type="file" id="' + attrs.id + '" on-file-change="' + attrs.onFileChange + '" />');
            html.push('</span>');
            html = html.join('');
            return html;
        },
        link: function link(scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.onFileChange);
            element.bind('change', onChangeHandler);
        }
    };
});