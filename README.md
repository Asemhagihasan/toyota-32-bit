<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a React project written using React.js, Context API, and hooks. It allows vendors to manage their sales transactions. The application enables users to search for products, add them to their cart, adjust quantities, and complete sales transactions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Vscode][Vscode]][Vscode-url]
[![json][json]][json-url]
[![git][git]][git-url]
[![React][React.js]][React-url]
[![react-router][react-router]][react-router-url]
[![react-img-mapper][react-img-mapper-shield]][react-img-mapper-url]
[![react-simple-keyboard][react-simple-keyboard-shield]][react-simple-keyboard-url]
[![formik][formik-shield]][formik-url]
[![i18n][i18n-shield]][i18n-url]
[![Axios][axios-shield]][axios-url]
[![material][material-shield]][material-url]
[![MIT License][license-shield]][license-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This project uses Npm as the package manager.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Asemhagihasan/toyota-32-bit.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `Services folder`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Pages

<!-- Home page -->

## Home Page

### The home page of the application serves as the central hub for the user. It includes the following features:

- Cash Register Information: Displays information about the cash register.
- Internet Connection Status: Shows whether the application is connected to the internet.
- Language Selection: Allows users to choose the site language.
- Login Button: If the user is not logged in, a button to log in is provided.
- Redirection: If a user tries to access sales pages without logging in, they are redirected to the login page.

### The home page ensures that the user has all the necessary information at a glance and provides easy access to essential functions.

![image](./Screenshot%202024-07-04%20164140.png)

<!-- Sale page -->

## Sales Page

### The sales page allows users to manage their sales transactions. It includes the following features:

- Category Selection: Users can select products from various categories.
- Product Search: Allows users to search for products by name or code.
- Cart Management: Users can view and modify their cart, including:
  Increasing or decreasing product quantities
  Removing items
  Canceling the sale
- Discounts: Users can apply discounts from a list based on customer requests.
- Barcode Scanning: Users can scan product barcodes to add items to the cart.
- Favorite Items: Users can toggle between all items and favorite items.
- Infinite Scroll: Displays 20 products per page initially, with the option to load more products, up to 1000 items.
- Complete Sale: Users can complete the sale by:
  Selecting a payment method
  Entering the payment amount (the sale cannot be completed if the amount is not entered or is less than the total)
  Emailing the invoice
- Invoice Display: Upon completing the sale, an invoice is shown with purchase and payment details.
- Print Invoice: Users can print the invoice by clicking the print button.

## Settings Page

- Dark Mode: Allows users to toggle dark mode.
- Language Change: Users can change the site language.
- Print Test: Provides a button to print a test invoice to ensure the printing functionality works.

<!-- Features -->

## Features

### [Internationalization (i18n)](https://github.com/Asemhagihasan/toyota-32-bit/tree/main/src/translation)

- The project supports Turkish, English, French, languages, and it is **suitable for adding more language support.**
- I've implemented a language switcher component using React's Context API.

This Context API setup allows all components to access and update language preferences without the need for prop drilling or repeated rendering of language-related components. This not only enhances application efficiency but also makes it easier to maintain and scale as language support grows.

In order to ensure a seamless user experience, the application stores the user's selected language preference in localStorage. This means that the chosen language persists even after the user refreshes the page or navigates away, providing continuity and personalization throughout their session.

### [Multi-Language Virtual Keyboard](https://github.com/Asemhagihasan/toyota-32-bit/tree/main/src/features/VirtualKeyboard)

- I added support for a virtual keyboard for users using touchscreen devices.
- The virtual keyboard supports 2 languages: Turkish and English. Users can change the language by using the button right below the virtual keyboard.

## [Cart](https://github.com/Asemhagihasan/toyota-32-bit/tree/main/src/features/Cart)

- The cart feature in the application allows users to manage selected items before completing a purchase. It enhances the shopping experience by providing flexibility and control over chosen products.

## Key Components

1. **Adding Products to Cart:**

   - Users can add products to the cart from various sections of the application, such as product listings or detail pages.
   - This functionality typically involves a button or icon associated with each product that triggers the addition process.

2. **Cart Display and Management:**
   - **Viewing Cart:** Users can view the contents of their cart, including product names, quantities, prices, and subtotal.
   - **Editing Cart:** Users can adjust quantities of items (increase or decrease), remove items from the cart entirely, or clear the entire cart.
   - **Updating Quantities:** Adjustments to item quantities should dynamically update the subtotal and total price displayed in the cart.

<!-- Categories -->

## [Categories]()

The Categories feature in this application provides users with a visually engaging way to explore different product categories.

## User Experience

### Visual Representation

- **Category Cards:** Each category is represented by a card displaying an image and category name.
  - **Image:** Visually represents the category.
  - **Name:** Clearly identifies the category for users.

### Interaction

- **Browsing Categories:** Users can scroll through a grid of category cards.
- **Category Selection:** Clicking on a category card redirects users to a dedicated page for that category.

### Design and Layout

- **Clean Interface:** The page layout is designed for clarity and ease of use.
- **Responsive:** Adapts seamlessly to different screen sizes for optimal viewing and interaction.

### Navigation

- **Clickable Cards:** Each category card is interactive, allowing users to navigate directly to specific category pages.
- **Efficient Exploration:** Facilitates efficient browsing and exploration of product categories.

## Purpose

The Categories feature enhances the user experience by providing intuitive access to a variety of product categories, ensuring a smooth and enjoyable browsing experience.

---

This description focuses on what users can see and do on the Categories page without delving into technical details or implementation specifics. It aims to provide a clear understanding of how users interact with this feature within your application. Adjust and expand upon it based on your specific project and user interface design.

## [Products]()

The Products feature allows users to browse and search through a dynamic list of products based on various criteria such as favorites and search queries.

### User Experience

- **Search and Filtering:** Users can enter search queries to filter products dynamically. Results update in real-time.
- **Favorites Filter:** Toggle between viewing all products and only favorites.
- **Pagination:** Load more products as you scroll or manually trigger pagination.
- **Error Handling:** Loading indicators and error messages ensure smooth user experience.
- **Category Navigation:** Displays products dynamically based on selected categories.
- **Product Display:** Lists products within selected categories with detailed information.

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[google]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[react-img-mapper-shield]: https://img.shields.io/npm/v/react-img-mapper?color=yellow&label=react-img-mapper&style=for-the-badge
[react-img-mapper-url]: https://www.npmjs.com/package/react-img-mapper
[react-simple-keyboard-shield]: https://img.shields.io/npm/v/react-simple-keyboard?color=brown&label=react-simple-keyboard&style=for-the-badge
[react-simple-keyboard-url]: https://www.npmjs.com/package/react-simple-keyboard
[formik-shield]: https://img.shields.io/npm/v/formik?color=darkblue&label=formik&style=for-the-badge
[formik-url]: https://www.npmjs.com/package/formik
[i18n-shield]: https://img.shields.io/npm/v/i18next?color=white&label=i18next&style=for-the-badge
[i18n-url]: https://www.npmjs.com/package/i18n
[material-shield]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[material-url]: https://www.npmjs.com/package/@mui/material
[axios-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[axios-url]: https://www.npmjs.com/package/axios
[react-shield]: https://img.shields.io/npm/v/react?label=react&style=for-the-badge
[react-url]: https://www.npmjs.com/package/react
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mete-uçar-1626101b3/
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vscode]: https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[Vscode-url]: https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[json]: https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white
[json-url]: https://www.json.org/json-en.html
[git]: https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white
[git-url]: https://git-scm.com
[react-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://reactrouter.com/en/main
