(<any>window).FUSEBOX_AURELIA_LOADER_RELOAD = true;

import 'fuse-box-aurelia-loader';
import 'aurelia-bootstrapper';

import { Aurelia } from 'aurelia-framework'

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration();
        // .feature('resources');

    aurelia.use.developmentLogging();

    aurelia.start().then(() => aurelia.setRoot());
}
