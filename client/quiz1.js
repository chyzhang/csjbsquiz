Template.quiz1.helpers({
	personInfo: function(){return personInfo.find({}, {sort:{nameOfTheProduct:1,firstName:1, lastName:1}});}
})


Template.ipersonInfo.events({
	"click .jbsapp-delete-icon": function(){personInfo.remove(this._id);}
})


Template.quiz1.events({

		"submit #createPerson": function(event){
		event.preventDefault();

		var nameOfTheProduct = event.target.nameOfTheProduct.value;
		var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
		var URLForProject = event.target.URLForProject.value;
		var URLForGit = event.target.URLForGit.value;
		console.log(JSON.stringify(this));      
        personInfo.insert({nameOfTheProduct:nameOfTheProduct, firstName:firstName, lastName:lastName, URLForProject:URLForProject,URLForGit:URLForGit});
	
		
	}
})