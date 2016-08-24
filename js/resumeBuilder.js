 $(".container").prepend(internationalizeButton);
 var bio = {
	"name" : "Scott J. Davis",
	"role" : "Web Developer",
	"contacts" : {
		"opening" : "Contact Information:",
		"mobile" : "508-809-0303",
		"email" : "Sdavis1985@Gmail.com",
		"twitter" : "@Scoiatael85",
		"github" : "Scoiatael85",
		"slack" : "#front-end_web-head",
		"location" : "201 Knight Ave Attleboro, MA"
	},
	"biopic" : "images/Me.png",
	"welcomeMessage" : "Ready for Action! I'm hear to tear up the world of Web Design!!",
	"skillLevel" : [4, 4, 3, 3, 6, 5]
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", 
		bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", 
		bio.name);
	$("#header").prepend(formattedName);
	var contactGeneric = HTMLcontactGeneric.replace("%data%", 
		bio.contacts.generic);
	var contactMobile = HTMLmobile.replace("%data%", 
		bio.contacts.mobile);
//	$("#header").append(contactMobile);
	var contactMobile2 = HTMLmobile2.replace("%data%", 
		bio.contacts.mobile);
	$("#contact-box-open1, #contact-box-open2, #footerContacts").append(contactMobile2);
	var contactEmail = HTMLemail.replace("%data%", 
		bio.contacts.email);
//	$("#header").append(contactEmail);
	var contactEmail2 = HTMLemail2.replace("%data%", 
		bio.contacts.email);
	$("#contact-box-open1, #contact-box-open2, #footerContacts").append(contactEmail2);
	var contactTwitter = HTMLtwitter.replace("%data%", 
		bio.contacts.twitter);
	$("#contact-box-open1, #contact-box-open2, #footerContacts").append(contactTwitter);
	var contactGithub = HTMLgithub.replace("%data%", 
		bio.contacts.github);
	$("#contact-box-open1, #contact-box-open2, #footerContacts").append(contactGithub);
	var contactSlack = HTMLslack.replace("%data%", 
		bio.contacts.slack);
	$("#contact-box-open1, #contact-box-open2").append(contactSlack);
	var contactLocation = HTMLlocation.replace("%data%", 
		bio.contacts.location);
	$("#contact-box-open1, #contact-box-open2").append(contactLocation);
	var formattedbioPic = HTMLbioPic.replace("%data%", 
		bio.biopic);
	$("#picture").prepend(formattedbioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", 
		bio.welcomeMessage);
	var skillsStart = HTMLskillsStart.replace("%data%", 
		bio.skills_start);
    var contactOpening = HTMLskillsStart.replace("Skill Set :", 
        bio.contacts.opening);

	if(bio.skillLevel.length > 0) {
		bio.skills = ["HTML", "CSS", "Javascript", "SQL", "Team Leadership", "Independant Work"];
		$("#skilled1").append(skillsStart);

		for(var skilled = 0; skilled < bio.skills.length; skilled++){
//		for(skilled in bio.skills) {
			var formattedskills = HTMLskills.replace("%data%", bio.skills[skilled]);
			$("#skills:last").append(formattedskills);
		}

		for(var levels = 0; levels < bio.skills.length; levels++){
//		for(levels in bio.skillLevel) {
			$("#skill-level:last").append(HTMLskillRow);
			for(var level = 0; level < bio.skillLevel[levels]; level++){
				$(".skill-level:last").append(HTMLskillLevel);
			}
			for(var level = bio.skillLevel[levels]; level < 6; level++){
				$(".skill-level:last").append(HTMLskillLevel0);
			}
		}
	}
	$("#contact-box-open1").append(formattedMsg);
};
bio.display();


 var work = {
 	"jobs": [
 		{
 			"employer" : "99 Restaurants",
 			"title" : "Assistant General Manager",
 			"dates" : "July, 2012 - Current",
 			"location" : "Attleboro, Massachussetts",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		},
 		{	"employer" : "Unos Chicago Bar & Grille",
 			"title" : "Assistant General Manager",
 			"dates" : "September, 2008 - July, 2012",
 			"location" : "Portland, Maine",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		},
 		{	"employer" : "Ruby Tuesday",
 			"title" : "Assistant General Manager",
 			"dates" : "August, 2004 - September, 2008",
 			"location" : "Taunton, Massachussetts",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		}
 	]
};

work.display = function() {
	for(var job = 0; job < work.jobs.length; job++){
//	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerTitle = workEmployer + workTitle;
		var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);	
		var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(employerTitle);
		$(".work-entry:last").append(workDates);
		$(".work-entry:last").append(workLocation);
		$(".work-entry:last").append(workDescription);
		}
};
work.display();

