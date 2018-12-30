# Rating image generator

![build_status](https://travis-ci.org/abhishalya/rating-image-generator.svg?branch=master)

This is one of the fun projects I tried. Basically, I needed a badge of my ratings on the sites like [CodeChef](https://codechef.com) and [Codeforces](https;//codeforces.com). The application will generate a PNG image based on the data you provide.

## How to use the application

### Setting up local environment

Firstly you'll need nodeJS installed on your system. Then, you can use following commands to run the application:

```bash
git clone https://github.com/abhishalya/rating-image-generator.git
cd rating-image-generator
npm install
```

Once the requirements are installed, you can deploy the app using:

```bash
npm start
```

You can change the port number in the `index.js` file.

Now, redirect to http://localhost:5000 (or the port number you used) and fil up the form inputs and submit. The browser will request you to download the generated file.

Examples:

![CodeChef_rating_image](https://i.ibb.co/wWJZPG8/chef.png)

![Codeforces_rating_image](https://i.ibb.co/R2XvZG8/forces.png)

If you have better design ideas please fill free to contribute. I may have few issues raised, so check them out :smile:
