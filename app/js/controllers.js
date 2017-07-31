/* sample angular project - controllers js */

sampleApp
    .controller('PhoneController', function ($scope) {
        $scope.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'SAMSUNG Galaxy s8 plus',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    });