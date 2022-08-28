const ng = angular.module('MyApp', []);

ng.controller('MainCtrl', [ '$http', function($http){

controller = this;
this.showOptions = {};

    this.getContacts = () => {

        $http({
            method:'GET',
            url: '/contactsapi',
        }).then(function(response){
            console.log(response);
            controller.contactArray = [response.data];
            console.log(controller.contactArray);
        }, function(){
            console.log('error');
        });


    }

    this.showOpts = (contact) => {

        controller.showOptions[contact.name] = !controller.showOptions[contact.name]

    }


    this.createContact = () => {
        $http({
            method:'POST',
            url: '/contactsapi',
            data: {
              name: controller.contactName,
              phone: controller.contactPhone,
              email: controller.contactEmail,
              address: controller.contactAddress
            }
        }).then(function(response){
            console.log(response);
            controller.getContacts();
            controller.contactName ="";
            controller.contactPhone ="";
            controller.contactEmail ="";
            controller.contactAddress ="";
        }, function(){
            console.log('error');
        });
    }


    this.deleteContact = function(contact){
    $http({
        method:'DELETE',
        url: '/contactsapi/' + contact._id
    }).then(
        function(response){
            controller.getContacts();
        },
        function(error){

        }
    );
}

    this.editContact = function(contact){
        $http({
        method:'PUT',
        url: '/contactsapi/' + contact._id,
        data: {
            name: controller.updatedContactName,
            phone: controller.updatedContactPhone,
            email: controller.updatedContactEmail,
            address: controller.updatedContactAddress
        }
    }).then(
        function(response){
            controller.getContacts();
            controller.updatedContactName ="";
            controller.updatedContactPhone ="";
            controller.updatedContactEmail ="";
            controller.updatedContactAddress ="";
        },
        function(error){

        }
    );
}


}]);


// ng.controller('MainCtrl', function(){
//
// });
