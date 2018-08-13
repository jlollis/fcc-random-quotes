Random Quote Generator
===============

This is a random quote generator written in javascript, created as a small project for [Free Code Camp](https://www.freecodecamp.org/) in November 2017. 

You can view it live her: [Random Quote Generator on Github Pages](https://jlollis.github.io/fcc-random-quotes/)


![screenshot](https://github.com/jlollis/fcc-random-quotes/blob/master/screenshot.png)

Notes
-----------
For some reason Github Pages does not like css or images in separate folders. When I uploaded initially, it took a 
long time for everything to upload to the server, as it wasn't showing images or styled html for about an hour. The next day,
the images and stylesheet were not present. I know it isn't a browser issue, since I cleared the cache and tested on different 
browsers. The only thing that worked was to save everything in the repository root, and then run "git push --force". The images 
and stylesheet were then available within a few minutes. 

I've run into this once before, so this seems to be an issue with Github Pages. Again, if your stylesheets and images aren't showing,
the fix is:
1. Save everything, including your stylesheets and images, to the repository root on your local machine, at the same level as 
   index.html. Do not include any subfolders.
2. In git, run the following commands:
    ```
    git add .
    git commit -m "your comment"
    git push --force
    ```
