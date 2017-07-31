/* sample angular project - application js */

window.application = {
    version: '0.0.1'
};

var sampleApp = angular.module('sampleApp', []);


/* sample angular project - controllers js */

sampleApp
    .controller('PhoneController', function ($scope) {
        $scope.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    });


