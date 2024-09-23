# SkillBridge - Online Courses E-Commerce ( <a href="https://mustafa-sayed-m.github.io/skillbridge-react/"> Live Site </a> )

SkillBridge is a full-stack online course e-commerce platform, developed using Strapi for the backend (CMS) and React for the frontend, designed as a Single Page Application (SPA). It allows users to browse, purchase, and take online courses with features like user authentication, dynamic content management, and an intuitive user interface.

## Key Features

- CMS Backend: Built with Strapi as a headless CMS, allowing seamless content management and API-driven backend.
- Frontend: React is used to build a fast, responsive SPA with efficient state management and routing.
- Course Images: Cloudinary is used as the media provider for storing and serving course images.
- E-commerce: Users can explore courses, add them to their cart, and proceed with purchasing.

## Tech Stack

### Backend

- Strapi: As the headless CMS to manage courses, lessons, and other data.
- Cloudinary: For uploading and managing course images.

### Frontend Libraries

- React: For building the user interface as a SPA.
- Font Awesome: For icons used throughout the application.
- Clerk: For handling authentication and user management.
- TailwindCSS: For styling and creating responsive, modern designs.
- React Router DOM: For navigating between different pages in the SPA.
- React Redux & Redux Toolkit: For state management and handling global state.
- Formik & Yup: For form handling and validation (e.g., user input for registration or course purchases).
- React AOS: For adding smooth scroll animations to enhance user experience.
- React Lazy Load Image Component: For lazy loading images to improve performance.

## Deployment

GitHub Pages: The project is deployed using GitHub Pages for hosting.

## Installation and Setup

1.  Clone the repository:

    ```
    git clone https://github.com/your-repo/skillbridge.git
    cd skillbridge
    ```

2.  Install dependencies:

    ```
    npm install
    ```

3.  Backend Setup ( Strapi ):

- Navigate to the Strapi folder and follow the Strapi setup guide for database and configuration.
- Configure Cloudinary as the media provider.

4. Environment Variables:

- Backend ( Strapi ):
  ```
  CLOUDINARY_NAME=your_cloudinary_name
  CLOUDINARY_KEY=your_cloudinary_key
  CLOUDINARY_SECRET=your_cloudinary_secret
  ```
- Frontend (React):

  ```
  REACT_APP_CLERK_PUBLISHABLE_KEY=your_react_app_clerk_publish_key
  ```

5.  Start the development server:

    ```
    npm start
    ```

6.  Build the project for production:

    ```
    npm run build
    ```

7.  Deploy on GitHub Pages:
    Follow GitHub Pages deployment instructions to push your build to the gh-pages branch.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or new features you'd like to add!
