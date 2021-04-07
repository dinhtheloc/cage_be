(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+UbM":
    /*!******************************************************!*\
      !*** ./src/app/services/helper/error.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function UbM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb"); // tslint:disable-next-line:import-blacklist
      // import { throwError } from 'rxjs/internal/observable/throwError';


      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(toastr) {
          _classCallCheck(this, ErrorInterceptor);

          this.toastr = toastr;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (err.status === 401) {
                localStorage.removeItem('token');
                location.reload(true);
              }

              var errorMsg = err.error ? err.error : '';

              _this.toastr.error(errorMsg); // err.errorMsg = err.error.error || err.error.message || err.statusText;


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/lap12865/Desktop/cage/cage_blog/admin-web/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 2,
        vars: 0,
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9Wvp":
    /*!****************************************************!*\
      !*** ./src/app/services/guard/permission.guard.ts ***!
      \****************************************************/

    /*! exports provided: PermissionGuard */

    /***/
    function Wvp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionGuard", function () {
        return PermissionGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth/authentication.service */
      "JVRy");

      var PermissionGuard = /*#__PURE__*/function () {
        function PermissionGuard(router, authenticationService) {
          _classCallCheck(this, PermissionGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(PermissionGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var data = route.data["function"];

            if (data) {
              var _this$authenticationS;

              if (!(_this$authenticationS = this.authenticationService).hasPermissions.apply(_this$authenticationS, _toConsumableArray(data))) {
                this.router.navigateByUrl('/403');
                return false;
              }
            }

            return true;
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(route) {
            return true;
          }
        }]);

        return PermissionGuard;
      }();

      PermissionGuard.ɵfac = function PermissionGuard_Factory(t) {
        return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      PermissionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PermissionGuard,
        factory: PermissionGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        urlApi: 'http://localhost:3001'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D8Mh":
    /*!*************************************************!*\
      !*** ./src/app/components/nav/nav.component.ts ***!
      \*************************************************/

    /*! exports provided: NavComponent */

    /***/
    function D8Mh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent(router) {
          _classCallCheck(this, NavComponent);

          this.router = router;
          this.isCollapsed = false;
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 68,
        vars: 6,
        consts: [["id", "sidebarMenu", 1, "sidebar", "d-md-block", "bg-primary", "text-white", "collapse", "px-4"], [1, "sidebar-sticky", "pt-4", "mx-auto"], [1, "user-card", "d-flex", "align-items-center", "justify-content-between", "justify-content-md-center", "pb-4"], [1, "d-flex", "align-items-center"], [1, "user-avatar", "lg-avatar", "mr-4"], ["src", "/assets/img/blackLogo.svg", "alt", "xing beauty logo", 1, "card-img-top"], [1, "d-block"], [1, "h6"], ["href", "#", 1, "btn", "btn-secondary", "btn-xs", 3, "click"], [1, "mr-2"], [1, "fas", "fa-sign-out-alt"], [1, "collapse-close", "d-md-none"], ["href", "#sidebarMenu", "data-toggle", "collapse", "data-target", "#sidebarMenu", "aria-controls", "sidebarMenu", "aria-expanded", "true", "aria-label", "Toggle navigation", 1, "fas", "fa-times"], [1, "nav", "flex-column", "mt-4"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/dashboard", 1, "nav-link"], [1, "sidebar-icon"], [1, "fas", "fa-chart-pie"], ["routerLink", "/articles", 1, "nav-link"], [1, "far", "fa-newspaper"], [1, "nav-item"], ["aria-controls", "collapseBasic", 1, "nav-link", "d-flex", "justify-content-between", "align-items-center", "collapsed", 3, "click"], [1, "fas", "fa-boxes"], [1, "fas", "fa-chevron-right"], ["id", "collapseBasic", 1, "multi-level", "collapse", 3, "collapse", "isAnimated"], [1, "flex-column", "nav"], ["routerLink", "/products", 1, "nav-link"], ["routerLink", "/images", 1, "nav-link"], [1, "fas", "fa-tablet-alt"], ["routerLink", "/customers", 1, "nav-link"], [1, "fas", "fa-users"], ["routerLink", "/orders", 1, "nav-link"], [1, "fas", "fa-hand-holding-usd"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi, Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_9_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Qu\u1EA3n l\xFD b\xE0i vi\u1EBFt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_29_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Danh m\u1EE5c");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lo\u1EA1i h\xE0ng h\xF3a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "S\u1EA3n ph\u1EA9m");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Qu\u1EA3n l\xFD h\xECnh \u1EA3nh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Qu\u1EA3n l\xFD kh\xE1ch h\xE0ng");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Qu\u1EA3n l\xFD h\xF3a \u0111\u01A1n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("link-arrow ", !ctx.isCollapsed ? "rotate" : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed)("isAnimated", true);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__["CollapseDirective"]],
        styles: [".rotate[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transition: all 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm90YXRlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EuaB":
    /*!****************************************************!*\
      !*** ./src/app/services/helper/jwt.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function EuaB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/constant */
      "OFCM");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor() {
          _classCallCheck(this, JwtInterceptor);
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with jwt token if available
            var tk = localStorage.getItem(_shared_constant__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].TOKEN);

            if (tk) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer " + tk
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)();
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "JVRy":
    /*!*********************************************************!*\
      !*** ./src/app/services/auth/authentication.service.ts ***!
      \*********************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function JVRy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/constant */
      "OFCM");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http, router) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.router = router;
          this.permission = {};

          if (Object.keys(this.permission).length === 0) {
            this.checkFunctions();
          }
        }

        _createClass(AuthenticationService, [{
          key: "isLogin",
          value: function isLogin() {
            if (localStorage.getItem(_shared_constant__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].TOKEN)) {
              return true;
            }

            return false;
          }
        }, {
          key: "checkFunctions",
          value: function checkFunctions() {
            var _this2 = this;

            var functions = this.getFunctions();

            if (functions) {
              functions.map(function (item) {
                if (item.code) {
                  _this2.permission[item.code] = true;
                }
              });
            }
          }
        }, {
          key: "hasPermissions",
          value: function hasPermissions() {
            var self = this;

            for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
              keys[_key] = arguments[_key];
            }

            return keys.some(function (value, index, arr) {
              if (self.permission[value]) {
                return true;
              }

              return false;
            });
          }
        }, {
          key: "getFunctions",
          value: function getFunctions() {
            var functions = localStorage.getItem(_shared_constant__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].FUNCTION_KEY);

            if (functions && functions !== 'undefined' && functions.length > 0) {
              return JSON.parse(functions);
            }

            return undefined;
          }
        }, {
          key: "setFunctionLocalStorage",
          value: function setFunctionLocalStorage(functions) {// localStorage.setItem(AppSettings.FUNCTION_KEY, JSON.stringify(functions));
          }
        }, {
          key: "logout",
          value: function logout() {// this.authenApiService.logout().subscribe(
            //   resp => {
            //     this.router.navigate(['login']);
            //     this.clearLocalStorage();
            //     // window.location.href = environment.LOGOUTO365_URL + encodeURIComponent(environment.LOGOUT_REDIRECT_URL);
            //   },
            //   error => {
            //     this.router.navigate(['login']);
            //     this.clearLocalStorage();
            //     // window.location.href = environment.LOGOUTO365_URL + encodeURIComponent(environment.LOGOUT_REDIRECT_URL);
            //   }
            // );
          }
        }, {
          key: "clearLocalStorage",
          value: function clearLocalStorage() {
            localStorage.removeItem(_shared_constant__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].TOKEN);
            localStorage.removeItem(_shared_constant__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].USERTYPE_KEY);
            localStorage.removeItem(_shared_constant__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].USERNAME_KEY);
            localStorage.removeItem(_shared_constant__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].FUNCTION_KEY);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 24,
        vars: 0,
        consts: [[1, "footer", "section", "py-5"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-lg-6", "mb-4", "mb-lg-0"], [1, "mb-0", "text-center", "text-xl-left"], [1, "current-year"], ["href", "https://themesberg.com", "target", "_blank", 1, "text-primary", "font-weight-normal"], [1, "col-12", "col-lg-6"], [1, "list-inline", "list-group-flush", "list-group-borderless", "text-center", "text-xl-right", "mb-0"], [1, "list-inline-item", "px-0", "px-sm-2"], ["href", "https://themesberg.com/about"], ["href", "https://themesberg.com/themes"], ["href", "https://themesberg.com/blog"], ["href", "https://themesberg.com/contact"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Copyright \xA9 2019-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Themesberg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Themes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "OFCM":
    /*!************************************!*\
      !*** ./src/app/shared/constant.ts ***!
      \************************************/

    /*! exports provided: AppSettings, EXTENSION_CODES, internalVNGFACode */

    /***/
    function OFCM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTENSION_CODES", function () {
        return EXTENSION_CODES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "internalVNGFACode", function () {
        return internalVNGFACode;
      });

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);
      };

      AppSettings.PAGE_SIZE = 30;
      AppSettings.PAGE_SIZE_ALL = 999;
      AppSettings.PAGE_SIZE_ALL_NEW = 10000;
      AppSettings.MAX_ES_VALUE = 100000;
      AppSettings.TOKEN = 'token';
      AppSettings.USERTYPE_KEY = 'usertype';
      AppSettings.USERNAME_KEY = 'username';
      AppSettings.FUNCTION_KEY = 'functions';
      AppSettings.itemsPerPageList = [10, 30, 50, 100];
      AppSettings.PDF_ICON_URL = '/assets/img/icon-pdf-download-red.png';
      AppSettings.FILE_ICON_URL = '/assets/img/file.png'; // tslint:disable-next-line:max-line-length

      AppSettings.LEGAL_IMG_URL = '/assets/img/legal-image.jpg';
      AppSettings.CHILL_IMG_URL = '/assets/img/signature/stampZion-ChiLL.png';
      AppSettings.THUYVTT_IMG_URL = '/assets/img/signature/stampZion-ThuyVTTpng';
      AppSettings.LINHTTC_IMG_URL = '/assets/img/signature/stampZion-LinhTTC.png';
      AppSettings.ZIP_ICON_URL = '/assets/img/icon-zip.jpg';
      AppSettings.NOIMGAE_URL = '/assets/img/noimage.png';
      AppSettings.listPMC = [{
        id: '36',
        name: 'Thẻ Visa/Master Card/JCB'
      }, {
        id: '37',
        name: 'Tài Khoản Ngân Hàng'
      }, {
        id: '38',
        name: 'TK Zalo Pay'
      }, {
        id: '39',
        name: 'Thẻ ATM'
      }, {
        id: '41',
        name: 'Thẻ Visa/Master Debit'
      }];
      AppSettings.miniModeInitialValue = true;
      var EXTENSION_CODES = {
        doc: 'application/msword',
        dot: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        docm: 'application/vnd.ms-word.document.macroEnabled.12',
        dotm: 'application/vnd.ms-word.template.macroEnabled.12',
        xls: 'application/vnd.ms-excel',
        xlt: 'application/vnd.ms-excel',
        xla: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        xlsm: 'application/vnd.ms-excel.sheet.macroEnabled.12',
        xltm: 'application/vnd.ms-excel.template.macroEnabled.12',
        xlam: 'application/vnd.ms-excel.addin.macroEnabled.12',
        xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
        ppt: 'application/vnd.ms-powerpoint',
        pot: 'application/vnd.ms-powerpoint',
        pps: 'application/vnd.ms-powerpoint',
        ppa: 'application/vnd.ms-powerpoint',
        pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        potx: 'application/vnd.openxmlformats-officedocument.presentationml.template',
        ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        ppam: 'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        pptm: 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        potm: 'application/vnd.ms-powerpoint.template.macroEnabled.12',
        ppsm: 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
        pdf: 'application/pdf'
      };
      var internalVNGFACode = ['1483', '23889', '23890', '39063', '28874']; // Kiểu string, nhớ convert rồi hãy so sánh

      /***/
    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(http, router) {
          _classCallCheck(this, LoginComponent);

          this.http = http;
          this.router = router;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });

          if (localStorage.getItem('token')) {
            this.router.navigate(['/']);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi, "/auth/login-bo");
            var body = {
              password: this.loginForm.value.password
            };
            this.http.post(url, body, {}).subscribe(function (res) {
              // tslint:disable-next-line:no-string-literal
              localStorage.setItem('token', res['token']);

              _this3.router.navigate(['/']);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 24,
        vars: 1,
        consts: [[1, "vh-100", "bg-soft", "d-flex", "align-items-center"], [1, "container"], ["data-background", "assets/img/signin.svg", 1, "row", "justify-content-center", "form-bg-image", 2, "background-image", "url(assets/img/signin.svg)"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "signin-inner", "mt-3", "mt-lg-0", "bg-white", "shadow-soft", "border", "border-light", "rounded", "p-4", "p-lg-5", "w-100", "fmxw-500"], [1, "text-center", "text-md-center", "mb-4", "mt-md-0"], [1, "mb-3", "h3"], [1, "text-gray"], [1, "mt-5", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-unlock-alt"], ["placeholder", "Password", "type", "password", "formControlName", "password", 1, "form-control"], [1, "input-group-append"], [1, "far", "fa-eye"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in to our platform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Use your credentials to access your account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QlPV":
    /*!**********************************************!*\
      !*** ./src/app/views/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function QlPV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 0,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/shared.service */
      "zuHl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-lottie */
      "DPnb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(sharedService) {
          _classCallCheck(this, AppComponent);

          this.sharedService = sharedService;
          this.title = 'admin-tool';
          this.options = {
            loop: false,
            autoplay: false,
            path: '/assets/json/confetti.json'
          };
          this.isHide = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            // subscribe receives the value.
            this.sharedService.activeConfetti.subscribe(function () {
              _this4.play();
            });
          }
        }, {
          key: "play",
          value: function play() {
            this.isHide = false;
            this.svgConfetti.goToAndPlay(0, true);
          }
        }, {
          key: "complete",
          value: function complete(animationItem) {
            this.isHide = true;
          }
        }, {
          key: "animationCreated",
          value: function animationCreated(animationItem) {
            this.svgConfetti = animationItem;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 4,
        consts: [[3, "options", "complete", "animationCreated"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-lottie", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("complete", function AppComponent_Template_ng_lottie_complete_1_listener($event) {
              return ctx.complete($event);
            })("animationCreated", function AppComponent_Template_ng_lottie_animationCreated_1_listener($event) {
              return ctx.animationCreated($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("svg ", ctx.isHide ? "hide" : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ngx_lottie__WEBPACK_IMPORTED_MODULE_3__["LottieComponent"]],
        styles: [".svg[_ngcontent-%COMP%] {\n  width: 300px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2ZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: playerFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "playerFactory", function () {
        return playerFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/helper/error.interceptor */
      "+UbM");
      /* harmony import */


      var _services_helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/helper/jwt.interceptor */
      "EuaB");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/home/home.component */
      "QlPV");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layout/admin-layout/admin-layout.component */
      "o9f7");
      /* harmony import */


      var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/nav/nav.component */
      "D8Mh");
      /* harmony import */


      var _services_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/guard/auth.guard */
      "j7IX");
      /* harmony import */


      var _services_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/guard/permission.guard */
      "9Wvp");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var ngx_lottie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-lottie */
      "DPnb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      function playerFactory() {
        return __webpack_require__.e(
        /*! import() | lottie-web */
        "lottie-web").then(__webpack_require__.t.bind(null,
        /*! lottie-web */
        "lPHp", 7));
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _services_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["PermissionGuard"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _services_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _services_helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_18__["LottieModule"].forRoot({
          player: playerFactory
        }), ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__["CollapseModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_18__["LottieModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__["CollapseModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_18__["LottieModule"].forRoot({
              player: playerFactory
            }), ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__["CollapseModule"].forRoot()],
            providers: [_services_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _services_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["PermissionGuard"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _services_helper_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _services_helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "j7IX":
    /*!**********************************************!*\
      !*** ./src/app/services/guard/auth.guard.ts ***!
      \**********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function j7IX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem('token')) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "o9f7":
    /*!***************************************************************!*\
      !*** ./src/app/layout/admin-layout/admin-layout.component.ts ***!
      \***************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function o9f7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/nav/nav.component */
      "D8Mh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      "LmEr");

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
        return new (t || AdminLayoutComponent)();
      };

      AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminLayoutComponent,
        selectors: [["app-admin-layout"]],
        decls: 7,
        vars: 0,
        consts: [[1, "container-fluid", "bg-soft"], [1, "row"], [1, "col-12"], [1, "content"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-layout',
            templateUrl: './admin-layout.component.html',
            styleUrls: ['./admin-layout.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout/admin-layout/admin-layout.component */
      "o9f7");
      /* harmony import */


      var _services_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/guard/auth.guard */
      "j7IX");

      var routes = [{
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: '',
        component: _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        children: [{
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-dashboard-dashboard-module */
            [__webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~53146d1b"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~3cf6ee57"), __webpack_require__.e("default~views-customers-customers-module~views-dashboard-dashboard-module~views-orders-orders-module"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'articles',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-articles-articles-module */
            [__webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~53146d1b"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-images-images-module~v~61922231"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~3cf6ee57"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-orders-orders-module~v~eb48a801"), __webpack_require__.e("views-articles-articles-module")]).then(__webpack_require__.bind(null,
            /*! ./views/articles/articles.module */
            "BPpf")).then(function (m) {
              return m.ArticlesModule;
            });
          }
        }, {
          path: 'products',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-products-products-module */
            [__webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~53146d1b"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-images-images-module~v~61922231"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~3cf6ee57"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-orders-orders-module~v~eb48a801"), __webpack_require__.e("views-products-products-module")]).then(__webpack_require__.bind(null,
            /*! ./views/products/products.module */
            "tzx7")).then(function (m) {
              return m.ProductsModule;
            });
          }
        }, {
          path: 'images',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-images-images-module */
            [__webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~53146d1b"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-images-images-module~v~61922231"), __webpack_require__.e("views-images-images-module")]).then(__webpack_require__.bind(null,
            /*! ./views/images/images.module */
            "UkhU")).then(function (m) {
              return m.ImagesModule;
            });
          }
        }, {
          path: 'customers',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-customers-customers-module */
            [__webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~53146d1b"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-images-images-module~v~61922231"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~3cf6ee57"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-orders-orders-module~v~eb48a801"), __webpack_require__.e("default~views-customers-customers-module~views-dashboard-dashboard-module~views-orders-orders-module"), __webpack_require__.e("views-customers-customers-module")]).then(__webpack_require__.bind(null,
            /*! ./views/customers/customers.module */
            "lFAq")).then(function (m) {
              return m.CustomersModule;
            });
          }
        }, {
          path: 'orders',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-orders-orders-module */
            [__webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~53146d1b"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-images-images-module~v~61922231"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-dashboard-dashboard-mo~3cf6ee57"), __webpack_require__.e("default~views-articles-articles-module~views-customers-customers-module~views-orders-orders-module~v~eb48a801"), __webpack_require__.e("default~views-customers-customers-module~views-dashboard-dashboard-module~views-orders-orders-module"), __webpack_require__.e("views-orders-orders-module")]).then(__webpack_require__.bind(null,
            /*! ./views/orders/orders.module */
            "lpX+")).then(function (m) {
              return m.OrdersModule;
            });
          }
        }],
        canActivate: [_services_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zuHl":
    /*!********************************************!*\
      !*** ./src/app/services/shared.service.ts ***!
      \********************************************/

    /*! exports provided: SharedService */

    /***/
    function zuHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // @Injectable makes to available services in root level.


      var SharedService = function SharedService() {
        _classCallCheck(this, SharedService);

        this.activeConfetti = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      };

      SharedService.ɵfac = function SharedService_Factory(t) {
        return new (t || SharedService)();
      };

      SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SharedService,
        factory: SharedService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map