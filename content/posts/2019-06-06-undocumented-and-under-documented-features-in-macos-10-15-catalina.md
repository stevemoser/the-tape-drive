---
template: post
title: Undocumented and Under Documented features in macOS 10.15 Catalina
slug: undocumented-features-catalina
draft: false
date: 2019-06-06T14:26:25.924Z
description: >-
  With so many announcement from this year's WWDC it is no surprise there are
  many under documented and undocumented features, deprecations, and updates in
  macOS 10.15 Catalina. Let's start with a few features I've found while digging
  through macOS 10.15
category: Apple
tags:
  - Apple
  - Catalina
---

With so many announcement from this year's WWDC it is no surprise there are many under documented and undocumented features, deprecations, and updates in macOS 10.15 Catalina. Let's start with a few features I've found while digging through macOS 10.15

## Features

#### SideCar

The first part of SideCar was introduced last year as Continuity Camera even though internally it was called SideCarCamera. Strangely enough this year it is referred to internally both as SideCar and Continuity. I like the name SideCar as it is more memorable than Continuity and implies the one to one relationship between the Mac and iPad (or the iPhone in the case of SideCarCamera). This year Apple announced on stage that SideCar includes extending and mirroring a Mac's display to an iPad and using a iPad to markup or sketch content on a Mac. Extending your mirroring a Mac's display can be done through Preference, AirPlay menu bar app, or by clicking on the green button in the "traffic lights" which displays options for entering full screen or tiling left or right. Additionally if you hold Option while clicking the green button options for zooming and moving windows to the left or right side of the screen appear. Finally, I found the following reference to a as-yet-unannounced feature of SideCar: signature support. 

```
ContinuityCamera.appex
ContinuityDisplay.appex
ContinuityMarkup.appex
ContinuitySignature.appex
ContinuitySketch.appex
```

![sidecare signature](/media/sidecar-signature.jpg "sidecare signature")

The 'Continuity Signature' or SideCar Signature can be seen in the signature feature inside QuickLook and Preview. I was able to grab a screenshot on the Mac for this signature feature but SideCar keeps timing out on me so I wasn't able to grab a screenshot from the iPad side. If SideCar is working for you send me a screenshot on twitter.

#### Siri Air Quality

Siri supported Air Quality requests in Mojave but replies came back as plain text. This year Apple included a Siri UI bundle for Air Quality which not only nicely displays the Air Quality but also the Fine Particles and Ozone values.

![Mojave Siri Air Quality](/media/mojave-siri-air-quality.jpg "Mojave Siri Air Quality")

![Catalina Siri Air Quality](/media/catalina-siri-air-quality.jpg "Catalina Siri Air Quality")


#### WPA3

With macOS 10.15 Catalina the Mac now supports WPA3 as noted in the Beta 1 release notes.

#### New Frameworks

* JetUI which is the codename for SwiftUI
* Helium which might be the codename for Multi GPU Pooling technology for the new Mac Pro
* Geode which might be the new photo editing UI for the Photos app
* Mondrian (as in Piet Mondrian) which might be the new layout (PhotosAtlasView) for Photos in the Photos app
* ProVideo
* USDKit
* caulk which might be a new audio framework

## Changes

* Z shell (Zsh) replaces Bash as the default shell .
* Previous Catalyst apps such as News have better keyboards shortcuts such at ⌘+[ or Escape to navigate back instead of ⌘+U.
* The systems files have been moved to their own read-only volume.
* Ticket Viewer app was moved to core services folder
* CoreServices's CoreTypes bundle includes references to `PCIe card in slot %d is not placed in an optimal slot` and `There are no card move recommendations` for the new Mac Pro.

## Deprecations

* RAID Utility no longer ships with or runs on macOS 10.15 as it requires the no longer shipping CoreRAID.framework
  SiriTTS.framework
* Hardware RAID is no longer included in the System Information app
* System Image Utility no longer ships with or run on macOS 10.15 as it requires the no longer shipping SIUFoundation framework
* The 64-bit compatibility column is gone in the Applications list in the System Information app
* New International tab in System Information app
