## Title & Description

NSW Covid Cases Checker is a helper web app meant to assist communities and residents in NSW to know whether or not there's a recent case of COVID in their area/areas where they have been. And if there are, they can in itself have an initiative to be tested for COVID and/or contact the health authorities.

## Environments

This is a React Web App which can be accessed on any browser by following this link: [TPD].

Compatible/Tested environments:
- Chrome Version 84.x
- Firefox Version 72.x.
- Safari Version 13.x

## System Dependencies & Configuration

When running on development using npm start:
- npm 6.14.5
- node 13.11.0
- react 16.8 (This is important as I am using React Hooks!)
- material-ui -- both core and icons (see: https://material-ui.com/)
- react-icons (see: https://react-icons.github.io/react-icons/)
- honeybadger-io (see: https://www.honeybadger.io/about/)

If needed to run on firebase serve:
- firebase 7.17.1 (see: https://www.npmjs.com/package/firebase)

## Overview

// Main functionalities

- Search

Input your postcode or the postcode of the suburb you've been to and click the "Go" button. Covid cases sorted from latest to oldest will appear as a list in the main page.

- List of cases

The list of cases will appear from the most recent to the oldest. Case/s that are within 2 weeks will have a red bar and a warning to watch out for symptoms. Case/s that are from week 2 to week 3 will have an orange bar and also a warning to watch out for symtoms. They will also have a link to find testing centers provided by NSW Health. Each case will have the confirmed date of case, the likely source (known community transmission, overseas, etc), and the postcode.

Mobile: On mobile it will just be a warning button which the user needs to click to show the information and link to the testing centers.

// Other functionalities

- Changing Theme

Clicking the toggle at the footer will change the theme of the web app to dark mode. Clicking it again will turn it back to light mode. This is for users who much prefer dark mode over light mode.

- About

Clicking on the About button in the navigation bar will open up a disclaimer and a link to the NSW Health News and Updates website.

## Future Improvements

- Pagination

Limit the cases to about 10 per page and give the user the ability to either browse through older cases or load on scroll.

- Load page on preferred theme

Based on cache, the app will check whether the user has set the theme to dark or light mode before. When the user checks the app again, they will be able to see the app on their preferred theme.

## Disclaimer
Data is provided by the NSW Gov: https://data.nsw.gov.au/data/dataset/nsw-covid-19-cases-by-location-and-likely-source-of-infection/resource/2776dbb8-f807-4fb2-b1ed-184a6fc2c8aa. I do not have rights of any sort to claim it as mine.

## Discussion
This is my attempt to explore more about react hooks -- this time including contexts. I dig a bit more about having contexts instead of passing states over and over to components whether or not they need it. This web app also helped me be more comfortable in working on web apps.

UI wise this is also where I focused on having a web app that is mobile responsive. Had a bit of tweaking into material ui breakpoints to specify at which screen size will a particular component show. Another thing is having a dark and light theme. I know this is now part of the trend in creating apps to ease the strain on a user's eyes. So I did a bit of experimentation on that in this app as well.

Unlike the e-notebook, I only included Firebase Cloud functions and Hosting in this application. Since this app should be available to everyone, I omitted the authentication. Also no need to storing the data since on worst case scenario (which I hope will NOT happen!), we can have thousands of cases on each suburb. Anyway, Cloud function helps with the web app accessing the data from NSW health.

And lastly, this is also a way to test myself in working with APIs -- handling errors, loading data, etc.

## License
MIT License
