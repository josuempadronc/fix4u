var app = angular.module('categ', []);

app.controller('categoriaCtrls', function($scope) {
    $scope.Categorias = [];
    var empid = 1;
    // Funcion Crud
    $scope.saveRecord = function() {
        // Funcion crear
        if ($scope.newCategoria.id == null) {

            $scope.newCategoria.id = empid++;

            $scope.Categorias.push($scope.newCategoria);

        } else {
            for (i in $scope.Categorias) {
                if ($scope.Categorias[i].id == $scope.newCategoria.id) {

                    $scope.Categorias[i] = $scope.newCategoria;

                }
            }
        }
        $scope.newCategoria = {};
        //Funcuin delet
        $scope.delete = function(id) {
                for (i in $scope.Categorias) {
                    if ($scope.Categorias[i].id == id) {
                        $scope.Categorias.splice(i, 1);
                        $scope.newCategoria = {};
                    }
                }
            }
            // Funcion editar
        $scope.edit = function(id) {
            for (i in $scope.Categorias) {
                if ($scope.Categorias[i].id == id) {

                    $scope.newCategoria = angular.copy($scope.Categorias[i]);

                }
            }
        }
    }
});


var app = angular.module('myapp', []);

app.controller('productosCtrl', function($scope) {
    $scope.Producs = [];
    var empid = 1;

    $scope.add = function() {
            var f = document.getElementById('file').files[0],
                r = new FileReader();

            r.onloadend = function(e) {
                var data = e.target.result;
                //send your binary data via $http or $resource or do anything else with it
            }

            r.readAsBinaryString(f);
        }
        // Funcion Crud
    $scope.saveRecord = function() {
        // Funcion crear
        if ($scope.newProduc.id == null) {

            $scope.newProduc.id = empid++;

            $scope.Producs.push($scope.newProduc);

        } else {
            for (i in $scope.Producs) {
                if ($scope.Producs[i].id == $scope.newProduc.id) {

                    $scope.Producs[i] = $scope.newProduc;

                }
            }
        }
        $scope.newProduc = {};
        //Funcuin delet
        $scope.delete = function(id) {
                for (i in $scope.Producs) {
                    if ($scope.Producs[i].id == id) {
                        $scope.Producs.splice(i, 1);
                        $scope.newProduc = {};
                    }
                }
            }
            // Funcion editar
        $scope.edit = function(id) {
            for (i in $scope.Producs) {
                if ($scope.Producs[i].id == id) {

                    $scope.newProduc = angular.copy($scope.Producs[i]);

                }
            }
        }
    }
});