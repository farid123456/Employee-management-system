angular.module('EmployeeManagementSystem', ['ngRoute','pascalprecht.translate'])

    .config(['$routeProvider', '$locationProvider', '$translateProvider', function ($routeProvider, $locationProvider, $translateProvider) {

        $translateProvider.translations('en', {
            TITLE: 'Employee Management System',
            namePlaceholder: 'Enter Employee Name',
            emailPlaceholder: 'Enter Employee Email',
            phonePlaceholder: 'Enter Employee Phone',
            searchPlaceholder: 'Search Employee by Name',
            saveButton: 'Save',
            HEADER: 'EM System',
            c1: 'Click the Below link to view the employee record in the Organization.',
            c2: 'Some Important Features of this Application:',
            l1: 'Add Employee',
            l2: 'Update Employee',
            l3: 'Delete Employee',
            l4: 'Search Employee',
            BUTTON_CLICK: 'Click Here',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            action: 'Action',
            edit: 'Edit',
            delete: 'Delete',
            BUTTON_LANG_EN: 'English',
            BUTTON_LANG_FR: 'French'
        });

        $translateProvider.translations('fr', {
            TITLE: 'Employé La gestion Système ',
            namePlaceholder: 'Entrer Employé Prénom',
            emailPlaceholder: 'Entrer Employé Email',
            phonePlaceholder: 'Entrer Employé Téléphone',
            saveButton: 'Enregistrer',
            searchPlaceholder: 'Chercher Employé par Prénom',
            HEADER: 'EM Système',
            c1: 'Cliquez sur le lien ci-dessous pour afficher le dossier des employés dans l\'organisation.',
            c2: 'Quelques caractéristiques importantes de cette Application:',
            l1: 'Ajouter Employé',
            l2: 'Mettre à jour Employé',
            l3: 'Effacer Employé',
            l4: 'Chercher Employé',
            BUTTON_CLICK: 'Cliquez ici',
            name: 'Prénom',
            email: 'Email',
            phone: 'Téléphone',
            action: 'Action',
            edit: 'Modifier',
            delete: 'Effacer',
            BUTTON_LANG_EN: 'Anglais',
            BUTTON_LANG_FR: 'Français'
        });

        $translateProvider.preferredLanguage('en');

        $routeProvider
            .when('/', {
                templateUrl: "views/home.html",
                controller: 'EmployeeListController'
            })
            .when('/todo', {
                templateUrl: "views/todo.html",
                controller: 'EmployeeListController'
            })
            .when('/todo/edit/:id', {
                templateUrl: 'views/todo.html',
                controller: 'EmployeeListController'
            })
            .otherwise({ redirectTo: '/todo' });
        $locationProvider.hashPrefix('');   // Deep Linking

    }]);