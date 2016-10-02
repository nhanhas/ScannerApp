Create a Phonegap structured app
$ Phonegap create <project-name>

Generate a simple "package.json" file
$ npm init

At "package.json" insert a devDependencies entry like this :
"devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-watch": "~0.6.1",
    "grunt-sass": "^0.18.1",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-uglify": "~0.5.0",
    "grunt-contrib-copy":"~0.8.2"
}
NOTE: This dependencies must be up to date!

At this point we will have a grunt dependency and sass. The watch we will be used to rebuild our sources if they are changed. We will see that later.

Run the following command to generate the dependencies to your project => "node_modules" folder
$ <sudo> npm install

After that , create and customize your "Gruntfile.js" with tasks


Create a "bower.json" to set the modules like Angularjs, fontawsome, bootstrap, etc that you will need in your project. Like this:
{
  "name": "app",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "angular": "1.x",
    "angular-route": "1.x",
    "font-awesome": "4.2",
    "bootstrap": "3.x"
  }
}

Once created, you must run the proper command to install this parts on your project => "bower_components" directory:
$ bower install

To be able to compile sass with grunt, you will need a ruby gem to compile, run the following command (if u dont already have in your system):
$ gem install sass

Checkout the Gruntfile.js configuration

FOR MOBILE PHONEGAP
In your Gruntfile.js, you need to set 'deploy' to 'www' name, because phonegap will only compile 'www' named folder.

- Rebuild with '$ grunt'
- and phonegap that with '$ phonegap run ios'

Once its built run '$ phonegap serve' and check out the magic!


FOR APK BUILD WITH CORDOVA
- install android studio
- make $ADNROID_HOME and $PATH(with $ANDROID_HOME/tools and $ANDROID_HOME/platform-tools)
- $android to install Android SDK 22 (at least)
-cordova build android --verbose
- enjoy your .apk

