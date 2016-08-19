# FCOO Web Development

[grunt-init]: http://gruntjs.com/project-scaffolding
[git]: https://git-scm.com
[github]: https://github.com
[grunt]: https://gruntjs.com
[bower]: https://bower.io
[sass]: https://sass-lang.com
[jshint]: http://jshint.com/
[eslint]: http://eslint.org/
[gruntfile]: #gruntfile
[semver]: http://semver.org/

[fcoo-gruntfile.js]: https://github.com/fcoo/fcoo-gruntfile.js
[fcoo-grunt-plugin]: https://github.com/FCOO/fcoo-grunt-plugin
[branch model]: http://nvie.com/posts/a-successful-git-branching-model
[git-flow]: https://github.com/nvie/gitflow

This document a suggestion for a common FCOO standard format, structure, templates, npm scripts, and Grunt scripts to create, develop and distribute packages, plugins, and applications from FCOO

# Contents
1.	[Overview](#overview)
2.	[Quick version](#quick_version)
3.	[Full version](#full_version)

----
<a name="overview"></a>
# Overview

- Using [Git][], [GitHub][], and account [github/fcoo](http://github.com/fcoo)
- Using [Vincent Driessen's branching model](http://nvie.com/posts/a-successful-git-branching-model/) for **applications**
- Using [git-flow][] git extensions to manages the [branch model][] 
- Using [Grunt.js][grunt] as Task Runner
- Using [Bower][bower] as front-end package management
- Using [Sass][] to create and compile css-files. The following sass-packages are installed automatic: [bourbon](http://bourbon.io), [modernizr-mixin](https://github.com/danielguillan/modernizr-mixin), [mathsass](https://github.com/terkel/mathsass)
- Using [ESLint][] to validate and check JavaScript code
- Using	[grunt-init][grunt-init] and the [FCOO templates](#fcoo_template) to create new packages/application
- Using common [directory structure](#directory_structure) and [file formats](#file_formats): `\src, \demo, \dev, \dist, \bower_components `
- Using [grunt-tasks][gruntfile] defined in [fcoo-grunt-plugin][] and options defined in [gruntfile.js][fcoo-gruntfile.js] to validate, check and build the package/application
- Using [Semantic Versioning][semver]: `1.2.3` / `major.minor.patch`
- Using git `tags` when pushing new versions to [GitHub][]

----  
<a name="quick_version"></a>
# Quick version

## Installation
**Git and GitHub**

- Install [Git][git]
- Create account on [github.com][github] 
- *Optional*: Install [TortoiseGit]( https://tortoisegit.org) Windows Shell Interface to Git
- *Optional*: Install a [GitHub GUI](http://git-scm.com/downloads/guis) eq. [GitHub for Windows](https://windows.github.com/)

**Node.js, Grunt, Sass, ESLint etc.**

- Install Node.js from [https://nodejs.org]()
- `npm install -g npm`
- `npm install -g grunt-cli`
- `npm install -g grunt-init`
- `npm install -g bower`
- Install [Ruby](https://www.ruby-lang.org/) from [https://www.ruby-lang.org/en/downloads/]()
- `gem install sass` (or see http://sass-lang.com/install)
- *Optional*: Install ESLint as command line `npm install -g eslint`
- *Optional*: Create a json-file with [default prompt answers](#default_prompt) for new applications/packages

**FCOO templates for [grunt-init][grunt-init]** 

- `fcoo-application`: https://github.com/FCOO/grunt-init-fcoo-application
- `fcoo-leaflet`: https://github.com/FCOO/grunt-init-fcoo-leaflet
- `fcoo-jquery`: https://github.com/FCOO/grunt-init-fcoo-jquery


## Create new repository (package or application)
1. Select an appropriate name for the package / application. No CamelCase: `fcoo-menu`', not '`FCOOMenu`'.
2. Create the new repository in [GitHub]
3. Clone the new repository to your computer/Desktop
4. Create the repository using [grunt-init] and one of the [FCOO templates](#fcoo_template)

<
## `gruntfile.js`
The `gruntfile.js` installed with the [FCOO Templates](#fcoo_template) includes the plugin [fcoo-grunt-plugin][] to check, build, and push new versions to GitHub.
The plugin has its own repository and description in [github.com/FCOO/fcoo-grunt-plugin][fcoo-grunt-plugin].
The main tasks are
- **`grunt check`** Check the syntax of all `.scss` and `.js` files in `\src`
- **`grunt dev`** Building a development version in `\demo` or `\dev`
- **`grunt build`** Building a production version in `\dist` 
- **`grunt push** Create a complete new release and push it to [GitHub][]

----  
<a name="full_version"></a>
# Full version

## Tools and Packages

### Node.js and npm
We use [Node.js](https://nodejs.org) as the JavaScript engine and [npm (Node Package Manager)](https://www.npmjs.com/) to (un)install and run the different packages

#### Installation
- Install **Node.js** from (https://nodejs.org)
- **npm** is installed together with Node.js, but you update to the latest version with `npm install -g npm``

### Bower, Grunt, Sass, and ESLint

- As Task Runner we use **[Grunt](http://gruntjs.com/)**
- As a front-end package management we use **[Bower](https:/bower.io)**
- To create and organize our CSS (stylesheets) we use **[Sass](https://http://sass-lang.com/)** (Syntactically Awesome StyleSheets)

#### Install Grunt

To load and run the version of Grunt you have installed locally to your project, you must install the **Grunt Command Line Interface (grunt-cli)** globally (once). 

    npm install -g grunt-cli

To (semi) automatic create new repositories and/or applications you need to install the Project Scaffolding tool **[grunt-init](http://gruntjs.com/project-scaffolding)** globally (once). 

    npm install -g grunt-init

<a name="default_prompt"></a>
#### Specifying default prompt answers (*Optional*)
Each init prompt either has a default value hard-coded or it looks at the current environment to attempt to determine that default value. If you want to override a particular prompt's default value, you can do so in the optional OS X or Linux `~/.grunt-init/defaults.json` or Windows `%USERPROFILE%\.grunt-init\defaults.json` file.
Example:

	{
	  "author_name" : "Hans Hansen",
	  "author_email": "hha@fcoo.dk",
	  "author_url"  : "none",
	  "github_user" : "HansHansen",
	  
	}


#### Install Bower

    npm install -g bower

#### Install Sass
To install Sass you need [Ruby](https://www.ruby-lang.org/) 

- Install Ruby from https://www.ruby-lang.org/en/downloads/
- `gem install sass` 

See also https://sass-lang.com/install 
<a name="eslint"></a>
#### ESLint
[ESLint][] is used inside [grunt-tasks][gruntfile] to validate and check JavaScript code.
If you install it as stand-alone with `npm install -g eslint` you can check individual js-files from the repository root with 
`eslint src\FILENAME.js`

There are a lot of [options for ESLint](http://eslint.org/docs/user-guide/configuring) 

and the file `.eslintrc` contains the options used in [grunt-tasks][gruntfile] and when `eslint` is called from the root



<a name="fcoo_template"></a>
## FCOO Templates
Using [grunt-init] to install one of the FCOO Templates ([`fcoo-application`](https://github.com/FCOO/grunt-init-fcoo-application), [`fcoo-leaflet`](https://github.com/FCOO/grunt-init-fcoo-leaflet), or [`fcoo-jquery`](https://github.com/FCOO/grunt-init-fcoo-jquery))

**These templates will also install `Gruntfile.js` and `package.json` from [github.com/FCOO/fcoo-gruntfile.js][fcoo-gruntfile.js] and [fcoo-grunt-plugin][]** 

<a name="directory_structure"></a>
## Directory structure
The project / directory structure is based on [Yeomans standard web project structure](http://www.sohamkamani.com/blog/2015/08/21/frontend/) and have the following structure
 
    APPLICATION_NAME
	├── app
    |   ├── index.html.tmpl                 //Template for buiding the application in \dist
    |   ├── index-dev.html.tmpl             //Tempalte for buiding the application in \dev
    |   ├── scripts                         //js files
    |   ├── styles                          //css and scss fiels
    |   |   ├── fonts                           //Font-files
    |   |   └── images                          //Images for css (background-images: "images/example.png")
    |   └── images                          //Images for the application
    ├── dist                            //The compiled and build distribution files 
    ├── demo                            //Demo page for packages. Also the page for the "gh-pages" branch in GitHub
    ├── dev                             //Development version of the application
    ├── bower_components                //Installed Bower components
    ├── node_modules                    //Installed Node.js moduels
    └── log                             //log-files from different tasks


- All files or directories starting with `"_"`(underscore) are ignored
- For applications: All files and directories in `\app` (except `scripts` and `styles`) are included in the build version in `\dist` and `\dev`
- All `*.js` source-files must be placed in `\app\scripts`
- All `*.css` and `*.scss` source-files must be placed in `\app\styles`
- All images used directly by the application (eq. `<img src="images/the_image.gif"/>`) must be placed in `\app\images`
- All images used by css (eq. `background-images: "images/example.png"`) must be placed in `\app\styles\images`
- All fonts files must be placed in `\app\styles\fonts`
- The references to an image or font file must be relative to the subdirectory: `<img src="images/the_image.gif"/>` or `@font-face {font-family: 'icomoon'; src:url('fonts/icomoon.eot'); .. }`
- All files in `\dist` is auto-generated. No files should be placed in `\dist` manually
- [README.md](#readme.md) should be filled out   
- The options in [`\Gruntfile.json`][fcoo-gruntfile.js] defines the type of application etc.
- The file [`\bower.json`](#bower_json) is used by [`Gruntfile.js`][gruntfile] and [bower] to retrieve and build the included bower components.


<a name="file_formats"></a>
## Files and formats

<a name="readme.md"></a>
### `README.md`
The default `README.md` file contains the following sections, but new ones can be added

> Description
Installation
Demo
Usage
options
Methods
Copyright and License
Contact information
Credits and acknowledgements
Known bugs
Troubleshooting
Changelog

<a name="gruntfile"></a>
## `gruntfile.js`
The `gruntfile.js` installed with the [FCOO Templates](#fcoo_template) includes the plugin [fcoo-grunt-plugin][] to check, build, and push new versions to GitHub.
The plugin has its own repository and description in [github.com/FCOO/fcoo-grunt-plugin][fcoo-grunt-plugin].
The main tasks are
- **`grunt check`** Check the syntax of all `.scss` and `.js` files in `\src`
- **`grunt dev`** Building a development version in `\demo` or `\dev`
- **`grunt build`** Building a production version in `\dist` 
- **`grunt push** Create a complete new release and push it to [GitHub][]


### `package.json` 
`package.json` are only used to build the packages (compile sass, compress source files etc.) 
All metadata and dependencies are put in `bower.json`
`package.json` is 'partner' with `gruntfile.js` and part of [github/fcoo/gruntfile.js](https://github.com/FCOO/gruntfile.js) 
See also [documentations for packages.json](https://docs.npmjs.com/files/package.json)

<a name="bower_json"></a>
### `bower.json`
`bower.json` is created when running `grunt-init` and updated when packages are added using `bower install --save PACKAGENAME` 
See also [documentations for bower.json](http://bower.io/docs/creating-packages/#bowerjson-specification)

#### overrides
The `overrides` section of the `bower.json` can be used to changes the dependencies or included files for repositories

##### `dependencies`

If a bower component doesn't list its dependencies or you need to remove some of its dependencies

	{
	  overrides: {
		"package_name" {
	      "dependencies": ["jquery", "another_package_name"]
	    }
	  }
	}

##### `main`

If a bower component doesn't list their main files or (more likely) don’t have `bower.json` file at all OR if you need to select a specific subset of the available files     

	{
	  overrides: {
		"package_name" {
	      "main": ["dist\package_name.min.js", "dist\package_name.min.css"]
	    }
	  }
	}


## Create new repository (package or application)
1. Select an appropriate name for the package / application
	- Use lower letter and '-' instead of camel-case (`fcoo-menu`', not '`FCOOMenu`')
	- If it is a 'stand-alone' package, the name can start with '`leaflet-`' or '`jquery-`'
	- If the packages is directly part of one or more FCOO applications, the name should start with '`fcoo-`'
2. Create the new repository in [GitHub][github]
3. Clone the new repository to your computer/Desktop
4. Build the repository by loading the selected FCOO template by running **one** of the commands below and follow the prompts
	- `grunt-init fcoo-application`
	- `grunt-init fcoo-leaflet`
	- `grunt-init fcoo-jquery`

If you need SASS packages or other packages under development run `bower install --save-dev THE_NAME_OF_THE_PACKAGE` (*Note: Remember to add `--save-dev`*)

