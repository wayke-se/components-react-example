# Introduction

This is an example application that shows how to add the `@wayke-se/components-react` component to a non-react application.

Some things to note:

* Adding the entire React framework will be heavy and affect the loading time of the non-react website
* Make sure to configure the webpack build step according to your own requirements, so that the final build is production ready (i.e. we don't take responsibility of that)


## Prerequisites

* nodejs + npm


## Build

* In the root dir, run `npm install`
* Then run `npm run build-js` to build the javascript example or type `npm run build-ts` to build the typescript example

The result is in the `build` folder.


## Usage

You can now open the `example.html` file and test the WaykeComposite component.
In the html-file you can then see how you should implement the component on your own site.

Note: I order for this to work one needs to update the `settings` variable with correct information.


## Resources

Consider the following repositories for more information:

* https://github.com/wayke-se/components-react
* https://github.com/wayke-se/components-react