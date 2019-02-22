"use strict";
var shorBio = 'My name is SIMON RICHARD ESWARAMOORTHY, I have 7 years experience as Workday Integration Consultant and overall 10 years experience in software development. Worked on 6 End-to-End implementations in Workday. Currently in Seattle, WA location. Kindly reach me @ 609-XXX-XXXX';
var interested = 'I am interested to apply for this position'
var name = '';

           
            while (name.length < 1) {
                name = prompt('What is your name?');                              
           }

           console.log('Name:', name);
            if(name.length > 0) {
                alert('Hi ' + name + '!. Thanks for visiting my page');
            }
            var isRecruiter = "";
            
            while (isRecruiter.length < 1  && name.length > 0) {
               
                isRecruiter = prompt('Are you a Recruiter? Say Yes/No');
                
                while(isRecruiter.length > 0 && ! (isRecruiter.toUpperCase() === "yes".toUpperCase() || isRecruiter.toUpperCase() === "no".toUpperCase() || isRecruiter.toUpperCase() === "y".toUpperCase() || isRecruiter.toUpperCase() === "n".toUpperCase())) {
                    isRecruiter = prompt('Are you a Recruiter? Say Yes/No');                   
                }
                
            }
            console.log('isRecruiter:', isRecruiter);
            if(isRecruiter.length > 0 && isRecruiter.toUpperCase() === "no".toUpperCase() || isRecruiter.toUpperCase() === "n".toUpperCase()) {
                alert("Thanks for visiting my page.  Have a great Day! ");
            }
            else if(isRecruiter.length > 0) {
                alert(name + ', Nice to have you here!');
            }

            var openPosition = "";
            
            while (openPosition.length < 1  && name.length > 0 && (isRecruiter.toUpperCase() === "yes".toUpperCase() || isRecruiter.toUpperCase() === "y".toUpperCase())) {
                openPosition = prompt('Do you have any open position to be filled in? Say Yes/No');
                  
                while(openPosition.length > 0 && ! (openPosition.toUpperCase() === "yes".toUpperCase() || openPosition.toUpperCase() === "no".toUpperCase() || openPosition.toUpperCase() === "y".toUpperCase() || openPosition.toUpperCase() === "n".toUpperCase())) {
                    openPosition = prompt('Do you have any open position to be filled in? Say Yes/No');                   
                }             
            }
            console.log('openPosition:', openPosition);
            if(openPosition.length > 0 && openPosition.toUpperCase() === "no".toUpperCase() || openPosition.toUpperCase() === "n".toUpperCase()) {
                alert("Thank you for the confirmation.  Please reach out to me when you're looking for a candidate matching my skill set.");
            } else if(openPosition.length > 0) {
                alert('Cool. I am looking for a new position.  ');
            }

            var workLocation = "";
            
            while (workLocation.length < 1  && name.length > 0 && (isRecruiter.toUpperCase() === "yes".toUpperCase() || isRecruiter.toUpperCase() === "y".toUpperCase()) && (openPosition.toUpperCase() === "yes".toUpperCase() || openPosition.toUpperCase() === "y".toUpperCase())) {
                workLocation = prompt('Is that position based on Seattle location? Say Yes/No');
                  
                while(workLocation.length > 0 && ! (workLocation.toUpperCase() === "yes".toUpperCase() || workLocation.toUpperCase() === "no".toUpperCase() || workLocation.toUpperCase() === "y".toUpperCase() || workLocation.toUpperCase() === "n".toUpperCase())) {
                    workLocation = prompt('Is that position based on Seattle location? Say Yes/No');                    
                }             
            }
            console.log('workLocation:', workLocation);
            if(workLocation.length > 0 && workLocation.toUpperCase() === "no".toUpperCase() || workLocation.toUpperCase() === "n".toUpperCase()) {
                alert("Thank you for the confirmation.  Please reach out to me when you're looking for a candidate matching my skill set and location.");
            } else if(workLocation.length > 0) {
                alert('Wow. I am in Seattle.');
            }

            var isExperienced = "";
            
            while (isExperienced.length < 1  && name.length > 0 && (isRecruiter.toUpperCase() === "yes".toUpperCase() || isRecruiter.toUpperCase() === "y".toUpperCase()) && (openPosition.toUpperCase() === "yes".toUpperCase() || openPosition.toUpperCase() === "y".toUpperCase()) && (workLocation.toUpperCase() === "yes".toUpperCase() || workLocation.toUpperCase() === "y".toUpperCase())) {
                isExperienced = prompt('Are you looking for experienced candidate? Say Yes/No');
                  
                while(isExperienced.length > 0 && ! (isExperienced.toUpperCase() === "yes".toUpperCase() || isExperienced.toUpperCase() === "no".toUpperCase() || isExperienced.toUpperCase() === "y".toUpperCase() || isExperienced.toUpperCase() === "n".toUpperCase())) {
                    isExperienced = prompt('Are you looking for experienced candidate? Say Yes/No');                   
                }             
            }
            console.log('isExperienced:', isExperienced);
            if(isExperienced.length > 0 && isExperienced.toUpperCase() === "no".toUpperCase() || isExperienced.toUpperCase() === "n".toUpperCase()) {
                alert("Thank you for the confirmation.  Please reach out to me when you're looking for a candidate matching my skill set, experience and location.");
            } else if(isExperienced.length > 0) {
                alert('Great. I have 10 years experience');
            }

            var visaSponser = "";
            
            while (visaSponser.length < 1  && name.length > 0 && (isRecruiter.toUpperCase() === "yes".toUpperCase() || isRecruiter.toUpperCase() === "y".toUpperCase()) && (openPosition.toUpperCase() === "yes".toUpperCase() || openPosition.toUpperCase() === "y".toUpperCase()) && (workLocation.toUpperCase() === "yes".toUpperCase() || workLocation.toUpperCase() === "y".toUpperCase()) && (isExperienced.toUpperCase() === "yes".toUpperCase() || isExperienced.toUpperCase() === "y".toUpperCase())) {
                visaSponser = prompt('Does this position offer Visa Sponsorship? Say Yes/No');
                 
                while(visaSponser.length > 0 && ! (visaSponser.toUpperCase() === "yes".toUpperCase() || visaSponser.toUpperCase() === "no".toUpperCase() || visaSponser.toUpperCase() === "y".toUpperCase() || visaSponser.toUpperCase() === "n".toUpperCase())) {
                    visaSponser = prompt('Does this position offer Visa Sponsorship? Say Yes/No');                    
                }             
            }
            console.log('visaSponser:', visaSponser);
            if(visaSponser.length > 0 && visaSponser.toUpperCase() === "no".toUpperCase() || visaSponser.toUpperCase() === "n".toUpperCase()) {
                alert("Thank you for the confirmation.  Please reach out to me when you're looking for a candidate matching my skill set, experience and location.");
            } else if(visaSponser.length > 0 ) {
                alert('Great. I am interested to Apply for this position. Click ok to see my profile.');
            }