(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-articles-articles-module~views-customers-customers-module~views-orders-orders-module~v~eb48a801"], {
    /***/
    "CzEO":
    /*!*******************************************************************!*\
      !*** ./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js ***!
      \*******************************************************************/

    /*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorBase, QuillEditorComponent, QuillModule, QuillService, QuillViewComponent, QuillViewHTMLComponent, defaultModules */

    /***/
    function CzEO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function () {
        return QUILL_CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorBase", function () {
        return QuillEditorBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function () {
        return QuillEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillModule", function () {
        return QuillModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillService", function () {
        return QuillService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewComponent", function () {
        return QuillViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponent", function () {
        return QuillViewHTMLComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultModules", function () {
        return defaultModules;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = [[["", "quill-editor-toolbar", ""]]];
      var _c1 = ["[quill-editor-toolbar]"];
      var defaultModules = {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
          header: 1
        }, {
          header: 2
        }], [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }], [{
          script: 'sub'
        }, {
          script: 'super'
        }], [{
          indent: '-1'
        }, {
          indent: '+1'
        }], [{
          direction: 'rtl'
        }], [{
          size: ['small', false, 'large', 'huge']
        }], [{
          header: [1, 2, 3, 4, 5, 6, false]
        }], [{
          color: []
        }, {
          background: []
        }], [{
          font: []
        }], [{
          align: []
        }], ['clean'], ['link', 'image', 'video'] // link and image, video
        ]
      };

      var getFormat = function getFormat(format, configFormat) {
        var passedFormat = format || configFormat;
        return passedFormat || 'html';
      };

      var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');

      var QuillService = /*#__PURE__*/function () {
        function QuillService(config) {
          _classCallCheck(this, QuillService);

          this.config = config;
          this.count = 0;

          if (!this.config) {
            this.config = {
              modules: defaultModules
            };
          }
        }

        _createClass(QuillService, [{
          key: "getQuill",
          value: function getQuill() {
            var _this = this;

            this.count++;

            if (!this.Quill && this.count === 1) {
              this.$importPromise = new Promise(function (resolve) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2 = this;

                  var _a, _b, quillImport;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return __webpack_require__.e(
                          /*! import() | quill */
                          "quill").then(__webpack_require__.t.bind(null,
                          /*! quill */
                          "kzlf", 7));

                        case 2:
                          quillImport = _context.sent;
                          this.Quill = quillImport["default"] ? quillImport["default"] : quillImport; // Only register custom options and modules once

                          (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                            var newCustomOption = _this2.Quill["import"](customOption["import"]);

                            newCustomOption.whitelist = customOption.whitelist;

                            _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                          });
                          (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                            var implementation = _ref.implementation,
                                path = _ref.path;

                            _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                          });
                          resolve(this.Quill);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            }

            return this.$importPromise;
          }
        }]);

        return QuillService;
      }();

      QuillService.ɵfac = function QuillService_Factory(t) {
        return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](QUILL_CONFIG_TOKEN));
      };

      QuillService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function QuillService_Factory() {
          return new QuillService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(QUILL_CONFIG_TOKEN));
        },
        token: QuillService,
        providedIn: "root"
      });

      QuillService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [QUILL_CONFIG_TOKEN]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [QUILL_CONFIG_TOKEN]
            }]
          }];
        }, null);
      })(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


      var QuillEditorBase = /*#__PURE__*/function () {
        function QuillEditorBase(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
          var _this3 = this;

          _classCallCheck(this, QuillEditorBase);

          this.elementRef = elementRef;
          this.domSanitizer = domSanitizer;
          this.doc = doc;
          this.platformId = platformId;
          this.renderer = renderer;
          this.zone = zone;
          this.service = service;
          this.required = false;
          this.customToolbarPosition = 'top';
          this.sanitize = false;
          this.styles = null;
          this.strict = true;
          this.customOptions = [];
          this.customModules = [];
          this.preserveWhitespace = false;
          this.trimOnValidation = false;
          this.compareValues = false;
          this.filterNull = false;
          this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.disabled = false; // used to store initial value before ViewInit

          this.valueGetter = function (quillEditor, editorElement) {
            var html = editorElement.querySelector('.ql-editor').innerHTML;

            if (html === '<p><br></p>' || html === '<div><br></div>') {
              html = null;
            }

            var modelValue = html;
            var format = getFormat(_this3.format, _this3.service.config.format);

            if (format === 'text') {
              modelValue = quillEditor.getText();
            } else if (format === 'object') {
              modelValue = quillEditor.getContents();
            } else if (format === 'json') {
              try {
                modelValue = JSON.stringify(quillEditor.getContents());
              } catch (e) {
                modelValue = quillEditor.getText();
              }
            }

            return modelValue;
          };

          this.valueSetter = function (quillEditor, value) {
            var format = getFormat(_this3.format, _this3.service.config.format);

            if (format === 'html') {
              if (_this3.sanitize) {
                value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
              }

              return quillEditor.clipboard.convert(value);
            } else if (format === 'json') {
              try {
                return JSON.parse(value);
              } catch (e) {
                return [{
                  insert: value
                }];
              }
            }

            return value;
          };

          this.selectionChangeHandler = function (range, oldRange, source) {
            var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

            if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
              return;
            }

            _this3.zone.run(function () {
              if (range === null) {
                _this3.onBlur.emit({
                  editor: _this3.quillEditor,
                  source: source
                });
              } else if (oldRange === null) {
                _this3.onFocus.emit({
                  editor: _this3.quillEditor,
                  source: source
                });
              }

              _this3.onSelectionChanged.emit({
                editor: _this3.quillEditor,
                oldRange: oldRange,
                range: range,
                source: source
              });

              if (shouldTriggerOnModelTouched) {
                _this3.onModelTouched();
              }
            });
          };

          this.textChangeHandler = function (delta, oldDelta, source) {
            // only emit changes emitted by user interactions
            var text = _this3.quillEditor.getText();

            var content = _this3.quillEditor.getContents();

            var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

            if (html === '<p><br></p>' || html === '<div><br></div>') {
              html = null;
            }

            var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
            var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

            if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
              return;
            }

            _this3.zone.run(function () {
              if (shouldTriggerOnModelChange) {
                _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
              }

              _this3.onContentChanged.emit({
                content: content,
                delta: delta,
                editor: _this3.quillEditor,
                html: html,
                oldDelta: oldDelta,
                source: source,
                text: text
              });
            });
          }; // eslint-disable-next-line max-len


          this.editorChangeHandler = function (event, current, old, source) {
            // only emit changes when there's any listener
            if (!_this3.onEditorChanged.observers.length) {
              return;
            } // only emit changes emitted by user interactions


            if (event === 'text-change') {
              var text = _this3.quillEditor.getText();

              var content = _this3.quillEditor.getContents();

              var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

              if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
              }

              _this3.zone.run(function () {
                _this3.onEditorChanged.emit({
                  content: content,
                  delta: current,
                  editor: _this3.quillEditor,
                  event: event,
                  html: html,
                  oldDelta: old,
                  source: source,
                  text: text
                });
              });
            } else {
              _this3.onEditorChanged.emit({
                editor: _this3.quillEditor,
                event: event,
                oldRange: old,
                range: current,
                source: source
              });
            }
          };
        }

        _createClass(QuillEditorBase, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, scrollingContainer, formats, format, newValue;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      _context2.next = 4;
                      return this.service.getQuill();

                    case 4:
                      Quill = _context2.sent;
                      this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                      toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                      modules = Object.assign({}, this.modules || this.service.config.modules);

                      if (toolbarElem) {
                        modules.toolbar = toolbarElem;
                      } else if (modules.toolbar === undefined) {
                        modules.toolbar = defaultModules.toolbar;
                      }

                      placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                      if (placeholder === undefined) {
                        placeholder = 'Insert text here ...';
                      }

                      if (this.styles) {
                        Object.keys(this.styles).forEach(function (key) {
                          _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                        });
                      }

                      if (this.classes) {
                        this.addClasses(this.classes);
                      }

                      this.customOptions.forEach(function (customOption) {
                        var newCustomOption = Quill["import"](customOption["import"]);
                        newCustomOption.whitelist = customOption.whitelist;
                        Quill.register(newCustomOption, true);
                      });
                      this.customModules.forEach(function (_ref2) {
                        var implementation = _ref2.implementation,
                            path = _ref2.path;
                        Quill.register(path, implementation);
                      });
                      bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                      if (!bounds) {
                        bounds = this.service.config.bounds ? this.service.config.bounds : this.doc.body;
                      }

                      debug = this.debug;

                      if (!debug && debug !== false && this.service.config.debug) {
                        debug = this.service.config.debug;
                      }

                      readOnly = this.readOnly;

                      if (!readOnly && this.readOnly !== false) {
                        readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                      }

                      scrollingContainer = this.scrollingContainer;

                      if (!scrollingContainer && this.scrollingContainer !== null) {
                        scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                      }

                      formats = this.formats;

                      if (!formats && formats === undefined) {
                        formats = this.service.config.formats ? _toConsumableArray(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                      }

                      this.zone.runOutsideAngular(function () {
                        var _a, _b, _c;

                        _this4.quillEditor = new Quill(_this4.editorElem, {
                          bounds: bounds,
                          debug: debug,
                          formats: formats,
                          modules: modules,
                          placeholder: placeholder,
                          readOnly: readOnly,
                          scrollingContainer: scrollingContainer,
                          strict: _this4.strict,
                          theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                        }); // Set optional link placeholder, Quill has no native API for it so using workaround

                        if (_this4.linkPlaceholder) {
                          var tooltip = (_b = (_a = _this4.quillEditor) === null || _a === void 0 ? void 0 : _a.theme) === null || _b === void 0 ? void 0 : _b.tooltip;
                          var input = (_c = tooltip === null || tooltip === void 0 ? void 0 : tooltip.root) === null || _c === void 0 ? void 0 : _c.querySelector('input[data-link]');

                          if (input === null || input === void 0 ? void 0 : input.dataset) {
                            input.dataset.link = _this4.linkPlaceholder;
                          }
                        }
                      });

                      if (this.content) {
                        format = getFormat(this.format, this.service.config.format);

                        if (format === 'text') {
                          this.quillEditor.setText(this.content, 'silent');
                        } else {
                          newValue = this.valueSetter(this.quillEditor, this.content);
                          this.quillEditor.setContents(newValue, 'silent');
                        }

                        this.quillEditor.getModule('history').clear();
                      } // initialize disabled status based on this.disabled as default value


                      this.setDisabledState(); // triggered if selection or text changed

                      this.quillEditor.on('editor-change', this.editorChangeHandler); // mark model as touched if editor lost focus

                      this.quillEditor.on('selection-change', this.selectionChangeHandler); // update model if text changes

                      this.quillEditor.on('text-change', this.textChangeHandler); // trigger created in a timeout to avoid changed models after checked
                      // if you are using the editor api in created output to change the editor content

                      setTimeout(function () {
                        if (_this4.onValidatorChanged) {
                          _this4.onValidatorChanged();
                        }

                        _this4.onEditorCreated.emit(_this4.quillEditor);
                      });

                    case 33:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.quillEditor) {
              this.quillEditor.off('selection-change', this.selectionChangeHandler);
              this.quillEditor.off('text-change', this.textChangeHandler);
              this.quillEditor.off('editor-change', this.editorChangeHandler);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this5 = this;

            if (!this.quillEditor) {
              return;
            }
            /* eslint-disable @typescript-eslint/dot-notation */


            if (changes.readOnly) {
              this.quillEditor.enable(!changes.readOnly.currentValue);
            }

            if (changes.placeholder) {
              this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
            }

            if (changes.styles) {
              var currentStyling = changes.styles.currentValue;
              var previousStyling = changes.styles.previousValue;

              if (previousStyling) {
                Object.keys(previousStyling).forEach(function (key) {
                  _this5.renderer.removeStyle(_this5.editorElem, key);
                });
              }

              if (currentStyling) {
                Object.keys(currentStyling).forEach(function (key) {
                  _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
                });
              }
            }

            if (changes.classes) {
              var currentClasses = changes.classes.currentValue;
              var previousClasses = changes.classes.previousValue;

              if (previousClasses) {
                this.removeClasses(previousClasses);
              }

              if (currentClasses) {
                this.addClasses(currentClasses);
              }
            }
            /* eslint-enable @typescript-eslint/dot-notation */

          }
        }, {
          key: "addClasses",
          value: function addClasses(classList) {
            var _this6 = this;

            QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
              _this6.renderer.addClass(_this6.editorElem, c);
            });
          }
        }, {
          key: "removeClasses",
          value: function removeClasses(classList) {
            var _this7 = this;

            QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
              _this7.renderer.removeClass(_this7.editorElem, c);
            });
          }
        }, {
          key: "writeValue",
          value: function writeValue(currentValue) {
            // optional fix for https://github.com/angular/angular/issues/14988
            if (this.filterNull && currentValue === null) {
              return;
            }

            this.content = currentValue;

            if (!this.quillEditor) {
              return;
            }

            var format = getFormat(this.format, this.service.config.format);
            var newValue = this.valueSetter(this.quillEditor, currentValue);

            if (this.compareValues) {
              var currentEditorValue = this.quillEditor.getContents();

              if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
                return;
              }
            }

            if (currentValue) {
              if (format === 'text') {
                this.quillEditor.setText(currentValue);
              } else {
                this.quillEditor.setContents(newValue);
              }

              return;
            }

            this.quillEditor.setText('');
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState() {
            var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
            // store initial value to set appropriate disabled status after ViewInit
            this.disabled = isDisabled;

            if (this.quillEditor) {
              if (isDisabled) {
                this.quillEditor.disable();
                this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
              } else {
                if (!this.readOnly) {
                  this.quillEditor.enable();
                }

                this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
              }
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onModelChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onModelTouched = fn;
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onValidatorChanged = fn;
          }
        }, {
          key: "validate",
          value: function validate() {
            if (!this.quillEditor) {
              return null;
            }

            var err = {};
            var valid = true;
            var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

            var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;

            if (this.minLength && textLength && textLength < this.minLength) {
              err.minLengthError = {
                given: textLength,
                minLength: this.minLength
              };
              valid = false;
            }

            if (this.maxLength && textLength > this.maxLength) {
              err.maxLengthError = {
                given: textLength,
                maxLength: this.maxLength
              };
              valid = false;
            }

            if (this.required && !textLength) {
              err.requiredError = {
                empty: true
              };
              valid = false;
            }

            return valid ? null : err;
          }
        }], [{
          key: "normalizeClassNames",
          value: function normalizeClassNames(classes) {
            var classList = classes.trim().split(' ');
            return classList.reduce(function (prev, cur) {
              var trimmed = cur.trim();

              if (trimmed) {
                prev.push(trimmed);
              }

              return prev;
            }, []);
          }
        }]);

        return QuillEditorBase;
      }();

      QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
        return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
      };

      QuillEditorBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: QuillEditorBase,
        inputs: {
          required: "required",
          customToolbarPosition: "customToolbarPosition",
          sanitize: "sanitize",
          styles: "styles",
          strict: "strict",
          customOptions: "customOptions",
          customModules: "customModules",
          preserveWhitespace: "preserveWhitespace",
          trimOnValidation: "trimOnValidation",
          compareValues: "compareValues",
          filterNull: "filterNull",
          valueGetter: "valueGetter",
          valueSetter: "valueSetter",
          format: "format",
          theme: "theme",
          modules: "modules",
          debug: "debug",
          readOnly: "readOnly",
          placeholder: "placeholder",
          maxLength: "maxLength",
          minLength: "minLength",
          formats: "formats",
          scrollingContainer: "scrollingContainer",
          bounds: "bounds",
          trackChanges: "trackChanges",
          classes: "classes",
          linkPlaceholder: "linkPlaceholder"
        },
        outputs: {
          onEditorCreated: "onEditorCreated",
          onEditorChanged: "onEditorChanged",
          onContentChanged: "onContentChanged",
          onSelectionChanged: "onSelectionChanged",
          onFocus: "onFocus",
          onBlur: "onBlur"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      QuillEditorBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: QuillService
        }];
      };

      QuillEditorBase.propDecorators = {
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        debug: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        formats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customToolbarPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sanitize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strict: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollingContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customModules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trackChanges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveWhitespace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trimOnValidation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        linkPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareValues: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filterNull: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onEditorCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onEditorChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onContentChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onSelectionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueGetter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        valueSetter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillEditorBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: QuillService
          }];
        }, {
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customToolbarPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sanitize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strict: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customModules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          preserveWhitespace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          trimOnValidation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          filterNull: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onEditorCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onEditorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onContentChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onSelectionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueGetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          valueSetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          modules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          readOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          formats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollingContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          trackChanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          linkPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
        _inherits(QuillEditorComponent, _QuillEditorBase);

        var _super = _createSuper(QuillEditorComponent);

        function QuillEditorComponent(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
          _classCallCheck(this, QuillEditorComponent);

          return _super.call(this, elementRef, domSanitizer, doc, platformId, renderer, zone, service);
        }

        return QuillEditorComponent;
      }(QuillEditorBase);

      QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
        return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
      };

      QuillEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QuillEditorComponent,
        selectors: [["quill-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          multi: true,
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return QuillEditorComponent;
          })
        }, {
          multi: true,
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return QuillEditorComponent;
          })
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        template: function QuillEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });

      QuillEditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
          }]
        }, {
          type: QuillService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [QuillService]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [{
              multi: true,
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return QuillEditorComponent;
              })
            }, {
              multi: true,
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return QuillEditorComponent;
              })
            }],
            selector: 'quill-editor',
            template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
            }]
          }, {
            type: QuillService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [QuillService]
            }]
          }];
        }, null);
      })();

      var QuillViewHTMLComponent = /*#__PURE__*/function () {
        function QuillViewHTMLComponent(sanitizer, service) {
          _classCallCheck(this, QuillViewHTMLComponent);

          this.sanitizer = sanitizer;
          this.service = service;
          this.content = '';
          this.innerHTML = '';
          this.themeClass = 'ql-snow';
        }

        _createClass(QuillViewHTMLComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.theme) {
              var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
              this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
            } else if (!this.theme) {
              var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

              this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
            }

            if (changes.content) {
              this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
            }
          }
        }]);

        return QuillViewHTMLComponent;
      }();

      QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
        return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
      };

      QuillViewHTMLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QuillViewHTMLComponent,
        selectors: [["quill-view-html"]],
        inputs: {
          content: "content",
          theme: "theme"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
        template: function QuillViewHTMLComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themeClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]],
        styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
        encapsulation: 2
      });

      QuillViewHTMLComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
          }]
        }, {
          type: QuillService
        }];
      };

      QuillViewHTMLComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'quill-view-html',
            template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n",
            styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
            }]
          }, {
            type: QuillService
          }];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var QuillViewComponent = /*#__PURE__*/function () {
        function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
          var _this8 = this;

          _classCallCheck(this, QuillViewComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.zone = zone;
          this.service = service;
          this.domSanitizer = domSanitizer;
          this.platformId = platformId;
          this.sanitize = false;
          this.strict = true;
          this.customModules = [];
          this.customOptions = [];
          this.preserveWhitespace = false;
          this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          this.valueSetter = function (quillEditor, value) {
            var format = getFormat(_this8.format, _this8.service.config.format);
            var content = value;

            if (format === 'text') {
              quillEditor.setText(content);
            } else {
              if (format === 'html') {
                if (_this8.sanitize) {
                  value = _this8.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
                }

                content = quillEditor.clipboard.convert(value);
              } else if (format === 'json') {
                try {
                  content = JSON.parse(value);
                } catch (e) {
                  content = [{
                    insert: value
                  }];
                }
              }

              quillEditor.setContents(content);
            }
          };
        }

        _createClass(QuillViewComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this.quillEditor) {
              return;
            }

            if (changes.content) {
              this.valueSetter(this.quillEditor, changes.content.currentValue);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var Quill, modules, debug, formats, theme;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      _context3.next = 4;
                      return this.service.getQuill();

                    case 4:
                      Quill = _context3.sent;
                      modules = Object.assign({}, this.modules || this.service.config.modules);
                      modules.toolbar = false;
                      this.customOptions.forEach(function (customOption) {
                        var newCustomOption = Quill["import"](customOption["import"]);
                        newCustomOption.whitelist = customOption.whitelist;
                        Quill.register(newCustomOption, true);
                      });
                      this.customModules.forEach(function (_ref3) {
                        var implementation = _ref3.implementation,
                            path = _ref3.path;
                        Quill.register(path, implementation);
                      });
                      debug = this.debug;

                      if (!debug && debug !== false && this.service.config.debug) {
                        debug = this.service.config.debug;
                      }

                      formats = this.formats;

                      if (!formats && formats === undefined) {
                        formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                      }

                      theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                      this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                      this.zone.runOutsideAngular(function () {
                        _this9.quillEditor = new Quill(_this9.editorElem, {
                          debug: debug,
                          formats: formats,
                          modules: modules,
                          readOnly: true,
                          strict: _this9.strict,
                          theme: theme
                        });
                      });
                      this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                      if (this.content) {
                        this.valueSetter(this.quillEditor, this.content);
                      } // trigger created in a timeout to avoid changed models after checked


                      setTimeout(function () {
                        _this9.onEditorCreated.emit(_this9.quillEditor);
                      });

                    case 20:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return QuillViewComponent;
      }();

      QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
        return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
      };

      QuillViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QuillViewComponent,
        selectors: [["quill-view"]],
        inputs: {
          sanitize: "sanitize",
          strict: "strict",
          customModules: "customModules",
          customOptions: "customOptions",
          preserveWhitespace: "preserveWhitespace",
          format: "format",
          theme: "theme",
          modules: "modules",
          debug: "debug",
          formats: "formats",
          content: "content"
        },
        outputs: {
          onEditorCreated: "onEditorCreated"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 0,
        vars: 0,
        template: function QuillViewComponent_Template(rf, ctx) {},
        styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
        encapsulation: 2
      });

      QuillViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: QuillService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      };

      QuillViewComponent.propDecorators = {
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        debug: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        formats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sanitize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strict: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customModules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveWhitespace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onEditorCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'quill-view',
            template: "\n",
            styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: QuillService
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }];
        }, {
          sanitize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strict: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customModules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          preserveWhitespace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onEditorCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          modules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          formats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var QuillModule = /*#__PURE__*/function () {
        function QuillModule() {
          _classCallCheck(this, QuillModule);
        }

        _createClass(QuillModule, null, [{
          key: "forRoot",
          value: function forRoot(config) {
            return {
              ngModule: QuillModule,
              providers: [{
                provide: QUILL_CONFIG_TOKEN,
                useValue: config
              }]
            };
          }
        }]);

        return QuillModule;
      }();

      QuillModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: QuillModule
      });
      QuillModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function QuillModule_Factory(t) {
          return new (t || QuillModule)();
        },
        providers: [QuillService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuillModule, {
          declarations: function declarations() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
            exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            providers: [QuillService]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-quill
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-quill.js.map

      /***/

    },

    /***/
    "Lm2G":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
      \*************************************************************************************************/

    /*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */

    /***/
    function Lm2G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
        return PagerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationConfig", function () {
        return PaginationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
        return PaginationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return PAGER_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return PAGINATION_CONTROL_VALUE_ACCESSOR;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Provides default values for Pagination and pager components
       */


      var _c0 = function _c0(a0, a1) {
        return {
          "pull-left": a0,
          "float-left": a1
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          "pull-right": a0,
          "float-right": a1
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          disabled: a0,
          currentPage: a1
        };
      };

      function PaginationComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selectPage(1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
        }
      }

      function PaginationComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.selectPage(ctx_r17.page - 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
        }
      }

      var _c3 = function _c3(a0, a1, a2) {
        return {
          disabled: a0,
          $implicit: a1,
          currentPage: a2
        };
      };

      function PaginationComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var pg_r19 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.selectPage(pg_r19.number, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pg_r19 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r2.disabled, pg_r19, ctx_r2.page));
        }
      }

      function PaginationComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.selectPage(ctx_r22.page + 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
        }
      }

      function PaginationComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.selectPage(ctx_r24.totalPages, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
        }
      }

      function PaginationComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var page_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
        }
      }

      function PaginationComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getText("next"));
        }
      }

      function PaginationComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getText("previous"));
        }
      }

      function PaginationComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText("first"));
        }
      }

      function PaginationComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getText("last"));
        }
      }

      var PaginationConfig = function PaginationConfig() {
        _classCallCheck(this, PaginationConfig);

        this.main = {
          maxSize: void 0,
          itemsPerPage: 10,
          boundaryLinks: false,
          directionLinks: true,
          firstText: 'First',
          previousText: 'Previous',
          nextText: 'Next',
          lastText: 'Last',
          pageBtnClass: '',
          rotate: true
        };
        this.pager = {
          itemsPerPage: 15,
          previousText: '« Previous',
          nextText: 'Next »',
          pageBtnClass: '',
          align: true
        };
      };

      PaginationConfig.ɵfac = function PaginationConfig_Factory(t) {
        return new (t || PaginationConfig)();
      };
      /** @nocollapse */


      PaginationConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PaginationConfig_Factory() {
          return new PaginationConfig();
        },
        token: PaginationConfig,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var PAGER_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return PagerComponent;
        }),
        multi: true
      };

      var PagerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} paginationConfig
         * @param {?} changeDetection
         */
        function PagerComponent(elementRef, paginationConfig, changeDetection) {
          _classCallCheck(this, PagerComponent);

          this.elementRef = elementRef;
          this.changeDetection = changeDetection;
          /**
           * fired when total pages count changes, $event:number equals to total pages count
           */

          this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired when page was changed, $event:{page, itemsPerPage} equals to
           * object with current page index and number of items per page
           */

          this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.inited = false;
          this._page = 1;
          this.elementRef = elementRef;

          if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
          }
        }
        /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */


        _createClass(PagerComponent, [{
          key: "itemsPerPage",
          get: function get() {
            return this._itemsPerPage;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * total number of items in all pages
           * @return {?}
           */

        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * @return {?}
           */

        }, {
          key: "totalPages",
          get: function get() {
            return this._totalPages;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalPages = v;
            this.numPages.emit(v);

            if (this.inited) {
              this.selectPage(this.page);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "page",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._page;
          }
          /**
           * @param {?} config
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();

            if (_previous === this._page || typeof _previous === 'undefined') {
              return;
            }

            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage
            });
          }
        }, {
          key: "configureOptions",
          value: function configureOptions(config) {
            this.config = Object.assign({}, config);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (typeof window !== 'undefined') {
              this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            } // watch for maxSize


            this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
            this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
            this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
            this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
            this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

            this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
            this.totalPages = this.calculateTotalPages(); // this class

            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
          }
          /**
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getText",
          value: function getText(key) {
            // tslint:disable-next-line:no-any
            return (
              /** @type {?} */
              this["".concat(key, "Text")] ||
              /** @type {?} */
              this.config["".concat(key, "Text")]
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "noPrevious",
          value: function noPrevious() {
            return this.page === 1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "noNext",
          value: function noNext() {
            return this.page === this.totalPages;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} page
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "selectPage",
          value: function selectPage(page, event) {
            if (event) {
              event.preventDefault();
            }

            if (!this.disabled) {
              if (event && event.target) {
                // tslint:disable-next-line:no-any

                /** @type {?} */
                var target = event.target;
                target.blur();
              }

              this.writeValue(page);
              this.onChange(this.page);
            }
          } // Create page object used in template

          /**
           * @protected
           * @param {?} num
           * @param {?} text
           * @param {?} active
           * @return {?}
           */

        }, {
          key: "makePage",
          value: function makePage(num, text, active) {
            return {
              text: text,
              number: num,
              active: active
            };
          }
          /**
           * @protected
           * @param {?} currentPage
           * @param {?} totalPages
           * @return {?}
           */

        }, {
          key: "getPages",
          value: function getPages(currentPage, totalPages) {
            /** @type {?} */
            var pages = []; // Default page limits

            /** @type {?} */

            var startPage = 1;
            /** @type {?} */

            var endPage = totalPages;
            /** @type {?} */

            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

            if (isMaxSized) {
              if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

                if (endPage > totalPages) {
                  endPage = totalPages;
                  startPage = endPage - this.maxSize + 1;
                }
              } else {
                // Visible pages are paginated with maxSize
                startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
              }
            } // Add page number links


            for (var num = startPage; num <= endPage; num++) {
              /** @type {?} */
              var page = this.makePage(num, num.toString(), num === currentPage);
              pages.push(page);
            } // Add links to move between page sets


            if (isMaxSized && !this.rotate) {
              if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
              }

              if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
              }
            }

            return pages;
          } // base class

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateTotalPages",
          value: function calculateTotalPages() {
            /** @type {?} */
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
          }
        }]);

        return PagerComponent;
      }();

      PagerComponent.ɵfac = function PagerComponent_Factory(t) {
        return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PagerComponent,
        selectors: [["pager"]],
        inputs: {
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
          maxSize: "maxSize",
          rotate: "rotate",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          pageBtnClass: "pageBtnClass",
          align: "align",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          disabled: "disabled"
        },
        outputs: {
          numPages: "numPages",
          pageChanged: "pageChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])],
        decls: 7,
        vars: 24,
        consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
        template: function PagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) {
              return ctx.selectPage(ctx.page - 1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) {
              return ctx.selectPage(ctx.page + 1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.align, ctx.align));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        encapsulation: 2
      });
      /** @nocollapse */

      PagerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      PagerComponent.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pager',
            template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
            providers: [PAGER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: PaginationConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function PageChangedEvent() {}

      if (false) {}
      /** @type {?} */


      var PAGINATION_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return PaginationComponent;
        }),
        multi: true
      };

      var PaginationComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} paginationConfig
         * @param {?} changeDetection
         */
        function PaginationComponent(elementRef, paginationConfig, changeDetection) {
          _classCallCheck(this, PaginationComponent);

          this.elementRef = elementRef;
          this.changeDetection = changeDetection;
          /**
           * fired when total pages count changes, $event:number equals to total pages count
           */

          this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired when page was changed, $event:{page, itemsPerPage} equals to object
           * with current page index and number of items per page
           */

          this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.inited = false;
          this._page = 1;
          this.elementRef = elementRef;

          if (!this.config) {
            this.configureOptions(paginationConfig.main);
          }
        }
        /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */


        _createClass(PaginationComponent, [{
          key: "itemsPerPage",
          get: function get() {
            return this._itemsPerPage;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * total number of items in all pages
           * @return {?}
           */

        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
          }
          /**
           * @return {?}
           */

        }, {
          key: "totalPages",
          get: function get() {
            return this._totalPages;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._totalPages = v;
            this.numPages.emit(v);

            if (this.inited) {
              this.selectPage(this.page);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "page",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._page;
          }
          /**
           * @param {?} config
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();

            if (_previous === this._page || typeof _previous === 'undefined') {
              return;
            }

            this.pageChanged.emit({
              page: this._page,
              itemsPerPage: this.itemsPerPage
            });
          }
        }, {
          key: "configureOptions",
          value: function configureOptions(config) {
            this.config = Object.assign({}, config);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (typeof window !== 'undefined') {
              this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            } // watch for maxSize


            this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
            this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
            this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
            this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
            this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

            this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
            this.totalPages = this.calculateTotalPages(); // this class

            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
          }
          /**
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getText",
          value: function getText(key) {
            // tslint:disable-next-line:no-any
            return (
              /** @type {?} */
              this["".concat(key, "Text")] ||
              /** @type {?} */
              this.config["".concat(key, "Text")]
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "noPrevious",
          value: function noPrevious() {
            return this.page === 1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "noNext",
          value: function noNext() {
            return this.page === this.totalPages;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} page
           * @param {?=} event
           * @return {?}
           */

        }, {
          key: "selectPage",
          value: function selectPage(page, event) {
            if (event) {
              event.preventDefault();
            }

            if (!this.disabled) {
              if (event && event.target) {
                // tslint:disable-next-line:no-any

                /** @type {?} */
                var target = event.target;
                target.blur();
              }

              this.writeValue(page);
              this.onChange(this.page);
            }
          } // Create page object used in template

          /**
           * @protected
           * @param {?} num
           * @param {?} text
           * @param {?} active
           * @return {?}
           */

        }, {
          key: "makePage",
          value: function makePage(num, text, active) {
            return {
              text: text,
              number: num,
              active: active
            };
          }
          /**
           * @protected
           * @param {?} currentPage
           * @param {?} totalPages
           * @return {?}
           */

        }, {
          key: "getPages",
          value: function getPages(currentPage, totalPages) {
            /** @type {?} */
            var pages = []; // Default page limits

            /** @type {?} */

            var startPage = 1;
            /** @type {?} */

            var endPage = totalPages;
            /** @type {?} */

            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

            if (isMaxSized) {
              if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

                if (endPage > totalPages) {
                  endPage = totalPages;
                  startPage = endPage - this.maxSize + 1;
                }
              } else {
                // Visible pages are paginated with maxSize
                startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
              }
            } // Add page number links


            for (var num = startPage; num <= endPage; num++) {
              /** @type {?} */
              var page = this.makePage(num, num.toString(), num === currentPage);
              pages.push(page);
            } // Add links to move between page sets


            if (isMaxSized && !this.rotate) {
              if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
              }

              if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
              }
            }

            return pages;
          } // base class

          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateTotalPages",
          value: function calculateTotalPages() {
            /** @type {?} */
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["pagination"]],
        inputs: {
          itemsPerPage: "itemsPerPage",
          totalItems: "totalItems",
          maxSize: "maxSize",
          rotate: "rotate",
          boundaryLinks: "boundaryLinks",
          directionLinks: "directionLinks",
          pageBtnClass: "pageBtnClass",
          align: "align",
          firstText: "firstText",
          previousText: "previousText",
          nextText: "nextText",
          lastText: "lastText",
          disabled: "disabled",
          customPageTemplate: "customPageTemplate",
          customNextTemplate: "customNextTemplate",
          customPreviousTemplate: "customPreviousTemplate",
          customFirstTemplate: "customFirstTemplate",
          customLastTemplate: "customLastTemplate"
        },
        outputs: {
          numPages: "numPages",
          pageChanged: "pageChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])],
        decls: 16,
        vars: 6,
        consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 7, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 10, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2
      });
      /** @nocollapse */

      PaginationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      PaginationComponent.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customPageTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customNextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customPreviousTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customFirstTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customLastTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination',
            template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
            providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: PaginationConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customPageTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customNextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customPreviousTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customFirstTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customLastTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PaginationModule = /*#__PURE__*/function () {
        function PaginationModule() {
          _classCallCheck(this, PaginationModule);
        }

        _createClass(PaginationModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: PaginationModule,
              providers: []
            };
          }
        }]);

        return PaginationModule;
      }();

      PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PaginationModule
      });
      PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PaginationModule_Factory(t) {
          return new (t || PaginationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, {
          declarations: function declarations() {
            return [PagerComponent, PaginationComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [PagerComponent, PaginationComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [PagerComponent, PaginationComponent],
            exports: [PagerComponent, PaginationComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-pagination.js.map

      /***/

    },

    /***/
    "dZIy":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js ***!
      \*********************************************************************************************/

    /*! exports provided: BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownModule, BsDropdownState, BsDropdownToggleDirective */

    /***/
    function dZIy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function () {
        return BsDropdownConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function () {
        return BsDropdownContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function () {
        return BsDropdownDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function () {
        return BsDropdownMenuDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function () {
        return BsDropdownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsDropdownState", function () {
        return BsDropdownState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function () {
        return BsDropdownToggleDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "3XJ7");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "lUod");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "WyaX");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Default dropdown configuration
       */


      var _c0 = ["*"];

      var BsDropdownConfig = function BsDropdownConfig() {
        _classCallCheck(this, BsDropdownConfig);

        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
        /**
         * default dropdown auto closing behavior
         */

        this.insideClick = false;
        /**
         * turn on/off animation
         */

        this.isAnimated = false;
      };

      BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(t) {
        return new (t || BsDropdownConfig)();
      };
      /** @nocollapse */


      BsDropdownConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function BsDropdownConfig_Factory() {
          return new BsDropdownConfig();
        },
        token: BsDropdownConfig,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BsDropdownState = function BsDropdownState() {
        var _this10 = this;

        _classCallCheck(this, BsDropdownState);

        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise(
        /**
        * @param {?} resolve
        * @return {?}
        */
        function (resolve) {
          _this10.resolveDropdownMenu = resolve;
        });
      };

      BsDropdownState.ɵfac = function BsDropdownState_Factory(t) {
        return new (t || BsDropdownState)();
      };

      BsDropdownState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BsDropdownState,
        factory: BsDropdownState.ɵfac
      });
      /** @nocollapse */

      BsDropdownState.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownState, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DROPDOWN_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
      /** @type {?} */

      var dropdownAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: 0,
        overflow: 'hidden'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(DROPDOWN_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*',
        overflow: 'hidden'
      }))];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var BsDropdownContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} _state
         * @param {?} cd
         * @param {?} _renderer
         * @param {?} _element
         * @param {?} _builder
         */
        function BsDropdownContainerComponent(_state, cd, _renderer, _element, _builder) {
          var _this11 = this;

          _classCallCheck(this, BsDropdownContainerComponent);

          this._state = _state;
          this.cd = cd;
          this._renderer = _renderer;
          this._element = _element;
          this.isOpen = false;
          this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
          this._subscription = _state.isOpenChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this11.isOpen = value;
            /** @type {?} */

            var dropdown = _this11._element.nativeElement.querySelector('.dropdown-menu');

            _this11._renderer.addClass(_this11._element.nativeElement.querySelector('div'), 'open');

            if (dropdown && !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()) {
              _this11._renderer.addClass(dropdown, 'show');

              if (dropdown.classList.contains('dropdown-menu-right')) {
                _this11._renderer.setStyle(dropdown, 'left', 'auto');

                _this11._renderer.setStyle(dropdown, 'right', '0');
              }

              if (_this11.direction === 'up') {
                _this11._renderer.setStyle(dropdown, 'top', 'auto');

                _this11._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
              }
            }

            if (dropdown && _this11._state.isAnimated) {
              _this11._factoryDropDownAnimation.create(dropdown).play();
            }

            _this11.cd.markForCheck();

            _this11.cd.detectChanges();
          });
        }
        /**
         * @return {?}
         */


        _createClass(BsDropdownContainerComponent, [{
          key: "direction",
          get: function get() {
            return this._state.direction;
          }
          /**
           * \@internal
           * @param {?} el
           * @return {?}
           */

        }, {
          key: "_contains",
          value: function _contains(el) {
            return this._element.nativeElement.contains(el);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscription.unsubscribe();
          }
        }]);

        return BsDropdownContainerComponent;
      }();

      BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(t) {
        return new (t || BsDropdownContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]));
      };

      BsDropdownContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BsDropdownContainerComponent,
        selectors: [["bs-dropdown-container"]],
        hostAttrs: [2, "display", "block", "position", "absolute", "z-index", "1040"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 8,
        template: function BsDropdownContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropup", ctx.direction === "up")("dropdown", ctx.direction === "down")("show", ctx.isOpen)("open", ctx.isOpen);
          }
        },
        directives: function directives() {
          return [BsDropdownDirective];
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      BsDropdownContainerComponent.ctorParameters = function () {
        return [{
          type: BsDropdownState
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bs-dropdown-container',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              style: 'display:block;position: absolute;z-index: 1040'
            },
            template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: BsDropdownState
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BsDropdownDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} _renderer
         * @param {?} _viewContainerRef
         * @param {?} _cis
         * @param {?} _state
         * @param {?} _config
         * @param {?} _builder
         */
        function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
          _classCallCheck(this, BsDropdownDirective);

          this._elementRef = _elementRef;
          this._renderer = _renderer;
          this._viewContainerRef = _viewContainerRef;
          this._cis = _cis;
          this._state = _state;
          this._config = _config; // todo: move to component loader

          this._isInlineOpen = false;
          this._subscriptions = [];
          this._isInited = false; // set initial dropdown state from config

          this._state.autoClose = this._config.autoClose;
          this._state.insideClick = this._config.insideClick;
          this._state.isAnimated = this._config.isAnimated;
          this._factoryDropDownAnimation = _builder.build(dropdownAnimation); // create dropdown component loader

          this._dropdown = this._cis.createLoader(this._elementRef, this._viewContainerRef, this._renderer).provide({
            provide: BsDropdownState,
            useValue: this._state
          });
          this.onShown = this._dropdown.onShown;
          this.onHidden = this._dropdown.onHidden;
          this.isOpenChange = this._state.isOpenChange;
        }
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */


        _createClass(BsDropdownDirective, [{
          key: "autoClose",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._state.autoClose;
          }
          /**
           * Indicates that dropdown will be animated
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._state.autoClose = value;
          }
        }, {
          key: "isAnimated",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._state.isAnimated;
          }
          /**
           * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._state.isAnimated = value;
          }
        }, {
          key: "insideClick",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._state.insideClick;
          }
          /**
           * Disables dropdown toggle and hides dropdown menu if opened
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._state.insideClick = value;
          }
        }, {
          key: "isDisabled",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._isDisabled;
          }
          /**
           * Returns whether or not the popover is currently being shown
           * @return {?}
           */
          ,
          set: function set(value) {
            this._isDisabled = value;

            this._state.isDisabledChange.emit(value);

            if (value) {
              this.hide();
            }
          }
        }, {
          key: "isOpen",
          get: function get() {
            if (this._showInline) {
              return this._isInlineOpen;
            }

            return this._dropdown.isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value) {
              this.show();
            } else {
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "isBs4",
          get: function get() {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_showInline",
          get: function get() {
            return !this.container;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
              return;
            }

            this._isInited = true; // attach DOM listeners

            this._dropdown.listen({
              // because of dropdown inline mode
              outsideClick: false,
              triggers: this.triggers,
              show:
              /**
              * @return {?}
              */
              function show() {
                return _this12.show();
              }
            }); // toggle visibility on toggle element click


            this._subscriptions.push(this._state.toggleClick.subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this12.toggle(value);
            })); // hide dropdown if set disabled while opened


            this._subscriptions.push(this._state.isDisabledChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return value;
            })).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this12.hide();
            }));
          }
          /**
           * Opens an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this13 = this;

            if (this.isOpen || this.isDisabled) {
              return;
            }

            if (this._showInline) {
              if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(
                /**
                * @param {?} dropdownMenu
                * @return {?}
                */
                function (dropdownMenu) {
                  _this13._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);

                  _this13._inlinedMenu = _this13._dropdown._inlineViewRef;

                  _this13.addBs4Polyfills();

                  _this13._renderer.addClass(_this13._inlinedMenu.rootNodes[0].parentNode, 'open');

                  _this13.playAnimation();
                }) // swallow errors
                ["catch"]();
              }

              this.addBs4Polyfills();
              this._isInlineOpen = true;
              this.onShown.emit(true);

              this._state.isOpenChange.emit(true);

              this.playAnimation();
              return;
            }

            this._state.dropdownMenu.then(
            /**
            * @param {?} dropdownMenu
            * @return {?}
            */
            function (dropdownMenu) {
              // check direction in which dropdown should be opened

              /** @type {?} */
              var _dropup = _this13.dropup || typeof _this13.dropup !== 'undefined' && _this13.dropup;

              _this13._state.direction = _dropup ? 'up' : 'down';
              /** @type {?} */

              var _placement = _this13.placement || (_dropup ? 'top start' : 'bottom start'); // show dropdown


              _this13._dropdown.attach(BsDropdownContainerComponent).to(_this13.container).position({
                attachment: _placement
              }).show({
                content: dropdownMenu.templateRef,
                placement: _placement
              });

              _this13._state.isOpenChange.emit(true);
            }) // swallow error
            ["catch"]();
          }
          /**
           * Closes an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            if (!this.isOpen) {
              return;
            }

            if (this._showInline) {
              this.removeShowClass();
              this.removeDropupStyles();
              this._isInlineOpen = false;
              this.onHidden.emit(true);
            } else {
              this._dropdown.hide();
            }

            this._state.isOpenChange.emit(false);
          }
          /**
           * Toggles an element’s popover. This is considered a “manual” triggering of
           * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
           * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle(value) {
            if (this.isOpen || !value) {
              return this.hide();
            }

            return this.show();
          }
          /**
           * \@internal
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_contains",
          value: function _contains(event) {
            return this._elementRef.nativeElement.contains(event.target) || this._dropdown.instance && this._dropdown.instance._contains(event.target);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // clean up subscriptions and destroy dropdown
            var _iterator = _createForOfIteratorHelper(this._subscriptions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sub = _step.value;
                sub.unsubscribe();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this._dropdown.dispose();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "addBs4Polyfills",
          value: function addBs4Polyfills() {
            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()) {
              this.addShowClass();
              this.checkRightAlignment();
              this.addDropupStyles();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "playAnimation",
          value: function playAnimation() {
            var _this14 = this;

            if (this._state.isAnimated && this._inlinedMenu) {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this14._factoryDropDownAnimation.create(_this14._inlinedMenu.rootNodes[0]).play();
              });
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "addShowClass",
          value: function addShowClass() {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
              this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "removeShowClass",
          value: function removeShowClass() {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
              this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "checkRightAlignment",
          value: function checkRightAlignment() {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
              /** @type {?} */
              var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');

              this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');

              this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "addDropupStyles",
          value: function addDropupStyles() {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
              // a little hack to not break support of bootstrap 4 beta
              this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');

              this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');

              this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "removeDropupStyles",
          value: function removeDropupStyles() {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
              this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');

              this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');

              this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
            }
          }
        }]);

        return BsDropdownDirective;
      }();

      BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) {
        return new (t || BsDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]));
      };

      BsDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BsDropdownDirective,
        selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]],
        hostVars: 6,
        hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen && ctx.isBs4);
          }
        },
        inputs: {
          autoClose: "autoClose",
          isAnimated: "isAnimated",
          insideClick: "insideClick",
          isDisabled: "isDisabled",
          isOpen: "isOpen",
          placement: "placement",
          triggers: "triggers",
          container: "container",
          dropup: "dropup"
        },
        outputs: {
          onShown: "onShown",
          onHidden: "onHidden",
          isOpenChange: "isOpenChange"
        },
        exportAs: ["bs-dropdown"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([BsDropdownState])]
      });
      /** @nocollapse */

      BsDropdownDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }, {
          type: BsDropdownState
        }, {
          type: BsDropdownConfig
        }, {
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]
        }];
      };

      BsDropdownDirective.propDecorators = {
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        insideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[bsDropdown],[dropdown]',
            exportAs: 'bs-dropdown',
            providers: [BsDropdownState],
            host: {
              '[class.dropup]': 'dropup',
              '[class.open]': 'isOpen',
              '[class.show]': 'isOpen && isBs4'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
          }, {
            type: BsDropdownState
          }, {
            type: BsDropdownConfig
          }, {
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]
          }];
        }, {
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          autoClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          insideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BsDropdownMenuDirective = // tslint:disable:no-any

      /**
       * @param {?} _state
       * @param {?} _viewContainer
       * @param {?} _templateRef
       */
      function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _classCallCheck(this, BsDropdownMenuDirective);

        _state.resolveDropdownMenu({
          templateRef: _templateRef,
          viewContainer: _viewContainer
        });
      };

      BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) {
        return new (t || BsDropdownMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      BsDropdownMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BsDropdownMenuDirective,
        selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]],
        exportAs: ["bs-dropdown-menu"]
      });
      /** @nocollapse */

      BsDropdownMenuDirective.ctorParameters = function () {
        return [{
          type: BsDropdownState
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownMenuDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[bsDropdownMenu],[dropdownMenu]',
            exportAs: 'bs-dropdown-menu'
          }]
        }], function () {
          return [{
            type: BsDropdownState
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BsDropdownToggleDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _changeDetectorRef
         * @param {?} _dropdown
         * @param {?} _element
         * @param {?} _renderer
         * @param {?} _state
         */
        function BsDropdownToggleDirective(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
          var _this15 = this;

          _classCallCheck(this, BsDropdownToggleDirective);

          this._changeDetectorRef = _changeDetectorRef;
          this._dropdown = _dropdown;
          this._element = _element;
          this._renderer = _renderer;
          this._state = _state;
          this.isDisabled = null;
          this._subscriptions = []; // sync is open value with state

          this._subscriptions.push(this._state.isOpenChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this15.isOpen = value;

            if (value) {
              _this15._documentClickListener = _this15._renderer.listen('document', 'click',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                if (_this15._state.autoClose && event.button !== 2 && !_this15._element.nativeElement.contains(event.target) && !(_this15._state.insideClick && _this15._dropdown._contains(event))) {
                  _this15._state.toggleClick.emit(false);

                  _this15._changeDetectorRef.detectChanges();
                }
              });
              _this15._escKeyUpListener = _this15._renderer.listen(_this15._element.nativeElement, 'keyup.esc',
              /**
              * @return {?}
              */
              function () {
                if (_this15._state.autoClose) {
                  _this15._state.toggleClick.emit(false);

                  _this15._changeDetectorRef.detectChanges();
                }
              });
            } else {
              _this15._documentClickListener();

              _this15._escKeyUpListener();
            }
          })); // populate disabled state


          this._subscriptions.push(this._state.isDisabledChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this15.isDisabled = value || null;
          }));
        }
        /**
         * @return {?}
         */


        _createClass(BsDropdownToggleDirective, [{
          key: "onClick",
          value: function onClick() {
            if (this.isDisabled) {
              return;
            }

            this._state.toggleClick.emit(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._documentClickListener) {
              this._documentClickListener();
            }

            if (this._escKeyUpListener) {
              this._escKeyUpListener();
            }

            var _iterator2 = _createForOfIteratorHelper(this._subscriptions),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var sub = _step2.value;
                sub.unsubscribe();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }]);

        return BsDropdownToggleDirective;
      }();

      BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) {
        return new (t || BsDropdownToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState));
      };

      BsDropdownToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BsDropdownToggleDirective,
        selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]],
        hostVars: 3,
        hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsDropdownToggleDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
          }
        },
        exportAs: ["bs-dropdown-toggle"]
      });
      /** @nocollapse */

      BsDropdownToggleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: BsDropdownDirective
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: BsDropdownState
        }];
      };

      BsDropdownToggleDirective.propDecorators = {
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.disabled']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-expanded']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', []]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownToggleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[bsDropdownToggle],[dropdownToggle]',
            exportAs: 'bs-dropdown-toggle',
            host: {
              '[attr.aria-haspopup]': 'true'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: BsDropdownDirective
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: BsDropdownState
          }];
        }, {
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.disabled']
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-expanded']
          }],

          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', []]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var BsDropdownModule = /*#__PURE__*/function () {
        function BsDropdownModule() {
          _classCallCheck(this, BsDropdownModule);
        }

        _createClass(BsDropdownModule, null, [{
          key: "forRoot",
          value: // tslint:disable-next-line:no-any

          /**
           * @param {?=} config
           * @return {?}
           */
          function forRoot(config) {
            return {
              ngModule: BsDropdownModule,
              providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"], BsDropdownState]
            };
          }
        }]);

        return BsDropdownModule;
      }();

      BsDropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BsDropdownModule
      });
      BsDropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BsDropdownModule_Factory(t) {
          return new (t || BsDropdownModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsDropdownModule, {
          declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
          exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
            exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective],
            entryComponents: [BsDropdownContainerComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-dropdown.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-articles-articles-module~views-customers-customers-module~views-orders-orders-module~v~eb48a801-es5.js.map