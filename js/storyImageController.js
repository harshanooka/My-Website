/**
 * Created by harsh on 6/27/2016.
 */
(function () {
    'use strict';
    angular.module('angularApp').controller('storyImageController', function ($scope) {
        $scope.myInterval = false;
        $scope.noWrapSlides = false;
        $scope.active = 0;
       $scope.slides = [
           {
               image:"images/media/image4.png"
           },
           {
               image:"images/media/image5.jpeg"
           },
           {
               image:"images/media/image6.jpeg"
           },
           {
               image:"images/media/image7.png"
           },
           {
               image:"images/media/image8.jpeg"
           }
       ]
    });
})();
