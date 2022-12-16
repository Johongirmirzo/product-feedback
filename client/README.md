# Product Feedback App
Product Feedback App where users of the product can leave their feedbacks on the app Feautures, Bugs, UI, UX, Enhancement. Users can leave comments, reply/edit/delete comments. Users can upvote/downvote feedbacks. Author of the feedback can edit/delete his feedback. User can also change his username/email/password. User can also change his profile photo. User can also delete his account which result in deleting his photo, all feedbacks, all comments from the app. User can also login/register with his social accounts as such: google/facebook/linkedin. 

## [LIVE](https://product-feedbacck.netlify.app/)

[Screen Recording - Made with FlexClip (1).webm](https://user-images.githubusercontent.com/104018697/197342568-92c426f2-99f7-461e-b024-d6bb95dbf738.webm)

## Technologies used on the app:
- React
- Redux-Toolkit
- Typescript
- Formik
- Yup
- Axios
- Chakra-UI

## Features

### Register
- User submits a username, an email, a password, and a confirm password
  - If all the data is valid, then new user with these credentials created and the user's redirect to the login page to login with his newly created credentials
  - Else
    - the username is already registered with, username is already in use message is displayed
    - the email is already registered with, email is already in use message is displayed
    - if a password and a confirm password did not match, password did not match message is displayed
  - If user creates limit of 2 accounts and attempts to create 3rd account within 24 hour then the message of you've reached max account creating displayed and can only create a new account after 24 hours
  
### Login
- User submits his credentials
  - If credentials are valid, then user's logged in the app and redirect to the home page
  - Else
    - credentials are invalid, the message indicating invalid credentials are displayed
  - If malicious user tries to access the app by logging in using random credentials, after 10 attempts, he'll not able to login the app for an hour
### Logout
- The authenticated user can log out of the app by clicking the log out button.

### Create Feedback
- User submits a feedback title, a feedback category, and a feedback description
  - If all the data is valid, the new feedback is created and the user'll be redirected to the home page where he can see his newly created feedback
  - Else
    - If title is less than 10 or more than 80 characters long then the appropriate error message is displayed
    - If description is less than 25 characters or more than 250 characters long then the appropriate error message is displayed
### Edit Feedback
- All the edit feedback form fields are populated with the feedback data that's being edited
- And when the user submits a feedback title, a feedback category, and a feedback description
  - If all the data is valid, the new feedback is created and the user'll be redirected to the home page where he can see his newly created feedback
  - Else
    - If title is less than 10 or more than 80 characters long then the appropriate error message is displayed
    - If description is less than 25 characters or more than 250 characters long then the appropriate error message is displayed

### Delete Feedback
- Author of the feedback can delete the feedback by cliking delete feedback button
  - When this happens the modal pops up, warning about the user's action and asking the user to fill the input with the confirmation message
  - If the user fill the input with the confirmation message and clicking delete then the feedback is deleted and the user's redirected to the home page where he sees all the feedbacks other than his deleted feedback
  - Else user decides not to delete feedback and clicks cancel button, modal is removed

### Create Comment
- User submits his comment on the feedback
  - If the data is valid, the new comment is created on the feedback
  - Else
    - comment is less than 10 characters or more than 250 characters long, the appropriate message is displayed

### Edit Comment
- Edit comment form is filled with his comment
- And when the user submits the comment on the feedback
  - If the data is valid, then his comment is edited which he can see on the feedback
  - Else
    - comment is less than 10 characters or more than 250 characters long, the appropriate message is displayed

### Delete Comment
- Author of the comment can delete the comment by cliking delete comment button
  - When this happens the modal pops up, warning about the user's action and asking the user to fill the input with the confirmation message
  - If the user fill the input with the confirmation message and clicking delete then the comment is deleted and the user's redirected to the home page.
  - Else user decides not to delete comment and clicks cancel button, modal is removed

### Reply Comment
- User submits his reply comment to the user on the feedback
  - If the data is valid, the new comment is created on the feedback with the replied user's username
  - Else
    - comment is less than 10 characters or more than 250 characters long, the appropriate message is displayed


### Upvote/Downvote Feedback
- User can either upvote or downvote once which means is that if he upvoted the feedback then he can't upvote again but he can only downvote and the next time he can only upvote but not downvote again. 

### Change Username
- User submits new username and his password
  - If username is unique among Product Feedback App users, and password is valid then
    his name'd be changed
  - Else 
    - username is not unique, an error message indicating username is already in use message is displayed  
    - password is incorrect, password is incorrect message is displayed
### Change Email
- User submits new email and his password
  - If email is unique among Product Feedback App users, and password is valid then
    his email'd be changed
  - Else 
    - email is not unique, an error message indicating email is already in use message is displayed  
    - password is incorrect, password is incorrect message is displayed
### Change Password
- User submits the current password, the new password, and the new confirm password
  - If the current password is the same as his password, and the new password and the new confirm password matches, then his password'd be changed to the new password
  - Else 
    - the current password did not match with his password, incorrect password'd message be displayed
    - the new password and the new confirm password did not match, the password mismatch message is displayed


### Change Profile Picture
- User can only submit the local images in the following format: jpeg, jpg, png, svg, webp.
- User chooses image from his local file and submits the image 
  - If the image is in the range of the maximum 1mb, then his profile image is changed to that image
  - Else
    - the user submits the video or the image larger than 1mb, the appropriate error message is displayed
  

### Delete Account
- Author of the account can delete the account by cliking delete account button
  - When this happens the modal pops up, warning about the user's action and asking the user to fill the input with the confirmation message
  - If the user fill the input with the confirmation message and clicking delete then the account is deleted. When this this happens, all of the user's data such as his feedback, comments are deleted and he's redirect to the register page
  - Else user decides not to delete account and clicks cancel button, modal is removed


### Pagination
- Each page'd have exactly 10 feedbacks
- User can go to different feedbacks by clicking page number in the pagination
