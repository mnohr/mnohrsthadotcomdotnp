# Flutter Guide

> ### Important Links
* [codebook](https://flutter.dev/docs/cookbook)

> ## Installation Guide for window

1. [Get Started](https://flutter.dev/docs/get-started/install/windows) 
1. flutter depend on **window powershell** and **git for windows** so we must have them.
1. There are two ways to download  flutter.
      * (First way) Download the latest stable release of the Flutter SDK on link [flutter.zip](https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_1.20.2-stable.zip) , extract the zip file and place the contained flutter in the desired installation location .
      * (Second way) Or Clone the source code from the [Flutter Repo](https://github.com/flutter/flutter)
        ```
        git clone https://github.com/flutter/flutter.git -b stable
          ```     
1. Update your path
    * From the Start search bar, enter ‘env’ and select Edit environment variables for your account.
    * Under User variables check if there is an entry called Path:
       * If the entry exists, append the full path to flutter\bin using ; as a separator from existing values.
      * If the entry doesn’t exist, create a new user variable named Path with the full path to flutter\bin as its value
      > You have to close and reopen any existing console windows for these changes to take effect.
1.  Run **Flutter** in cmd (command Prompt)
  ![Run flutter command](runflutter.png)
      > If you also result same like image above than you are all set.
1. Run **fluter doctor** in cmd (command Prompt)
  ![Run flutter doctor](flutterdoctor.png)
1. Now you have to installed missing dependencies and then you can run the flutter doctor command again to verify that you’ve set everything up correctly ,like
    * Download and install android studio [click link](https://developer.android.com/studio)
    * setup android emulator
        * Launch Android Studio, click the AVD Manager icon, and select Create Virtual Device and then Select one or more system images for the Android versions you want to emulate, and select Next. An x86 or x86_64 image is recommended.  
            > ### procces to setup
            1. ![avd iocn](avdicon.png "Click AVD Manager icon")
            
            1. ![create virtual device](add_vd.png "Click on create virtual device")
            1. ![choose device](choose.png "select any device")
            1. ![select device version](sysimgae.png "select any device version")
            1. ![configure setting and click finish](finsh.png "click finsh to complete setup")
            1. ![avd iocn](avdicon.png "again click AVD manager icon") 
            1. ![rundevice](rundevice.png "click to lunch device")
            1. ![emulator ready](mobiledevice.png )


        * Or you can use flutter emulator which is created in vscode
          > To create a new emulator run
            ```
             flutter emulators --create [--name xyz]
            ```
          > To run an emulator
            ```
            flutter emulators --launch <emulator id>
            ```



## vscode shortcuts

 shortcuts     | description     
   -------  |----------
 ctrl + shift + p |    it will help to create new project |
 ctrl + ~ | open terminal 
 cmd + . | open option
 cmd + space | open option

