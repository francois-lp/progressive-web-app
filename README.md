## Progressive web app (PWA)
*Movie search PWA using The Movie Database (TMDB) API*

___
## Installation

__Requirements__
 - Create an account on The Movie Database (TMDB) API ([site](https://www.themoviedb.org/) | [documentation](https://developers.themoviedb.org/3/getting-started/introduction))
 - Install the browser extension Google Lighthouse ([Firefox](https://addons.mozilla.org/fr/firefox/addon/google-lighthouse/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) | [Chrome](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=fr)) for improving the performance, quality, and correctness of web apps
 - Install  [Android Studio](https://developer.android.com/studio) for app testing on the mobile device emulator

__Project__
```
	$ git clone https://github.com/francois-lp/progressive-web-app
```

___
## Notes
__TheMovieDB API (search example)__

```
https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
```

__PWA criteria__
1. responsive
1. https
1. manifest.json
1. service worker (data caching to use the app offline)

__PWA tests__
1. Control the manifest.json file 
*Open DevTools from the browser (F12) > "Application" tab > "Application" menu then "Manifest"*
1. Control the Service Worker
*Open DevTools from the browser (F12) > "Application" tab > "Application" menu then "Service Workers"*
1. Testing the PWA with Lighthouse
*Generate report : check "Progressive Web App" and "Mobile*
1. Test app on the mobile device emulator

___
## Links

__Tutorial__
* [PWA - Progressive Web App](https://www.youtube.com/watch?v=pbSdAp8EmwI)

__Documentation__
* [Manifeste des applications web](https://developer.mozilla.org/fr/docs/Web/Manifest)
* [Les Service Workers : première étape vers la PWA](https://www.kaliop.com/fr/les-service-workers-vers-la-pwa/)
* [Utiliser les Service Workers](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Native App Install Prompt](https://developers.google.com/web/fundamentals/app-install-banners/native)
