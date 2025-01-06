## Pocket Cookbook

This project was made in the summer of 2022, when I took up a stipened program at The OUSD Central Kitchen. It was an amazing program that took me from harvesting my own herbs and vegetables to using the various cooking equipment to create a delicious meal.

Naturally, studying under professionals, I picked up some delicious recipes along the journey. And, as I had been learning web development at the time, I wanted to make something at the end of the program, as a capstone, let's say. Thus, Pocket Cookbook was born. The project was made using the MERN stack, which I learned over the summer, and showcased all the recipes I learned in the program.

This project was initially hosted on Heroku. When the service discontinued their free plan later that year, I took up the GitHub student offer with Heroku to keep the website hosted on the platform. Unfortunately, the 24 month window has passed, and I don't have the capacity to continue hosting the website, at least at the time of writing. So, I've opted to turn it into a GitHub repo archive.

It's good to recollect on your past achievements once in a while though. Perhaps one day I'll remake the project into a true pocket cookbook.

### Setting Up Local Development

If you want to see how the website looks like, follow the steps in this section to host the website locally. Be warned: it may take a lot of effort to set up.

Being a MERN stack project, this project has a separate server and client environment. Both must be configured before you can start running the project.

#### Server

For the server, you have to first setup a `.env` file in the root folder, then specify `ATLAS_URI` to the URI of a MongoDB cluster:

```env
ATLAS_URI=mongodb+srv://******.mongodb.net/?retryWrites=true&w=majority
```

The project pulls from a database named `pocket-cookbook` with a collection called `recipes`.

Each recipe follows this schema:

```ts
interface Recipe {
  name: string; // name of recipe
  source: string; // author of the recipe
  img: string; // img URL
  diet: "Vegan" | "Vegetarian";
  heat: "None" | "Low" | "Medum" | "High";
  tags: string[];
  description: string;
  ingredients: Array<{
    name: string;
    quantity: string; // i.e. "1"
    units: string; // i.e. "cups"
  }>;
  time: string;
  directions: string[];
  prepDirections: string[];
  note: string;
}
```

An exported version of the MongoDB database can be found in `pocket-cookbook.recipes.json` in the root folder.

Before starting the server, make sure you have all the packages installed.

```bash
npm install
```

To start the server, run the following command in the root folder:

```bash
npm run start
```

You should see something like this in the console:

```bash
[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Server is running on port 5000
Successfully connected to MongoDB.
```

#### Client

Before starting the client, navigate to the client folder in the console and make sure you have the client packages installed.

```bash
cd client
npm install
```

To start the client, run the following command:

```bash
npm run start
```

You should see something like this:

```bash
You can now view pocket-cookbook in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.0.189:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

There may be some warning as the packages are out of date.
