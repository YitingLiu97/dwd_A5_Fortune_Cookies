<!-- Every README should start with an H1 -->
# The Inspirational Quotes Project
<!-- A one sentence description of the project or assignment -->
This project utilizes the [inspirational-quotes](https://www.npmjs.com/package/inspirational-quotes) library to develop an API service between server and client. 
You can add your own quotes [here](https://yitingliu97-dwd-a5-inspo-quotes.glitch.me/)
![inspirational quote web interface](https://github.com/YitingLiu97/dwd_A5_Inspo_Quotes/blob/master/pics/inspo-quotes.png)

<!-- It is good practice to add an about or summary -->
<!-- ## About -->

<!-- It is essential to describe how to set up your project -->
## Setup
Clone the repo and install npm library [inspirational-quotes](https://www.npmjs.com/package/inspirational-quotes)
<!-- Any knowledge or tools you will need before hand -->
### Prerequisites


1. [VS Code](https://code.visualstudio.com/)
2. A good understanding of API and Html, Css, and Javascript. 

<!-- any installation needs should be defined -->
### Installation

For this particular project, there are no specific installation requirements.

<!-- Write instructions on how to start working on your project -->
<!-- ### Develop

To develop this document, you can follow the steps provided below:
1. create a fork of this project on Github
2. ping the author of this repo via Github Issues to see if they are looking for contributions on the specific feature you're looking to add
3. open the file in VS Code and make updates 
4. add and commit those changes in your forked github repo
5. make a pull request specifying what additions and changes were made
6. have a nice chat and communication with me about those changes. 
7. celebrate the contribution!  -->

<!-- Notes about the deployment -->
### Deployment

This project is hosted on Github. 

## Built with

* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)

## Authors

* [Yiting Liu](https://www.yliudesigns.com) -- ITP 2021-- [NYU ITP](https://itp.nyu.edu)

<!-- ## Code of Conduct

Please read the [CODE OF CONDUCT](https://www.mozilla.org/en-US/about/governance/policies/participation/)  -->

## License

[Attribution 4.0 International (CC BY 4.0) ](https://creativecommons.org/licenses/by/4.0/)

<!-- thank and reference all the things that made your project happen -->
## Acknowledgements

* [inspirational-quotes](https://www.npmjs.com/package/inspirational-quotes)
* [Back-end-foundation-workbook](https://github.com/itp-dwd/back-end-foundations-workbook)
<!-- * [Creative Commons](https://creativecommons.org/licenses/by/4.0/) for their licensing documentation
* [Openmoji project](https://www.openmoji.org/library/#search=notebook&emoji=1F4D4) for their glyphs
* [PurpleBooth's Readme Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) -->

***
***
***

<!-- For your assignments you might consider  -->
# Notes & Process

I wanted to create a website where users can contribute to the existing database. I chose inspirational-quotes since it is well documented. I followed the examples in the files when I installed the library. 

Although it took me quite a while to understand the code, I am glad I figured most of the things out and I did the coding project by myself and with the help of Google. 

<!-- How you built this project - Include images, gifs, and notes here -->
## Process & Documentation
I followed the tutorials of the [Back-end-foundation-workbook](https://github.com/itp-dwd/back-end-foundations-workbook) since I couldn't really follow in class. The extra time spent on doing the exercises is worth it. But this week, I spent an extreme amount in learning the back end. It is quite harder than the front end that I am more familiar with.  

<!-- Any specific challenges or struggles documented -->
## Challenges & Struggles
I ran into several bugs during this project:
1. Due to the wrong src for client.js, the console keeps telling me the window is undefined.


2. I used Postman to figure out what I should do to send an object of quote and author. But it really took me a long time to figure it out.
![sending request through POSTMAN](https://github.com/YitingLiu97/dwd_A5_Fortune_Cookies/blob/master/pics/16.png)
3. At first, when I try to POST anything, it only shows null or undefined.
![screenshot of coding error](https://github.com/YitingLiu97/dwd_A5_Fortune_Cookies/blob/master/pics/6.png)
4. In my console, it prints out the whole object without parsing out the text and from. 
![screenshot of coding error](https://github.com/YitingLiu97/dwd_A5_Fortune_Cookies/blob/master/pics/13.png)
5. I couldn't add my textInput to the existing array upon mouse click. 
![screenshot of not able to add content to the array](https://github.com/YitingLiu97/dwd_A5_Fortune_Cookies/blob/master/pics/11.png)
6. When I wanted to console.log the array content, it shows me the position of the element instead. 
![inspirational quote web interface](https://github.com/YitingLiu97/dwd_A5_Fortune_Cookies/blob/master/pics/14.png)

<!-- Any questions you have -->
## Questions
I am still confused about using the function from another js file. In the example I saw, they used "module.exports". 

<!-- References for resources and inspiration -->
## References

* [Vinit Shahdeo](https://www.npmjs.com/package/inspirational-quotes)
