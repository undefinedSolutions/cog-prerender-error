# Problem Description
When I load a GeoTIFF into [OpenLayers](https://openlayers.org/en/latest/examples/cog-overviews.html) it works fine, but when I prerender I get the following error message:
    Cannot find module 'fs'

To my understanding, this is understandable, since the prerenderer does not have a browser module FS ...
## Steps
git clone

 1. git clone [REPO]
 2. npm install
 3. ng serve
 4. npm run prerender:dev

Ng serve is working fine but at npm run prerender:dev I got the error...