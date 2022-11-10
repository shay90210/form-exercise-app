# Shannon Bentley's Form Exercise 

## An exercise form primarily developed using the framework React and other scalable UI libraries.

### Project Navigation 
- FormExercise.js is located in components folder

### Form Exercise Goals 
- Display a form with inputs for each field outlined in the instructions
- Allow a user to complete and submit the form
- Do not allow form submission without completing the entire form
- Provide feedback upon successful form submission

### Creating the Form 
To create the entire form, I had to be strategic with knowing which form worked best for the POST request and meeting the needs of my code.
- Swapped between FORMIK and REACT FORMS (was undecided due to the lack of documentation for FORMIK to understand how to connect the POST and GET method to the code)
- Utilized the fetch API method without creating a server because it is only a form component being used 
- The fetch method was the best option because the endpoint is single url - https://frontend-take-home.fetchrewards.com/form
- Copied a list of already created state select code from FreeFormMatter USA HTML Select List (I use this website for personal projects when creating state select options with a dropdown menu)

### Assignment Successes (Wins)
- Getting the form to render on the page
- The functionality of interacting with the form
- The password hides for security purposes
- Select dropdowns appears on one option when chosen
- The form was sent to the console.log to show successful submission

### Assignment Areas of Improvement (Challenges)
- Continued to receive 400 response after POST request sent; changed method multiple times to receive the correct message - 'stated that the URL was not applicable to send a POST request'
- By setting the types on password and email, the system gave suggestions as to what was a real email and a qualified password; however, I couldn't find a method that would work to prevent the user from submitting the form

### Transitions of Project via Images

#### BEFORE AND AFTER STYLING
- Appearance of the form with only the added content
<img src='/src/img/initialform.png' width='500px' alt='inital project before styling and props' />

<img src='/src/img/screencapture-localhost-3001-2022-11-09-22_59_10.png' width='500px' alt='minimal styling on form' />


