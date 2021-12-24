AniList Unlimited
=================

[![GitHub](https://img.shields.io/github/license/mysticflute/ani-list-unlimited?style=for-the-badge)](LICENSE)

A collection of user scripts to power up your [https://anilist.co](https://anilist.co) experience.

Features are split into individual user scripts so you can easily choose what you do and don't want:

* __[Score in Header](#anilist-unlimited---score-in-header)__ - See scores faster by adding them to the header. See MyAnimeList and Kitsu scores as well!
* __[Score in Sidebar](#anilist-unlimited---score-in-sidebar)__ - Add MyAnimeList and Kitsu scores to the sidebar.
* __[Large Image Hover](#anilist-unlimited---score-in-sidebar)__ - View full size title images on hover.

Some scripts have configurable settings and optional features, and they all focus on minimal interference with the page without loading any external scripts or resources.

＼(＾▽＾)／

## User Script Managers - Getting Started

A user script manager is required to run user scripts in your browser. Most browsers have several options available. User script managers are easy to use, help keep the scripts automatically updated, and make it simple to turn scripts on or off.

The following user script managers have been tested for support. I recommend **Violentmonkey** because it has a clean UI and has the best experience for configuring user script options.

1. [Violentmonkey](https://violentmonkey.github.io/) -
      [Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag),
      [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/),
      [Edge](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao)
2. [TamperMonkey](https://www.tampermonkey.net/) -
      [Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo),
      [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/),
      [Edge](https://www.microsoft.com/store/apps/9NBLGGH5162S),
      [Safari (paid)](https://apps.apple.com/us/app/tampermonkey/id1482490089)
3. [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) -
      [Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

If you don't have a user script manager installed then choose and add one to your browser before getting started.

## AniList Unlimited - Score in Header

[![GreasyFork](https://img.shields.io/badge/dynamic/json?style=for-the-badge&color=orange&label=Greasy%20Fork&query=%24.version&url=https%3A%2F%2Frunkit.io%2Fmysticflute%2Fuserscripts%2Fbranches%2Fmaster%2Fgreasyfork%2F404465)](https://greasyfork.org/en/scripts/404465-anilist-unlimited-score-in-header)
[![OpenUserJS](https://img.shields.io/badge/dynamic/json?style=for-the-badge&color=blue&label=OpenUserJS&query=%24.version&url=https%3A%2F%2Frunkit.io%2Fmysticflute%2Fuserscripts%2Fbranches%2Fmaster%2Fopenuserjs%2Fmysticflute%2FAniList_Unlimited_-_Score_in_Header)](https://openuserjs.org/scripts/mysticflute/AniList_Unlimited_-_Score_in_Header)

Makes manga and anime scores more prominent by moving them to the title area. Also optionally view scores from MyAnimeList and Kitsu.

![Screenshot of header](/screenshots/header-scores.png)

### Features

- Add AniList score with icon to the title area (configurable, default on).
  - Uses the average score by default, or the mean score when not available.
- Add the MyAnimeList score to the title area, with a link to the page (configurable, default on).
- Add the Kitsu score to the title area, with a link to the page (configurable, default off).
- Works on anime and manga overview pages on https://anilist.co.

You might not have used Kitsu before but I suggest enabling this option anyway. You'll get a chance to see how bad they are at scoring stuff.

### Installation

A [user script manager](#user-script-managers---getting-started) must first be added to your browser if you haven't already. Then install the script from one of these:

- [OpenUserJS](https://openuserjs.org/scripts/mysticflute/AniList_Unlimited_-_Score_in_Header)
- [GreasyFork](https://greasyfork.org/en/scripts/404465-anilist-unlimited-score-in-header)
- [Github](https://github.com/mysticflute/ani-list-unlimited/raw/master/score-in-header.user.js)

### Screenshots

These screenshots show different configuration options.

![Ping Pong](/screenshots/pingpong.png)
![Kiznaiver](/screenshots/kiznaiver.png)
![Bakemonogatari](/screenshots/bakemonogatari.png)
![Princess Mononoke](/screenshots/mononoke.png)
![20th Century Boys](/screenshots/centuryboys.png)
[(´ ∀ ` *)](/screenshots/readme.md)

### Configuration

This script has several options that lets you change the behavior:

- **`addAniListScoreToHeader`** - When true, shows the AniList score next to the title section.
- **`addMyAnimeListScoreToHeader`** - When true, adds the https://myanimelist.net score to the title section.
- **`addKitsuScoreToHeader`** - When true, adds the https://kitsu.io score to the title section.
- **`showIconWithAniListScore`** - When true, shows the smile/frown icon next to the AniList score.
- **`preferAniListMeanScore`** - When true, show AniList's "Mean Score" instead of the "Average Score". Regardless of this value, if the "Average Score" is not available then the "Mean Score" will be shown.
- **`showLoadingIndicators`** - When true, shows a spinner when external scores are being loaded.

With Violentmonkey:

1. Install the user script.
2. Let the user script run at least once by loading an applicable url, such as an anime page on AniList.
3. Click the edit button for this script from the Violentmonkey menu.
4. Click on the "Values" tab for this script.
5. Click on the configuration option you want to change and edit the value (change to true or false).
6. Click the save button.
7. Refresh or visit the page to see the changes.

![Violentmonkey Configuration](/screenshots/violentmonkey.png)

With TamperMonkey:

1. Install the user script.
2. Let the user script run at least once by loading an applicable url, such as an anime page on AniList.
3. From the TamperMonkey dashboard, click the "Settings" tab.
4. Change the "Config mode" mode to "Advanced".
5. On the "Installed userscripts" tab (dashboard), click the edit button for this script.
6. Click the "Storage" tab. If you don't see this tab be sure the config mode is set to "Advanced" as described above. Also be sure that you have visited an applicable page with the user script enabled first.
7. Change the value for any desired configuration options (change to true or false).
8. Click the "Save" button.
9. Refresh or visit the page to see the changes. If it doesn't seem to be working, refresh the TamperMonkey dashboard to double check your change has stuck. If not try again and click the save button.

![TamperMonkey Configuration](/screenshots/tamper1.png)
![TamperMonkey Configuration 2](/screenshots/tamper2.png)

Other:

With any user script manager you can also directly edit the script and change the default values which are near the top. Just keep in mind that any time the script is updated your changes will be undone. You'll have to make them again by editing the script.

## AniList Unlimited - Score in Sidebar

Coming soon... 	 ╮( ˘ ､ ˘ )╭

## AniListUnlimited - Large Image Hover

Coming soon...  ᕕ( ᐛ )ᕗ
