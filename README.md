# Problem Description
When I load a GeoTIFF into [OpenLayers](https://openlayers.org/en/latest/examples/cog-overviews.html) it works fine, but when I prerender I get the following error message:
`Cannot find module 'fs'`

To my understanding, this is understandable, since the prerenderer does not have a browser module FS ...
## Steps

 1. `git clone https://github.com/undefinedSolutions/cog-prerender-error`
 2. `git checkout working`
 3. `npm install`
 4. `ng serve`
 5. `npm run prerender:dev`

Ng serve is working fine but at npm run prerender:dev I got the error...

## Solution
The solution is to create `cog.module.ts` and `cog-routing.module.ts`. Within the routing, reference is now made to the `cog.module.ts` using `loadChildren: () => import('./cog/cog.module').then(m => m.CogModule)`.
So the prerender is running without an error...
The working solutions can be found under the route `/cog`