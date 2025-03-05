# jibba-tw-datepicker (fork of React Tailwindcss Datepicker)

<p align="center">
    <a href="https://react-tailwindcss-datepicker.vercel.app/" target="_blank">
      <img alt="React Tailwindcss Datepicker" width="100" style="border-radius: 100%;" src="https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/calendar_logo.svg?raw=true">
    </a><br><br>
    Fixes react tailwindcss datepicker for tailwind v4 and adds more style 
</p>

## Installation

⚠️ React Tailwindcss Datepicker uses Tailwind CSS 3 (with the
[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) plugin) &
[Dayjs](https://day.js.org/en/) under the hood to work.

### Install via npm

```
npm install react-tailwindcss-datepicker
```

### Install via yarn

```
yarn add react-tailwindcss-datepicker
```

Make sure you have installed the peer dependencies as well with the below versions.

```
"dayjs": "^1.11.6",
"react": "^17.0.2 || ^18.2.0"
```

## Simple Usage

#### Tailwindcss Configuration

Add the datepicker to your tailwind configuration using this code

```javascript
// in your tailwind.config.js
module.exports = {
    // ...
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
    ]
    // ...
};
```

Then use react-tailwindcss-select in your app:

```tsx
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const App = () => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    return (
        <>
            <Datepicker value={value} onChange={newValue => setValue(newValue)} />
        </>
    );
};

export default App;
```

## Contributing

See
[CONTRIBUTING.md](https://github.com/onesine/react-tailwindcss-datepicker/blob/master/CONTRIBUTING.md)

## Official Documentation repo

[https://github.com/onesine/react-tailwindcss-datepicker-doc](https://github.com/onesine/react-tailwindcss-datepicker-doc)

## Thanks to

-   [React TailwindCSS Datepicker](https://react-tailwindcss-datepicker.vercel.app/)
-   [Vue Tailwind Datepicker](https://vue-tailwind-datepicker.com/)
-   [React](https://reactjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [dayjs](https://day.js.org/)

I thank you in advance for your contribution to this project.

## Original License

[MIT](LICENSE) Licensed. Copyright (c) Lewhe Onesine 2022.
