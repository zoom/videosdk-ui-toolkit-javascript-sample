# Zoom Video SDK UI Toolkit JavaScript sample

Use of this sample app is subject to our [Terms of Use](https://explore.zoom.us/en/video-sdk-terms/).

This repo is an HTML / CSS / JavaScript website that uses the [Zoom Video SDK UI toolkit](https://developers.zoom.us/docs/video-sdk/web/) to start and joins sessions.

![Zoom Video SDK](https://raw.githubusercontent.com/zoom/videosdk-ui-toolkit-web/HEAD/ui-toolkit%E2%80%93gallery-view.png)

## Installation

To get started, clone the repo:

`$ git clone https://github.com/zoom/videosdk-ui-toolkit-javascript-sample.git`

## Setup

1. Once cloned, navigate to the `videosdk-ui-toolkit-javascript-sample` directory:

   `$ cd videosdk-ui-toolkit-javascript-sample`

1. Open the `videosdk-ui-toolkit-javascript-sample` directory in your code editor.

1. Open the `index.js` file, and enter values for the variables:

   | Variable                   | Description |
   | -----------------------|-------------|
   | authEndpoint          | Required, your Video SDK auth endpoint that securely generates a Video SDK JWT. [Get a Video SDK auth endpoint here.](https://github.com/zoom/videosdk-auth-endpoint-sample) |
   | config | Your Video SDK [session details](https://developers.zoom.us/docs/video-sdk/web/ui-toolkit/#create-a-configuration-object) and [enabled features](https://developers.zoom.us/docs/video-sdk/web/ui-toolkit/#supported-features). The `videoSDKJWT` will be set from the response of your `authEndpoint`. |
   | role | Required, `0` to specify participant, `1` to specify host. |

   Example:

   ```js
   var authEndpoint = 'http://localhost:4000'
   var config = {
      videoSDKJWT: '',
      sessionName: 'test',
      userName: 'ZoomDev',
      sessionPasscode: '123',
      features: ['preview', 'video', 'audio', 'settings', 'users', 'chat', 'share'],
      options: { init: {}, audio: {}, video: {}, share: {}},
      virtualBackground: {
         allowVirtualBackground: true,
         allowVirtualBackgroundUpload: true,
         virtualBackgrounds: ['https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop']
      }
   };
   var role = 1
   ```

1. Save `index.js`.

## Usage

1. Navigate to index.html in your browser ([or serve over localhost](https://www.npmjs.com/package/http-server)) and click "Join Session".

   ![Zoom Video SDK](https://raw.githubusercontent.com/zoom/videosdk-ui-toolkit-web/HEAD/ui-toolkit%E2%80%93gallery-view.png)

## Deployment

The JavaScript Sample App can be easily deployed to [GitHub Pages](#github-pages), or [another static web hosting service](#other-static-web-hosting), like an AWS S3 bucket.

### GitHub Pages

1. Create a repo on [GitHub](https://github.com).

1. Add the remote to your project:

   `$ git remote add origin GITHUB_URL/GITHUB_USERNAME/GITHUB_REPO_NAME.git`

1. Git add, commit, and push your project:

   `$ git add -A`

   `$ git commit -m "deploying to github"`

   `$ git push origin master`

1. On GitHub, in your repo, navigate to the "settings" page, scroll down to the "GitHub Pages" section, and choose the "master branch folder" for the source.

1. Now your project will be deployed to https://GITHUB_USERNAME.github.io/GITHUB_REPO_NAME.

### Other Static Web Hosting

1. Deploy the directory to a static web hosting service, like an AWS S3 bucket.

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://explore.zoom.us/docs/en-us/developer-support-plans.html) plans.
