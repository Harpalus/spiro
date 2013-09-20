﻿/// <reference path="typings/angularjs/angular.d.ts" />

module Spiro.Angular {

    declare var svrPath: string;

    // templates 
    export var nestedCollectionTemplate = svrPath + "Content/partials/nestedCollection.html";
    export var nestedObjectTemplate = svrPath + "Content/partials/nestedObject.html";
    export var dialogTemplate = svrPath + "Content/partials/dialog.html";
    export var servicesTemplate = svrPath + "Content/partials/services.html";
    export var serviceTemplate = svrPath + "Content/partials/service.html";
    export var actionTemplate = svrPath + "Content/partials/actions.html";
    export var errorTemplate = svrPath + "Content/partials/error.html";
    export var appBarTemplate = svrPath + "Content/partials/appbar.html";
    export var objectTemplate = svrPath + "Content/partials/object.html";
    export var viewPropertiesTemplate = svrPath + "Content/partials/viewProperties.html";
    export var editPropertiesTemplate = svrPath + "Content/partials/editProperties.html";

    var servicesPageTemplate = svrPath + 'Content/partials/servicesPage.html';
    var servicePageTemplate = svrPath + 'Content/partials/servicePage.html';
    var objectPageTemplate = svrPath + 'Content/partials/objectPage.html';
    var transientObjectPageTemplate = svrPath + 'Content/partials/transientObjectPage.html';

    /* Declare app level module */
   
    export var app = angular.module('app', ['ngResource']);

    app.config(function ($routeProvider: ng.IRouteProvider) {
        $routeProvider.
            when('/services', {
                templateUrl: servicesPageTemplate, 
                controller: 'BackgroundController'
            }).
            when('/services/:sid', {
                templateUrl: servicePageTemplate,
                controller: 'BackgroundController'
            }).
            when('/objects/:dt/:id', {
                templateUrl: objectPageTemplate,
                controller: 'BackgroundController'
            }).
            when('/objects/:dt', {
                templateUrl: transientObjectPageTemplate, 
                controller: 'BackgroundController'
            }).
            otherwise({
                redirectTo: '/services'
            });
    });

    export interface ISpiroRouteParams extends ng.IRouteParamsService {
        action: string;
        property: string;
        collectionItem: string;
        resultObject: string; 
        resultCollection: string; 
        collection: string; 
        editMode: string; 
        dt: string; 
        id: string; 
        sid: string; 
    }
}