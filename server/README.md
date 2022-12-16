# Product Feedback API


## Technologies used on the app
- Typescript
- Yup
- passport, passport-local, passport-google-oauth-20, passport-linkedin-oauth2, passport-facebook
- Cloudinary
- Multer
- JWT
- Mongoose


## Features

### Authentication and Authorization
- Authentication is maintained by passport
- Authorization is handled by jwt

### Register
- User sent data is sanitized to escape any HTML code
- Database is looked at to find user with the user sent username and email
  - If both exist, response is sent with the appropriate error messages
  - Else if only username exist then response is sent with the appropriate error messages
  - Else if only email exist then response is sent with the appropriate error messages
  - Else users' password is hashed and new user is created in the database and then the success response is returned
  
### Login
- When user submits his credentials for login, if he's authenticated
  - Then access and refresh token are generated and current user, access and refresh tokens are sent in the response

### Logout
- When user logs out the session is destroyed and the success response is returned

### Create Feedback
- User sent data is sanitized to escape any HTML code
- And new feedback is created with user sent data
- And success response with newly creted feedback is returned
- If there's some error than failure message is returned in the response

### Edit Feedback
- User sent data is sanitized to escape any HTML code
- And feedback is found from the database with feedback id sent by the user,
- And the found feedback is edited with the user sent data
- And success response with edited feedback is returned
- If there's some error than failure message is returned in the response

### Delete Feedback
- User sent feedback id 
- Feedback is found and deleted with the user sent feedback id
- Success response is returned
- If there's some error than failure message is returned in the response

### Create Comment
- User sent data is sanitized to escape any HTML code
- New comment is created with the user sent comment data
- Feedback is found by the user sent feedback id and newly created comment is added to it
- Success message is returned with newly created comment
- If there's some error than failure message is returned in the response

### Edit Comment
- User sent data is sanitized to escape any HTML code
- Comment with the user sent comment id is found and updated with the user sent comment data
- Success message is returned with the edited comment
- If there's some error than failure message is returned in the response

### Reply Comment
- User sent data is sanitized to escape any HTML code
- New comment is created with the user sent comment data
- Feedback is found by the user sent feedback id and newly created comment is added to it
- Success message is returned with newly created comment
- If there's some error than failure message is returned in the response

### Delete Comment
- All the comments with the comment id sent by the user is deleted
- Success message is returned in the response
- If there's some error than failure message is returned in the response

### Upvote/Downvote Feedback
- Feedback is found with the user sent feedback id
- If current user is already upvoted for this feedback and the user sent feedback vote type is upvote as well then feedback is not changed
- Else the user vote type is opposite of the current vote type than feedback voteAmount is modified accordingly
- Success response with the modified feedback is returned
- If there's some error than failure message is returned in the response

### Change Username
- User sent data is sanitized to escape any HTML code
- User sent username is looked at the database
- If user is found then response with error message is returned
- Else user sent password and his current password is compared
  - If they are the match, then his username is changed
  - Usernames in all the comments that he created also be changed to his new username
  - Usernames in all the votes  that he votd also be changed to his new username
  - Success message is returned in the response
- If there's some error than failure message is returned in the response

### Change Email
- User sent data is sanitized to escape any HTML code
- User sent email is looked at the database
- If user is found then response with error message is returned
- Else user sent password and his current password is compared
  - If they are the match, then his email is changed
  - Success message is returned in the response
- If there's some error than failure message is returned in the response

### Change Password
- User sent data is sanitized to escape any HTML code
- His new and new confirm passwords are compared, if they are the same the error message is returned in the response
- Else user sent password and his current password is compared
  - If they are the match, then his password is changed
  - Success message is returned in the response
- If there's some error than failure message is returned in the response

### Change Feedback Status
- User is checked for his authority, if he is the admin
  - Then feedback with the user sent feedback id is found, it status is changed to the new status sent by the user
  - Success message is returned in the response
- Else user is not the admin then the error message with 403 status code is returned
- If there's some error than failure message is returned in the response
  
### Delete Account
- User is found with the user send user id
- If the user sent user id and the found user id is the same
  - All of his comments are deleted
  - All of his feedback are deleted
  - He's record is deleted from the database
  - Success message is returned in the response
- Else they are not the same then the failure message with 403 code is returned  


### Change Profile Photo
- User is found with the user send user id
- If the current user has already image and image id of the cloudinary image 
  - Then his old image in the cloudinary deleted with his current cloudinary image id
  - New image is created  with the user sent image
  - The current user profile picture and image id is updated newly created image in the cloudinary
  - If the current user has comments, all of his comments user photo is updated to newly create image
  - Updated user is returned in the response
- Else the current user has no image 
  - Then new image is created in the cloudinary with the user sent image
  - The current user profile picture and image id is updated newly created image in the cloudinary
  - If the current user has comments, all of his comments user photo is updated to newly create image
  - Updated user is returned in the response
- If there's some error than failure message is returned in the response 

