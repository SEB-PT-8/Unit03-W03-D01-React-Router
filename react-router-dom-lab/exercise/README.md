<h1>
  <span class="headline">React Router DOM Lab</span>
  <span class="subhead">Exercise</span>
</h1>

## Overview

In this lab, you will build an application that simulates a post office, where users can create new mailboxes, view a list of all mailboxes, and explore details about each mailbox.

You will utilize several client-side routing tools provided by React Router's library to complete this lab.

### What is a mailbox in this lab?

Each "mailbox" in this lab represents a type of post office box, often called a **PO Box**.

A **PO Box** (short for "Post Office Box") is a secure, numbered box located at a post office where people can receive mail. These boxes are rented by individuals or businesses who want a private or reliable way to get their mail. Only the box owner has access to their assigned box.

In this lab, each mailbox will have:

- A unique box number (`_id`) **Assigned Automatically by the server**
- The name of the box owner (`boxOwner`)
- The size of the box (`size`), such as Small, Medium, or Large

Here are a few screenshots to reference as you work through this exercise:

![List page](./assets/list.png)

![Details page](./assets/details.png)

![New page](./assets/new-mailbox.png)

Take a look at the component hierarchy diagram below for a sense of how this application will be structured:

![Component hierarchy diagram](./assets/chd.png)

In the list below, you'll find a brief description of the role of each component in our app:

- **App**: The root component that orchestrates the entire application.
- **NavBar**: Provides navigation links.
- **MailboxForm**: Allows users to enter details for and submit new mailboxes.
- **MailboxList**: Displays an index list of all mailboxes.
- **MailboxDetails**: Shows details about a specific mailbox.

## Lab exercise


To get started, follow the steps below:

1. Go to this URL to read the documentation on the API you will use for this lab: https://mailbox-lab.onrender.com. READ THE DOCUMENTATION to understand how it works

2. Test the API in postman to see how it looks. Make API calls to all 3 endpoints

3. Start by creating each of the components listed below. After creating each component, be sure to import them at the top of `src/App.jsx`.

   - `src/components/NavBar/NavBar.jsx`
   - `src/pages/MailboxForm/MailboxForm.jsx`
   - `src/pages/MailboxList/MailboxList.jsx`
   - `src/pages/MailboxDetails/MailboxDetails.jsx`

4. Within `NavBar.jsx`, import `Link` from `react-router` and create a `<Link>` for each destination in the table below:

   | Destination | `to`           | Text Content |
   | ----------- | -------------- | ------------ |
   | Home        | `/`            | Home         |
   | MailboxList | `/mailboxes`   | Mailboxes    |
   | MailboxForm | `/new-mailbox` | New Mailbox  |

5. In `App.jsx`, import `Route` and `Routes` from `react-router` and create a `<Route>` for each destination in the table below:

   | Destination    | `path`                  | `element`                           |
   | -------------- | ----------------------- | ----------------------------------- |
   | Home           | `/`                     | `<main><h1>Post Office</h1></main>` |
   | MailboxList    | `/mailboxes`            | `<MailboxList />`                   |
   | MailboxForm    | `/new-mailbox`          | `<MailboxForm />`                   |
   | MailboxDetails | `/mailboxes/:mailboxId` | `<MailboxDetails />`                |

6. Use the following API to READ THE DOCUMENTATION. And in the page components add the API calls: 

7. In the `/new-mailbox` route create a form. It should accept form data for a new mailbox and POST the values to the API

8. In the `/mailboxes` an API call should be made to get all the mailboxes

9. In the `/mailboxes/:mailboxId` route it should show the specific mailbox

10. If you haven't already, create a .env file and add the Base URL inside. Make sure to make the calls with the `import.meta.env` instead of the url. We dont want to expose the API URL

**REMEMBER** : This is Omar's free API so it will have a slow start up if inactive for long time

## Bonus

1. Use antD package to add spinners in your app for loading
2. Add try catch to all your API calls
3. Create a service file that contains all the api calls. Export all the functions and call them in the components
4. Have the size be a dropdown in dropdown in the form and not a normal input
5. Redirect the user to the `MailBoxDetails` page instead of the `MailboxList`
6. Create an error state that is set in the .catch() of your api calls so the user sees a clear error message. So now your component can be in 1 of 3 states:
   1. Loading
   2. Error
   3. displaying values
