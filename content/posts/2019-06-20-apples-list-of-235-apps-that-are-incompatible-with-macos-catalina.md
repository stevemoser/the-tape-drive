---
template: post
title: Apple's List of 235 Apps that are incompatible with macOS Catalina
slug: 235-apps-incompatible-with-catalina
draft: false
date: 2019-06-20T18:53:23.599Z
description: >-
  A bundle called IncompatibleAppsList.bundle found in
  /Library/Apple/Library/Bundles/ in macOS Catalina contains a of list of 235
  apps that are incompatible with Catalina.
category: Apple
tags:
  - Beta
  - Catalina
  - Mac
  - Apple
---
![Incompatible App List](/media/incompatible-catalina-apps.jpg "Incompatible App List")

A bundle called IncompatibleAppsList.bundle found in `/Library/Apple/Library/Bundles/` in macOS Catalina contains a of list of 235 apps that are incompatible with Catalina. Presumely Apple might show the user a list of currently installed apps that are incompatible with Catalina during the setup process in a future beta. Many of the apps listed are included only because older versions of the apps are incompatible as noted by the strings included with the bundle. This is example of the one for Transmit: `Transmit: this version of Transmit is not compatible with this version of macOS.` Some notable inclusions are:

* Transmit 4.1.7
* 1Password 2.12.2
* iStats Menu 2.9
* Box Sync 4.0
* QuickBooks 2015
* SugarSync 1.0
* Default Folder X 4.3.10
* VMWare Fusion 3.1.4
* Creative Cloud 1.1.0.592
* Parallels 2.5
* and many antivirus apps

Also there is one app in a bundle called IncompatibleAppsList which includes the following string: `TextWrangler has been end of lifed. Update to BBedit.`

Gist Download Link:
[IncompatibleAppsList.plist](https://gist.github.com/stevemoser/a4388df17633beae5bc3fb07d38373e2)
