// Example 3
//==============================
(function(global) {
	
    // map tells the System loader where to look for things
    var map = {
        'app':                        'dist/app', // this is where your transpiled files live
        'rxjs':                       'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api', // this is something new since angular2 rc.0, don't know what it does
        '@angular':                   'node_modules/@angular'
	};
	
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'boot.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' }
	};
	
    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        //'@angular/router', // I still use "router-deprecated", haven't yet modified my code to use the new router that came with rc.0
        '@angular/router-deprecated',
        '@angular/http',
        '@angular/testing',
        '@angular/upgrade'
	];
	
    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
	});
	
    var config = {
        map: map,
        packages: packages
	};
	
    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
	
    System.config(config);
})(this);

// Example 4
// REF : https://yakovfain.com/2016/05/06/starting-an-angular-2-rc-1-project/
//====================================
System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
		'@angular': 'node_modules/@angular'
	},
    paths: {
		'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
	},
    meta: {
		'@angular/*': {'format': 'cjs'}
	},
    packages: {
        'app'                      :{main: 'main', defaultExtension: 'ts'},
		'@angular/core'            :{main: 'core.umd.min.js'},
		'@angular/common'          :{main: 'common.umd.min.js'},
		'@angular/compiler'        :{main: 'compiler.umd.min.js'},
		'@angular/platform-browser':{main: 'platform-browser.umd.min.js'},
		'@angular/platform-browser-dynamic': {main:'platform-browser-dynamic.umd.min.js'}
	}
});


// Example 5
// REF : http://www.bennadel.com/blog/3094-building-angular-2-demos-with-system-js-and-typescript.htm
//====================================
(function() {
	
    // Alias the path to the common rc1 vendor scripts.
    var paths = {
		"rc1/*": "../../vendor/angularjs-2-beta/rc1/*"
	};
	
    // Tell Angular how normalize path and package aliases.
    var map = {
		"@angular": "rc1/node_modules/@angular",
		"angular2-in-memory-web-api": "rc1/node_modules/angular2-in-memory-web-api",
		"rxjs": "rc1/node_modules/rxjs",
		"ts": "rc1/node_modules/plugin-typescript/lib/plugin.js",
		"tsconfig.json": "rc1/tsconfig.json",
		"typescript": "rc1/node_modules/typescript/lib/typescript.js"
	};
	
    // Setup meta data for individual areas of the application.
    var packages = {
		"app": {
			main: "main.ts",
			defaultExtension: "ts"
		},
		"rc1/node_modules": {
			defaultExtension: "js"
		}
	};
	
    var ngPackageNames = [
		"common",
		"compiler",
		"core",
		"http",
		"platform-browser",
		"platform-browser-dynamic",
		"router",
		"router-deprecated",
		"upgrade"
	];
	
    ngPackageNames.forEach(
    function iterator( packageName ) {
		
		packages[ "@angular/" + packageName ] = {
			main: ( packageName + ".umd.js" )
			// ,
			// defaultExtension: "js"
		};
		
	}
    );
	
    System.config({
		paths: paths,
		map: map,
		packages: packages,
		transpiler: "ts",
		typescriptOptions: {
			tsconfig: true
		},
		meta: {
			typescript: {
				exports: "ts"
			}
		}
	});
	
    // Load "./app/main.ts" (gets full path from package configuration above).
    System
    .import( "app" )
    .then(
    function handleResolve() {
		
		console.info( "System.js successfully bootstrapped app." );
		
	},
    function handleReject( error ) {
		
		console.warn( "System.js could not bootstrap the app." );
		console.error( error );
		
	}
    )
    ;
	
})();

// HTML Code:
// ===================
<!doctype html>
<html>
<head>
<meta charset="utf-8" />

<title>
Building Angular 2 Demos With System.js And TypeScript
</title>

<link rel="stylesheet" type="text/css" href="./demo.css"></link>

<!-- Load libraries (including polyfill(s) for older browsers. -->
<script type="text/javascript" src="../../vendor/angularjs-2-beta/rc1/node_modules/core-js/client/shim.min.js"></script>
<script type="text/javascript" src="../../vendor/angularjs-2-beta/rc1/node_modules/zone.js/dist/zone.js"></script>
<script type="text/javascript" src="../../vendor/angularjs-2-beta/rc1/node_modules/reflect-metadata/Reflect.js"></script>
<script type="text/javascript" src="../../vendor/angularjs-2-beta/rc1/node_modules/systemjs/dist/system.src.js"></script>
<!-- Configure SystemJS loader. -->
<script type="text/javascript" src="./system.config.js"></script>
</head>
<body>

<h1>
Building Angular 2 Demos With System.js And TypeScript
</h1>

<my-app>
Loading...
</my-app>

</body>
</html>

// Example
//===========================
var angularVersion = '2.0.0-rc.1';

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
    packageConfigPaths: [
        "unpkg:@*/*/package.json"
    ],

    map: {
        '@angular/core': 'unpkg:@angular/core@'+angularVersion,
        '@angular/compiler': 'unpkg:@angular/compiler@'+angularVersion,
        '@angular/common': 'unpkg:@angular/common@'+angularVersion,
        '@angular/platform-browser': 'unpkg:@angular/platform-browser@'+angularVersion,
        '@angular/platform-browser-dynamic': 'unpkg:@angular/platform-browser-dynamic@'+angularVersion,
        'rxjs': 'unpkg:rxjs@5.0.0-beta.6',
        'zone.js': 'unpkg:zone.js@0.6.12',
        'reflect-metadata': 'unpkg:reflect-metadata@0.1.3',
        "crypto": "@empty"
    },

    packages: {
        'app': {
            defaultExtension: 'ts',
            main: './index.ts'
        }
    }
});