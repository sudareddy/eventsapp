eventRoutes.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('login', {
              url: '/login',
              templateUrl: 'templates/login/login.html',
              controller: 'authCtrl'
    })

    .state('signin', {
                  url: '/signin',
                  templateUrl: 'templates/signin.html',
                  controller: 'authCtrl'
        })

    .state('homepage', {
              url: '/homepage',
              templateUrl: 'templates/homepage.html',
              controller: 'viewCtrl'
    })

    .state('signup', {
              url: '/signup',
              templateUrl: 'templates/signup/signupPage.html',
              controller: 'authCtrl'
    })

    .state('signupPlanner', {
              url: '/signupPlanner',
              templateUrl: 'templates/signup/signupPlanner.html',
              controller: 'signupPlannerCtrl'
    })

    .state('signupPlanner2', {
              url: '/signupPlanner2',
              templateUrl: 'templates/signup/signupPlanner2.html',
              controller: 'authCtrl'
    })

    .state('signupPlanner3', {
              url: '/signupPlanner3',
              templateUrl: 'templates/signup/signupPlanner3.html',
              controller: 'authCtrl'
          });

    /*.state('tabsController.visits', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/visits.html',
        controller: 'visitsCtrl'
      }
    }
  })

  .state('tabsController.medicines', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/medicines.html',
        controller: 'medicinesCtrl'
      }
    }
  })

  .state('tabsController.reports', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/reports.html',
        controller: 'reportsCtrl'
      }
    }
  })

  .state('tabsController.history', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  });

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('contract', {
    url: '/page7',
    templateUrl: 'templates/contract.html',
    controller: 'contractCtrl'
  })

  .state('dashboard', {
    url: '/page10',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })

  .state('familyMembers', {
    url: '/page11',
    templateUrl: 'templates/familyMembers.html',
    controller: 'familyMembersCtrl'
  })

  .state('payment1', {
    url: '/page12',
    templateUrl: 'templates/payment1.html',
    controller: 'payment1Ctrl'
  })

  .state('payment2', {
    url: '/page15',
    templateUrl: 'templates/payment2.html',
    controller: 'payment2Ctrl'
  })

  .state('payment3', {
    url: '/page16',
    templateUrl: 'templates/payment3.html',
    controller: 'payment3Ctrl'
  })

  .state('paymentSuccessful', {
    url: '/page17',
    templateUrl: 'templates/paymentSuccessful.html',
    controller: 'paymentSuccessfulCtrl'
  })

  .state('requestDoctor', {
    url: '/page13',
    templateUrl: 'templates/requestDoctor.html',
    controller: 'requestDoctorCtrl'
  })

  .state('drDhanasekarKesavalu', {
    url: '/page14',
    templateUrl: 'templates/drDhanasekarKesavalu.html',
    controller: 'drDhanasekarKesavaluCtrl'
  })

  .state('drRohitBharadhwaj', {
    url: '/page18',
    templateUrl: 'templates/drRohitBharadhwaj.html',
    controller: 'drRohitBharadhwajCtrl'
  })

  .state('drSubhashiniVenkatesh', {
    url: '/page19',
    templateUrl: 'templates/drSubhashiniVenkatesh.html',
    controller: 'drSubhashiniVenkateshCtrl'
  })

  .state('drSreedhar', {
    url: '/page20',
    templateUrl: 'templates/drSreedhar.html',
    controller: 'drSreedharCtrl'
  })

  .state('drGMoorthy', {
    url: '/page21',
    templateUrl: 'templates/drGMoorthy.html',
    controller: 'drGMoorthyCtrl'
  })

  .state('doctorRequested', {
    url: '/page22',
    templateUrl: 'templates/doctorRequested.html',
    controller: 'doctorRequestedCtrl'
  });*/

    $urlRouterProvider.otherwise('/homepage');

});
