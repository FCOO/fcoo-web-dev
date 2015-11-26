# FCOO Web Development

[grunt-init]: http://gruntjs.com/project-scaffolding
[git]: https://git-scm.com
[github]: https://github.com
[grunt]: https://gruntjs.com
[bower]: https://bower.io
[sass]: https://sass-lang.com
[jshint]: http://jshint.com/
[gruntfile]: (#gruntfile)
[semver]: http://semver.org/
[fcoo-gruntfile]: https://github.com/fcoo/gruntfile.js


This document a suggestion for a common FCOO standard format, structure, templates, npm scripts, and Grunt scripts to create, develop and distribute packages, plugins, and applications from FCOO

# Contents
1.	[Overview](#overview)
2.	[Quick version](#quick_version)
3.	[Full version](#full_version)

----
<a name="overview"></a>
# Overview

- Using [Git][], [GitHub][], and account [github/fcoo](http://github.com/fcoo)
- Using [Grunt.js][grunt] as Task Runner
- Using [Bower][bower] as front-end package management
- Using [Sass][] to create and compile css-files. The following sass-packages are installed automatic: [bourbon](http://bourbon.io), [modernizr-mixin](https://github.com/danielguillan/modernizr-mixin), [mathsass](https://github.com/terkel/mathsass)
- Using [JSHint][] to validate and check JavaScript code
- Using	[grunt-init][grunt-init] and the [FCOO templates](#fcoo_template) to create new packages/application
- Using common [directory structure](#directory_structure) and [file formats](#file_formats): `\src, \demo, \dist, \bower_components `
- Using [grunt-tasks][gruntfile] defined in [github.com/FCOO/gruntfile.js][fcoo-gruntfile] to [validate, check and build the package/application](#push_new_version)
- Using [Semantic Versioning][semver]: `1.2.3` / `major.minor.patch`
- Using git `tags` when [pushing new versions](#push_new_version) to [GitHub][]

----  
<a name="quick_version"></a>
# Quick version

## Installation
**Git and GitHub**

- Install [Git][git]
- Create account on [github.com][github] 
- *Optional*: Install [TortoiseGit]( https://tortoisegit.org) Windows Shell Interface to Git
- *Optional*: Install a [GitHub GUI](http://git-scm.com/downloads/guis) eq. [GitHub for Windows](https://windows.github.com/)

**Node.js, Grunt, Sass, JSHint etc.**

- Install Node.js from [https://nodejs.org]()
- `npm install -g npm`
- `npm install -g grunt-cli`
- `npm install -g grunt-init`
- `npm install -g bower`
- Install [Ruby](https://www.ruby-lang.org/) from [https://www.ruby-lang.org/en/downloads/]()
- `gem install sass` (or see http://sass-lang.com/install)
- *Optional*: `npm install -g jshint`
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


## Check, build, and push a new version to GitHub 
The `Gruntfile.js` installed with the [FCOO Templates](#fcoo_template) ([github.com/FCOO/gruntfile.js][fcoo-gruntfile]) has the following main tasks

### `grunt check`
Check the syntax of all `.scss` and `.js` files in `\src`

### `grunt dev`
Building a development version in `\demo` or `\dev`

### `grunt prod`
Building a production version in `\dist` 

### `grunt github`
Create a complete new release and push it to [GitHub][]

----  
<a name="full_version"></a>
# Full version

## Tools and Packages

### Node.js and npm
We use [Node.js](https://nodejs.org) as the JavaScript engine and [npm (Node Package Manager)](https://www.npmjs.com/) to (un)install and run the different packages

#### Installation
- Install **Node.js** from (https://nodejs.org)
- **npm** is installed together with Node.js, but you update to the latest version with `npm install -g npm``

### Bower, Grunt, Sass, and JSHint

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
<a name="jshint"></a>
#### JSHint
[JSHint][] is used inside [grunt-tasks][gruntfile] to validate and check JavaScript code.
If you install it as stand-alone with `npm install -g jshint` you can check individual js-files from the repository root with 
`jshint src\FILENAME.js`

There are a lot of [options for JSHint](http://jshint.com/docs/options/) and the file `.jshintrc` contains the options used in [grunt-tasks][gruntfile] and when `jshint` is called from the root



<a name="fcoo_template"></a>
## FCOO Templates
Using [grunt-init] to install one of the FCOO Templates ([`fcoo-application`](https://github.com/FCOO/grunt-init-fcoo-application), [`fcoo-leaflet`](https://github.com/FCOO/grunt-init-fcoo-leaflet), or [`fcoo-jquery`](https://github.com/FCOO/grunt-init-fcoo-jquery))

**These templates will also install `Gruntfile.js` and `package.json` from [github.com/FCOO/gruntfile.js][fcoo-gruntfile]** 

<a name="directory_structure"></a>
## Directory structure
The directory of the repository will contain the following subdirectories 

	\src
	\dest
	\demo
	\bower_components
	\node_modules


- All source-files must be placed in `\src` or `\src\**`
- All files or directories starting with `"_"`(underscore) are ignored
- All images must be placed in subdirectories under `\src` or `\src\**` named `images` (eq. `src\images` or `src\my-directory\images`)
- All fonts files must be placed in subdirectories under `\src`or `\src\**` named `fonts` (eq. `src\fonts` or `src\my-directory\fonts`)
- The references to an image or font file must be relative to the subdirectory: `<img src="images/the_image.gif"/>` or `@font-face {font-family: 'icomoon'; src:url('fonts/icomoon.eot'); .. }`
- All files in `\dest` is auto-generated. No files should be placed in `\dest` manually
- **For applications only**:
	- `src\index_TEMPLATE.html` is the template for buiding the applications in `\dist`
	- `src\body.html` *must* contain the `<body>` for the application incl `<body style=".."></body>`
	- `src\head.html` can contains additional `<meta>`-tags
- [README.md](#readme.md) should be filled out   
- The file [`\Gruntfile_setup.json`](#gruntfile_setup_json) defines the type of application etc.
- The file [`\bower_main.json`](#bower_main_json) is used by [`Gruntfile.js`][gruntfile] to retrieve and build the included bower components.


<a name="file_formats"></a>
## Files and formats

<a name="readme.md"></a>
### README.md
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
### Gruntfile.js
The `Gruntfile` contains all the different Grunt-task used to check and build the package/application. 
`gruntfile.js` and `package.json` are in [github/fcoo/gruntfile.js](https://github.com/FCOO/gruntfile.js) and are automatic included in the  [FCOO templates](#fcoo_template)
The main task are:

- `grunt check` - Checking syntax of all .js and .scss files in `\src`
- `grunt dev  ` - Building a development version in `\demo` or `\dev`
- `grunt prod` - Building a production version in `\dist`
- `grunt github` - Create a complete new release and push it to GitHub
   
<a name="gruntfile_setup_json"></a>
### Gruntfile_setup.json
Used by [`Gruntfile.js`](gruntfile) to define the type of application etc.

	{	
	  "isApplication"     : false, //true for stand-alone applications. false for packages/plugins
	  "haveJavaScript"    : true,  //true if the packages have js-files
	  "haveStyleSheet"    : false, //true if the packages have css and/or scss-files
	  "exitOnJSHintError" : true,  //if false any error in JSHint will not exit the task
	  "beforeProdCmd"     : "",    //Cmd to be run at the start of prod-task. Multi cmd can be seperated by "&"
	  "beforeDevCmd"      : "",    //Cmd to be run at the start of dev-task
	  "afterProdCmd"      : "",    //Cmd to be run at the end of prod-task
	  "afterDevCmd"       : "",    //Cmd to be run at the end of dev-task
	}

### package.json 
`package.json` are only used to build the packages (compile sass, compress source files etc.) 
All metadata and dependencies are put in `bower.json`
`package.json` is 'partner' with `gruntfile.js` and part of [github/fcoo/gruntfile.js](https://github.com/FCOO/gruntfile.js) 
See also [documentations for packages.json](https://docs.npmjs.com/files/package.json)

### bower.json
`bower.json` is created when running `grunt-init` 
See also [documentations for bower.json](http://bower.io/docs/creating-packages/#bowerjson-specification)

<a name="bower_main_json"></a>
### bower_main.json
Use by [`Gruntfile.js`](gruntfile) to retrieve and build the included bower components. 

#### Contents
Contains of tree entities

**`exclude`**
List of components you want to exclude.

**`dependencies`**
Unfortunately not all Bower components list their dependencies. 
If components concatenate in the wrong order, use this option to manually specify dependencies for those components. 
	
**`mainFiles`**
Some Bower components don’t list their main files or (more likely) don’t have `bower.json` file at all. 
In this case [`bower-concat`](https://www.npmjs.com/package/grunt-bower-concat) will try to guess main file but sometimes it can’t or choose wrong one. 
You could explicitly define main files for that components.
	
**Note**: No comments `//..` or `/*..*/` are allowed in `bower_main.json`

#### Example
    {
    	"dependencies": {
    		"package_name1": "jquery",
    		"package_name2": ["jquery", "another_package_name"]
    	},
    	
    	"exclude": [
    		"package_name_to_exclude",
			"another_package_name_to_exclude"
    	],
    	"mainFiles": {
    		"package_name1": "src/package_name1.min.js",
    		"package_name2": ["dist/package_name2.js", "dist/package_name2.css"]
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


<a name="push_new_version"></a>
## Check, build, and push a new version to GitHub 
The `Gruntfile.js` installed with the [FCOO Templates](#fcoo_template) ([github.com/FCOO/gruntfile.js][fcoo-gruntfile]) has the following main tasks

### `grunt check`
- Check the syntax of all `.js` files in `\src` using [JSHint](#jshint)
- Check the syntax of all `.scss` in `\src`


### `>grunt dev`
Building a development version in `\demo` or `\dev`
In `Gruntfile_setup.json` (see [fcoo-web-dev][]) the `isApplication` entity determine if it is a *`Application`* or *`Package`*

**You only need to run `grunt dev` when you install/uninstall a bower-component or (for application only) changes `src\body.html` or `src\head.html`**

To test your package/application, just browse
`\demo\index.html` for *Package*
`\dev\index.html` for *Application*

#### Application
- Check syntax of `.js` and `.scss` files in `\src`
- Update all bower components
- Concat all `.js` and `.css` files in bower components into `\demo\bower_components.js` and `\demo\bower_components.css`
- Copy all images and font files used by bower components to `\demo\images` and `\demo\fonts`   
- Create `\dev\index.html` from `\src\index_TEMPLATE-DEV.html`, `\src\meta.html`, and `\src\body.html`
- Insert<br>`<script src="..src/PATH_AND_FILENAME.js"></script>` and<br>`<link href="..src/PATH_AND_FILENAME.css" rel="stylesheet">`<br>into `dev\index.html`for all js- and css/scss-files in `\src`

#### Package
- Check syntax of `.js` and `.scss` files in `\src`
- Update all bower components
- Concat all `.js` and `.css` files in bower components into `\demo\bower_components.js` and `\demo\bower_components.css`
- Copy all images and font files used by bower components to `\demo\images` and `\demo\fonts`


### `grunt prod`
Building a production version in `\dist`
In [Gruntfile_setup.json](#gruntfile_setup_json) the `isApplication` entity determine if it is an *`Application`* or a *`Package`*
#### Application
- Check syntax of `.js` and `.scss` files in `\src`
- Update all bower components   
- Concat and minify all `.js` files in bower components **AND** in `\src` into one file `\dist\[[APPLICATIONNAME]_[TIMESTAMP].js` and `\dist\[[APPLICATIONNAME]_[TIMESTAMP].min.js`      
- Compile all `.scss` files in `\src` and concat and minify them with all the `.css` files in bower components **AND** in `\src` into one file `\dist\[[APPLICATIONNAME]_[TIMESTAMP].css` and `\dist\[[APPLICATIONNAME]_[TIMESTAMP].min.css`
- Create `\dist\index.html` from `\src\index_TEMPLATE.html`, `\src\meta.html`, and `\src\body.html` 
- Copy all images and font files used by bower components to `\dist\images` and `\dist\fonts`   
- Copy all images and font files in `\src` to `\dist\images` and `\dist\fonts`

##### output example (application='*fcoo-app*')
	dist/
	  images/
	  fonts/
	  index.html
	  fcoo-app_2015-12-24-13_22_50.js
	  fcoo-app_2015-12-24-13_22_50.min.js
	  fcoo-app_2015-12-24-13_22_50.css
	  fcoo-app_2015-12-24-13_22_50.min.css


 
#### Package
- Check syntax of `.js` and `.scss` files in `\src`
- Concat and minify all `.js`files in `\src` into one file `\dist\[PACKAGENAME].js` and `\dist\[PACKAGENAME].min.js`
- Compile, concat and minify all `.scss` files in `\src` into one file `\dist\PACKAGENAME.css` and `\dist\PACKAGENAME.min.css`
- Copy all images and font files in `\src` to `\dist\images` and `\dist\fonts`

##### Output example (packages='*fcoo-plugin*')
	dist/
	  images/
	  fonts/
	  fcoo-plugin.js
	  fcoo-plugin.min.js
	  fcoo-plugin.css
	  fcoo-plugin.min.css

### `grunt github`
Create a complete new release and push it to [GitHub][]
- Run `grunt prod` *(optional)*
- Prompt for new and update `version` in `bower.json` and `package.json`
- Update `\dist\index.html` with new version (only *Application*)
- Commit all files in [Git][]
- Create a new `TAG` with message "*v1.2.3*"
- Merge branch `'master'` into branch `'gh-pages'` *(optional)*
- Push all branches and tags to [GitHub][]

### Credential Helper
 On `Windows` you can use a [credential helper](http://windows.microsoft.com/en-us/windows7/manage-stored-passwords-certificates-and-other-credentials) to tell [Git][] to remember your GitHub username and password every time it talks to GitHub. Just run

    git config --global credential.helper wincred

To stop it run

	git config --global --unset credential.helper 
