# Product Feedback Admin 
Product Feedback Admin is where the admin of the app modify existing feedbacks by changing their status to planned, in-progress, live. Admin can also change his email/password/username. He can also login to the Product Feedback App with his credentials.

## [LIVE](https://product-feedback-admin.netlify.app/)

![safevideoconverter-output](https://user-images.githubusercontent.com/104018697/197340347-4ee0d771-f5db-4aea-9768-b945c6bbacf3.gif)


## Technologies used on the app
- React
- Redux-Toolkit
- Styled-components
- React-router-dom
- Typescript
- Formik
- Axios

## Features

### Login
- Admin submits with his credentials
  - If credentials are valid, he's authenticated to access the app
  - Else credentials are not admin's then error message inidicating that you're not admin displayed
  - If malicious user tries to access the app by logging in using random credentials, after 5 attempts, he'll not able to login the app for an hour

### Logout
- Authenticated admin can logout of the app by clicking logout button. This logs him out of the app

### Change Username
- Admin submits new username and his password
  - If username is unique among Product Feedback App users, and password is valid then
    his name'd be changed
  - Else 
    - username is not unique, an error message indicating username is already in use message is displayed  
    - password is incorrect, password is incorrect message is displayed
### Change Email
- Admin submits new email and his password
  - If email is unique among Product Feedback App users, and password is valid then
    his email'd be changed
  - Else 
    - email is not unique, an error message indicating email is already in use message is displayed  
    - password is incorrect, password is incorrect message is displayed
### Change Password
- Admin submits the current password, the new password, and the new confirm password
  - If the current password is the same as his password, and the new password and the new confirm password matches, then his password'd be changed to the new password
  - Else 
    - the current password did not match with his password, incorrect password'd message be displayed
    - the new password and the new confirm password did not match, the password mismatch message is displayed

### Change Feedbacks
- Admin can change the status of the any on of the feedbacks among the list of feedbacks to LIVE, PLANNED, or IN-PROGRESS.
  - result of this operation'd be immediately displayed 

### Pagination
- Each page'd have exactly 10 feedbacks
- User can go to different feedbacks by clicking page number in the pagination


