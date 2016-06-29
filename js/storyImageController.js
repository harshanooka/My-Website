/**
 * Created by harsh on 6/27/2016.
 */
(function () {
    'use strict';
    angular.module('angularApp').controller('storyImageController', function ($scope) {
        $scope.myInterval = 3000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides=[];
        var currentIndex = 0;
       $scope.slides = [
           {

               image:"images/media/image4.png/" + "600+slides.length+1" +"/300",
               id: currentIndex++
           },
           {
               image:"images/media/image5.jpeg/"+ "600+slides.length+1" +"/300",
               id: currentIndex++
           },
           {
               image:"images/media/image6.jpeg/"+ "600+slides.length+1" +"/300",
               id: currentIndex++
           },
           {
               image:"images/media/image7.png/" + "600+slides.length+1" +"/300",
               id: currentIndex++
           },
           {
               image:"images/media/image8.jpeg/"+ "600+slides.length+1" +"/300",
               id: currentIndex++
           }
       ]
    });
})();
