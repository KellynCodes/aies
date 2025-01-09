# Aies


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

Click [here](https://aies-by-kelly.vercel.app/) to see the deployed version.

To run this project
 
 Clone this repo

 ```bash
 git clone https://github.com/KellynCodes/aies.git
 ```

 *Then run:*

```bash
pnpm i 
```

This command will install all the dependencies.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## 1. Tools used in building this application.

- [Angular](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/documentation/syntax/)
- CSS
- [PrimeNG](https://primeng.org/)
- [ApexChart](https://apexcharts.com/angular-chart-demos/) (For graph)
- [Iconify](https://icon-sets.iconify.design/) (TailwindCss and SVG),
- [Mockaroo](https://www.mockaroo.com/)(Customized dummy api structure)

## 2. Core Angular features covered in this project.

- Content projection
- Dependency injection
- Event binding.
- Interceptors
- Pipes
- Directives
- HttClient
- Signal
- Services

## 3. Architecture

- Component based Architecture

## 4. Directory Structure

```html
public/
src/
├── app/
│   ├── components/
│   ├── data/
│   ├── directives/
│   ├── enums/
│   ├── interceptors/
|   ├── layout/
│   ├── models/
│   ├── pages/
│   ├── pipes/
│   ├── services/
├── environments/
├── scss/
```

- The public folder contains all the assets.
- Component folder contains all the reuseable component.
- Data folder contains static data.
- Directives folder contains all the angular directive used in the app.
- Enums contains all the enumerators.
- Interceptors contains all angular interceptors
- Layout is where the structure of the UI is implemented.
- Models contains all the Request and Response Data Transfer Objects(DTOs)
- Pages contains all the pages in this application
- Pipes folder houses all the Angular pipes used
- Services contains all the Angular Services
- Environment contain the BaseUrl for Mockaroo
- SCSS folder contains both CSS/SCSS files which defined most of the vanilla CSSs used in this app, the rest is designed with tailwind.

## 5. Styling Guidelines

The tailwind.config.js file is where all Tailwind configurations are managed.

I have many custom configurations inside this file, which helps with maintainability.

In the SCSS directory, you will find the ng-material and utils folders.

The ng-material folder is where the Angular theming system is configured, and the utils folder is where I have defined many utility CSS classes.
