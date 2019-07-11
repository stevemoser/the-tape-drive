---
template: post
title: >-
  Face ID fails to prevent access to iCloud Keychain passwords in iOS 13 Public
  Beta
slug: face-id-fail-ios-13
draft: false
date: 2019-07-11T16:15:13.984Z
description: >-
  In iOS 13 Public Beta 2 and Developer Beta 3 Face ID does not authorize before
  allowing access to a user's iCloud Keychain containing their website and app
  passwords.
category: Apple
tags:
  - iOS
  - Face ID
  - Security
---
In iOS 13 Public Beta 2 and Developer Beta 3 Face ID does not authorize before allowing access to a user's iCloud Keychain containing their website and app passwords. This is a regression from iOS 12.

## Steps to Reproduce

1. Open the Settings app
2. Tap 'Passwords & Account'
3. Cover the Face ID sensor
3. Quickly and repeatedly tap 'Website & App Passwords'

Expected:

The 'Face Not Recognized' dialog should appear.

Actual:

The user is shown the 'Website & App Passwords' screen without Face ID authenticating.

Note: Sometimes the 'Face Not Recognized' dialog appears when reproducing this but after canceling out of the dialog and trying again should make it work.

Check out my tweet for video proof: https://twitter.com/SteveMoser/status/1149067077640163334
