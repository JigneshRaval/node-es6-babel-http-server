System.config({
    baseUrl: '/',
    paths: {
        'unpkg:*': 'https://unpkg.com/*'
    }
});

System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },

    meta: {
        '*': {
            deps: [ 'zone.js', 'reflect-metadata' ]
        }
    }
});

System.config({
	// map tells the System loader where to look for things
	map: {
		'app' : 'app',
		'rxjs': 'app/rxjs',
        'zone.js': 'zone.js.0.6.25.js',
        'reflect-metadata': 'reflect-metadata.0.1.8.js',
		'@angular': 'app/angular2',
        "crypto": "@empty"
    },
	
	// packages tells the System loader how to load when no filename and/or no extension
    packages: {
        'app': {
            defaultExtension: 'ts',
            main: './index.ts'
        },
		'@angular/core'                    : {main: 'core@2.0.0.js', defaultExtension: 'js'},
        '@angular/common'                  : {main: 'common@2.0.0.js'},
        '@angular/compiler'                : {main: 'compiler@2.0.0.js'},
        '@angular/platform-browser'        : {main: 'platform-browser@2.0.0.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic@2.0.0.js'}
    }
});
