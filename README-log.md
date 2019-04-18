# android/build.gradle 
react-native link
Error: ENOENT: no such file or directory, open '/Users/gjermund/github_skobba/ReactNativeExpo/android/build.gradle'
    at Object.openSync (fs.js:449:3)
    at Object.readFileSync (fs.js:349:35)
    at Object.<anonymous> (/Users/gjermund/github_skobba/ReactNativeExpo/node_modules/react-native-spinkit/scripts/rnpm-prelink.js:7:16)
    at Module._compile (internal/modules/cjs/loader.js:736:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:747:10)
    at Module.load (internal/modules/cjs/loader.js:628:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:568:12)
    at Function.Module._load (internal/modules/cjs/loader.js:560:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:801:12)
    at executeUserCode (internal/bootstrap/node.js:526:15)
Failed to load `android/build.gradle` when linking react-native-spinkit
Could not find `allprojects { }` block in build.gradle
/Users/gjermund/github_skobba/ReactNativeExpo/node_modules/react-native-spinkit/scripts/rnpm-prelink.js:21
var str = depStr[0];

## Solution (github)
You need to update your local react-native-spinkit dependency.
Go to yourprojectdir/node_modules/react-native-spinkit/android/build.gradle
then changes the android setting (compileSdkVersion, buildToolsVersion, minSdkVersion, and targetSdkVersion) exactly same with your android setting in android/build.gradle

that works for me


/Users/gjermund/github_skobba/ReactNativeExpo/node_modules/react-native-spinkit/android/build.gradle

/Users/gjermund/github_skobba/ReactNativeExpo/android/build.gradle


## Solution 2
brew install gradle
react-native link react-native-spinkit
cd android & gradlew clean
cd .. and react-native run-ios/android
Problem solved!