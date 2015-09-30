# FCOO Application

This document a suggestion for a common FCOO standard format, structure, templates, npm scripts, and Grunt scripts to create, develop and distribute packages, plugins, and applications from FCOO


# Quick version
### First time
**Install Git**
1. Install Git from [git-scm.com](http://git-scm.com/)
2. Create account on [github.com](https://github.com) 
3. *Optional*: Install [TortoiseGit]( https://tortoisegit.org) - Windows Shell Interface to Git
4. *Optional*: Install a [GitHub GUI](http://git-scm.com/downloads/guis) eq. [GitHub for Windows](https://windows.github.com/)
**Install Node.js, Grunt, Sass etc,**
5. Install Node.js  from https://nodejs.org 
6. `>npm install -g npm`
7. `>npm install -g grunt-cli`
8. `>npm install -g grunt-init`
9. `>npm install -g bower`
10. Install [Ruby](https://www.ruby-lang.org/) from https://www.ruby-lang.org/en/downloads/
11. `>gem install sass` (or see http://sass-lang.com/install)
12. *Optional*: 



 



## Tools and Packages

### Node.js and npm
We use [Node.js](https://nodejs.org) as the JavaScript engine and [npm (Node Package Manager)](https://www.npmjs.com/) to (un)install and run the different packages

#### Installation
- Install **Node.js** from (https://nodejs.org)
- **npm** is installed together with Node.js, but you update to the latest version with `>npm install -g npm``

### Bower, Grunt, and Sass

- As Tast Runner we use **[Grunt](http://gruntjs.com/)**
- As a front-end package management we use **[Bower](https:/bower.io)**
- To create and organize our CSS (stylesheets) we use **[Sass](https://http://sass-lang.com/)** (Syntactically Awesome StyleSheets)

#### Install Grunt

To load and run the version of Grunt you have installed locally to your project, you must install the **Grunt Command Line Interface (grunt-cli)** globally (once). 

    >npm install -g grunt-cli

To (semi) automatic create new repositories and/or applications you need to install the Project Scaffolding tool **[grunt-init](http://gruntjs.com/project-scaffolding)** globally (once). 

    >npm install -g grunt-init

#### Install Bower

    >npm install -g bower

#### Install Sass
To install Sass we need [Ruby](https://www.ruby-lang.org/) 

- Install Ruby from https://www.ruby-lang.org/en/downloads/
- `>gem install sass` 

See https://sass-lang.com/install 


## THE REST

Before the first repository is created, the following tools and components must be installed on the computer: Node (npm), Bower, Git, GitHub, SASS, JSHint, UglifyJS 


	\src
	\dest
	\bower_components
	\node_modules
	\examples


### README.md
The default `README.md` file contains the following sections, but new ones can be added
- Description
- Installation
- Demo
- Usage
- options
- Methods
- Copyright and License
- Contact information
- Credits and acknowledgements
- Known bugs
- Troubleshooting
- Changelog


## Create a new repository
1. Select a appropriate name for the packages
	- Use lower letter and '-' instead of camel-case (`fcoo-menu`', not '`FCOOMenu`')
	- If it is a 'stand-alone' package, the name can start with '`leaflet-`' or '`jquery-`'
	- If the packages is directly part of a FCOO application, the name must start with '`fcoo-`'
2. Create the new repository in GitHub
3. Clone the repository to Desktop
4. Copy all files and directories from `PACKAGENAME_TEMPLATE` 
5. Replace all appearance of the text `PACKAGENAME` in all files with the real name of the packages
6. Run `>bower init` to init bower and update/create `bower.json`
7. If you need SASS packages or other packages under development run `>bower install --save-dev THE_NAME_OF_THE_PACKAGE` to install packages needed for development (NB: remember to add `--save-dev`
	- [bourbon](http://bourbon.io)  `>bower install --save-dev bourbon`
	- [modernizr-mixin](https://github.com/danielguillan/modernizr-mixin): `>bower install --save-dev modernizr-mixin`
	- [mathsass](https://github.com/terkel/mathsass): `>bower install --save-dev mathsass`
8. Create/update `README.md` (se below)
9. Create/update `package.json` (se below)
10. Run `>bower update` to install/update dependencies (if any) 




### package.json 
The `package.json` are only used to build the packages (compile sass, compress source files etc.) 
All metadata and dependencis are put in `bower.json`
[See documentations for packages.json](https://docs.npmjs.com/files/package.json)

### bower.json

[See documentations for bower.json](http://bower.io/docs/creating-packages/#bowerjson-specification)

---
# Create a new version 

1. Build a new version
2. Commit all new files (if any) to git-repository. 
3. Create a new version in Bower
4. Push the new version

### 1.Build a new version
    >npm run build
    
### 2. Add to git
Commit to `master`
Create or change to branch `gh-pages`
Merge
Change back to branch `master`

### 3.New version in Bower
    >bower version 1.2.3 -m "This is a new version bla bla"
or

	>bower version [<newversion> | major | minor | patch] -m "This is a new version bla bla"


### 4. Push
#### TortoiseGit (Windows/pathfinder) 
select `TortoiseGit->Push` 

![](http://i.imgur.com/7ZmEBIO.png)
    

#### Command mode

    git.exe push --all --progress  "origin"