var projects = {
	"projects" : [
		{
			"title" : "Build a Portfolio Site",
 			"dates" : "February 1st, 2016 - February 9th, 2016",
 			"description" : "Make a responsive Porfolio for Jane Doette",
 			"images" : ["images/meta-tags.jpg"]
		},
		{
 			"title" : "Responsive Blog",
 			"dates" : "February 10th, 2016 - February 14th, 2016",
 			"description" : "A fully responive blog site",
 			"images" : ["images/city.png"]
 		},
 		{
 			"title" : "Online Resume",
 			"dates" : "March 25th, 2016 - April 12th, 2016",
 			"description" : "An online resume",
 			"images" : ["images/Publication1.jpg"]
 		}
 	]
};
projects.display = function() {
	for(var pjt = 0; pjt < projects.projects.length; pjt++){
// 	for (pjt in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

		var projectName = HTMLprojectTitle.replace("%data%", 
			projects.projects[pjt].title);
		$(".project-entry:last").append(projectName);
		var projectDates = HTMLprojectDates.replace("%data%", 
			projects.projects[pjt].dates);
		$(".project-entry:last").append(projectDates);
		var projectLocation = HTMLprojectDescription.replace("%data%", 
			projects.projects[pjt].description);
		$(".project-entry:last").append(projectLocation);

		if (projects.projects[pjt].images.length > 0) {
			for(var image = 0; image < projects.projects[pjt].images.length; image++){
//			for (image in projects.projects[pjt].images) {	
				var projectImage = HTMLprojectImage.replace("%data%", 
				projects.projects[pjt].images[image]);
				$(".project-entry:last").append(projectImage);
			}
		}
	}
};
projects.display();

var education = {
	"schools" : [
		{
 			"name" : "Attleboro High School",
 			"location" : "Attleboro, MA",
 			"degree" : "High School Diploma",
 			"majors" : "I took 10 science (including AP) classes and 6 math (including AP) classes",
 			"dates" : "September, 2000 - May, 2004",
 			"url" : "ahs.attleboroschools.com"
 		}
 	],
 	"onlineCourses" : [
 		{
 			"title" : "Front-end Web Developer Nanodegree",
 			"school" : "Udacity",
 			"dates" : "February, 2016 - October, 2016",
 			"url" : "Udacity.com"
		},
		{
			"title" : "Javascript: Understanding the Weird Parts",
			"school" : "Udemy",
 			"dates" : "March, 2016 - April, 2016",
 			"url" : "Udemy.com"			
		}
	]
};

education.display = function() {
	for(var school = 0; school < education.schools.length; school++){
	// for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

 	var educationName = HTMLschoolName.replace("%data%", 
 		education.schools[school].name);
 	$(".education-entry:last").append(educationName);
 	var educationDegree = HTMLschoolDegree.replace("%data%", 
 		education.schools[school].degree);
 	$(".education-entry:last").append(educationDegree);
 	var educationDates = HTMLschoolDates.replace("%data%", 
 		education.schools[school].dates);
 	$(".education-entry:last").append(educationDates);
 	var educationLocation = HTMLschoolLocation.replace("%data%", 
 		education.schools[school].location);
 	$(".education-entry:last").append(educationLocation);
 	var educationMajors = HTMLschoolMajor.replace("%data%", 
 		education.schools[school].majors);
 	$(".education-entry:last").append(educationMajors);
 	var educationUrl = HTMLonlineURL.replace("%data%", 
 		education.schools[school].url);
 	$(".education-entry:last").append(educationUrl);
 	}
 	$(".education-entry:last").append(HTMLonlineClasses);
	for(var courses = 0; courses < education.onlineCourses.length; courses++){
//	for (courses in education.onlineCourses) {


		var onlineName = HTMLonlineTitle.replace("%data%", 
			education.onlineCourses[courses].title);
		$(".education-entry:last").append(onlineName);
		var onlineDegree = HTMLonlineSchool.replace("%data%", 
			education.onlineCourses[courses].school);
		$(".education-entry:last").append(onlineDegree);
		var onlineDates = HTMLonlineDates.replace("%data%", 
			education.onlineCourses[courses].dates);
		$(".education-entry:last").append(onlineDates);
		var onlineLocation = HTMLonlineURL.replace("%data%", 
			education.onlineCourses[courses].url);
		$(".education-entry:last").append(onlineLocation);
	}
};
education.display();


function inName () {
	var internationalName = bio.name;
	var names = bio.name.trim().split(" ");
	console.log(names);
    names[2] = names[2].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    internationalName = names.join(" ");
    
    return internationalName;
}

 var aboutMe = {
 	"family" : [
 		{
 			"wife" : "Brittany",
 			"child" : "Aurora"
 		}
 	],
 	"objectives" : "Getting a new damned job!!!",
 	"interests" : ["D&D", "Charity", "Beer", "Scotch", "Cigars", "MCU"],
 	"references" : [
 		{
 			"name" : "Asta Hodge",
 			"title" : "General Manager",
 			"relationship" : "my boss",
 			"phone" : "401-301-7349",
 		},
 		{
 			"name" : "Bethany Massey",
 			"title" : "Service Manager",
 			"relationship" : "colleage",
 			"phone" : "401-741-9721",
 		},
 		{
 			"name" : "Garon Davis",
 			"title" : "Web Developer",
 			"relationship" : "Brother",
 			"phone" : "508-463-7825",
 		}
 	]
 };
aboutMe.display = function() {
	for(var details = 0; details < aboutMe.family.length; details++){
		$('#biography').append(HTMLaboutmeStart);

	 	var wifeName = HTMLwifeName.replace("%data%", aboutMe.family[details].wife);
	 	$(".bio-entry:last").append(wifeName);
	 	var ChildName = HTMLchildName.replace("%data%", aboutMe.family[details].child);
	 	$(".bio-entry:last").append(ChildName);
 	}
};
aboutMe.display();

$("#mapDiv").append(googleMap);
