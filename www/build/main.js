webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/datos-estudiante/datos-estudiante.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datos_estudiante_datos_estudiante__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.centrosEducativos = [
            {
                nombre: 'Nombre del centro educativo1',
                ID: 1,
                telefono: '',
            },
            {
                nombre: 'Nombre del centro educativo2',
                ID: 2,
                telefono: '',
            },
            {
                nombre: 'Nombre del centro educativo3',
                ID: 3,
                telefono: '',
            },
        ];
    }
    HomePage.prototype.datosEstudiante = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__datos_estudiante_datos_estudiante__["a" /* DatosEstudiantePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Projects\tutores\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="text-center">\n      <span class="fs-14">TUTOR EN LINEA</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding class="bg-light">\n  <ion-list no-lines>\n    <ion-list-header color="mediumLight" text-wrap>\n      <img src="./assets/icons/estudiantes.png" alt="estudiante" class="float-left" width="30">\n      <div class="float-right">\n        <img src="./assets/icons/notificacion desactivada.png" alt="notificacion" class="float-left" width="18">\n        <img src="./assets/icons/settings.png" alt="ajustes" width="20" class="ml-10">\n      </div>\n      <div class="portal">\n        <img src="./assets/icons/padretutor.png" alt="padre o tutor" class="ml-20">\n        <h3>Bienvenido padre o tutor!</h3>\n        <p>Aquí podrá dar seguimiento a la escolaridad de sus hijos.</p>\n      </div>\n    </ion-list-header>\n    <ion-item class="ph-20" text-center>\n        <ion-avatar item-start class="custom-avatar no-margin">\n          <img src="./assets/icons/perfil.png" alt="perfil">\n        </ion-avatar>\n        <h2 class="text-bold">Perfil del padre o tutor</h2>\n        <h3 class="text-bold">Nombre del padre o tutor</h3>\n        <p>ID: T00000</p>\n    </ion-item>\n    <ion-item text-center text-wrap class="no-margin ph-40">\n      <button ion-button round class="padding-15" (click)="datosEstudiante()">Editar perfil</button>\n      <p class="fs-10 mb-20">Actualice sus datos para que los centros educativos obtengan una mejor referencia sobre usted.</p>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-list-header color="mediumLight" text-wrap>\n      <div class="portal">\n        <img src="./assets/icons/centroseducativos.png" alt="centros educativos">\n        <h3>Centros educativos</h3>\n        <p>Estos son los centros educativos donde tiene inscritos sus hijos.</p>\n      </div>\n    </ion-list-header>\n\n    <ion-list-header class="no-margin ph-10">\n      <ion-badge class="custom-badge">LISTADO</ion-badge>\n    </ion-list-header>\n    <ion-item *ngFor="let centro of centrosEducativos">\n      <ion-thumbnail item-start class="custom-thumbnail no-margin">\n        <img src="./assets/icons/centroeducativo.png" alt="centros educativos" width="60" height="60">\n      </ion-thumbnail>\n      <h3>{{ centro.nombre }}</h3>\n      <p class="fs-12">ID: {{ centro.ID }}</p>\n      <p class="fs-12">Teléfono: {{ centro.telefono }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Projects\tutores\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_datos_estudiante_datos_estudiante__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_datos_estudiante_datos_estudiante__["a" /* DatosEstudiantePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/datos-estudiante/datos-estudiante.module#DatosEstudiantePageModule', name: 'DatosEstudiantePage', segment: 'datos-estudiante', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_datos_estudiante_datos_estudiante__["a" /* DatosEstudiantePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\Projects\tutores\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Projects\tutores\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosEstudiantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatosEstudiantePage = /** @class */ (function () {
    function DatosEstudiantePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profesoresAsignados = [
            {
                foto: './assets/icons/perfil.png',
                nombre: 'Nombre del profesor Materia'
            },
            {
                foto: './assets/icons/perfil.png',
                nombre: 'Nombre del profesor Materia'
            },
            {
                foto: './assets/icons/perfil.png',
                nombre: 'Nombre del profesor Materia'
            },
        ];
        this.materias = [
            {
                materia: 'Lengua española',
                promedio: 98
            },
            {
                materia: 'Matemáticas',
                promedio: 89
            },
            {
                materia: 'Sociales',
                promedio: 92
            },
            {
                materia: 'Naturales',
                promedio: 94
            },
        ];
        this.calificaciones = [
            {
                tipo: 'Examen parcial',
                materia: 'Lengua española',
                promedio: 98
            },
            {
                tipo: 'Examen parcial',
                materia: 'Matemáticas',
                promedio: 89
            },
            {
                tipo: 'Examen parcial',
                materia: 'Sociales',
                promedio: 92
            },
        ];
    }
    DatosEstudiantePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DatosEstudiantePage');
    };
    DatosEstudiantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datos-estudiante',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Projects\tutores\src\pages\datos-estudiante\datos-estudiante.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span class="fs-18">Datos estudiante</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding class="bg-light">\n  <ion-list no-lines>\n    <ion-item color="mediumLight">\n      <ion-avatar class="custom-avatar" item-start>\n        <img src="./assets/icons/perfil.png" alt="perfil">\n      </ion-avatar>\n      <h2 class="text-bold">Nombre del estudiante</h2>\n      <p>ID estudiantil:</p>\n      <p>Aula:</p>\n      <h3 class="text-bold">Estatus:</h3>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <div class="text-center">\n        <h2 class="text-bold">Nombre centro educativo</h2>\n        <h3>Año escolar 2018-2019</h3>\n      </div>\n      <h3 class="text-bold mv-10">Profesores asignados</h3>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4 *ngFor="let profesor of profesoresAsignados" class="text-center">\n            <img [src]="profesor.foto" alt="profesor" width="33">\n            <p class="fs-8 text-bold">{{ profesor.nombre }}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-item>\n      <img src="./assets/icons/detalleestudiantes.png" alt="estudiantes" class="m-auto mv-15 mh-5" width="48" item-start>\n      <p>Total estudiantes del aula: 41</p>\n    </ion-item>\n    <ion-item color="mediumLight" text-center>\n      <h2 class="text-bold">Asistencia escolar</h2>\n    </ion-item>\n    <ion-list-header class="no-margin ph-10">\n      <ion-badge class="custom-badge">ASISTENCIA DEL ESTUDIANTE</ion-badge>\n    </ion-list-header>\n    <ion-item class="fs-14">\n      <b item-start>Asistencia</b>\n      <p item-end>24</p>\n    </ion-item>\n    <ion-item class="fs-14">\n      <b item-start>Ausencia</b>\n      <p item-end>2</p>\n    </ion-item>\n    <ion-item class="fs-14">\n      <b item-start>Licencia medica</b>\n      <p item-end>1</p>\n    </ion-item>\n    <ion-item class="fs-14">\n      <b item-start>Otras ausencia</b>\n      <p item-end>0</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-list-header text-wrap class="no-margin">\n      <div class="portal">\n        <img src="./assets/icons/agendatareas.png" alt="agenda">\n        <h3>Agenda</h3>\n        <p>Verifique las tareas asignadas y el desempeño diario de sus hijos.</p>\n        <button ion-button class="padding-15">Ir a agenda</button>\n      </div>\n    </ion-list-header>\n    <ion-item color="mediumLight" text-center>\n      <h2 class="text-bold">Promedio de materias</h2>\n    </ion-item>\n\n    <ion-list-header class="ph-10" no-margin>\n      <ion-badge class="custom-badge">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-6 no-padding>MATERIAS</ion-col>\n            <ion-col col-6 no-padding>PROMEDIO</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-badge>\n    </ion-list-header>\n    <ion-item class="fs-12">\n      <ion-grid no-padding>\n        <ion-row *ngFor="let materia of materias" class="mv-5">\n          <ion-col col-6 no-padding>{{ materia.materia }}</ion-col>\n          <ion-col col-6 no-padding class="text-center">{{ materia.promedio }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item color="mediumLight" text-center>\n      <h2 class="text-bold">Calificaciones</h2>\n    </ion-item>\n    <ion-item>\n      <ion-label>Filtrar por:</ion-label>\n      <ion-select>\n        <ion-option value="" selected>Seleccionar</ion-option>\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-list-header class="ph-10" no-margin>\n      <ion-badge class="custom-badge">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-4 no-padding>TIPO</ion-col>\n            <ion-col col-4 no-padding>MATERIAS</ion-col>\n            <ion-col col-4 no-padding>CALIFICACION</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-badge>\n    </ion-list-header>\n    <ion-item class="fs-12">\n      <ion-grid no-padding>\n        <ion-row *ngFor="let calificacion of calificaciones" class="mv-5">\n          <ion-col col-4 no-padding>{{ calificacion.tipo }}</ion-col>\n          <ion-col col-4 no-padding class="text-center">{{ calificacion.materia }}</ion-col>\n          <ion-col col-4 no-padding class="text-center">{{ calificacion.promedio }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item color="mediumLight" text-center>\n      <h2 class="text-bold">Comentarios del profesor</h2>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-avatar item-start>\n        <img src="./assets/icons/perfil.png" alt="perfil" style="width: 50px; height: 50px">\n      </ion-avatar>\n      <small>Nombre del profesor - 10 Jul. 2018</small>\n      <p>El niño no presenta interés en la clase. En el aula se la pasa conversando con los compañeros, y no muestra sentido de respeto hacia la docencia.</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Projects\tutores\src\pages\datos-estudiante\datos-estudiante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DatosEstudiantePage);
    return DatosEstudiantePage;
}());

//# sourceMappingURL=datos-estudiante.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map