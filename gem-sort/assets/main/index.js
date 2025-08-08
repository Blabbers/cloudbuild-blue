System.register("chunks:///_virtual/Action.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5fe2cvoUotHiID7b0idGzK7", "Action", undefined);
      var ccclass = _decorator.ccclass;
      var Action = exports('Action', (_dec = ccclass('Action'), _dec(_class = /*#__PURE__*/function () {
        function Action() {
          this._listeners = [];
        }
        var _proto = Action.prototype;
        // Add a listener
        _proto.addListener = function addListener(callback) {
          this._listeners.push(callback);
        }

        // Remove a listener
        ;

        _proto.removeListener = function removeListener(callback) {
          var index = this._listeners.indexOf(callback);
          if (index >= 0) {
            this._listeners.splice(index, 1);
          }
        }

        // Invoke all listeners
        ;

        _proto.invoke = function invoke(data) {
          this._listeners.forEach(function (callback) {
            return callback(data);
          });
        };
        return Action;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArrayUtils.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e860dkQNvBKoLGX9hI5lilB", "ArrayUtils", undefined);
      /**
       * Removes an specific element of the array that matches item. It can be a reference or a value, and if there are multiple copies of it, it will only remove the first one. If the item is not found, nothing happens.
       * @param item element to remove from the array.
       */
      Array.prototype.remove = function (item) {
        var index = this.indexOf(item);
        if (index > -1) {
          this.splice(index, 1);
        }
      };

      /**
       * Checks if the array contains an specific element.
       * @param item element to checked on the array.
       */
      Array.prototype.contains = function (item) {
        var index = this.indexOf(item);
        return index > -1;
      };

      /**
       * Clears an array without losing reference to the array
       */
      Array.prototype.clear = function () {
        this.length = 0;
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AsyncCommand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Command.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Command;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Command = module.Command;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7c4ecurdZpKxLBvjTsWyRf8", "AsyncCommand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AsyncCommand = exports('AsyncCommand', (_dec = ccclass('AsyncCommand'), _dec(_class = (_class2 = /*#__PURE__*/function (_Command) {
        _inheritsLoose(AsyncCommand, _Command);
        function AsyncCommand() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Command.call.apply(_Command, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "duration", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waitUntilFinished", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        return AsyncCommand;
      }(Command), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waitUntilFinished", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Singleton.ts', './Game.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, AudioSource, Component, director, Director, Singleton, Game;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Component = module.Component;
      director = module.director;
      Director = module.Director;
    }, null, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      Game = module.Game;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "14ccdp0335NRrDCo3XRSzZD", "AudioController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioController = exports('AudioController', (_dec = ccclass('AudioController'), _dec2 = property({
        type: [AudioClip]
      }), _dec3 = property({
        type: AudioSource
      }), _dec4 = property({
        type: AudioSource
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioController, _Component);
        function AudioController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //
          _initializerDefineProperty(_this, "musicTracks", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicSource", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameplaySource", _descriptor3, _assertThisInitialized(_this));
          _this.currentTrackIndex = 0;
          _this.originalMusicVolume = 0;
          return _this;
        }
        var _proto = AudioController.prototype;
        _proto.onLoad = function onLoad() {
          Singleton.set(this);
        };
        _proto.start = function start() {
          this.originalMusicVolume = this.musicSource.volume;
        };
        _proto.playMusic = function playMusic() {
          var _this2 = this;
          if (this.musicTracks.length === 0 || !this.musicSource) return;
          this.musicSource.clip = this.musicTracks[this.currentTrackIndex];
          this.musicSource.play();
          this.musicSource.node.once(AudioSource.EventType.ENDED, function () {
            _this2.currentTrackIndex = (_this2.currentTrackIndex + 1) % _this2.musicTracks.length;
            _this2.playMusic();
          });
        };
        _proto.playSFX = function playSFX(clip, volume) {
          if (this.gameplaySource) {
            this.gameplaySource.playOneShot(clip, volume);
          }
        };
        _proto.fadeMusicVolume = function fadeMusicVolume(targetVolume, fadeDuration) {
          var _this3 = this;
          if (fadeDuration === void 0) {
            fadeDuration = 0.5;
          }
          if (!this.musicSource) return;
          var initialVolume = this.musicSource.volume;
          var volumeChange = targetVolume - initialVolume;
          var elapsedTime = 0;
          var updateVolume = function updateVolume() {
            elapsedTime += Game.deltaTime;
            var progress = Math.min(elapsedTime / fadeDuration, 1);
            _this3.musicSource.volume = initialVolume + volumeChange * progress;
            if (progress < 1) {
              director.once(Director.EVENT_AFTER_UPDATE, updateVolume);
            }
          };
          updateVolume();
        };
        _proto.resetMusicVolume = function resetMusicVolume() {
          this.fadeMusicVolume(this.originalMusicVolume, 1.0);
        };
        return AudioController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicTracks", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "musicSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameplaySource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BundleLoad2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Texture2D, assetManager, JsonAsset, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      assetManager = module.assetManager;
      JsonAsset = module.JsonAsset;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "104bdtyBtRBz75hx6sbcjAK", "BundleLoad2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BundleLoad2 = exports('BundleLoad2', (_dec = ccclass('BundleLoad2'), _dec2 = property(SpriteFrame), _dec3 = property(Texture2D), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BundleLoad2, _Component);
        function BundleLoad2() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spriteComponent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "texture1", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BundleLoad2.prototype;
        _proto.start = function start() {
          this.testLoadLanguage();
        };
        _proto.testLoadLanguage = function testLoadLanguage() {
          var bundleName = 'bundle1'; // Name of the bundle
          var jsonPath = 'language'; // Path within the bundle without the .json extension

          // Load the bundle
          assetManager.loadBundle(bundleName, function (err, bundle) {
            if (err) {
              console.error('Failed to load bundle:', err);
              return;
            }
            console.log('Bundle loaded successfully:', bundleName);

            // Load the JSON file from the bundle
            bundle.load(jsonPath, JsonAsset, function (err, jsonAsset) {
              if (err) {
                console.error('Failed to load JSON file:', err);
                return;
              }
              console.log('JSON file loaded successfully:', jsonPath);

              // Assuming the JSON file is loaded as a JsonAsset
              var languageData = jsonAsset.json;
              console.log('Loaded language data:', languageData);
            });
          });
        };
        return BundleLoad2;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteComponent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "texture1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BundleLoadTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, assetManager, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      assetManager = module.assetManager;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2e1e3oxpKRDDJ1q+mxIrI93", "BundleLoadTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BundleLoadTest = exports('BundleLoadTest', (_dec = ccclass('BundleLoadTest'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BundleLoadTest, _Component);
        function BundleLoadTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mySprite", _descriptor, _assertThisInitialized(_this));
          _this.cachedBundle = null;
          return _this;
        }
        var _proto = BundleLoadTest.prototype;
        _proto.start = function start() {
          this.loadBundle('bundle1', this.onBundleLoaded.bind(this));
        };
        _proto.loadBundle = function loadBundle(bundleName, callback) {
          var _this2 = this;
          if (this.cachedBundle) {
            callback(null, this.cachedBundle);
            return;
          }
          assetManager.loadBundle(bundleName, function (err, bundle) {
            if (!err) {
              _this2.cachedBundle = bundle;
            }
            callback(err, bundle);
          });
        };
        _proto.onBundleLoaded = function onBundleLoaded(err, bundle) {
          if (err) {
            console.error("Failed to load bundle: " + err);
            return;
          }
          console.log("Bundle loaded successfully: " + bundle.name);
          // You can now use the cached bundle
          this.loadSprite(this.cachedBundle);
        };
        _proto.loadSprite = function loadSprite(bundle) {
          var _this3 = this;
          var spritePath = 'loaded';
          bundle.load(spritePath, SpriteFrame, function (err, spriteFrame) {
            if (err) {
              console.error(err);
              return;
            }
            _this3.mySprite = spriteFrame;
            console.log("Sprite loaded successfully: " + spriteFrame.name);
          });
        };
        return BundleLoadTest;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mySprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraUtils.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, view, Vec2, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b923anvDUZJPrVykZaTCJsH", "CameraUtils", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CameraUtils = exports('CameraUtils', (_dec = ccclass('CameraUtils'), _dec(_class = /*#__PURE__*/function () {
        function CameraUtils() {}
        CameraUtils.worldToUIPosition = function worldToUIPosition(target, cam, canvas, offsetX, offsetY) {
          var visibleSize = view.getVisibleSize();
          var screenRes = new Vec2();
          screenRes.set(visibleSize.width, visibleSize.height);
          var worldPosition = target.worldPosition;
          var screenPosition = cam.worldToScreen(worldPosition);
          var relativePos = this.convertToRelativeResolution(screenPosition, screenRes);
          var finalPosition = canvas.convertToNodeSpaceAR(new Vec3(relativePos.x, relativePos.y, 0));
          return finalPosition;
        };
        CameraUtils.convertToRelativeResolution = function convertToRelativeResolution(screenPosition, screenRes) {
          //This works for editor, but in browser only works for scaling down
          var viewportWidth = view.getViewportRect().width; // e.g., 1024 (scaled down due to zoom)
          var viewportHeight = view.getViewportRect().height; // e.g., 576 (scaled down due to zoom)

          // Convert screen position to percentage
          var screenPercentageX = screenPosition.x / viewportWidth;
          var screenPercentageY = screenPosition.y / viewportHeight;
          var converted = new Vec2(screenPercentageX * screenRes.x, screenPercentageY * screenRes.y);
          return converted;
        };
        return CameraUtils;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClassScanner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommandDecorator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, registeredUserClasses;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      registeredUserClasses = module.registeredUserClasses;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1616bqXCy9Pz5pqh03W+F1t", "ClassScanner", undefined);
      // import { WaitCommand } from '../../blabbers-modules/command-sequence/commands/WaitCommand';
      // import { TweenPositionCommand } from '../../blabbers-modules/command-sequence/commands/TweenPositionCommand';
      // import { TweenScaleCommand } from '../../blabbers-modules/command-sequence/commands/TweenScaleCommand';
      // import { SetActiveCommand } from '../../blabbers-modules/command-sequence/commands/SetActiveCommand';
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ClassScanner = exports('ClassScanner', (_dec = ccclass('ClassScanner'), _dec2 = property({
        multiline: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClassScanner, _Component);
        function ClassScanner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "test", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        //
        ClassScanner.getAllClasses = function getAllClasses() {
          var classNames = registeredUserClasses.map(function (c) {
            return c.name;
          });
          console.log("User-Defined CCClasses:", classNames);
          return classNames;
        };
        var _proto = ClassScanner.prototype;
        _proto.otherTests = function otherTests() {
          // For testing in the editor
          this.test = '';
          /*var getallClasses = ClassScanner.getAllClasses();
          getallClasses.map(c => c).forEach(element => {
              if(js.getClassByName(element) == WaitCommand) {
                  console.log('ESSE SIM EH WaitCommand');
              }
              this.test += element + '\n';
           });*/

          // For testing in the editor
          /*const allClasses = getClassesForPolymorphism();
          allClasses.forEach(element => {
              if(element instanceof WaitCommand) {
                  console.log('ESSE EH WaitCommand');
              }
              console.log(element);
              this.test += element + '\n';
          });*/

          //this.test = allClasses.toString();
          /*
          this.test = '';
          allClasses.map(c => c).forEach(element => {
              this.test += element + ' \n\n ';
           });*/
        };

        _proto.start = function start() {
          // For testing in preview mode
          ClassScanner.getAllClasses();
        };
        _createClass(ClassScanner, [{
          key: "pressButtonToTest",
          get: function get() {
            return false;
          },
          set: function set(v) {
            console.log('-----------Testing registration-----------');
            // Log the initial state
            console.log('Current registeredUserClasses length:', registeredUserClasses.length);
            console.log('Registered class names:', registeredUserClasses.map(function (c) {
              return c.name;
            }));

            // Test each command
            // [WaitCommand, SetActiveCommand, TweenScaleCommand, TweenPositionCommand].forEach(cmd => {
            //     // Try both name and reference comparison
            //     const byRef = registeredUserClasses.find(c => c.classRef === cmd);
            //     const byName = registeredUserClasses.find(c => c.name === cmd.name);

            //     console.log(`Class "${cmd.name}":`, {
            //         registeredByRef: !!byRef,
            //         registeredByName: !!byName,
            //         classId: js.getClassId(cmd),
            //         constructor: !!cmd,
            //         matchingClass: byName?.classRef === cmd
            //     });
            // });
          }
        }]);

        return ClassScanner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "test", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "pressButtonToTest", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "pressButtonToTest"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ComboController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './HexGridController.ts', './HexSlot.ts', './TurnController.ts', './ObjectivesController.ts', './LevelAsset.ts', './Singleton.ts', './Wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, HexGridController, HexSlot, TurnController, ObjectivesController, ObjectiveType, Singleton, Wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, null, function (module) {
      HexGridController = module.HexGridController;
    }, function (module) {
      HexSlot = module.HexSlot;
    }, function (module) {
      TurnController = module.TurnController;
    }, function (module) {
      ObjectivesController = module.ObjectivesController;
    }, function (module) {
      ObjectiveType = module.ObjectiveType;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      Wait = module.Wait;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "51869EpMABNO6OWaNZjuue2", "ComboController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ComboController = exports('ComboController', (_dec = ccclass('ComboController'), _dec2 = property(), _dec3 = property({
        type: Boolean,
        group: 'Runtime'
      }), _dec4 = property({
        type: [HexSlot],
        group: 'Runtime'
      }), _dec5 = property({
        type: [Number],
        group: 'Runtime'
      }), _dec6 = property({
        type: HexGridController,
        group: 'Runtime'
      }), _dec7 = property({
        type: TurnController,
        group: 'Runtime'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ComboController, _Component);
        function ComboController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "refreshDelay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isRunningDelay", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towers", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scores", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hexGrid", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turnControl", _descriptor6, _assertThisInitialized(_this));
          _this.refreshPromise = null;
          // Store the async operation
          _this.isCanceled = false;
          return _this;
        }
        var _proto = ComboController.prototype;
        // Flag to cancel the operation
        //#endregion
        _proto.initialize = function initialize() {
          Singleton.set(this);
          this.hexGrid = Singleton.get(HexGridController);
          this.turnControl = Singleton.get(TurnController);
          this.refreshPromise = null;
        };
        _proto.updateTowers = function updateTowers(towers) {
          console.log("ComboController.updateTowers()");
          this.towers = towers;
          if (this.towers.length == 0) return;

          // Cancel any ongoing refresh operation
          this.cancelRefresh();

          // Start a new refresh operation
          this.refreshPromise = this.waitToRefreshTowers();
        };
        _proto.delayTowerExplosion = function delayTowerExplosion() {
          if (!this.refreshPromise) {
            return;
          }
          console.log("ComboController.delayTowerExplosion()");
          this.cancelRefresh(); // Cancel any ongoing refresh operation

          // Start a new refresh operation
          this.refreshPromise = this.waitToRefreshTowers();
        };
        _proto.cancelTowerExplosion = function cancelTowerExplosion() {
          if (!this.refreshPromise) {
            return;
          }
          console.log("ComboController.delayTowerExplosion()");
          this.cancelRefresh(); // Cancel any ongoing refresh operation
        };

        _proto.waitToRefreshTowers = /*#__PURE__*/function () {
          var _waitToRefreshTowers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("ComboController.waitToRefreshTowers()");
                  this.isCanceled = false; // Reset the cancel flag
                  this.isRunningDelay = true;
                  _context.next = 5;
                  return Wait.seconds(this.refreshDelay);
                case 5:
                  if (!this.isCanceled) {
                    _context.next = 8;
                    break;
                  }
                  console.log("ComboController.waitToRefreshTowers() canceled.");
                  return _context.abrupt("return");
                case 8:
                  console.log("ComboController.waitToRefreshTowers() explodeTowers() " + this.towers.length);
                  this.explodeTowers();
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function waitToRefreshTowers() {
            return _waitToRefreshTowers.apply(this, arguments);
          }
          return waitToRefreshTowers;
        }();
        _proto.cancelRefresh = function cancelRefresh() {
          if (this.refreshPromise) {
            console.log("ComboController.cancelRefresh()");
            this.isCanceled = true; // Set the cancel flag
            this.refreshPromise = null; // Clear the stored promise
            this.isRunningDelay = false;
          }
        };
        _proto.explodeTowers = function explodeTowers() {
          var _this2 = this;
          if (this.towers.length == 0) return;
          console.log("ComboController.explodeTowers() " + this.towers.length);
          //Remove towers from the sortingList
          this.turnControl.explodeAnimationStarted();
          for (var i = 0; i < this.towers.length; i++) {
            var tower = this.towers[i].getTopStack();
            this.scores.push(tower.amount);
          }
          this.towers[0].explodeTower(function () {
            return _this2.afterTowersExploded();
          });
          for (var _i = 1; _i < this.towers.length; _i++) {
            this.towers[_i].explodeTower(null);
          }
        };
        _proto.afterTowersExploded = function afterTowersExploded() {
          console.log("ComboController.afterTowersExploded() CALLBACK");
          for (var i = 0; i < this.towers.length; i++) {
            Singleton.get(ObjectivesController).addObjectiveProgress(ObjectiveType.MergePieces, this.scores[i]);
          }
          this.scores.clear();

          //Check the grid again
          if (this.towers.length > 0) Singleton.get(TurnController).checkMovementAroundSlot(this.towers[0]);
          this.towers.clear();
        };
        return ComboController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "refreshDelay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isRunningDelay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "towers", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scores", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hexGrid", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "turnControl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Command.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "24864ztrjhM4L5FRYrkdL3F", "Command", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CommandType = exports('CommandType', /*#__PURE__*/function (CommandType) {
        CommandType[CommandType["Immediate"] = 0] = "Immediate";
        CommandType[CommandType["Async"] = 1] = "Async";
        return CommandType;
      }({})); // Commands that run asynchronously or in parallel
      //Condition,  // Commands that involve conditions (to be implemented in the future)
      var Command = exports('Command', (_dec = ccclass('Command'), _dec(_class = /*#__PURE__*/function () {
        function Command() {}
        _createClass(Command, [{
          key: "commandType",
          get: function get() {
            return CommandType.Immediate;
          }
        }]);
        return Command;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CommandDecorator.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, js;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      js = module.js;
    }],
    execute: function () {
      exports('commandclass', commandclass);
      cclegacy._RF.push({}, "97e5aQyJFNBbqPcLylVDOB9", "CommandDecorator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //TODO: Ta dando quase tudo certo... Vou soh seguir finalizando o CommandSequence em si MESMO.
      // Mas o que ta faltando eh (e talvez eu nao consiga resolver):
      // - Fazer as classes que usam o decorator de commandclass serem salvas no editor, como uma lista de string
      // - O polymorphism.ts hoje JA CONSEGUE ler uma lista de strings no lugar de uma lista de types (pode ser um OU outro) e isso ja FUNCIONA
      // - Mas a lista de classes em si (registeredUserClasses) nao salva no editor por uma questão de editor time mesmo, e execution order etc etc...
      // - Entao talvez uma possivel solucao seria salvar num ScriptableAsset e talvez criar um Singleton de scriptable asset e pegar esse asset e salvar as strings nele e carregar dele lol
      // ---> Mas pode dar errado, entao vou deixar isso pra DEPOIS e soh finalizar a CommandSequence mesmo.

      // Make sure the array is initialized before use
      var registeredUserClasses = exports('registeredUserClasses', []);

      // Custom ccclass decorator to track user-defined classes
      function commandclass(className) {
        // Initialize array if it doesn't exist
        if (!registeredUserClasses) {
          registeredUserClasses = exports('registeredUserClasses', []);
        }
        return function (constructor) {
          console.log("Registering class \"" + className + "\"...");
          try {
            var _ccclass = _decorator.ccclass;
            if (!_ccclass) {
              throw new Error('ccclass decorator not available');
            }

            // Apply ccclass decorator first
            _ccclass(className)(constructor);

            // Then register our class
            if (!registeredUserClasses.some(function (c) {
              return c.name === className;
            })) {
              registeredUserClasses.push({
                name: className,
                classRef: constructor
              });
              console.log("Successfully registered \"" + className + "\"");
              console.log("Class ID after registration:", js.getClassId(constructor));
            }
            return constructor;
          } catch (error) {
            console.error("Failed to register \"" + className + "\":", error);
            return constructor;
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CommandSequence.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './WaitCommand.ts', './TweenPositionCommand.ts', './TweenScaleCommand.ts', './Command.ts', './SetActiveCommand.ts', './AsyncCommand.ts', './Polymorphism.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Enum, Component, WaitCommand, TweenPositionCommand, TweenScaleCommand, Command, SetActiveCommand, AsyncCommand, polymorphism;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Component = module.Component;
    }, null, function (module) {
      WaitCommand = module.WaitCommand;
    }, function (module) {
      TweenPositionCommand = module.TweenPositionCommand;
    }, function (module) {
      TweenScaleCommand = module.TweenScaleCommand;
    }, function (module) {
      Command = module.Command;
    }, function (module) {
      SetActiveCommand = module.SetActiveCommand;
    }, function (module) {
      AsyncCommand = module.AsyncCommand;
    }, function (module) {
      polymorphism = module.polymorphism;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "16c8263f3xLNaRBL7e4S3EP", "CommandSequence", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executionOrder = _decorator.executionOrder;
      var CommandWrapper = (_dec = ccclass('CommandWrapper'), _dec2 = executionOrder(1000), _dec3 = property({
        displayName: 'Properties'
      }), _dec4 = polymorphism({
        baseClass: Command,
        //types: ['TweenPositionCommand','TweenScaleCommand','WaitCommand','SetActiveCommand',],
        //types: getClassesForPolymorphism(),
        types: [TweenPositionCommand, TweenScaleCommand, WaitCommand, SetActiveCommand]
      }), _dec(_class = _dec2(_class = (_class2 = function CommandWrapper() {
        _initializerDefineProperty(this, "command", _descriptor, this);
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "command", [_dec3, _dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new WaitCommand();
        }
      }), _class2)) || _class) || _class);
      var AddSequenceOptions = exports('AddSequenceOptions', /*#__PURE__*/function (AddSequenceOptions) {
        AddSequenceOptions[AddSequenceOptions["None"] = 0] = "None";
        AddSequenceOptions[AddSequenceOptions["AddNewCommand"] = 1] = "AddNewCommand";
        AddSequenceOptions[AddSequenceOptions["RemoveLastCommand"] = 2] = "RemoveLastCommand";
        return AddSequenceOptions;
      }({}));
      var CommandSequence = exports('CommandSequence', (_dec5 = ccclass('CommandSequence'), _dec6 = executionOrder(1001), _dec7 = property({
        type: [CommandWrapper]
      }), _dec8 = property({
        type: Enum(AddSequenceOptions)
      }), _dec5(_class4 = _dec6(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CommandSequence, _Component);
        function CommandSequence() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playOnEnable", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sequence", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CommandSequence.prototype;
        _proto.onEnable = function onEnable() {
          if (this.playOnEnable) {
            this.playSequence();
          }
        }

        // Play all commands in the sequence
        ;

        _proto.playSequence = /*#__PURE__*/
        function () {
          var _playSequence = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _iterator, _step, wrapper;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _iterator = _createForOfIteratorHelperLoose(this.sequence);
                case 1:
                  if ((_step = _iterator()).done) {
                    _context.next = 11;
                    break;
                  }
                  wrapper = _step.value;
                  if (!(wrapper.command instanceof AsyncCommand && wrapper.command.waitUntilFinished)) {
                    _context.next = 8;
                    break;
                  }
                  _context.next = 6;
                  return wrapper.command.execute();
                case 6:
                  _context.next = 9;
                  break;
                case 8:
                  wrapper.command.execute();
                case 9:
                  _context.next = 1;
                  break;
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playSequence() {
            return _playSequence.apply(this, arguments);
          }
          return playSequence;
        }();
        _createClass(CommandSequence, [{
          key: "Action",
          get: function get() {
            return AddSequenceOptions.None;
          },
          set: function set(value) {
            switch (value) {
              case AddSequenceOptions.AddNewCommand:
                var wrapper = new CommandWrapper();
                wrapper.command = new WaitCommand();
                this.sequence.push(wrapper);
                console.log("New command added");
                break;
              case AddSequenceOptions.RemoveLastCommand:
                this.sequence.pop();
                console.log("Last command removed");
                break;
            }
          }
        }]);
        return CommandSequence;
      }(Component), (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "playOnEnable", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "sequence", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new CommandWrapper()];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "Action", [_dec8], Object.getOwnPropertyDescriptor(_class5.prototype, "Action"), _class5.prototype)), _class5)) || _class4) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DragDropComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './HexSlot.ts', './RaycastUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, Layers, Vec3, director, Component, HexSlot, RaycastUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      Layers = module.Layers;
      Vec3 = module.Vec3;
      director = module.director;
      Component = module.Component;
    }, null, function (module) {
      HexSlot = module.HexSlot;
    }, function (module) {
      RaycastUtils = module.RaycastUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "7b98exEyKxJurhZ8bHxd1Hn", "DragDropComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DragDropMode = exports('DragDropMode', /*#__PURE__*/function (DragDropMode) {
        DragDropMode[DragDropMode["Disabled"] = 0] = "Disabled";
        DragDropMode[DragDropMode["Drag"] = 1] = "Drag";
        DragDropMode[DragDropMode["Drop"] = 2] = "Drop";
        DragDropMode[DragDropMode["Clickable"] = 3] = "Clickable";
        return DragDropMode;
      }({}));
      var DragDropComponent = exports('DragDropComponent', (_dec = ccclass('DragDropComponent'), _dec2 = property({
        type: Enum(DragDropMode),
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: HexSlot,
        group: 'Components'
      }), _dec6 = property({
        type: Layers.Enum,
        group: {
          name: "Layers"
        }
      }), _dec7 = property({
        type: Layers.Enum,
        group: {
          name: "Layers"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DragDropComponent, _Component);
        function DragDropComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variable
          _initializerDefineProperty(_this, "currentMode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isSelected", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentSlot", _descriptor4, _assertThisInitialized(_this));
          _this.originalY = null;
          //@property({type: Node,group: { name: "Runtime" }}) 
          _this.originalParent = null;
          _this.originalPos = new Vec3();
          _initializerDefineProperty(_this, "draggableLayer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragSlotLayer", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DragDropComponent.prototype;
        //#endregion
        _proto.start = function start() {
          if (!this.targetNode) {
            this.targetNode = this.node;
          }
          this.currentSlot = this.getComponent(HexSlot);
        };
        _proto.setCurrenMode = function setCurrenMode(mode) {
          this.currentMode = mode;
          if (this.currentMode == DragDropMode.Drag || this.currentMode == DragDropMode.Clickable) {
            this.setLayerRecursively(this.node, this.draggableLayer);
          } else if (this.currentMode == DragDropMode.Drop) {
            this.setLayerRecursively(this.node, this.dragSlotLayer);
          } else {
            this.setLayerRecursively(this.node, Layers.Enum.DEFAULT);
          }
        };
        _proto.onDragStart = function onDragStart(pos) {
          this.originalY = this.targetNode.worldPosition.y; // Store the original y position
          this.isSelected = true;
          this.originalParent = this.targetNode.parent;
          this.originalPos = this.targetNode.getWorldPosition();
          this.targetNode.setParent(director.getScene());
          this.targetNode.setWorldPosition(this.originalPos);
        };
        _proto.onDragMovement = function onDragMovement(ray) {
          var worldPos = this.getTargetPosition(ray);
          if (worldPos) this.targetNode.setWorldPosition(worldPos);
        };
        _proto.onDragEnded = function onDragEnded(pos, newParent) {
          //if(newParent) console.log(`onDragEnded(${pos} , ${newParent.name})`);
          //else console.log(`onDragEnded(${pos} , ${newParent})`);

          this.isSelected = false;
          if (newParent) {
            this.targetNode.setParent(newParent);
            this.setTargetPosition(pos);
          } else {
            this.targetNode.setParent(this.originalParent);
            this.resetOriginalPosition();
          }
        };
        _proto.resetComponent = function resetComponent() {
          this.targetNode.setParent(this.originalParent);
          this.resetOriginalPosition();
        };
        _proto.resetOriginalPosition = function resetOriginalPosition() {
          this.setTargetPosition(this.originalPos);
        };
        _proto.setTargetPosition = function setTargetPosition(pos) {
          this.targetNode.setWorldPosition(pos);
        };
        _proto.getTargetPosition = function getTargetPosition(ray) {
          var rayOrigin = ray.o; // Ray starts at the origin
          var rayDirection = ray.d; // Ray pointing upwards

          var planeNormal = new Vec3(0, 1, 0); // Plane facing upwards
          var pointOnPlane = new Vec3(0, this.originalY, 0); // Any point on the plane

          // Calculate the intersection point
          var intersectionPoint = RaycastUtils.rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal);
          if (intersectionPoint) {
            //console.log("Intersection point:", intersectionPoint);
            return intersectionPoint;
          } else {
            console.log("Ray does not intersect the plane.");
            return null;
          }
        };
        _proto.setLayerRecursively = function setLayerRecursively(node, layer) {
          var _this2 = this;
          node.layer = layer;
          node.children.forEach(function (child) {
            return _this2.setLayerRecursively(child, layer);
          });
        };
        return DragDropComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DragDropMode.Disabled;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isSelected", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentSlot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "draggableLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Layers.Enum.DEFAULT;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dragSlotLayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Layers.Enum.DEFAULT;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DraggableComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './RaycastUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Node, Vec3, find, input, Input, Layers, EventMouse, geometry, Component, RaycastUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      Vec3 = module.Vec3;
      find = module.find;
      input = module.input;
      Input = module.Input;
      Layers = module.Layers;
      EventMouse = module.EventMouse;
      geometry = module.geometry;
      Component = module.Component;
    }, null, function (module) {
      RaycastUtils = module.RaycastUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "8d58bgogGdJ2JCJ6qxKvPUw", "DraggableComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DraggableComponent = exports('DraggableComponent', (_dec = ccclass('DraggableComponent'), _dec2 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec4 = property({
        type: Camera,
        group: {
          name: "Runtime"
        }
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DraggableComponent, _Component);
        function DraggableComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "canDrag", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isSelected", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetNode", _descriptor4, _assertThisInitialized(_this));
          _this.originalY = null;
          _this.currentMousePos = new Vec3();
          return _this;
        }
        var _proto = DraggableComponent.prototype;
        _proto.start = function start() {
          if (!this.camera) {
            var cameraNode = find('Main Camera'); // Replace 'Main Camera' with the name of your camera node
            if (cameraNode) {
              this.camera = cameraNode.getComponent(Camera);
              if (!this.camera) {
                console.error("Camera component not found on the node.");
              }
            } else {
              console.error("Camera node not found.");
            }
          }
          if (!this.targetNode) {
            this.targetNode = this.node;
          }
          input.on(Input.EventType.MOUSE_DOWN, this.mouseClick, this);
          input.on(Input.EventType.MOUSE_MOVE, this.mouseMove, this);
        };
        _proto.performRaycastExternal = function performRaycastExternal(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var outResult = {
            result: null
          };
          var distance = 500;
          var layerMask = Layers.Enum.DEFAULT; // Change this to the desired layer
          var success = RaycastUtils.mousePositionRaycast3D(event, this.camera, outResult, distance, layerMask);
          if (success && outResult.result) {
            if (outResult.result.collider.node !== this.node) {
              this.isSelected = false;
              return;
            }
            var collider = outResult.result.collider;
            console.log("RaycastExternal - Found obj: " + collider.node.name + " in layer " + RaycastUtils.getLayerName(collider.node.layer));
            this.originalY = this.node.worldPosition.y; // Store the original y position
            this.isSelected = true;
          } else {
            console.log("RaycastExternal: No object detected.");
            this.isSelected = false;
          }
        };
        _proto.update = function update() {
          if (this.isSelected) {
            var worldPos = this.getDragPosition();
            if (worldPos) this.targetNode.setWorldPosition(worldPos);
          }
        };
        _proto.mouseClick = function mouseClick(event) {
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            this.performRaycastExternal(event);
          } else if (event.getButton() === EventMouse.BUTTON_RIGHT) {
            this.isSelected = false;
          }
        };
        _proto.mouseMove = function mouseMove(event) {
          this.currentMousePos.set(event.getLocationX(), event.getLocationY(), 0);
        };
        _proto.getDragPosition = function getDragPosition() {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var ray = new geometry.Ray();
          var screenPos = new Vec3(this.currentMousePos.x, this.currentMousePos.y, 0);
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          var rayOrigin = ray.o; // Ray starts at the origin
          var rayDirection = ray.d; // Ray pointing upwards

          var planeNormal = new Vec3(0, 1, 0); // Plane facing upwards
          var pointOnPlane = new Vec3(0, this.originalY, 0); // Any point on the plane

          // Calculate the intersection point
          var intersectionPoint = RaycastUtils.rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal);
          if (intersectionPoint) {
            //console.log("Intersection point:", intersectionPoint);
            return intersectionPoint;
          } else {
            console.log("Ray does not intersect the plane.");
            return null;
          }
        };
        return DraggableComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canDrag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isSelected", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DraggableItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './RaycastUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, Component, RaycastUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, null, function (module) {
      RaycastUtils = module.RaycastUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "0ee49OxRrRI05swSAS1RB66", "DraggableItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DraggableItem = exports('DraggableItem', (_dec = ccclass('DraggableItem'), _dec2 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DraggableItem, _Component);
        function DraggableItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variable
          _initializerDefineProperty(_this, "canDrag", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isSelected", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetNode", _descriptor3, _assertThisInitialized(_this));
          _this.originalY = null;
          return _this;
        }
        var _proto = DraggableItem.prototype;
        //#endregion
        _proto.start = function start() {
          if (!this.targetNode) {
            this.targetNode = this.node;
          }
        };
        _proto.onDragStart = function onDragStart(pos) {
          this.originalY = this.node.worldPosition.y; // Store the original y position
          this.isSelected = true;
        };
        _proto.onDragMovement = function onDragMovement(ray) {
          var worldPos = this.getTargetPosition(ray);
          if (worldPos) this.targetNode.setWorldPosition(worldPos);
        };
        _proto.onDragEnded = function onDragEnded(pos) {
          this.isSelected = false;
        };
        _proto.getTargetPosition = function getTargetPosition(ray) {
          var rayOrigin = ray.o; // Ray starts at the origin
          var rayDirection = ray.d; // Ray pointing upwards

          var planeNormal = new Vec3(0, 1, 0); // Plane facing upwards
          var pointOnPlane = new Vec3(0, this.originalY, 0); // Any point on the plane

          // Calculate the intersection point
          var intersectionPoint = RaycastUtils.rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal);
          if (intersectionPoint) {
            //console.log("Intersection point:", intersectionPoint);
            return intersectionPoint;
          } else {
            console.log("Ray does not intersect the plane.");
            return null;
          }
        };
        return DraggableItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canDrag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isSelected", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DraggableSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "cbdb5xAtfFPWbpTvjNjALkt", "DraggableSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DraggableSlot = exports('DraggableSlot', (_dec = ccclass('DraggableSlot'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DraggableSlot, _Component);
        function DraggableSlot() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = DraggableSlot.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return DraggableSlot;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DragInputManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './DragDropComponent.ts', './HexGridController.ts', './GameplayController.ts', './Singleton.ts', './RaycastUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Layers, Vec2, find, sys, input, Input, EventMouse, geometry, Component, DragDropComponent, DragDropMode, HexGridController, GameplayController, Singleton, RaycastUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Layers = module.Layers;
      Vec2 = module.Vec2;
      find = module.find;
      sys = module.sys;
      input = module.input;
      Input = module.Input;
      EventMouse = module.EventMouse;
      geometry = module.geometry;
      Component = module.Component;
    }, null, function (module) {
      DragDropComponent = module.DragDropComponent;
      DragDropMode = module.DragDropMode;
    }, function (module) {
      HexGridController = module.HexGridController;
    }, function (module) {
      GameplayController = module.GameplayController;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      RaycastUtils = module.RaycastUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "37ce76wEnRP8bVrYaKYY9OT", "DragInputManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DragInputManager = exports('DragInputManager', (_dec = ccclass('DragInputManager'), _dec2 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec4 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec5 = property({
        type: DragDropComponent,
        group: {
          name: "Runtime"
        }
      }), _dec6 = property({
        type: Camera,
        group: {
          name: "Runtime"
        }
      }), _dec7 = property({
        type: Layers.Enum,
        group: {
          name: "Layers"
        },
        tooltip: "Layer for draggable object"
      }), _dec8 = property({
        type: Layers.Enum,
        group: {
          name: "Layers"
        },
        tooltip: "Layer for draggable slot"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DragInputManager, _Component);
        function DragInputManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "isPaused", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isMobile", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isDragging", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentItem", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor5, _assertThisInitialized(_this));
          _this.currentMousePos = new Vec2();
          _initializerDefineProperty(_this, "draggableLayer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragSlotLayer", _descriptor7, _assertThisInitialized(_this));
          _this.onPausedLambda = void 0;
          return _this;
        }
        var _proto = DragInputManager.prototype;
        //#endregion
        //#region Start
        _proto.start = function start() {
          var _this2 = this;
          if (!this.camera) {
            var cameraNode = find('Main Camera'); // Replace 'Main Camera' with the name of your camera node
            if (cameraNode) {
              this.camera = cameraNode.getComponent(Camera);
              if (!this.camera) {
                console.error("Camera component not found on the node.");
              }
            } else {
              console.error("Camera node not found.");
            }
          }
          this.checkPlatform();
          this.onPausedLambda = function (_boolean) {
            _this2.handleOnPaused(_boolean);
          };
          Singleton.get(GameplayController).onPause.addListener(this.onPausedLambda);
        };
        _proto.checkPlatform = function checkPlatform() {
          if (sys.isMobile) {
            console.log("Running on a mobile device.");
            this.isMobile = true;
          } else {
            console.log("Running on a desktop.");
            this.isMobile = false;
          }
        }
        //#endregion
        ;

        _proto.initialize = function initialize() {
          if (this.isMobile) {
            input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
            input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          } else {
            input.on(Input.EventType.MOUSE_DOWN, this.mouseClick, this);
            input.on(Input.EventType.MOUSE_MOVE, this.mouseMove, this);
          }

          //Pause events
        }

        //#region Touch Events
        ;

        _proto.onTouchStart = function onTouchStart(event) {
          var touchPos = event.getLocation();
          console.log("Touch started at:", touchPos);
          this.currentMousePos = touchPos;
          this.dragStart(this.currentMousePos);
        };
        _proto.onTouchMove = function onTouchMove(event) {
          var touchPos = event.getLocation();
          this.currentMousePos = touchPos;
          this.dragMovement(this.currentMousePos);
          //this.node.position = this.node.parent.convertToNodeSpaceAR(touchPos);
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          console.log("Touch ended");
          var touchPos = event.getLocation();
          this.currentMousePos = touchPos;
          this.dragEnded(this.currentMousePos);
        }

        //#endregion

        //#region Mouse Events
        ;

        _proto.mouseClick = function mouseClick(event) {
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            //console.log("Button left pressed");
            this.currentMousePos = new Vec2(event.getLocationX(), event.getLocationY());
            if (this.isDragging) {
              this.dragEnded(this.currentMousePos);
            } else {
              this.dragStart(this.currentMousePos);
            }
          }
        };
        _proto.mouseMove = function mouseMove(event) {
          this.currentMousePos = new Vec2(event.getLocationX(), event.getLocationY());
          this.dragMovement(this.currentMousePos);
        }
        //#endregion

        //#region Drag Methods
        ;

        _proto.dragStart = function dragStart(pos) {
          var _this$currentItem;
          if (this.isPaused) return;
          // Check for DraggableItem
          var isValid = this.checkForValidDrag(this.currentMousePos);
          if (!isValid) return;
          this.isDragging = true;
          (_this$currentItem = this.currentItem) == null || _this$currentItem.onDragStart(pos);
          //console.log("DragInputManager.Drag Start at: ", pos);
        };

        _proto.dragMovement = function dragMovement(pos) {
          var _this$currentItem2;
          if (this.isPaused) return;
          if (!this.isDragging) return;
          var ray = new geometry.Ray();
          this.camera.screenPointToRay(pos.x, pos.y, ray);
          (_this$currentItem2 = this.currentItem) == null || _this$currentItem2.onDragMovement(ray);
          var outResult = {
            result: null
          };
          var foundSlot = this.checkForDraggableSlot(this.currentMousePos, outResult);
        };
        _proto.dragEnded = function dragEnded(pos) {
          if (this.isPaused) return;
          this.isDragging = false;
          //console.log("DragInputManager.Drag Ended at: ", pos);

          var outResult = {
            result: null
          };
          var foundSlot = this.checkForDraggableSlot(this.currentMousePos, outResult);
          if (foundSlot) {
            var _this$currentItem3, _this$currentItem4;
            //console.log("DragInputManager.dragEnded() FoundSlot: ", outResult.result.node.name);
            (_this$currentItem3 = this.currentItem) == null || _this$currentItem3.onDragEnded(outResult.result.node.getPosition(), outResult.result.node);

            //Set the values to another slot
            //Empty the old one
            //Set Stack values to the new one
            Singleton.get(HexGridController).placeStacksOnSlot(this.currentItem.currentSlot, outResult.result.currentSlot);
            (_this$currentItem4 = this.currentItem) == null || _this$currentItem4.resetComponent();
          } else {
            var _this$currentItem5;
            //console.log("ResetPosition for: ", this.currentItem.node.name);    
            (_this$currentItem5 = this.currentItem) == null || _this$currentItem5.onDragEnded();
          }
        }
        //#endregion
        ;

        _proto.handleOnPaused = function handleOnPaused(isPaused) {
          this.isPaused = isPaused;
        };
        _proto.clickMethod = function clickMethod() {
          this.currentItem.currentSlot.clickSlot();
        };
        _proto.checkForValidDrag = function checkForValidDrag(screenPos) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }

          //let number = RaycastUtils.getLayerIndices(this.draggableLayer)[0];
          //console.log(`checkForValidDrag - CurrentLayer: [${Layers.layerToName(number)}]`);

          var outResult = {
            result: null
          };
          var distance = 500;
          var layerMask = this.draggableLayer; // Change this to the desired layer
          var success = RaycastUtils.screenRaycast3D(screenPos, this.camera, outResult, distance, layerMask);
          if (success && outResult.result) {
            var node = outResult.result.collider.node;
            if (!node) return false;
            var draggableItem = node.getComponent(DragDropComponent);
            if (!draggableItem) {
              draggableItem = node.parent.getComponent(DragDropComponent);
            }
            if (!draggableItem) return false;
            if (draggableItem.currentMode !== DragDropMode.Drag) {
              if (draggableItem.currentMode === DragDropMode.Clickable) {
                this.currentItem = draggableItem;
                this.clickMethod();
              }
              return false;
            }

            //console.log(`RaycastExternal - Found DraggableItem: ${node.name} in layer ${RaycastUtils.getLayerName(node.layer)}`);
            this.currentItem = draggableItem;
          } else {
            //console.log("RaycastExternal: No object detected.");
            this.currentItem = null;
            return false;
          }
          return true;
        };
        _proto.checkForDraggableSlot = function checkForDraggableSlot(screenPos, draggableSlot) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return false;
          }
          var outResult = {
            result: null
          };
          var distance = 500;
          var layerMask = this.dragSlotLayer; // Change this to the desired layer
          var success = RaycastUtils.screenRaycast3D(screenPos, this.camera, outResult, distance, layerMask);
          if (success && outResult.result) {
            var node = outResult.result.collider.node;
            if (!node) return false;
            draggableSlot.result = node.getComponent(DragDropComponent);
            if (!draggableSlot.result) {
              draggableSlot.result = node.parent.getComponent(DragDropComponent);
            }
            if (!draggableSlot.result) return false;
            if (draggableSlot.result.currentMode !== DragDropMode.Drop) return false;

            //console.log(`RaycastExternal - Found DraggableSlot: ${draggableSlot.result.node.name} in layer ${RaycastUtils.getLayerName(node.layer)}`);
          } else {
            //console.log("RaycastExternal: No object detected.");
            return false;
          }
          return true;
        };
        return DragInputManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isPaused", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isMobile", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isDragging", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "draggableLayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Layers.Enum.DEFAULT;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "dragSlotLayer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Layers.Enum.DEFAULT;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DummyReferenceScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Action.ts', './SimplePool.ts', './Wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventHandler, Node, Vec2, Color, AnimationClip, SpriteFrame, CCFloat, Prefab, Input, KeyCode, director, Component, RealCurve, Action, SimplePool, Wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventHandler = module.EventHandler;
      Node = module.Node;
      Vec2 = module.Vec2;
      Color = module.Color;
      AnimationClip = module.AnimationClip;
      SpriteFrame = module.SpriteFrame;
      CCFloat = module.CCFloat;
      Prefab = module.Prefab;
      Input = module.Input;
      KeyCode = module.KeyCode;
      director = module.director;
      Component = module.Component;
      RealCurve = module.RealCurve;
    }, null, function (module) {
      Action = module.Action;
    }, function (module) {
      SimplePool = module.SimplePool;
    }, function (module) {
      Wait = module.Wait;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "abc91A32PxP9q1jrl062eT9", "DummyReferenceScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DummyReferenceScript = exports('DummyReferenceScript', (_dec = ccclass('DummyReferenceScript'), _dec2 = property(EventHandler), _dec3 = property({
        type: Node,
        tooltip: "This is a tooltip I wrote myself!!!"
      }), _dec4 = property({
        group: {
          name: "Progression Tab"
        }
      }), _dec5 = property({
        step: 5,
        group: {
          name: "Progression Tab"
        }
      }), _dec6 = property({
        type: Vec2,
        group: {
          name: "Progression Tab"
        }
      }), _dec7 = property({
        group: {
          name: "Configs Tab"
        }
      }), _dec8 = property({
        type: Color,
        group: {
          name: "Configs Tab"
        },
        visible: function visible() {
          return this.hasColor;
        } // "visible" is Similar to "ShowIf" in NaughtyAttributes
      }), _dec9 = property({
        type: AnimationClip
      }), _dec10 = property({
        type: SpriteFrame
      }), _dec11 = property({
        type: [SpriteFrame]
      }), _dec12 = property({
        type: [CCFloat]
      }), _dec13 = property(Prefab), _dec14 = property({
        group: 'Debug'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DummyReferenceScript, _Component);
        function DummyReferenceScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // EventHandler => UnityEvent    
          _initializerDefineProperty(_this, "onSomethingHappened", _descriptor, _assertThisInitialized(_this));
          // Node => GameObject
          _initializerDefineProperty(_this, "myNode", _descriptor2, _assertThisInitialized(_this));
          // number => float/int
          _initializerDefineProperty(_this, "myNumber", _descriptor3, _assertThisInitialized(_this));
          // number => float/int
          _initializerDefineProperty(_this, "myNumberStepped", _descriptor4, _assertThisInitialized(_this));
          // Vec2 => Vector2
          _initializerDefineProperty(_this, "myVector", _descriptor5, _assertThisInitialized(_this));
          // boolean => bool (and it HAS to be initialized)
          _initializerDefineProperty(_this, "hasColor", _descriptor6, _assertThisInitialized(_this));
          // Color
          _initializerDefineProperty(_this, "meuColor", _descriptor7, _assertThisInitialized(_this));
          // RealCurve => AnimationCurve
          _initializerDefineProperty(_this, "realCurve", _descriptor8, _assertThisInitialized(_this));
          // AnimationClip => Animation
          _initializerDefineProperty(_this, "animationClip", _descriptor9, _assertThisInitialized(_this));
          // Sprite
          _initializerDefineProperty(_this, "mySprite", _descriptor10, _assertThisInitialized(_this));
          // Sprite Array
          _initializerDefineProperty(_this, "mySpriteArray", _descriptor11, _assertThisInitialized(_this));
          // Int Array
          _initializerDefineProperty(_this, "myPreFilledNumberArray", _descriptor12, _assertThisInitialized(_this));
          // Prefab => in Cocos we don't instantiate a Node (GameObject), we instantiate a Prefab.
          _initializerDefineProperty(_this, "prefab", _descriptor13, _assertThisInitialized(_this));
          _this.lastSpawnedInstance = void 0;
          //#endregion
          // Example of our custom actions that work like in C#
          _this.onActionA = new Action();
          _this.onActionB = new Action();
          _this.onActionC = new Action();
          _this.onActionD = new Action();
          _this.onEventD = void 0;
          _this.inputtt = new Input();
          return _this;
        }
        var _proto = DummyReferenceScript.prototype;
        _proto.onLoad = function onLoad() {
          console.log("onLoad is like Awake() in Unity, it comes before everything.");
          SimplePool.preload(this.prefab, 8);
          this.actionsExample();
        };
        _proto.onEnable = function onEnable() {
          console.log('onEnable() is called after awake and before start. And is called again everytime the object is re-activated.');
        };
        _proto.start = function start() {
          console.log("start() is the last one before update.");

          // Register Input get key
          // this.inputtt.on(Input.EventType.KEY_DOWN, this.keyDown, this);
          //this.inputtt.on(Input.EventType.KEY_UP, this.keyUp, this);

          //this.waitAndLog();
          this.actionsExample();
        };
        _proto.keyUp = function keyUp(event) {
          if (event.keyCode == KeyCode.ARROW_UP) {
            this.lastSpawnedInstance = SimplePool.spawn(this.prefab);
            console.log("Spawn name: " + this.lastSpawnedInstance.name);
          }
        };
        _proto.keyDown = function keyDown(event) {
          if (event.keyCode == KeyCode.ARROW_DOWN) {
            console.log("Despawn: " + this.lastSpawnedInstance.name);
            SimplePool.despawn(this.lastSpawnedInstance);
          }
        };
        _proto.actionsExample = function actionsExample() {
          var _this2 = this;
          // Example of a inline callback
          var onEventB = function onEventB() {
            return console.log('Event B triggered');
          };
          var onEventC = function onEventC() {
            console.log();
            _this2.doSomethingNoParameter();
            //etc etc
          };

          this.onEventD = function (num) {
            console.log();
            _this2.doSomethingNumber(num);
            //etc etc
          };

          // Register callbacks
          this.onActionA.addListener(this.logSomething);
          this.onActionB.addListener(onEventB);
          this.onActionC.addListener(onEventC);
          this.onActionD.addListener(this.onEventD);

          // Trigger events
          this.onActionA.invoke('Event A triggered'); // Logs: "Event A triggered"
          this.onActionB.invoke(); // Logs: "Event B triggered"
          this.onActionC.invoke();
          this.onActionD.invoke(10);

          // Unregister callbacks
          this.onActionA.removeListener(this.logSomething);
          this.onActionB.removeListener(onEventB);
          this.onActionC.removeListener(onEventC);
          this.onActionD.removeListener(this.onEventD);

          // Trigger events again (no output)
          this.onActionA.invoke('Event A should not be triggered');
          this.onActionB.invoke();
          this.onActionC.invoke();
          this.onActionD.invoke(5);
        };
        _proto.logSomething = function logSomething(text) {
          console.log('This is the text:' + text);
        };
        _proto.doSomethingNumber = function doSomethingNumber(number) {
          var sum = number + number;
          console.log('doSomethingNumber ', sum);
        };
        _proto.doSomethingNoParameter = function doSomethingNoParameter() {
          console.log('doSomethingNoParameter ');
          this.logSomething('doSomethingNoParameter');
          this.myDummyFunctionToWriteStuffThatWontBeCalled();
        };
        _proto.myDummyFunctionToWriteStuffThatWontBeCalled = function myDummyFunctionToWriteStuffThatWontBeCalled() {
          // Curve evaluate
          this.realCurve.evaluate(0.5);
        };
        _proto.invokeEventHandler = function invokeEventHandler() {
          this.onSomethingHappened.Invoke();
          console.log('Event invoked!');
        };
        _proto.waitAndLog = /*#__PURE__*/function () {
          var _waitAndLog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("Testing await routines.");

                  // Wait for 2 seconds
                  _context.next = 3;
                  return Wait.seconds(2);
                case 3:
                  _context.next = 5;
                  return Wait.until(function () {
                    return _this3.hasColor;
                  });
                case 5:
                  console.log("Done because hasColor is true.");
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function waitAndLog() {
            return _waitAndLog.apply(this, arguments);
          }
          return waitAndLog;
        }();
        _proto.setParentExample = function setParentExample() {
          //Set an object to have no parent, using null causes it to vanish
          this.myNode.setParent(director.getScene());
        };
        _proto.convertJsonObjectToObjectExample = function convertJsonObjectToObjectExample() {
          //Convert a json object into a HexData object
          //Is commented because it doesn't work here
          // let gridData: HexData[] = JSON.parse(this.currentLevelAsset.gridSavedAsJson);
          // var newData = new HexData();
          // var jsonData = gridData.shift();
          // Object.assign(newData, jsonData);     
        };
        _createClass(DummyReferenceScript, [{
          key: "debug_PressBooleanButton",
          get:
          // Example of a simple type of "editor button" we can use    
          //#region DEBUG
          function get() {
            return false;
          },
          set: function set(v) {
            console.log('Button was pressed! ');
          }
        }]);
        return DummyReferenceScript;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onSomethingHappened", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myNumber", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myNumberStepped", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "myVector", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hasColor", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "meuColor", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "realCurve", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "animationClip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "mySprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "mySpriteArray", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "myPreFilledNumberArray", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [4, 2, 10, 50];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "debug_PressBooleanButton", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "debug_PressBooleanButton"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorButtonSequence.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EditorSequenceButton.ts', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, Button, EditorSequenceButton, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      Button = module.Button;
    }, function (module) {
      EditorSequenceButton = module.EditorSequenceButton;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "eb2738tLe9JDJCZeNS/7je7", "EditorButtonSequence", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorButtonSequence = exports('EditorButtonSequence', (_dec = ccclass('EditorButtonSequence'), _dec2 = property({
        type: [EditorSequenceButton],
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorButtonSequence, _Component);
        function EditorButtonSequence() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "option", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutParent", _descriptor2, _assertThisInitialized(_this));
          _this.onOptionSelected = new Action();
          return _this;
        }
        var _proto = EditorButtonSequence.prototype;
        //#region Debug
        // @property({ group: 'Debug' })
        // public get debug_GetOptions() { return false; }
        // public set debug_GetOptions(v) {
        //     this.option = [];
        //     const childCount = this.layoutParent.children.length;
        //     for (let i = 0; i < childCount; i++) {    
        //         const current = this.layoutParent.children[i].getComponent(EditorSequenceButton);
        //         current.name = "Selection Button 00" + (i+1); 
        //         this.option.push(current);
        //     }
        // }
        //#endregion
        _proto.initialize = function initialize(currentValue, valueRange) {
          var _this2 = this;
          var startValue = valueRange.x;
          var _loop = function _loop() {
            _this2.option[i].initialize(i, startValue);
            var id = _this2.option[i].buttonId;
            _this2.option[i].button.node.on(Button.EventType.CLICK, function () {
              return _this2.selectOption(id);
            }, _this2);
            startValue++;
          };
          for (var i = 0; i < this.option.length; i++) {
            _loop();
          }
          this.setOptionByValue(currentValue);
        };
        _proto.selectOption = function selectOption(id) {
          console.log("EditorButtonSequence.selectOption(" + id + ", value: " + this.option[id].buttonValue + ")");
          this.setOption(id);
          this.onOptionSelected.invoke(this.option[id].buttonValue);
        };
        _proto.setOptionByValue = function setOptionByValue(value, saveData) {
          if (saveData === void 0) {
            saveData = false;
          }
          var id = this.convertValueToId(value);
          this.setOption(id);
          if (saveData) this.onOptionSelected.invoke(this.option[id].buttonValue);
        };
        _proto.setOption = function setOption(id) {
          for (var i = 0; i < this.option.length; i++) {
            this.option[i].toggleSelection(false);
          }
          this.option[id].toggleSelection(true);
        };
        _proto.convertValueToId = function convertValueToId(currentValue) {
          for (var i = 0; i < this.option.length; i++) {
            if (this.option[i].buttonValue == currentValue) return i;
          }
          return 0;
        };
        return EditorButtonSequence;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "option", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layoutParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorColorButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, Node, Button, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Node = module.Node;
      Button = module.Button;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "82826papXRJ5KdGa2G6LQVh", "EditorColorButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorColorButton = exports('EditorColorButton', (_dec = ccclass('EditorColorButton'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Boolean
      }), _dec4 = property({
        type: Color
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: Sprite,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorColorButton, _Component);
        function EditorColorButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isActive", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "displayColor", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disableVisual", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enabledVisual", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorDisplay", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EditorColorButton.prototype;
        _proto.initialize = function initialize(id) {
          this.id = id;
          if (!this.button) this.button = this.getComponent(Button);
          if (this.colorDisplay) {
            this.colorDisplay.color = this.displayColor;
          }
        };
        _proto.toggleOptionButton = function toggleOptionButton() {
          this.isActive = !this.isActive;
          this.toggleOption(this.isActive);
        };
        _proto.toggleOption = function toggleOption(isActive) {
          this.isActive = isActive;
          if (this.disableVisual) {
            this.disableVisual.active = !this.isActive;
          }
          if (this.enabledVisual) {
            this.enabledVisual.active = this.isActive;
          }
        };
        return EditorColorButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isActive", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "displayColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 1, 0, 1);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "disableVisual", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enabledVisual", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "colorDisplay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorColorSelector.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EditorColorButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, Button, EditorColorButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      Button = module.Button;
    }, function (module) {
      EditorColorButton = module.EditorColorButton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "74948mH2ehOloork/vijBYn", "EditorColorSelector", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorColorSelector = exports('EditorColorSelector', (_dec = ccclass('EditorColorSelector'), _dec2 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: [EditorColorButton],
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorColorSelector, _Component);
        function EditorColorSelector() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "isExpanded", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttons", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandedBlock", _descriptor3, _assertThisInitialized(_this));
          _this.callback = null;
          return _this;
        }
        var _proto = EditorColorSelector.prototype;
        //#endregion
        _proto.initialize = function initialize(availableColors, callback) {
          var _this2 = this;
          this.callback = callback;
          var _loop = function _loop() {
            _this2.buttons[i].initialize(i);
            var id = _this2.buttons[i].id;
            _this2.buttons[i].button.node.on(Button.EventType.CLICK, function () {
              return _this2.toggleOptionButton(id);
            }, _this2);
          };
          for (var i = 0; i < this.buttons.length; i++) {
            _loop();
          }
          this.updateAvailableColors(availableColors);
        };
        _proto.updateAvailableColors = function updateAvailableColors(availableColors) {
          this.resetColorDisplay();
          if (availableColors.length > 0) {
            for (var i = 0; i < availableColors.length; i++) {
              if (availableColors[i] !== null) this.buttons[availableColors[i]].toggleOption(true);
            }
          }
        };
        _proto.resetColorDisplay = function resetColorDisplay() {
          for (var i = 0; i < this.buttons.length; i++) {
            this.buttons[i].toggleOption(false);
          }
        };
        _proto.toggleOptionButton = function toggleOptionButton(id) {
          this.buttons[id].toggleOptionButton();
          //Set value to the level SA

          if (this.callback) {
            this.callback();
          }
        };
        _proto.getSelectedColors = function getSelectedColors() {
          var availableColors = [];
          for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].isActive) {
              availableColors.push(i);
            }
          }
          return availableColors;
        };
        return EditorColorSelector;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isExpanded", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "expandedBlock", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorDropdownOption.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "981551RYfFOdoBrujioRrEJ", "EditorDropdownOption", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorDropdownOption = exports('EditorDropdownOption', (_dec = ccclass('EditorDropdownOption'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorDropdownOption, _Component);
        function EditorDropdownOption() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EditorDropdownOption.prototype;
        _proto.initialize = function initialize(id) {
          this.id = id;
          if (!this.button) this.button = this.getComponent(Button);
          if (!this.label && this.node.children.length > 0) {
            var firstChild = this.node.children[0];
            this.label = firstChild.getComponent(Label);
          }
        };
        _proto.getText = function getText() {
          return this.label.string;
        };
        return EditorDropdownOption;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorExpirationAmount.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Label, Node, Component, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "91cc4khVrBHDohJVoTqDrmp", "EditorExpirationAmount", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorExpirationAmount = exports('EditorExpirationAmount', (_dec = ccclass('EditorExpirationAmount'), _dec2 = property({
        type: EditBox,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorExpirationAmount, _Component);
        function EditorExpirationAmount() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "amount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandedParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultParent", _descriptor4, _assertThisInitialized(_this));
          _this.onAmountChanged = new Action();
          return _this;
        }
        var _proto = EditorExpirationAmount.prototype;
        //#endregion
        _proto.initialize = function initialize(expandedParent, defaultParent) {
          this.expandedParent = expandedParent;
          this.defaultParent = defaultParent;
          this.toggleTab(false);
          this.amount.node.on(EditBox.EventType.TEXT_CHANGED, this.onValueChanged, this);
        };
        _proto.toggleTab = function toggleTab(active) {
          this.node.active = active;
          if (active) {
            this.node.setParent(this.expandedParent);
            this.node.setSiblingIndex(1);
          } else {
            this.node.setParent(this.defaultParent);
            this.node.setSiblingIndex(0);
          }
        };
        _proto.onValueChanged = function onValueChanged() {
          if (this.amount.string.length == 0) return;
          var value = Number.parseInt(this.amount.string);
          this.onAmountChanged.invoke(value);
        };
        _proto.activateTab = function activateTab(title, value) {
          this.amount.string = value.toString();
          this.label.string = title;
          this.toggleTab(true);
        };
        _proto.disableTab = function disableTab() {
          this.toggleTab(false);
        };
        return EditorExpirationAmount;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "expandedParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorExpirationDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SimpleEditorDropdown.ts', './EditorExpirationAmount.ts', './LevelAsset.ts', './EditorExpirationPercent.ts', './EditorExpirationId.ts', './index.ts', './LevelEditorController.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, SimpleEditorDropdown, EditorExpirationAmount, RuleExpiritionType, EditorExpirationPercent, EditorExpirationId, LevelEditorController, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      SimpleEditorDropdown = module.SimpleEditorDropdown;
    }, function (module) {
      EditorExpirationAmount = module.EditorExpirationAmount;
    }, function (module) {
      RuleExpiritionType = module.RuleExpiritionType;
    }, function (module) {
      EditorExpirationPercent = module.EditorExpirationPercent;
    }, function (module) {
      EditorExpirationId = module.EditorExpirationId;
    }, null, function (module) {
      LevelEditorController = module.LevelEditorController;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "c31e7x5SKBO9qomdqvvpwb+", "EditorExpirationDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorExpirationDisplay = exports('EditorExpirationDisplay', (_dec = ccclass('EditorExpirationDisplay'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: SimpleEditorDropdown,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: EditorExpirationAmount,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: EditorExpirationPercent,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: EditorExpirationId,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorExpirationDisplay, _Component);
        function EditorExpirationDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "ruleValue", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "configsParent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandedParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expireCondition", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "amountControl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "percentControl", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idControl", _descriptor7, _assertThisInitialized(_this));
          _this.onDropdownEvent = void 0;
          _this.saveCallback = null;
          _this.onAmountChanged = void 0;
          return _this;
        }
        var _proto = EditorExpirationDisplay.prototype;
        //#endregion
        _proto.initialize = function initialize(id, amount, saveCallback) {
          //console.log(`EditorExpirationDisplay.initialize(${id})`);
          this.saveCallback = saveCallback;
          this.expireCondition.initialize(id);
          this.amountControl.initialize(this.expandedParent, this.configsParent);
          this.percentControl.initialize(this.expandedParent, this.configsParent);
          this.idControl.initialize(this.expandedParent, this.configsParent);
          this.ruleValue = amount;
          this.setStartingTab(id, amount);
          this.setEvents();
        };
        _proto.setEvents = function setEvents() {
          var _this2 = this;
          this.onDropdownEvent = function (num) {
            _this2.onDropdownChanged(num);
          };
          this.onAmountChanged = function (num) {
            _this2.onRuleValueChanged(num);
          };
          this.expireCondition.onOptionSelected.addListener(this.onDropdownEvent);
          this.amountControl.onAmountChanged.addListener(this.onAmountChanged);
          this.percentControl.onAmountChanged.addListener(this.onAmountChanged);
          this.idControl.onAmountChanged.addListener(this.onAmountChanged);
        };
        _proto.setStartingTab = function setStartingTab(id, amount) {
          this.disableAllTabs();
          if (id == RuleExpiritionType.AfterNumberOfMatchedPieces) {
            this.amountControl.activateTab('Number of Pieces: ', amount);
          } else if (id == RuleExpiritionType.AfterNumberOfOptionTrays) {
            this.amountControl.activateTab('Number of Trays: ', amount);
          } else if (id == RuleExpiritionType.AfterTheObjectiveReacherPercentage) {
            this.percentControl.activateTab('Objective Percent', amount);
          } else if (id == RuleExpiritionType.AfterSpecificObjectiveIsCompleted) {
            this.idControl.activateTab(amount, Singleton.get(LevelEditorController).getListOfObjectives());
          }
        };
        _proto.updateDisplay = function updateDisplay(id, amount) {
          this.expireCondition.updateDisplay(id);
          this.ruleValue = amount;
          //this.updateCurrentTab(id);
          this.setStartingTab(id, amount);
        };
        _proto.onDestroy = function onDestroy() {
          if (this.expireCondition.onOptionSelected !== null) this.expireCondition.onOptionSelected.removeListener(this.onDropdownEvent);
          if (this.percentControl.onAmountChanged !== null) this.percentControl.onAmountChanged.removeListener(this.onAmountChanged);
          if (this.amountControl.onAmountChanged !== null) this.amountControl.onAmountChanged.removeListener(this.onAmountChanged);
        };
        _proto.onDropdownChanged = function onDropdownChanged(id) {
          console.log("EditorExpirationDisplay.onDropdownChanged() ", id);
          this.updateCurrentTab(id);
          //Add callback
          this.saveCallback();
        };
        _proto.updateCurrentTab = function updateCurrentTab(id) {
          this.disableAllTabs();
          if (id == RuleExpiritionType.AfterNumberOfMatchedPieces) {
            this.amountControl.activateTab('Number of Pieces: ', 50);
          } else if (id == RuleExpiritionType.AfterNumberOfOptionTrays) {
            this.amountControl.activateTab('Number of Trays: ', 3);
          } else if (id == RuleExpiritionType.AfterTheObjectiveReacherPercentage) {
            this.percentControl.activateTab('Objective Percent', 20);
          } else if (id == RuleExpiritionType.AfterSpecificObjectiveIsCompleted) {
            this.idControl.activateTab(1, Singleton.get(LevelEditorController).getListOfObjectives());
          } else ;
        };
        _proto.disableAllTabs = function disableAllTabs() {
          this.amountControl.disableTab();
          this.percentControl.disableTab();
          this.idControl.disableTab();
        };
        _proto.onRuleValueChanged = function onRuleValueChanged(amount) {
          console.log("EditorExpirationDisplay.onRuleValueChanged() ", amount);
          this.ruleValue = amount;
          this.saveCallback();
        }

        //#region Get / Set
        ;

        _proto.getSelectedId = function getSelectedId() {
          return this.expireCondition.selectedId;
        };
        _proto.getRuleValue = function getRuleValue() {
          return this.ruleValue;
        }

        //#endregion
        ;

        return EditorExpirationDisplay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ruleValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "configsParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "expandedParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "expireCondition", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "amountControl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "percentControl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "idControl", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorExpirationId.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './LevelAsset.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Label, Node, Component, ObjectiveType, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, null, function (module) {
      ObjectiveType = module.ObjectiveType;
    }, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "642b6j0EI5GLZveSvuFkM7T", "EditorExpirationId", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorExpirationId = exports('EditorExpirationId', (_dec = ccclass('EditorExpirationId'), _dec2 = property({
        type: EditBox,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec6 = property({
        type: [ObjectiveType],
        group: {
          name: "Runtime"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorExpirationId, _Component);
        function EditorExpirationId() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "amount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandedParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultParent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "activeObjectives", _descriptor5, _assertThisInitialized(_this));
          _this.onAmountChanged = new Action();
          return _this;
        }
        var _proto = EditorExpirationId.prototype;
        //#endregion
        _proto.initialize = function initialize(expandedParent, defaultParent) {
          this.expandedParent = expandedParent;
          this.defaultParent = defaultParent;
          this.toggleTab(false);
          this.amount.node.on(EditBox.EventType.TEXT_CHANGED, this.onValueChanged, this);
        };
        _proto.toggleTab = function toggleTab(active) {
          this.node.active = active;
          if (active) {
            this.node.setParent(this.expandedParent);
            this.node.setSiblingIndex(1);
          } else {
            this.node.setParent(this.defaultParent);
            this.node.setSiblingIndex(0);
          }
        };
        _proto.onValueChanged = function onValueChanged() {
          if (this.amount.string.length == 0) return;
          var value = Number.parseInt(this.amount.string);
          this.updateDisplay(value);
          this.onAmountChanged.invoke(value);
        };
        _proto.activateTab = function activateTab(value, activeObjectives) {
          console.log("EditorExpirationId.activateTab: " + value);
          this.amount.string = value.toString();
          this.refreshTab(activeObjectives);
          this.toggleTab(true);
        }

        //Create refresh tab method
        ;

        _proto.refreshTab = function refreshTab(activeObjectives) {
          this.activeObjectives = activeObjectives;
          var selectedId = Number.parseInt(this.amount.string);
          this.updateDisplay(selectedId);
        };
        _proto.updateDisplay = function updateDisplay(id) {
          if (id > this.activeObjectives.length || id == 0) {
            this.updateLabelDisplay('Invalid ID!');
          } else {
            var title = ObjectiveType[id - 1];
            this.updateLabelDisplay(title);
          }
        };
        _proto.updateLabelDisplay = function updateLabelDisplay(title) {
          this.label.string = title;
        };
        _proto.disableTab = function disableTab() {
          this.toggleTab(false);
        };
        return EditorExpirationId;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "expandedParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "activeObjectives", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorExpirationPercent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './EditorSliderControl.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Vec2, Component, EditorSliderControl, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, null, function (module) {
      EditorSliderControl = module.EditorSliderControl;
    }, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "79a30X5AG1BpIFJ9+Qn+YOW", "EditorExpirationPercent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorExpirationPercent = exports('EditorExpirationPercent', (_dec = ccclass('EditorExpirationPercent'), _dec2 = property({
        type: EditorSliderControl,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Runtime"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorExpirationPercent, _Component);
        function EditorExpirationPercent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "valuesSlider", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandedParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultParent", _descriptor4, _assertThisInitialized(_this));
          _this.onAmountChanged = new Action();
          _this.onSliderEvent = void 0;
          return _this;
        }
        var _proto = EditorExpirationPercent.prototype;
        //#endregion
        _proto.initialize = function initialize(expandedParent, defaultParent) {
          this.expandedParent = expandedParent;
          this.defaultParent = defaultParent;
          this.toggleTab(false);
          this.valuesSlider.initialize(5, new Vec2(1, 99));
          this.setEvents();
        };
        _proto.setEvents = function setEvents() {
          var _this2 = this;
          this.onSliderEvent = function (num) {
            _this2.onSliderChanged(num);
          };
          this.valuesSlider.onValueChanged.addListener(this.onSliderEvent);
        };
        _proto.toggleTab = function toggleTab(active) {
          this.node.active = active;
          if (active) {
            this.node.setParent(this.expandedParent);
            this.node.setSiblingIndex(1);
          } else {
            this.node.setParent(this.defaultParent);
            this.node.setSiblingIndex(0);
          }
        };
        _proto.onSliderChanged = function onSliderChanged(percent) {
          //if(this.amount.string.length == 0) return;
          //const value = Number.parseInt(this.amount.string);
          this.onAmountChanged.invoke(percent);
        };
        _proto.activateTab = function activateTab(title, value) {
          //this.amount.string = value.toString();
          this.label.string = title;
          this.valuesSlider.updateCurrentValue(value);
          this.toggleTab(true);
        };
        _proto.disableTab = function disableTab() {
          this.toggleTab(false);
        };
        return EditorExpirationPercent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "valuesSlider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "expandedParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorObjectivesController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EditorObjectivesDisplay.ts', './LevelAsset.ts', './SimpleEditorDropdown.ts', './index.ts', './LevelEditorController.ts', './UI_ObjectivesDisplay.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, Component, EditorObjectivesDisplay, ObjectiveData, SimpleEditorDropdown, LevelEditorController, ObjectiveSprite, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      EditorObjectivesDisplay = module.EditorObjectivesDisplay;
    }, function (module) {
      ObjectiveData = module.ObjectiveData;
    }, function (module) {
      SimpleEditorDropdown = module.SimpleEditorDropdown;
    }, null, function (module) {
      LevelEditorController = module.LevelEditorController;
    }, function (module) {
      ObjectiveSprite = module.ObjectiveSprite;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "0b2daqk5/5HPISl09f1UOFN", "EditorObjectivesController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorObjectivesController = exports('EditorObjectivesController', (_dec = ccclass('EditorObjectivesController'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: [EditorObjectivesDisplay]
      }), _dec4 = property({
        type: [ObjectiveData]
      }), _dec5 = property({
        type: Prefab,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: SimpleEditorDropdown,
        group: {
          name: "Components"
        }
      }), _dec9 = property({
        type: [ObjectiveSprite]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorObjectivesController, _Component);
        function EditorObjectivesController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables 
          _initializerDefineProperty(_this, "selectedId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blocks", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadedObjectives", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "displayPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addParent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockParent", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dropdown", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectiveSprites", _descriptor8, _assertThisInitialized(_this));
          _this.handleDisplaySelected = void 0;
          _this.dropdownEventLambda = void 0;
          _this.editboxEventLambda = void 0;
          _this.removeButtonEventLambda = void 0;
          return _this;
        }
        var _proto = EditorObjectivesController.prototype;
        //#endregion
        //#region Initialization
        _proto.initialize = function initialize(objectives) {
          this.loadedObjectives = objectives;
          this.dropdown.initialize(0);
          this.toggleRuleAdditionMode(false);
          this.setEvents();
          this.createButtons(objectives);
        };
        _proto.setEvents = function setEvents() {
          var _this2 = this;
          this.handleDisplaySelected = function (num) {
            _this2.onObjectiveSelected(num);
          };
          this.dropdownEventLambda = function (num) {
            _this2.onNewRuleSelected(num);
          };
          this.editboxEventLambda = function (num) {
            _this2.onObjectiveAmountChanged(num);
          };
          this.removeButtonEventLambda = function (num) {
            _this2.onDeleteRule(num);
          };
          this.dropdown.onOptionSelected.addListener(this.dropdownEventLambda);
        };
        _proto.createButtons = function createButtons(objectives) {
          for (var i = 0; i < objectives.length; i++) {
            this.createObjectiveBlock(i, objectives[i].type, objectives[i].amount);
          }
        }
        //#endregion
        ;

        _proto.createObjectiveBlock = function createObjectiveBlock(id, objective, amount) {
          //console.log(`EditorObjectivesController.createObjectiveBlock ${id}: ${ObjectiveType[objective]} `);

          var newButton = instantiate(this.displayPrefab);
          newButton.parent = this.blockParent;
          newButton.setSiblingIndex(id);
          var objectiveDisplay = newButton.getComponent(EditorObjectivesDisplay);
          objectiveDisplay.initialize(id, this.getSpriteFromObjective(objective), amount);
          objectiveDisplay.onOptionSelected.addListener(this.handleDisplaySelected);
          objectiveDisplay.onAmountChanged.addListener(this.editboxEventLambda);
          objectiveDisplay.onRemovePressed.addListener(this.removeButtonEventLambda);
          this.blocks.push(objectiveDisplay);
        };
        _proto.toggleRuleAdditionMode = function toggleRuleAdditionMode(active) {
          this.dropdown.node.active = active;
          this.addParent.active = !active;
        }

        //#region Add Rule
        //This opens the Dropdown
        ;

        _proto.addRuleButton = function addRuleButton() {
          this.toggleRuleAdditionMode(true);
        }

        //This is when the a dropdown option is selected
        ;

        _proto.onNewRuleSelected = function onNewRuleSelected(id) {
          this.addRule(id);
        };
        _proto.addRule = function addRule(ruleId) {
          this.dropdown.node.active = false;
          console.log("EditorObjectivesController.addRule()");
          var id = this.blocks.length;
          var type = ruleId;
          var amount = 1;
          var newObjective = new ObjectiveData();
          newObjective.amount = amount;
          newObjective.type = type;
          this.loadedObjectives.push(newObjective);
          this.createObjectiveBlock(id, type, amount);
          this.toggleRuleAdditionMode(false);
          this.saveData();
        };
        _proto.onObjectiveSelected = function onObjectiveSelected(id) {
          console.log("EditorObjectivesController.onObjectiveSelected() ", id);
          this.selectedId = id;
          for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].toggleSelection(false);
          }
          this.blocks[id].toggleSelection(true);
        }
        //#endregion
        ;

        _proto.onObjectiveAmountChanged = function onObjectiveAmountChanged(amount) {
          console.log("EditorObjectivesController.onObjectiveAmountChanged(id: " + this.selectedId + " |" + amount + ") ");
          this.loadedObjectives[this.selectedId].amount = amount;
          this.saveData();
        };
        _proto.onDeleteRule = function onDeleteRule(id) {
          //Remove from the data at ID
          this.loadedObjectives.splice(id, 1);

          //Delete all
          for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].node.destroy();
          }
          this.blocks = new Array();

          //Create them again          
          for (var _i = 0; _i < this.loadedObjectives.length; _i++) {
            this.createObjectiveBlock(_i, this.loadedObjectives[_i].type, this.loadedObjectives[_i].amount);
          }
          this.saveData();
        };
        _proto.getSpriteFromObjective = function getSpriteFromObjective(objective) {
          //console.log(`getPrefabFromColor( ${PieceColor[color]} )`);
          for (var _iterator = _createForOfIteratorHelperLoose(this.objectiveSprites), _step; !(_step = _iterator()).done;) {
            var sprite = _step.value;
            if (sprite.objective === objective) {
              return sprite.sprite;
            }
          }
          return null;
        };
        _proto.saveData = function saveData() {
          console.log("EditorObjectivesController.saveData()");
          Singleton.get(LevelEditorController).updateObjectives(this.loadedObjectives);
        };
        _proto.getListOfObjectives = function getListOfObjectives() {
          var objectives = [];
          for (var i = 0; i < this.loadedObjectives.length; i++) {
            objectives.push(this.loadedObjectives[i].type);
          }
          return objectives;
        };
        return EditorObjectivesController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectedId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blocks", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadedObjectives", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "displayPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addParent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "blockParent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "dropdown", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "objectiveSprites", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorObjectivesDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, EditBox, Sprite, Component, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      EditBox = module.EditBox;
      Sprite = module.Sprite;
      Component = module.Component;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "cc808hXr1lIHbLkXfm0ixF4", "EditorObjectivesDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorObjectivesDisplay = exports('EditorObjectivesDisplay', (_dec = ccclass('EditorObjectivesDisplay'), _dec2 = property({
        type: Number,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Number,
        group: {
          name: "Runtime"
        }
      }), _dec4 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: EditBox,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: Sprite,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorObjectivesDisplay, _Component);
        function EditorObjectivesDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectiveId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteButton", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "amountInput", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inputButton", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "displaySprite", _descriptor7, _assertThisInitialized(_this));
          _this.onOptionSelected = new Action();
          _this.onAmountChanged = new Action();
          _this.onRemovePressed = new Action();
          return _this;
        }
        var _proto = EditorObjectivesDisplay.prototype;
        _proto.initialize = function initialize(id, sprite, amount) {
          var _this2 = this;
          this.id = id;
          this.displaySprite.spriteFrame = sprite;
          this.amountInput.string = amount.toString();
          this.mainButton.node.on(Button.EventType.CLICK, function () {
            return _this2.mainButtonClick();
          }, this);
          this.amountInput.node.on(EditBox.EventType.TEXT_CHANGED, this.amountChangedEvent, this);
          this.inputButton.node.on(Button.EventType.CLICK, function () {
            return _this2.mainButtonClick();
          }, this);
          this.deleteButton.node.on(Button.EventType.CLICK, function () {
            return _this2.removeButtonPressed();
          }, this);
        };
        _proto.mainButtonClick = function mainButtonClick() {
          console.log("block selected()");
          this.onOptionSelected.invoke(this.id);
        };
        _proto.amountChangedEvent = function amountChangedEvent() {
          if (this.amountInput.string.length == 0) return;
          this.onAmountChanged.invoke(Number.parseInt(this.amountInput.string));
        };
        _proto.removeButtonPressed = function removeButtonPressed() {
          this.onRemovePressed.invoke(this.id);
        };
        _proto.toggleSelection = function toggleSelection(active) {
          if (active) {
            this.deleteButton.node.active = true;
          } else {
            this.deleteButton.node.active = false;
          }
        };
        return EditorObjectivesDisplay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "objectiveId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "deleteButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "amountInput", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "inputButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "displaySprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorRangeEditbox.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Label, EditBox, math, Component, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Label = module.Label;
      EditBox = module.EditBox;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "d98164loEZKopn8yOhJPrV9", "EditorRangeEditbox", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorRangeEditbox = exports('EditorRangeEditbox', (_dec = ccclass('EditorRangeEditbox'), _dec2 = property({
        type: Vec2
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: EditBox,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorRangeEditbox, _Component);
        function EditorRangeEditbox() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "valueRange", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentValue", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minDisplay", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDisplay", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "input", _descriptor5, _assertThisInitialized(_this));
          _this.onInputChanged = new Action();
          return _this;
        }
        var _proto = EditorRangeEditbox.prototype;
        //#endregion
        _proto.initialize = function initialize(currentValue, valueRange) {
          this.setValueRange(valueRange.x, valueRange.y);
          this.setCurrentValue(currentValue);
          this.input.node.on(EditBox.EventType.TEXT_CHANGED, this.handleInputChanged, this);
          this.input.node.on(EditBox.EventType.EDITING_DID_ENDED, this.handleEditingEnded, this);
        };
        _proto.setValueRange = function setValueRange(min, max) {
          this.valueRange = new Vec2(min, max);
          this.minDisplay.string = min.toString();
          this.maxDisplay.string = max.toString();
        };
        _proto.setCurrentValue = function setCurrentValue(value) {
          this.currentValue = value;
          this.input.string = this.currentValue.toString();
        };
        _proto.handleInputChanged = function handleInputChanged() {
          if (this.input.string.length == 0) return;
          var value = Number.parseInt(this.input.string);
          this.currentValue = value;
          this.onInputChanged.invoke(value);
        };
        _proto.handleEditingEnded = function handleEditingEnded() {
          //console.log("handleEditingEnded()")
          var value = Number.parseInt(this.input.string);
          value = math.clamp(value, this.valueRange.x, this.valueRange.y);
          this.setCurrentValue(value);
          this.onInputChanged.invoke(value);
        };
        _proto.updateRange = function updateRange(min, max) {
          this.setValueRange(min, max);
        };
        _proto.updateCurrentValue = function updateCurrentValue(value) {
          this.setCurrentValue(value);
        };
        return EditorRangeEditbox;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "valueRange", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 9);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentValue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minDisplay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxDisplay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "input", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorRangeSelector.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Toggle, Node, Vec2, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Toggle = module.Toggle;
      Node = module.Node;
      Vec2 = module.Vec2;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "0fe4bnC8jBBr7MoSi2WG6zL", "EditorRangeSelector", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorRangeSelector = exports('EditorRangeSelector', (_dec = ccclass('EditorRangeSelector'), _dec2 = property({
        type: EditBox,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: EditBox,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Toggle,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorRangeSelector, _Component);
        function EditorRangeSelector() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "minBox", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxBox", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggle", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBlock", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "overrideBlock", _descriptor5, _assertThisInitialized(_this));
          _this.callback = null;
          return _this;
        }
        var _proto = EditorRangeSelector.prototype;
        //#endregion
        _proto.initialize = function initialize(min, max, isOverriden, callback) {
          this.callback = callback;
          this.minBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onMinChanged, this);
          this.maxBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onMaxChanged, this);
          this.toggle.node.on(Toggle.EventType.TOGGLE, this.onToggleChanged, this);
          this.updateRange(min, max, isOverriden);
        };
        _proto.updateRange = function updateRange(min, max, isOverriden) {
          //console.log(`updateRange: ${min} -> ${max}`);

          this.minBox.string = min.toString();
          this.maxBox.string = max.toString();
        };
        _proto.getRange = function getRange() {
          return new Vec2(parseInt(this.minBox.string), parseInt(this.maxBox.string));
        };
        _proto.onMinChanged = function onMinChanged() {
          if (this.minBox.string.length == 0) return;
          //console.log(`onMinChanged: ${this.minBox.string}`);
          if (this.callback) this.callback();
        };
        _proto.onMaxChanged = function onMaxChanged() {
          if (this.maxBox.string.length == 0) return;
          //console.log(`onMaxChanged: ${this.minBox.string}`);
          if (this.callback) this.callback();
        };
        _proto.onToggleChanged = function onToggleChanged() {
          if (this.toggle.isChecked) {
            this.normalBlock.active = false;
            this.overrideBlock.active = true;
          } else {
            this.normalBlock.active = true;
            this.overrideBlock.active = false;
          }
          if (this.callback) this.callback();
        };
        return EditorRangeSelector;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "minBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "normalBlock", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "overrideBlock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorRuleButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "5bacbag4iVHdqNj6ayMTFh4", "EditorRuleButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorRuleButton = exports('EditorRuleButton', (_dec = ccclass('EditorRuleButton'), _dec2 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorRuleButton, _Component);
        function EditorRuleButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "numberLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalDisplay", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedDisplay", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EditorRuleButton.prototype;
        _proto.initialize = function initialize(id) {
          if (this.numberLabel) {
            this.numberLabel.string = (id + 1).toString();
          }
        };
        _proto.toggleSelection = function toggleSelection(active) {
          if (active) {
            this.normalDisplay.active = false;
            this.selectedDisplay.active = true;
            this.button.interactable = false;
          } else {
            this.normalDisplay.active = true;
            this.selectedDisplay.active = false;
            this.button.interactable = true;
          }
        };
        return EditorRuleButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numberLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalDisplay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectedDisplay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorRulesController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelAsset.ts', './EditorSingleRuleDisplay.ts', './EditorRuleButton.ts', './index.ts', './LevelEditorController.ts', './OptionsTray.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Button, instantiate, Component, LevelRuleSet, EditorSingleRuleDisplay, EditorRuleButton, LevelEditorController, OptionsTray, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Button = module.Button;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      LevelRuleSet = module.LevelRuleSet;
    }, function (module) {
      EditorSingleRuleDisplay = module.EditorSingleRuleDisplay;
    }, function (module) {
      EditorRuleButton = module.EditorRuleButton;
    }, null, function (module) {
      LevelEditorController = module.LevelEditorController;
    }, function (module) {
      OptionsTray = module.OptionsTray;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "c466cqeplRNH4sN2f144W5f", "EditorRulesController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorRulesController = exports('EditorRulesController', (_dec = ccclass('EditorRulesController'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: EditorSingleRuleDisplay,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Prefab,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: EditorRuleButton,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: OptionsTray,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: [LevelRuleSet]
      }), _dec9 = property({
        type: [EditorRuleButton]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorRulesController, _Component);
        function EditorRulesController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "selectedId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentRuleDisplay", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ruleButtonPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addRuleButton", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sideBarParent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionsTray", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadedRules", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ruleButtons", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EditorRulesController.prototype;
        //#endregion
        _proto.initialize = function initialize(optionTrayRules) {
          var _this2 = this;
          this.loadedRules = optionTrayRules;
          this.createButtons();
          this.currentRuleDisplay.initialize(this.loadedRules[0], this.loadedRules.length <= 1, function () {
            return _this2.saveData();
          }, function () {
            return _this2.deleteCurrentRule();
          });
          this.selectedId = 0;
          this.addRuleButton.button.node.on(Button.EventType.CLICK, function () {
            return _this2.createNewRule();
          }, this);
          this.optionsTray.initialize();
        };
        _proto.createButtons = function createButtons() {
          for (var i = 0; i < this.loadedRules.length; i++) {
            this.createNewButton(i);
          }
          this.ruleButtons[this.selectedId].toggleSelection(true);
        };
        _proto.createNewButton = function createNewButton(id) {
          var _this3 = this;
          var newButton = instantiate(this.ruleButtonPrefab);
          newButton.parent = this.sideBarParent;
          newButton.name = "RuleButton " + (id + 1);
          newButton.setSiblingIndex(id);
          var ruleButon = newButton.getComponent(EditorRuleButton);
          ruleButon.initialize(id);
          ruleButon.button.node.on(Button.EventType.CLICK, function () {
            return _this3.loadRulesById(id);
          }, this);
          this.ruleButtons.push(ruleButon);
        };
        _proto.saveData = function saveData() {
          console.log("EditorRulesController.saveData()");
          var rules = this.currentRuleDisplay.getRulesetData();
          this.loadedRules[this.selectedId] = rules;
          Singleton.get(LevelEditorController).updateRuleset(this.loadedRules);
        };
        _proto.createNewRule = function createNewRule() {
          var newRule = new LevelRuleSet();
          this.loadedRules.push(newRule);
          this.createNewButton(this.loadedRules.length - 1);
          Singleton.get(LevelEditorController).updateRuleset(this.loadedRules);

          //Select new rule
          this.loadRulesById(this.loadedRules.length - 1);
        };
        _proto.deleteCurrentRule = function deleteCurrentRule() {
          console.log("EditorRulesController.deleteCurrentRule()");
          if (this.loadedRules.length <= 1) return;
          this.loadedRules.splice(this.selectedId, 1);
          for (var i = 0; i < this.ruleButtons.length; i++) {
            this.ruleButtons[i].node.destroy();
          }
          this.ruleButtons = new Array();
          for (var _i = 0; _i < this.loadedRules.length; _i++) {
            this.createNewButton(_i);
          }
          var newId = this.selectedId > 0 ? this.selectedId - 1 : 0;
          Singleton.get(LevelEditorController).updateRuleset(this.loadedRules);
          this.loadRulesById(newId);
        };
        _proto.generatePreview = function generatePreview() {
          this.optionsTray.updateRuleSet(this.loadedRules[this.selectedId]);
          this.optionsTray.generateNewOptionsTray();
        };
        _proto.loadRulesById = function loadRulesById(id) {
          console.log("EditorRulesController.loadRulesById: ", id);
          this.selectedId = id;
          this.toggleButtonDisplay(id);
          this.currentRuleDisplay.loadRuleSet(this.loadedRules[id], this.loadedRules.length <= 1);
        };
        _proto.toggleButtonDisplay = function toggleButtonDisplay(id) {
          for (var i = 0; i < this.ruleButtons.length; i++) {
            this.ruleButtons[i].toggleSelection(false);
          }
          this.ruleButtons[id].toggleSelection(true);
        };
        return EditorRulesController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectedId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentRuleDisplay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ruleButtonPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "addRuleButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sideBarParent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "optionsTray", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "loadedRules", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ruleButtons", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorSequenceButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "47577i8ntxMLoojIAADtVIW", "EditorSequenceButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorSequenceButton = exports('EditorSequenceButton', (_dec = ccclass('EditorSequenceButton'), _dec2 = property({
        type: Number,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Number,
        group: {
          name: "Runtime"
        }
      }), _dec4 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorSequenceButton, _Component);
        function EditorSequenceButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttonId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonValue", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "numberLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalDisplay", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedDisplay", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EditorSequenceButton.prototype;
        _proto.initialize = function initialize(id, displayNumber) {
          this.buttonId = id;
          this.buttonValue = displayNumber;
          if (this.numberLabel) {
            this.numberLabel.string = displayNumber.toString();
          }
        };
        _proto.toggleSelection = function toggleSelection(active) {
          if (active) {
            this.normalDisplay.active = false;
            this.selectedDisplay.active = true;
            this.button.interactable = false;
          } else {
            this.normalDisplay.active = true;
            this.selectedDisplay.active = false;
            this.button.interactable = true;
          }
        };
        return EditorSequenceButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonValue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numberLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "normalDisplay", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectedDisplay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorSingleRuleDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelAsset.ts', './EditorColorSelector.ts', './EditorRangeSelector.ts', './EditorExpirationDisplay.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Component, LevelRuleSet, EditorColorSelector, EditorRangeSelector, EditorExpirationDisplay;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      LevelRuleSet = module.LevelRuleSet;
    }, function (module) {
      EditorColorSelector = module.EditorColorSelector;
    }, function (module) {
      EditorRangeSelector = module.EditorRangeSelector;
    }, function (module) {
      EditorExpirationDisplay = module.EditorExpirationDisplay;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "bbd9f7xA0RPlLUOP4WY+/3t", "EditorSingleRuleDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorSingleRuleDisplay = exports('EditorSingleRuleDisplay', (_dec = ccclass('EditorSingleRuleDisplay'), _dec2 = property({
        type: EditorExpirationDisplay,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: EditorColorSelector,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: EditorRangeSelector,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: EditorRangeSelector,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorSingleRuleDisplay, _Component);
        function EditorSingleRuleDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "expireCondition", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorAllowedDisplay", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "combinationsAllowedDisplay", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackAmountAllowedDisplay", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "previewBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupDelete", _descriptor7, _assertThisInitialized(_this));
          _this.deleteCallback = null;
          return _this;
        }
        var _proto = EditorSingleRuleDisplay.prototype;
        //#endregion
        _proto.initialize = function initialize(ruleSet, isOnlyRule, saveCallback, deleteCallback) {
          var _this2 = this;
          this.deleteCallback = deleteCallback;
          this.deleteBtn.node.on(Button.EventType.CLICK, function () {
            return _this2.deleteButton();
          }, this);
          this.previewBtn.node.on(Button.EventType.CLICK, function () {
            return _this2.previewButton();
          }, this);
          var id = ruleSet.type;
          var availableColors = [];
          for (var i = 0; i < ruleSet.colorsAllowed.length; i++) {
            availableColors.push(ruleSet.colorsAllowed[i] - 1);
          }

          //console.log(`EditorSingleRuleDisplay.initialize(${id})`);

          this.expireCondition.initialize(id, ruleSet.ruleValue, saveCallback);
          this.colorAllowedDisplay.initialize(availableColors, saveCallback);
          this.combinationsAllowedDisplay.initialize(ruleSet.colorCombinationsAllowed.x, ruleSet.colorCombinationsAllowed.y, false, saveCallback);
          this.stackAmountAllowedDisplay.initialize(ruleSet.stackAmountAllowed.x, ruleSet.stackAmountAllowed.y, false, saveCallback);
          this.deleteBtn.interactable = !isOnlyRule;
        };
        _proto.loadRuleSet = function loadRuleSet(ruleSet, isOnlyRule) {
          var id = ruleSet.type;
          var availableColors = [];

          //console.log("colorArray: ", ruleSet.colorsAllowed);

          for (var i = 0; i < ruleSet.colorsAllowed.length; i++) {
            availableColors.push(ruleSet.colorsAllowed[i] - 1);
          }

          //console.log("numberArray: ", availableColors);

          this.expireCondition.updateDisplay(id, ruleSet.ruleValue);
          this.colorAllowedDisplay.updateAvailableColors(availableColors);
          this.combinationsAllowedDisplay.updateRange(ruleSet.colorCombinationsAllowed.x, ruleSet.colorCombinationsAllowed.y, false);
          this.stackAmountAllowedDisplay.updateRange(ruleSet.stackAmountAllowed.x, ruleSet.stackAmountAllowed.y, false);
          this.deleteBtn.interactable = !isOnlyRule;
        };
        _proto.getRulesetData = function getRulesetData() {
          var ruleSet = new LevelRuleSet();
          ruleSet.type = this.expireCondition.getSelectedId();
          ruleSet.ruleValue = this.expireCondition.getRuleValue();
          ruleSet.colorsAllowed = this.convertToPieceColorArray(this.colorAllowedDisplay.getSelectedColors());
          ruleSet.colorCombinationsAllowed = this.combinationsAllowedDisplay.getRange();
          ruleSet.stackAmountAllowed = this.stackAmountAllowedDisplay.getRange();
          return ruleSet;
        };
        _proto.deleteButton = function deleteButton() {
          console.log("EditorSingleRuleDisplay.deleteButton()");
          this.deleteBtn.interactable = false;
          this.popupDelete.active = true;
        };
        _proto.confirmDelete = function confirmDelete() {
          var _this$deleteCallback;
          this.deleteBtn.interactable = true;
          this.popupDelete.active = false;

          //Delete rule
          console.log("EditorSingleRuleDisplay.confirmDelete()");
          (_this$deleteCallback = this.deleteCallback) == null || _this$deleteCallback.call(this);
        };
        _proto.cancelDelete = function cancelDelete() {
          this.deleteBtn.interactable = true;
          this.popupDelete.active = false;
        };
        _proto.previewButton = function previewButton() {};
        _proto.convertToPieceColorArray = function convertToPieceColorArray(numberArray) {
          console.log("numberArray: ", numberArray);
          var colorArray = numberArray.map(function (num) {
            return num;
          });
          for (var i = 0; i < colorArray.length; i++) {
            colorArray[i] = colorArray[i] + 1;
          }
          console.log("colorArray: ", colorArray);
          return colorArray;
        };
        return EditorSingleRuleDisplay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "expireCondition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "colorAllowedDisplay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "combinationsAllowedDisplay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "stackAmountAllowedDisplay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "previewBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "deleteBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "popupDelete", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorSingleStack.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EditorStackObstacleBlock.ts', './EditorStackColorBlock.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, Label, Button, Component, EditorStackObstacleBlock, EditorStackColorBlock;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      EditorStackObstacleBlock = module.EditorStackObstacleBlock;
    }, function (module) {
      EditorStackColorBlock = module.EditorStackColorBlock;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "30f5dB4H3JINLg1jrTfrsGd", "EditorSingleStack", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorSingleStack = exports('EditorSingleStack', (_dec = ccclass('EditorSingleStack'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Boolean
      }), _dec4 = property({
        type: Toggle,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: EditorStackColorBlock,
        group: {
          name: "Components"
        }
      }), _dec9 = property({
        type: EditorStackObstacleBlock,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorSingleStack, _Component);
        function EditorSingleStack() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isColor", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggle", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "typeTitle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveUpBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveDownBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorBlock", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleBlock", _descriptor8, _assertThisInitialized(_this));
          _this.deleteCallback = null;
          _this.moveCallback = null;
          _this.saveCallback = null;
          return _this;
        }
        var _proto = EditorSingleStack.prototype;
        //#endregion
        _proto.initialize = function initialize(id, colorId, amount, isColor, obstacleId, deleteCallback, moveCallback, saveCallback) {
          var _this2 = this;
          this.id = id;
          this.isColor = isColor;
          this.deleteCallback = deleteCallback;
          this.moveCallback = moveCallback;
          this.saveCallback = saveCallback;
          this.toggle.isChecked = this.isColor;
          this.toggle.node.on(Toggle.EventType.TOGGLE, this.onToggleChanged, this);
          this.colorBlock.initialize(colorId, amount, function () {
            return _this2.saveCallback();
          });
          this.obstacleBlock.initialize(obstacleId, amount, function () {
            return _this2.saveCallback();
          });
          this.toggleIsColor(this.isColor, false);
        };
        _proto.removeBlock = function removeBlock() {
          var _this$deleteCallback;
          console.log("EditorSingleStack.removeBlock() ", this.id);
          (_this$deleteCallback = this.deleteCallback) == null || _this$deleteCallback.call(this, this.id);
        };
        _proto.moveUp = function moveUp() {
          var _this$moveCallback;
          console.log("EditorSingleStack.moveUp() ", this.id);
          (_this$moveCallback = this.moveCallback) == null || _this$moveCallback.call(this, this.id, true);
        };
        _proto.moveDown = function moveDown() {
          var _this$moveCallback2;
          console.log("EditorSingleStack.moveDown() ", this.id);
          (_this$moveCallback2 = this.moveCallback) == null || _this$moveCallback2.call(this, this.id, false);
        };
        _proto.onToggleChanged = function onToggleChanged() {
          var _this$saveCallback;
          console.log("EditorSingleStack.onToggleChanged()");
          this.isColor = !this.isColor;
          this.toggleIsColor(this.isColor, true);
          (_this$saveCallback = this.saveCallback) == null || _this$saveCallback.call(this);
        };
        _proto.toggleIsColor = function toggleIsColor(isColor, triggerSave) {
          console.log("EditorSingleStack.toggleIsColor: " + isColor);
          this.isColor = isColor;
          //Bug seems to be here
          this.colorBlock.toggleBlock(isColor);
          this.obstacleBlock.toggleBlock(!isColor);
          if (this.isColor) {
            this.typeTitle.string = "Is color";
          } else {
            this.typeTitle.string = "Not color";
          }
        };
        _proto.toggleCanMoveUp = function toggleCanMoveUp(canMove) {
          this.moveUpBtn.interactable = canMove;
        };
        _proto.toggleCanMoveDown = function toggleCanMoveDown(canMove) {
          this.moveDownBtn.interactable = canMove;
        };
        _proto.updateId = function updateId(id) {
          this.id = id;
        }

        //#region Getters
        ;

        _proto.getIsColor = function getIsColor() {
          return this.isColor;
        };
        _proto.getAmount = function getAmount() {
          //if(this.isColor) return this.piecesAmount;
          if (this.isColor) return this.colorBlock.piecesAmount;else return Math.max(1, this.obstacleBlock.amount);
        };
        _proto.getColorId = function getColorId() {
          //return this.colorId+1;
          return this.colorBlock.colorId + 1;
        };
        _proto.getObstacleTypeId = function getObstacleTypeId() {
          return this.obstacleBlock.getObstacleTypeId() + 1;
        }
        //#endregion
        ;

        return EditorSingleStack;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "typeTitle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "moveUpBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moveDownBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "colorBlock", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "obstacleBlock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorSliderControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Slider, Label, math, Component, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Slider = module.Slider;
      Label = module.Label;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "101bcgzY45EIayD73GSMZH2", "EditorSliderControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorSliderControl = exports('EditorSliderControl', (_dec = ccclass('EditorSliderControl'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Vec2
      }), _dec4 = property({
        type: Number
      }), _dec5 = property({
        type: Slider,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorSliderControl, _Component);
        function EditorSliderControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "startValue", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valueRange", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentValue", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slider", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minDisplay", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDisplay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentDisplay", _descriptor7, _assertThisInitialized(_this));
          _this.onValueChanged = new Action();
          return _this;
        }
        var _proto = EditorSliderControl.prototype;
        //#endregion
        _proto.initialize = function initialize(currentValue, valueRange) {
          this.setValueRange(valueRange.x, valueRange.y);
          this.setCurrentValue(currentValue);
          this.slider.progress = math.inverseLerp(this.valueRange.x, this.valueRange.y, currentValue);
          this.slider.node.on('slide', this.onSliderChanged, this);
        };
        _proto.updateRange = function updateRange(min, max) {
          this.setValueRange(min, max);
        };
        _proto.updateCurrentValue = function updateCurrentValue(value) {
          this.setCurrentValue(value);
          this.slider.progress = math.inverseLerp(this.valueRange.x, this.valueRange.y, value);
        };
        _proto.setCurrentValue = function setCurrentValue(value) {
          this.currentValue = value;
          this.currentDisplay.string = value.toString();
        };
        _proto.setValueRange = function setValueRange(min, max) {
          this.valueRange = new Vec2(min, max);
          this.minDisplay.string = min.toString();
          this.maxDisplay.string = max.toString();
        };
        _proto.convertPercentageToValue = function convertPercentageToValue(percentage) {
          var hadIntegerChange = false;
          var value = math.lerp(this.valueRange.x, this.valueRange.y, percentage);
          value = Math.round(value);
          if (value != this.currentValue) hadIntegerChange = true;
          this.setCurrentValue(value);
          return hadIntegerChange;
        };
        _proto.onSliderChanged = function onSliderChanged() {
          var hadIntegerChange = this.convertPercentageToValue(this.slider.progress);
          if (hadIntegerChange) {
            this.onValueChanged.invoke(this.currentValue);
          }
        };
        return EditorSliderControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "valueRange", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 9);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "slider", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "minDisplay", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxDisplay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "currentDisplay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorStackColorBlock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SimpleEditorDropdown.ts', './EditorSliderControl.ts', './EditorButtonSequence.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, math, Component, SimpleEditorDropdown, EditorSliderControl, EditorButtonSequence;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      math = module.math;
      Component = module.Component;
    }, function (module) {
      SimpleEditorDropdown = module.SimpleEditorDropdown;
    }, function (module) {
      EditorSliderControl = module.EditorSliderControl;
    }, function (module) {
      EditorButtonSequence = module.EditorButtonSequence;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "56605XdEYVDnbL1DWhGO+gA", "EditorStackColorBlock", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorStackColorBlock = exports('EditorStackColorBlock', (_dec = ccclass('EditorStackColorBlock'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: Vec2
      }), _dec5 = property({
        type: SimpleEditorDropdown,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: EditorSliderControl,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: EditorButtonSequence,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorStackColorBlock, _Component);
        function EditorStackColorBlock() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "colorId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "piecesAmount", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valueRange", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorDropdown", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valuesSlider", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonSequence", _descriptor6, _assertThisInitialized(_this));
          _this.saveCallback = null;
          _this.onDropdownEvent = void 0;
          _this.onSliderEvent = void 0;
          _this.buttonSelectionLambda = void 0;
          return _this;
        }
        var _proto = EditorStackColorBlock.prototype;
        _proto.initialize = function initialize(colorId, amount, saveCallback) {
          this.saveCallback = saveCallback;
          this.piecesAmount = amount;
          this.colorId = colorId;
          this.colorDropdown.initialize(colorId);
          this.valuesSlider.initialize(amount, this.valueRange);
          this.buttonSequence.initialize(amount, this.valueRange);
          this.setEvents();
        };
        _proto.setEvents = function setEvents() {
          var _this2 = this;
          this.onDropdownEvent = function (num) {
            _this2.onDropdownChanged(num);
          };
          this.onSliderEvent = function (num) {
            _this2.onSliderChanged(num);
          };
          this.buttonSelectionLambda = function (num) {
            _this2.handleButtonSelected(num);
          };
          this.colorDropdown.onOptionSelected.addListener(this.onDropdownEvent);
          this.valuesSlider.onValueChanged.addListener(this.onSliderEvent);
          this.buttonSequence.onOptionSelected.addListener(this.buttonSelectionLambda);
        };
        _proto.onDestroy = function onDestroy() {
          if (this.colorDropdown.onOptionSelected !== null) this.colorDropdown.onOptionSelected.removeListener(this.onDropdownEvent);
          if (this.valuesSlider.onValueChanged !== null) this.valuesSlider.onValueChanged.removeListener(this.onSliderEvent);
        };
        _proto.onDropdownChanged = function onDropdownChanged(id) {
          var _this$saveCallback;
          console.log("EditorSingleStack.onDropdownChanged() ", id);
          this.colorId = id;
          (_this$saveCallback = this.saveCallback) == null || _this$saveCallback.call(this);
        };
        _proto.onSliderChanged = function onSliderChanged(value) {
          var _this$saveCallback2;
          //console.log(`EditorSingleStack.onSliderChanged(${value}) id: ${this.id}`);
          this.piecesAmount = value;
          (_this$saveCallback2 = this.saveCallback) == null || _this$saveCallback2.call(this);
        };
        _proto.handleButtonSelected = function handleButtonSelected(value) {
          var _this$saveCallback3;
          //console.log(`EditorSingleStack.handleButtonSelected(${value}) id: ${this.id}`);
          this.piecesAmount = value;
          (_this$saveCallback3 = this.saveCallback) == null || _this$saveCallback3.call(this);
        };
        _proto.toggleBlock = function toggleBlock(active, triggerSave) {
          if (triggerSave === void 0) {
            triggerSave = false;
          }
          this.node.active = active;
          if (active) {
            var clampedValue = math.clamp(this.piecesAmount, this.valueRange.x, this.valueRange.y);
            this.buttonSequence.setOptionByValue(clampedValue, triggerSave);
          }
        };
        return EditorStackColorBlock;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colorId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "piecesAmount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "valueRange", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 9);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colorDropdown", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "valuesSlider", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buttonSequence", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorStackController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelAsset.ts', './EditorSingleStack.ts', './HexSlot.ts', './HexGridController.ts', './index.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Component, PieceColor, ObstacleType, EditorSingleStack, HexSlot, PieceStack, HexGridController, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PieceColor = module.PieceColor;
      ObstacleType = module.ObstacleType;
    }, function (module) {
      EditorSingleStack = module.EditorSingleStack;
    }, function (module) {
      HexSlot = module.HexSlot;
      PieceStack = module.PieceStack;
    }, function (module) {
      HexGridController = module.HexGridController;
    }, null, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "52ec2CMeZJO6YqQPCYvmmFI", "EditorStackController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorStackController = exports('EditorStackController', (_dec = ccclass('EditorStackController'), _dec2 = property({
        type: HexSlot
      }), _dec3 = property({
        type: [PieceStack]
      }), _dec4 = property({
        type: PieceStack
      }), _dec5 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Prefab,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: [EditorSingleStack]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorStackController, _Component);
        function EditorStackController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "selectedSlot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "piecesStack", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentStack", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackParent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackPrefab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blocks", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EditorStackController.prototype;
        _proto.initialize = function initialize(currentLevelAsset) {
          this.node.active = false;
        };
        _proto.selectSlot = function selectSlot(slot) {
          this.selectedSlot = slot;
          //Load data from slot to UI
          var data = slot.data;

          //this.debugHexSlotData(slot);
          slot.debug_MarkSlotSelected = true;
          this.loadData(data.piecesStack);
          this.node.active = true;
          this.refreshStackButtons();
        };
        _proto.addColor = function addColor() {
          var previousColorId = -1;
          if (this.blocks.length > 0) {
            previousColorId = this.blocks[this.blocks.length - 1].getColorId();
          }
          var nextColorId = previousColorId + 1;
          if (nextColorId >= 6) nextColorId = 0;
          console.log("EditorStackController.AddColor() " + nextColorId + " | " + PieceColor[nextColorId + 1]);
          this.createNewBlock(this.blocks.length, nextColorId, 1, true, 0);
          console.log("EditorStackController.AddColor() saveData()");
          this.saveData();
        };
        _proto.createNewBlock = function createNewBlock(id, colorId, amount, isColor, obstacleId) {
          var _this2 = this;
          console.log("createNewBlock: " + id + " | colorId: " + colorId + " |amount: " + amount + "| isColor: " + isColor + "| obstacleId: " + obstacleId);
          var newButton = instantiate(this.stackPrefab);
          newButton.parent = this.stackParent;
          newButton.name = "StackBlock " + (id + 1);
          newButton.setSiblingIndex(0);
          var stackBlock = newButton.getComponent(EditorSingleStack);
          stackBlock.initialize(id, colorId, amount, isColor, obstacleId, function (selectedId) {
            return _this2.deleteStack(selectedId);
          }, function (id, isUp) {
            return _this2.moveStack(id, isUp);
          }, function () {
            return _this2.saveData();
          });

          // ruleButon.button.node.on(Button.EventType.CLICK, () => this.loadRulesById(id), this);
          // this.ruleButtons.push(ruleButon);

          this.blocks.push(stackBlock);
          this.refreshStackButtons();
        };
        _proto.saveData = function saveData() {
          console.log("EditorStackController.saveData()");

          //Get All the data from the stacks and change it to the selecteSlot.Data
          this.piecesStack = this.getPiecesStacks();
          this.selectedSlot.updateData(true, this.piecesStack);

          //Call the loadUpdatePiecesVisual
          this.selectedSlot.loadUpdatePiecesVisual();

          //Call the save method using a singleton
          Singleton.get(HexGridController).saveGridData();
        };
        _proto.getPiecesStacks = function getPiecesStacks() {
          var stacks = [];
          for (var i = 0; i < this.blocks.length; i++) {
            stacks.push(this.getCurrentStack(i));
          }
          return stacks;
        };
        _proto.getCurrentStack = function getCurrentStack(id) {
          var stack = new PieceStack();
          stack.amount = this.blocks[id].getAmount();
          stack.pieceColor = this.blocks[id].getColorId();
          stack.isColor = this.blocks[id].getIsColor();
          stack.obstacleType = this.blocks[id].getObstacleTypeId();
          return stack;
        };
        _proto.refreshStackButtons = function refreshStackButtons() {
          for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].toggleCanMoveDown(true);
            this.blocks[i].toggleCanMoveUp(true);
          }
          if (this.blocks.length > 0) {
            this.blocks[0].toggleCanMoveDown(false);
            this.blocks[this.blocks.length - 1].toggleCanMoveUp(false);
          }
        };
        _proto.loadData = function loadData(piecesStack) {
          console.log("EditorStackController.loadData() " + piecesStack.length);

          //Clear all blocks
          for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].node.destroy();
          }
          this.blocks = [];
          for (var i = 0; i < piecesStack.length; i++) {
            this.createNewBlock(i, piecesStack[i].pieceColor - 1, piecesStack[i].amount, piecesStack[i].isColor, piecesStack[i].obstacleType - 1);
          }
        };
        _proto.deleteStack = function deleteStack(id) {
          console.log("EditorStackController.deleteStack() ", id);
          this.blocks[id].node.destroy();
          this.blocks.splice(id, 1);

          //Update id for new remaining blocks
          for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].updateId(i);
          }
          this.refreshStackButtons();
          this.saveData();
        };
        _proto.moveStack = function moveStack(id, isUp) {
          console.log("EditorStackController.moveStack() ", id, isUp);

          // 2 // 0
          // 1 // 1
          // 0 // 2

          if (isUp) {
            var stack1 = this.blocks[id];
            var stack2 = this.blocks[id + 1];
            this.swapStack(stack1, stack2);
          } else {
            var _stack = this.blocks[id];
            var _stack2 = this.blocks[id - 1];
            this.swapStack(_stack, _stack2);
          }

          //Update id for new remaining blocks
          for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].updateId(i);
          }
          this.refreshStackButtons();
          this.saveData();
        };
        _proto.swapStack = function swapStack(stack1, stack2) {
          var listId1 = stack1.id;
          var listId2 = stack2.id;
          this.blocks[listId1] = stack2;
          this.blocks[listId2] = stack1;
          var sibId1 = stack1.node.getSiblingIndex();
          var sibId2 = stack2.node.getSiblingIndex();
          stack1.node.setSiblingIndex(sibId2);
          stack2.node.setSiblingIndex(sibId1);
        }

        //#region Debug methods
        ;

        _proto.debugHexSlotData = function debugHexSlotData(slot) {
          var debug = '';
          debug += "(" + slot.data.x + " , " + slot.data.y + ") ";
          if (slot.data.piecesStack.length > 0) {
            debug += "isColor: " + slot.data.piecesStack[0].isColor + " | obstacle: " + ObstacleType[slot.data.piecesStack[0].obstacleType];
            console.log("" + debug);
          }
        }

        //#endregion
        ;

        return EditorStackController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectedSlot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "piecesStack", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentStack", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "stackParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stackPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "blocks", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EditorStackObstacleBlock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SimpleEditorDropdown.ts', './EditorSliderControl.ts', './LevelAsset.ts', './EditorRangeEditbox.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Component, SimpleEditorDropdown, EditorSliderControl, ObstacleType, EditorRangeEditbox;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      SimpleEditorDropdown = module.SimpleEditorDropdown;
    }, function (module) {
      EditorSliderControl = module.EditorSliderControl;
    }, function (module) {
      ObstacleType = module.ObstacleType;
    }, function (module) {
      EditorRangeEditbox = module.EditorRangeEditbox;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "e688c5TjcFGWL/fzex7nI8b", "EditorStackObstacleBlock", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EditorStackObstacleBlock = exports('EditorStackObstacleBlock', (_dec = ccclass('EditorStackObstacleBlock'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: SimpleEditorDropdown,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: EditorSliderControl,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: EditorRangeEditbox,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EditorStackObstacleBlock, _Component);
        function EditorStackObstacleBlock() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "obstacleId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "amount", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleDropdown", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valuesSlider", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rangeBox", _descriptor5, _assertThisInitialized(_this));
          _this.saveCallback = null;
          _this.onDropdownEvent = void 0;
          _this.sliderEventLambda = void 0;
          return _this;
        }
        var _proto = EditorStackObstacleBlock.prototype;
        //#endregion
        _proto.initialize = function initialize(selectedId, amount, saveCallback) {
          this.saveCallback = saveCallback;
          this.obstacleId = selectedId;
          this.amount = amount;
          this.obstacleDropdown.initialize(this.obstacleId);
          this.valuesSlider.initialize(this.amount, new Vec2(1, 200));
          this.rangeBox.initialize(this.amount, new Vec2(1, 200));
          this.setCorrectUI(selectedId + 1, this.amount);
          this.setEvents();
        };
        _proto.setEvents = function setEvents() {
          var _this2 = this;
          this.onDropdownEvent = function (num) {
            _this2.onDropdownChanged(num);
          };
          this.sliderEventLambda = function (num) {
            _this2.onSliderChanged(num);
          };
          this.valuesSlider.onValueChanged.addListener(this.sliderEventLambda);
          this.obstacleDropdown.onOptionSelected.addListener(this.onDropdownEvent);
          this.rangeBox.onInputChanged.addListener(this.sliderEventLambda);
        };
        _proto.onDestroy = function onDestroy() {
          if (this.obstacleDropdown.onOptionSelected !== null) this.obstacleDropdown.onOptionSelected.removeListener(this.onDropdownEvent);
          if (this.valuesSlider.onValueChanged !== null) this.valuesSlider.onValueChanged.removeListener(this.sliderEventLambda);
        };
        _proto.onDropdownChanged = function onDropdownChanged(id) {
          var _this$saveCallback;
          console.log("EditorStackObstacleBlock.onDropdownChanged() ", id);
          this.obstacleId = id;
          this.setCorrectUI(this.obstacleId + 1, this.amount);

          //Change color dropdown
          (_this$saveCallback = this.saveCallback) == null || _this$saveCallback.call(this);
        };
        _proto.setCorrectUI = function setCorrectUI(obstacle, amount) {
          if (obstacle == ObstacleType.Ad) {
            this.valuesSlider.node.active = false;
            this.rangeBox.node.active = false;
          } else if (obstacle == ObstacleType.Lock) {
            // this.valuesSlider.node.active =true;
            // this.valuesSlider.updateRange(1,300);
            // if(amount == 0) this.valuesSlider.updateCurrentValue(25);
            // else this.valuesSlider.updateCurrentValue(amount);
            this.valuesSlider.node.active = false;
            this.rangeBox.node.active = true;
            this.rangeBox.updateRange(1, 300);
            if (amount == 0) this.rangeBox.updateCurrentValue(25);else this.rangeBox.updateCurrentValue(amount);
          } else if (obstacle == ObstacleType.Wood) {
            this.rangeBox.node.active = false;
            this.valuesSlider.node.active = true;
            this.valuesSlider.updateRange(1, 3);
            if (amount == 0) this.valuesSlider.updateCurrentValue(3);else this.valuesSlider.updateCurrentValue(amount);
          } else ;
        };
        _proto.onSliderChanged = function onSliderChanged(value) {
          var _this$saveCallback2;
          console.log("EditorSingleStack.onSliderChanged(" + value + ")");
          this.amount = value;
          (_this$saveCallback2 = this.saveCallback) == null || _this$saveCallback2.call(this);
        };
        _proto.toggleBlock = function toggleBlock(active, triggerSave) {
          this.node.active = active;
        };
        _proto.getObstacleTypeId = function getObstacleTypeId() {
          return this.obstacleId;
        };
        _proto.getLockValue = function getLockValue() {
          return this.amount;
        };
        return EditorStackObstacleBlock;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "obstacleId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "obstacleDropdown", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "valuesSlider", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rangeBox", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventHandlerUtils.ts", ['cc'], function () {
  var cclegacy, EventHandler;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventHandler = module.EventHandler;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0b760x1LMVLopQgiKYrvoJQ", "EventHandlerUtils", undefined);

      // Extend the EventHandler class to add the Invoke method

      // Implement the Invoke method
      EventHandler.prototype.Invoke = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        this.emit(args);
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventOnDelay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventHandler, Component, Wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventHandler = module.EventHandler;
      Component = module.Component;
    }, null, function (module) {
      Wait = module.Wait;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "803b7MtAh5FQ5cS08hGO+wv", "EventOnDelay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EventOnDelay = exports('EventOnDelay', (_dec = ccclass('EventOnDelay'), _dec2 = property({
        type: EventHandler
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EventOnDelay, _Component);
        function EventOnDelay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "delay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "onDelayFinished", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EventOnDelay.prototype;
        _proto.onEnable = function onEnable() {
          this.runAfterDelay(this.delay);
        };
        _proto.runAfterDelay = /*#__PURE__*/function () {
          var _runAfterDelay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delay) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Wait.seconds(delay);
                case 2:
                  this.onDelayFinished.Invoke();
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function runAfterDelay(_x) {
            return _runAfterDelay.apply(this, arguments);
          }
          return runAfterDelay;
        }();
        return EventOnDelay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "onDelayFinished", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventOnNodeState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventHandler, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventHandler = module.EventHandler;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "23998jdf2hDF4EmSbKChq2Q", "EventOnNodeState", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EventOnNodeState = exports('EventOnNodeState', (_dec = ccclass('EventOnNodeState'), _dec2 = property(), _dec3 = property(), _dec4 = property(), _dec5 = property(), _dec6 = property(), _dec7 = property({
        type: EventHandler,
        group: {
          name: 'Event'
        },
        visible: function visible() {
          return this.runOnLoad;
        }
      }), _dec8 = property({
        type: EventHandler,
        group: {
          name: 'Event'
        },
        visible: function visible() {
          return this.runOnEnable;
        }
      }), _dec9 = property({
        type: EventHandler,
        group: {
          name: 'Event'
        },
        visible: function visible() {
          return this.runOnStart;
        }
      }), _dec10 = property({
        type: EventHandler,
        group: {
          name: 'Event'
        },
        visible: function visible() {
          return this.runOnUpdate;
        }
      }), _dec11 = property({
        type: EventHandler,
        group: {
          name: 'Event'
        },
        visible: function visible() {
          return this.runOnDisable;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EventOnNodeState, _Component);
        function EventOnNodeState() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "runOnLoad", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runOnEnable", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runOnStart", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runOnUpdate", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "runOnDisable", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "onLoaded", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "onEnabled", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "onStarted", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "onUpdated", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "onDisabled", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EventOnNodeState.prototype;
        _proto.onLoad = function onLoad() {
          if (this.runOnLoad) {
            this.onLoaded.emit(null);
          }
        };
        _proto.start = function start() {
          if (this.runOnStart) {
            this.onStarted.emit(null);
          }
        };
        _proto.onEnable = function onEnable() {
          if (this.runOnEnable) {
            this.onEnabled.emit(null);
          }
        };
        _proto.update = function update() {
          if (this.runOnUpdate) {
            this.onUpdated.emit(null);
          }
        };
        _proto.onDisable = function onDisable() {
          if (this.runOnDisable) {
            this.onDisabled.emit(null);
          }
        };
        return EventOnNodeState;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "runOnLoad", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "runOnEnable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "runOnStart", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "runOnUpdate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "runOnDisable", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "onLoaded", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "onEnabled", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "onStarted", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "onUpdated", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "onDisabled", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventOnProgress.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e76c6LOf+1KNYHr+2EvHHOt", "EventOnProgress", undefined);
      var ccclass = _decorator.ccclass;
      var EventOnProgress = exports('EventOnProgress', (_dec = ccclass('EventOnProgress'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EventOnProgress, _Component);
        function EventOnProgress() {
          return _Component.apply(this, arguments) || this;
        }
        return EventOnProgress;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventTestTrigger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventHandler, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventHandler = module.EventHandler;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ea08fr6/iNCtat0mKyhFXww", "eventTestTrigger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var eventTestTrigger = exports('eventTestTrigger', (_dec = ccclass('eventTestTrigger'), _dec2 = property(EventHandler), _dec3 = property({
        type: Button,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(eventTestTrigger, _Component);
        function eventTestTrigger() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // EventHandler => UnityEvent    
          _initializerDefineProperty(_this, "onSomethingHappened", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "testButton", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = eventTestTrigger.prototype;
        // @property({
        //     type: EventHandler,
        //     group: { name: 'Event' },
        //     visible: function (this) { return this.runOnDisable; }
        // })
        // testEvent: EventHandler = new EventHandler();
        _proto.start = function start() {
          var _this2 = this;
          this.testButton.node.on(Button.EventType.CLICK, function () {
            return _this2.deleteButton();
          }, this);
          this.onSomethingHappened.target = this.node; // The node that has the component with the callback function
          this.onSomethingHappened.component = 'eventTestTrigger'; // The name of the component script
          this.onSomethingHappened.handler = 'callbackFunction';
        };
        _proto.deleteButton = function deleteButton() {
          var _this$onSomethingHapp;
          (_this$onSomethingHapp = this.onSomethingHappened) == null || _this$onSomethingHapp.Invoke();
        };
        _proto.callbackFunction = function callbackFunction() {
          console.log("CallbackFunction");
        };
        _proto.registerEvent = function registerEvent(node, component, handler, args) {};
        return eventTestTrigger;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onSomethingHappened", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FilteredRaycastTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Layers, Camera, find, input, Input, EventMouse, Vec2, geometry, PhysicsSystem, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Layers = module.Layers;
      Camera = module.Camera;
      find = module.find;
      input = module.input;
      Input = module.Input;
      EventMouse = module.EventMouse;
      Vec2 = module.Vec2;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "202b0LXQJZFq7wMr31JQnq1", "FilteredRaycastTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FilteredRaycastTest = exports('FilteredRaycastTest', (_dec = ccclass('FilteredRaycastTest'), _dec2 = property({
        type: Layers.Enum,
        group: {
          name: "Layers"
        },
        tooltip: "Layer for raycasting"
      }), _dec3 = property({
        type: Camera,
        group: {
          name: "Runtime"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FilteredRaycastTest, _Component);
        function FilteredRaycastTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "raycastLayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FilteredRaycastTest.prototype;
        _proto.start = function start() {
          if (!this.camera) {
            var cameraNode = find('Main Camera'); // Replace 'Main Camera' with the name of your camera node
            if (cameraNode) {
              this.camera = cameraNode.getComponent(Camera);
              if (!this.camera) {
                console.error("Camera component not found on the node.");
              }
            } else {
              console.error("Camera node not found.");
            }
          }
          input.on(Input.EventType.MOUSE_DOWN, this.mouseClick, this);
        };
        _proto.mouseClick = function mouseClick(event) {
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            //console.log("Button left pressed");
            var currentMousePos = new Vec2(event.getLocationX(), event.getLocationY());
            var isValid = this.checkForValidDrag2(currentMousePos);
          }
        };
        _proto.checkForValidDrag = function checkForValidDrag(screenPos) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var outResult = {
            result: null
          };
          //let outResult = null;
          var distance = 500;
          //const layerMask:number = 1 << this.raycastLayer; // ALL returns -2147483648
          //const layerMask:number = this.raycastLayer; // ALL returns 4294967295
          //const layerMask:number = 0x00000008; // ALL returns 4294967295
          //const layerMask:number = 1 << 20; // Change this to the desired layer
          //const layerMask:number = 0xffffffff; // 0xffffffff == 4294967295  == ALL
          //const layerMask = Layers.nameToLayer("IGNORE_RAYCAST"); // 0x00000002 == IGNORE_RAYCAST // Return 20 |Unknown
          // let layerMask = 0x00000001; // 0x00000001 == DEFAULT // Return 1 | Default
          //layerMask = Layers.nameToLayer("DraggableSlot"); // 0x00000001 == DEFAULT // Return 1 | Default
          // layerMask = Layers.BitMask.IGNORE_RAYCAST;
          //const success = RaycastUtils.screenRaycast3D(screenPos, this.camera, outResult, distance, layerMask);

          var layerMask = this.raycastLayer;
          var ray = new geometry.Ray();
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          var success = PhysicsSystem.instance.raycastClosest(ray, layerMask, distance, true);

          //console.log(`RaycastExternal - CurrentLayer: ${layerMask} | ${RaycastUtils.getLayerName(layerMask)}`);
          var convertedNumber = this.getLayerIndices(layerMask)[0];
          console.log("RaycastExternal - CurrentLayer: " + layerMask + " | " + Layers.layerToName(convertedNumber));
          if (success) {
            outResult.result = PhysicsSystem.instance.raycastClosestResult;
            //outResult.result = PhysicsSystem.instance.raycastClosest;
          }

          if (success && outResult.result) {
            var node = outResult.result.collider.node;
            if (!node) return false;
            // console.log(`Found: ${node.name} in layer ${RaycastUtils.getLayerName(node.layer)}`);
            console.log("Found: " + node.name + " in layer " + Layers.layerToName(node.layer));
            //this.currentItem = draggableItem;
          } else {
            console.log("No object detected.");
            //this.currentItem = null;
            return false;
          }
          return true;
        };
        _proto.checkForValidDrag2 = function checkForValidDrag2(screenPos) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          return true;
        }

        /**
        * Converts a layer bitmask to an array of layer indices (0 to 31).
        */;
        _proto.getLayerIndices = function getLayerIndices(layerBitmask) {
          var indices = [];
          for (var i = 0; i < 32; i++) {
            if (layerBitmask & 1 << i) {
              indices.push(i);
            }
          }
          return indices;
        };
        return FilteredRaycastTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "raycastLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Layers.Enum.DEFAULT;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FollowWorldTests.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CameraUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Vec3, Camera, Node, view, input, Input, UITransform, Component, CameraUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Camera = module.Camera;
      Node = module.Node;
      view = module.view;
      input = module.input;
      Input = module.Input;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      CameraUtils = module.CameraUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "2c3774Ai5VAyoPAxkifnSAL", "FollowWorldTests", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FollowWorldTests = exports('FollowWorldTests', (_dec = ccclass('FollowWorldTests'), _dec2 = property(), _dec3 = property({
        type: Vec2,
        visible: true
      }), _dec4 = property({
        type: Vec2,
        visible: true
      }), _dec5 = property({
        type: Vec2,
        visible: true
      }), _dec6 = property({
        type: Vec3,
        visible: true
      }), _dec7 = property({
        type: Vec3,
        visible: true
      }), _dec8 = property({
        type: Vec2,
        visible: true
      }), _dec9 = property({
        type: Vec2,
        visible: true
      }), _dec10 = property({
        type: Vec3,
        visible: true
      }), _dec11 = property({
        type: Camera,
        group: 'Components'
      }), _dec12 = property({
        type: Node,
        group: 'Components'
      }), _dec13 = property({
        type: Node,
        group: 'Components'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FollowWorldTests, _Component);
        function FollowWorldTests() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "updatePosition", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "screenRes", _descriptor2, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "viewPortRes", _descriptor3, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "currentMousePos", _descriptor4, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "worldPosition", _descriptor5, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "screenPosition", _descriptor6, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "currenPercentage", _descriptor7, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "relativePos", _descriptor8, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "uiPosition", _descriptor9, _assertThisInitialized(_this));
          // Public property to display in the editor
          _initializerDefineProperty(_this, "camera", _descriptor10, _assertThisInitialized(_this));
          // Reference to the camera
          _initializerDefineProperty(_this, "target3DObject", _descriptor11, _assertThisInitialized(_this));
          // The 3D object to track
          _initializerDefineProperty(_this, "uiElement", _descriptor12, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FollowWorldTests.prototype;
        // The UI element to position
        _proto.start = function start() {
          // Get the current screen resolution

          var visibleSize = view.getVisibleSize();
          this.screenRes.set(visibleSize.width, visibleSize.height);
          console.log("Screen Resolution: " + this.screenRes.x + " x " + this.screenRes.y);
          input.on(Input.EventType.MOUSE_MOVE, this.mouseMove, this);
        };
        _proto.mouseMove = function mouseMove(event) {
          this.currentMousePos = new Vec2(event.getLocationX(), event.getLocationY());
        };
        _proto.update = function update(deltaTime) {
          //this.updateElementPosition_NotResposive();
          //this.updateElementPosition_Responsive();
          this.updateElementPosition_External();
        };
        _proto.checkForComponents = function checkForComponents() {
          if (!this.camera || !this.target3DObject || !this.uiElement || !this.updatePosition) {
            return false;
          }
          return true;
        };
        _proto.updateElementPosition_NotResposive = function updateElementPosition_NotResposive() {
          if (!this.checkForComponents()) return;

          // Get the current screen resolution
          var visibleSize = view.getVisibleSize();
          this.screenRes.set(visibleSize.width, visibleSize.height);

          // Get the world position of the 3D object
          this.worldPosition = this.target3DObject.worldPosition;

          // Convert the world position to screen position
          //this.camera.worldToScreen(this.worldPosition, this.screenPosition);
          this.screenPosition = this.camera.worldToScreen(this.worldPosition);
          console.log(this.screenPosition.toString());

          //Convert screen position to UI space
          var uiTransform = this.uiElement.parent.getComponent(UITransform);
          //const uiPosition = new Vec3();
          uiTransform.convertToNodeSpaceAR(new Vec3(this.screenPosition.x, this.screenPosition.y, 0), this.uiPosition);

          //Update the UI element's position
          this.uiElement.setPosition(this.uiPosition);
        };
        _proto.updateElementPosition_Responsive = function updateElementPosition_Responsive() {
          //if (!this.checkForComponents()) return;
          // Get the world position of the 3D object
          this.worldPosition = this.target3DObject.worldPosition;

          //const visibleSize: Size = view.getVisibleSize();
          this.screenPosition = this.camera.worldToScreen(this.worldPosition);
          //this.relativePos.set(this.screenPosition.x, this.screenPosition.y);

          this.relativePos = this.convertToRelativeResolution();
          var uiTransform = this.uiElement.parent.getComponent(UITransform);
          //const uiPosition = new Vec3();
          uiTransform.convertToNodeSpaceAR(new Vec3(this.relativePos.x, this.relativePos.y, 0), this.uiPosition);

          //Update the UI element's position
          this.uiElement.setPosition(this.uiPosition);

          //console.log(`Screen Percentage: X=${(screenPercentageX * 100).toFixed(2)}%, Y=${(screenPercentageY * 100).toFixed(2)}%`);
        };

        _proto.updateElementPosition_External = function updateElementPosition_External() {
          var uiTransform = this.uiElement.parent.getComponent(UITransform);

          //Update the UI element's position
          this.uiElement.setPosition(CameraUtils.worldToUIPosition(this.target3DObject, this.camera, uiTransform));
        };
        _proto.convertToRelativeResolution = function convertToRelativeResolution() {
          //This works for editor, but in browser only works for scaling down
          var viewportWidth = view.getViewportRect().width; // e.g., 1024 (scaled down due to zoom)
          var viewportHeight = view.getViewportRect().height; // e.g., 576 (scaled down due to zoom)

          this.viewPortRes.set(viewportWidth, viewportHeight);

          // Convert screen position to percentage
          var screenPercentageX = this.screenPosition.x / viewportWidth;
          var screenPercentageY = this.screenPosition.y / viewportHeight;
          this.currenPercentage.set(screenPercentageX * 100, screenPercentageY * 100);
          console.log(this.screenPosition + " | " + this.viewPortRes + " |" + this.currenPercentage);
          var converted = new Vec2();
          converted.set(screenPercentageX * this.screenRes.x, screenPercentageY * this.screenRes.y);
          return converted;
        };
        return FollowWorldTests;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updatePosition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "screenRes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "viewPortRes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentMousePos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "worldPosition", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "screenPosition", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "currenPercentage", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "relativePos", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "uiPosition", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "target3DObject", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "uiElement", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "1d891bdUpJOhYGw4HqkvZdJ", "Game", undefined);
      var ccclass = _decorator.ccclass,
        executionOrder = _decorator.executionOrder;
      var Game = exports('Game', (_dec = ccclass('Game'), _dec2 = executionOrder(-9999), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Game, _Component);
        function Game() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Game.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          director.addPersistRootNode(this.node);
        };
        _proto.update = function update(dt) {
          Game.deltaTime = dt;
        };
        return Game;
      }(Component), _class2.deltaTime = void 0, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameplayController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelAsset.ts', './index.ts', './DragInputManager.ts', './UI_GameplayHUD.ts', './LevelController.ts', './Action.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Camera, input, Input, find, KeyCode, Component, LevelAsset, DragInputManager, UI_GameplayHUD, LevelController, Action, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      input = module.input;
      Input = module.Input;
      find = module.find;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      LevelAsset = module.LevelAsset;
    }, null, function (module) {
      DragInputManager = module.DragInputManager;
    }, function (module) {
      UI_GameplayHUD = module.UI_GameplayHUD;
    }, function (module) {
      LevelController = module.LevelController;
    }, function (module) {
      Action = module.Action;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "49099uog5JHUKRkQaJPPxCp", "GameplayController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameplayController = exports('GameplayController', (_dec = ccclass('GameplayController'), _dec2 = property({
        type: LevelAsset
      }), _dec3 = property({
        type: LevelController,
        group: 'Components'
      }), _dec4 = property({
        type: DragInputManager,
        group: 'Components'
      }), _dec5 = property({
        type: UI_GameplayHUD,
        group: 'Runtime'
      }), _dec6 = property({
        type: Camera,
        group: 'Runtime'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameplayController, _Component);
        function GameplayController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "currentLevelAsset", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelControl", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragInput", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hudControl", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor5, _assertThisInitialized(_this));
          _this.onPause = new Action();
          _this._isPaused = false;
          return _this;
        }
        var _proto = GameplayController.prototype;
        //#endregion
        //TODO: Caio fica a vontade pra trabalhar aqui, criei essa classe so pra poder comitar a pasta "Game/Scripts" 
        _proto.start = function start() {
          Singleton.set(this);
        };
        _proto.initialize = function initialize() {
          this.hudControl = Singleton.get(UI_GameplayHUD);
          this.findComponents();
          this.levelControl.initialize(this.currentLevelAsset);
          this.hudControl.initialize(this.currentLevelAsset.objectives, this.mainCamera, this.levelControl.getLocks());

          //cheat
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.findComponents = function findComponents() {
          if (!this.mainCamera) {
            var cameraNode = find('Main Camera'); // Replace 'Main Camera' with the name of your camera node
            if (cameraNode) {
              this.mainCamera = cameraNode.getComponent(Camera);
              if (!this.mainCamera) {
                console.error("Camera component not found on the node.");
              }
            } else {
              console.error("Camera node not found.");
            }
          }
        };
        _proto.togglePause = function togglePause(isPaused) {
          console.log("GameplayController.togglePause(" + isPaused + ")");
          this.onPause.invoke(isPaused);
          this.isPaused = isPaused;

          // if (active) Singleton.Get<API_Manager>().GameplayStopped();
          //else Singleton.Get<API_Manager>().GameplayStarted();
        };

        _proto.onKeyDown = function onKeyDown(event) {
          // if (this.isGameplayMode) return;
          if (event.keyCode === KeyCode.SPACE) {
            this.levelControl.nextRound();
          }
          if (event.keyCode === KeyCode.ARROW_RIGHT) {
            this.levelControl.nextRuleSet();
            this.levelControl.nextRound();
          }
        };
        _proto.startLevel = function startLevel() {
          console.log("GameplayController.startLevel()");
          this.initialize();
          this.levelControl.startLevel();
          this.dragInput.initialize();
        };
        _createClass(GameplayController, [{
          key: "isPaused",
          get: function get() {
            return this._isPaused;
          },
          set: function set(value) {
            this._isPaused = value;
          }
        }]);
        return GameplayController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentLevelAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelControl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dragInput", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hudControl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameProgress.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './ProgressController.ts'], function (exports) {
  var _createClass, cclegacy, ProgressController;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      ProgressController = module.ProgressController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5811drjdkNNXZQ7Zi7H3UyK", "GameProgress", undefined);
      var GameProgress = exports('GameProgress', /*#__PURE__*/function () {
        function GameProgress(totalLevels) {
          this.isNewGame = true;
          this.currentLevelId = 0;
          this.reachedLevel = 0;
          this.levels = [];
          this.customizations = [];
          this.choices = [];
          this.initialize(totalLevels);
        }
        var _proto = GameProgress.prototype;
        _proto.initialize = function initialize(totalLevels) {
          this.isNewGame = true;
          this.choices = [];
          this.levels = new Array(totalLevels).fill(null).map(function () {
            return new Level();
          });
        };
        // TODO: Probably move finishLevel(), addChoice() and getChoice() to the ProgressController class.
        _proto.finishLevel = function finishLevel() {
          this.currentLevelId++;
          if (this.currentLevelId > this.reachedLevel) {
            this.reachedLevel = this.currentLevelId;
          }
          ProgressController.save();
          // SceneLoader.loadLevelSelectScene(); (You can implement scene loading separately)
        };

        _proto.addChoice = function addChoice(choice) {
          var found = this.choices.find(function (c) {
            return c.key === choice.key;
          });
          if (found) {
            found.selectedId = choice.selectedId;
          } else {
            this.choices.push(choice);
          }
          ProgressController.save();
        };
        _proto.getChoice = function getChoice(key) {
          return this.choices.find(function (choice) {
            return choice.key === key;
          }) || null;
        };
        _createClass(GameProgress, [{
          key: "currentLevel",
          get: function get() {
            return this.levels[this.currentLevelId];
          }
        }, {
          key: "hasFinishedTheGame",
          get: function get() {
            return this.reachedLevel >= this.levels.length;
          }
        }]);
        return GameProgress;
      }());
      var Level = exports('Level', function Level() {
        this.score = 0;
        this.starAmount = 0;
        this.duration = 0;
      });
      var Customization = exports('Customization', function Customization() {
        this.name = "";
        this.id = 0;
      });
      var Choice = exports('Choice', function Choice(key, selectedId) {
        this.key = void 0;
        this.selectedId = void 0;
        this.key = key;
        this.selectedId = selectedId;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexGridController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HexSlot.ts', './LevelAsset.ts', './index2.ts', './index.ts', './DragDropComponent.ts', './TurnController.ts', './LockObstacleSlot.ts', './GameplayController.ts', './Singleton.ts', './Wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Enum, Vec2, instantiate, Component, HexData, PieceStack, HexSlot, PieceColor, ObstacleType, LevelAsset, bh, DragDropMode, TurnController, LockObstacleSlot, GameplayController, Singleton, Wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Enum = module.Enum;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      HexData = module.HexData;
      PieceStack = module.PieceStack;
      HexSlot = module.HexSlot;
    }, function (module) {
      PieceColor = module.PieceColor;
      ObstacleType = module.ObstacleType;
      LevelAsset = module.LevelAsset;
    }, function (module) {
      bh = module.bh;
    }, null, function (module) {
      DragDropMode = module.DragDropMode;
    }, function (module) {
      TurnController = module.TurnController;
    }, function (module) {
      LockObstacleSlot = module.LockObstacleSlot;
    }, function (module) {
      GameplayController = module.GameplayController;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      Wait = module.Wait;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class7, _class8, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "5d3e9MM/rRBVKeNVD7TnebP", "HexGridController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var PrefabColor = exports('PrefabColor', (_dec = ccclass('PrefabColor'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Enum(PieceColor)
      }), _dec(_class = (_class2 = function PrefabColor() {
        _initializerDefineProperty(this, "prefab", _descriptor, this);
        _initializerDefineProperty(this, "color", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PieceColor.Red;
        }
      })), _class2)) || _class));
      var PrefabObstacle = exports('PrefabObstacle', (_dec4 = ccclass('PrefabObstacle'), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Enum(ObstacleType)
      }), _dec4(_class4 = (_class5 = function PrefabObstacle() {
        _initializerDefineProperty(this, "prefab", _descriptor3, this);
        _initializerDefineProperty(this, "obstacleType", _descriptor4, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "prefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "obstacleType", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ObstacleType.Ad;
        }
      })), _class5)) || _class4));
      var HexGridController = exports('HexGridController', (_dec7 = ccclass('HexGridController'), _dec8 = property({
        type: Prefab,
        group: 'References'
      }), _dec9 = property({
        type: LevelAsset
      }), _dec10 = property({
        type: [PrefabColor],
        group: 'References'
      }), _dec11 = property({
        type: [PrefabObstacle],
        group: 'References'
      }), _dec12 = property({
        group: 'Debug'
      }), _dec13 = property({
        group: 'Debug'
      }), _dec14 = property({
        group: 'Debug'
      }), _dec7(_class7 = executeInEditMode(_class7 = (_class8 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HexGridController, _Component);
        function HexGridController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gridWidth", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gridHeight", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hexagonPrefab", _descriptor7, _assertThisInitialized(_this));
          _this.grid = [];
          _initializerDefineProperty(_this, "currentLevelAsset", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "piecePrefabColors", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstaclePrefabs", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HexGridController.prototype;
        //#endregion
        _proto.onLoad = function onLoad() {
          Singleton.set(this);
          this.generateGrid();
        };
        _proto.setLevelAsset = function setLevelAsset(currentLevelAsset) {
          this.currentLevelAsset = currentLevelAsset;
        };
        _proto.saveGridData = function saveGridData() {
          var gridData = [];
          for (var y = 0; y < this.gridHeight; y++) {
            for (var x = 0; x < this.gridWidth; x++) {
              var slot = this.grid[y][x];
              gridData.push(slot.data);
            }
          }
          this.currentLevelAsset.gridSavedAsJson = JSON.stringify(gridData);
          this.currentLevelAsset.saveAsset();
        };
        _proto.loadGridData = function loadGridData() {
          var gridData = JSON.parse(this.currentLevelAsset.gridSavedAsJson);
          for (var y = 0; y < this.gridHeight; y++) {
            for (var x = 0; x < this.gridWidth; x++) {
              var slot = this.grid[y][x];

              //Convert a json object into a T object
              var newData = new HexData();
              var newPieceStackArray = [];
              var jsonData = gridData.shift();
              Object.assign(newData, jsonData);
              Object.assign(newPieceStackArray, newData.piecesStack);
              newData.piecesStack = newPieceStackArray;
              if (newData.isActiveSlot) {
                for (var i = 0; i < newPieceStackArray.length; i++) {
                  var clonedStack = new PieceStack();

                  // Copy properties from the current stack in newPieceStackArray to the clonedStack
                  Object.assign(clonedStack, newPieceStackArray[i]);

                  // Assign the cloned stack to newData.piecesStack[i]
                  newData.piecesStack[i] = clonedStack;

                  //console.log(clonedStack);
                }
              }

              // Removes the first element from the temp data array and loads its data in the slot
              slot.data = newData;
              slot.loadUpdatePiecesVisual();
              var suffix = '';
              var preffix = '';
              var stack = slot.getData().piecesStack;
              if (stack.length > 0) {
                if (stack[0].isColor) {
                  suffix = "[" + slot.getTopStack().amount.toString() + " - " + PieceColor[slot.getTopStack().pieceColor] + "]";
                } else {
                  suffix = "[" + slot.getTopStack().amount.toString() + " - " + ObstacleType[slot.getTopStack().obstacleType] + "]";
                }
              }
              slot.node.name = preffix + "(" + slot.data.x + ", " + slot.data.y + ") HexSlot " + suffix;
              if (!slot.getData().isActiveSlot) {
                slot.node.name = "(" + slot.data.x + ", " + slot.data.y + ") EMPTY";
              }
              if (slot.data.isActiveSlot && slot.data.piecesStack.length == 0) slot.setCurrentInteractionMode(DragDropMode.Drop);
              if (slot.data.isActiveSlot && slot.data.piecesStack.length == 1) {
                if (slot.data.piecesStack[0].obstacleType === ObstacleType.Ad) slot.setCurrentInteractionMode(DragDropMode.Clickable);
                if (!slot.getTopStack().isColor && slot.getTopStack().obstacleType === ObstacleType.Lock) {
                  slot.addComponent(LockObstacleSlot);
                }
              }
            }
          }
        };
        _proto.placeStacksOnSlot = function placeStacksOnSlot(origin, target) {
          var piecesStack = origin.data.piecesStack;
          target.setPiecesStack(piecesStack);
          origin.data.piecesStack = [];
          origin.setCurrentInteractionMode(DragDropMode.Disabled);
          target.setCurrentInteractionMode(DragDropMode.Disabled);
          origin.loadUpdatePiecesVisual();
          target.loadUpdatePiecesVisual();

          //Check merge?
          Singleton.get(TurnController).startPlayerMovement(target);
        };
        _proto.watchAdPlaceholder = /*#__PURE__*/function () {
          var _watchAdPlaceholder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(removeAdCallback) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  Singleton.get(GameplayController).togglePause(true);
                  _context.next = 3;
                  return Wait.seconds(2);
                case 3:
                  Singleton.get(GameplayController).togglePause(false);
                  //this.removeAd();
                  if (removeAdCallback) removeAdCallback();
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function watchAdPlaceholder(_x) {
            return _watchAdPlaceholder.apply(this, arguments);
          }
          return watchAdPlaceholder;
        }();
        _proto.moveTopPiecesToSlot = function moveTopPiecesToSlot(origin, target, callback) {
          var _this2 = this;
          console.log("HexGridController.moveTopPiecesToSlot() " + origin.node.name + " -> " + target.node.name);

          //Animation, on the end of animation update values
          var originStack = origin.getTopStack();
          var targetNode = target.visualControl.getTopPiece().node;
          origin.visualControl.movePieces(originStack.amount, targetNode, function () {
            return _this2.onMovePieceAnimationEnded(origin, target, callback);
          });
        };
        _proto.onMovePieceAnimationEnded = function onMovePieceAnimationEnded(origin, target, callback) {
          //console.log("onMovePieceAnimationEnded");

          var originStack = origin.getTopStack();
          origin.removeTopStack();

          //Move top stack to target
          target.addTopStack(originStack);
          origin.loadUpdatePiecesVisual();
          target.loadUpdatePiecesVisual();
          if (origin.isEmpty()) origin.setCurrentInteractionMode(DragDropMode.Drop);
          target.setCurrentInteractionMode(DragDropMode.Disabled);
          if (callback) callback();
        };
        _proto.generateGrid = function generateGrid() {
          this.grid = [];
          for (var y = 0; y < this.gridHeight; y++) {
            var row = [];
            for (var x = 0; x < this.gridWidth; x++) {
              var slot = this.spawnHexagonVisualPrefab(x, y);
              slot.node.name = "(" + slot.data.x + ", " + slot.data.y + ") HexSlot";
              row.push(slot);
            }
            this.grid.push(row);
          }
          this.assignNeighbors();
        };
        _proto.assignNeighbors = function assignNeighbors() {
          var evenTopLeft = new Vec2(-1, -1);
          var evenTop = new Vec2(0, -1);
          var evenTopRight = new Vec2(1, -1);
          var evenBotLeft = new Vec2(-1, 0);
          var evenBot = new Vec2(0, 1);
          var evenBotRight = new Vec2(1, 0);
          var directionsEven = [evenTopLeft, evenTop, evenTopRight, evenBotLeft, evenBot, evenBotRight];
          var oddTopLeft = new Vec2(-1, 0);
          var oddTop = new Vec2(0, -1);
          var oddTopRight = new Vec2(1, 0);
          var oddBotLeft = new Vec2(-1, 1);
          var oddBot = new Vec2(0, 1);
          var oddBotRight = new Vec2(1, 1);
          var directionsOdd = [oddTopLeft, oddTop, oddTopRight, oddBotLeft, oddBot, oddBotRight];
          for (var y = 0; y < this.gridHeight; y++) {
            for (var x = 0; x < this.gridWidth; x++) {
              var slot = this.grid[y][x];
              var allArray = [];
              var isEven = x % 2 === 0;
              var directions = isEven ? directionsEven : directionsOdd;
              for (var _iterator = _createForOfIteratorHelperLoose(directions), _step; !(_step = _iterator()).done;) {
                var dir = _step.value;
                var nx = x + dir.x;
                var ny = y + dir.y;
                if (ny >= 0 && ny < this.gridHeight && nx >= 0 && nx < this.gridWidth) {
                  var thisNode = this.grid[ny][nx].node.getComponent(HexSlot);
                  allArray.push(thisNode);
                  //slot.neighbor.all.push(this.grid[ny][nx]);

                  var thisDir = dir;
                  if (isEven) {
                    if (thisDir.x === evenTopLeft.x && thisDir.y === evenTopLeft.y) slot.neighbor.topLeft = thisNode;
                    if (thisDir.x === evenTop.x && thisDir.y === evenTop.y) slot.neighbor.top = thisNode;
                    if (thisDir.x === evenTopRight.x && thisDir.y === evenTopRight.y) slot.neighbor.topRight = thisNode;
                    if (thisDir.x === evenBotLeft.x && thisDir.y === evenBotLeft.y) slot.neighbor.botLeft = thisNode;
                    if (thisDir.x === evenBot.x && thisDir.y === evenBot.y) slot.neighbor.bot = thisNode;
                    if (thisDir.x === evenBotRight.x && thisDir.y === evenBotRight.y) slot.neighbor.botRight = thisNode;
                  } else {
                    if (thisDir.x === oddTopLeft.x && thisDir.y === oddTopLeft.y) slot.neighbor.topLeft = thisNode;
                    if (thisDir.x === oddTop.x && thisDir.y === oddTop.y) slot.neighbor.top = thisNode;
                    if (thisDir.x === oddTopRight.x && thisDir.y === oddTopRight.y) slot.neighbor.topRight = thisNode;
                    if (thisDir.x === oddBotLeft.x && thisDir.y === oddBotLeft.y) slot.neighbor.botLeft = thisNode;
                    if (thisDir.x === oddBot.x && thisDir.y === oddBot.y) slot.neighbor.bot = thisNode;
                    if (thisDir.x === oddBotRight.x && thisDir.y === oddBotRight.y) slot.neighbor.botRight = thisNode;
                  }
                }
              }
              slot.neighbor.assignAllNeighborsList(allArray);
            }
          }
        };
        _proto.getPrefabFromColor = function getPrefabFromColor(color) {
          //console.log(`getPrefabFromColor( ${PieceColor[color]} )`);
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.piecePrefabColors), _step2; !(_step2 = _iterator2()).done;) {
            var prefabColor = _step2.value;
            if (prefabColor.color === color) {
              return prefabColor.prefab;
            }
          }
          return null;
        };
        _proto.getPrefabFromObstacle = function getPrefabFromObstacle(obstacle) {
          //console.log(`getPrefabFromObstacle( ${ObstacleType[obstacle]} ) | id: ${obstacle}`);
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.obstaclePrefabs), _step3; !(_step3 = _iterator3()).done;) {
            var prefabColor = _step3.value;
            if (prefabColor.obstacleType === obstacle) {
              return prefabColor.prefab;
            }
          }
          return null;
        };
        _proto.spawnHexagonVisualPrefab = function spawnHexagonVisualPrefab(x, y) {
          if (!this.hexagonPrefab) {
            console.warn('Hexagon prefab not assigned');
            return;
          }
          var hex = instantiate(this.hexagonPrefab);
          var hexCell = hex.getComponent(HexSlot);
          hexCell.initilize(x, y);
          this.node.addChild(hex);
          var hexWidth = 1; // Adjust based on prefab size
          var hexHeight = Math.sqrt(3) * 0.5 * hexWidth;
          var offsetX = x * hexWidth * 0.75;
          var offsetY = y * hexHeight;

          // Offset every second column
          if (x % 2 === 1) {
            hex.setPosition(offsetX, 0, offsetY + hexHeight / 2);
          } else {
            hex.setPosition(offsetX, 0, offsetY);
          }
          return hexCell;
        };
        _proto.createNewLevelAsset = /*#__PURE__*/function () {
          var _createNewLevelAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var levelAssetInstance, assetPath;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  // Nao funciona ainda. E isso aqui vai ser necessario pra criar levels de fato. De inicio ate da pra ficar sem e so sair duplicando manualmente, mas vai ser impossivel pro longo prazo.
                  // No PIOR DOS CASOS, se nao conseguirmos um jeito legal, a gente simplesmente duplica previamente tipo 200 levels, e deixa la parado so esperando os dados lol
                  levelAssetInstance = bh.ScriptableAsset.createInstance(LevelAsset);
                  assetPath = 'C:/Projects/gem-sort/assets/scenes/';
                  console.log("Creating asset at path: " + assetPath);
                  _context2.prev = 3;
                  _context2.next = 6;
                  return bh.ScriptableAsset.createAsset(levelAssetInstance, assetPath);
                case 6:
                  console.log("Asset created with UUID: " + levelAssetInstance.uuid);
                  bh.ScriptableAsset.saveAsset(levelAssetInstance);
                  console.log('Asset saved successfully');
                  _context2.next = 14;
                  break;
                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](3);
                  console.error('Error creating asset:', _context2.t0);
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[3, 11]]);
          }));
          function createNewLevelAsset() {
            return _createNewLevelAsset.apply(this, arguments);
          }
          return createNewLevelAsset;
        }() // TODO: Proximo passo eh poder carregar um asset de level, e ele deixa esse exemplo abaixo de metodo aqui no git dele
        // source aqui: https://github.com/AILHC/scriptableasset_example
        /*
        loadScriptableAsset() {
            
            assetManager.loadBundle('scriptable_asset_test_res', (err, bundle) => {
                if (err) {
                    console.error(err);
                    return;
                }
                bundle.load(this.assetPath, (err, asset:CharSA) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log(asset);
                    this.charRender.setCharAsset(asset);
                  });
            });
        }
            */;

        _createClass(HexGridController, [{
          key: "debug_Save",
          get:
          //#region DEBUG
          function get() {
            return false;
          },
          set: function set(v) {
            this.saveGridData();
          }
        }, {
          key: "debug_Load",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.loadGridData();
          }
        }, {
          key: "debug_DeselectAll",
          get: function get() {
            return false;
          },
          set: function set(v) {
            for (var y = 0; y < this.gridHeight; y++) {
              for (var x = 0; x < this.gridWidth; x++) {
                var slot = this.grid[y][x];
                // Removes the first element from the temp data array and loads its data in the slot
                slot.debug_MarkSlotNotSelect = true;
              }
            }
          }
        }]);
        return HexGridController;
      }(Component), (_descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "gridWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 7;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "gridHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 7;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "hexagonPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "currentLevelAsset", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "piecePrefabColors", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "obstaclePrefabs", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class8.prototype, "debug_Save", [_dec12], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_Save"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_Load", [_dec13], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_Load"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_DeselectAll", [_dec14], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_DeselectAll"), _class8.prototype)), _class8)) || _class7) || _class7));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexPiece.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "26254OpfP5Dq6wpduXazEP3", "HexPiece", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HexPiece = exports('HexPiece', (_dec = ccclass('HexPiece'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HexPiece, _Component);
        function HexPiece() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "visual", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        /* DEPRECATED: Vou deletar depois. Hoje eh feito so diretamente com o material mesmo.
        
        @property()
        color: Color = new Color(1, 1, 1, 1);
          @property
        public get pressBooleanButton() {
            return false;
        }
        public set pressBooleanButton(v) {
            this.setColor(this.color);
        }
          setColor(color: Color) {
            const meshRenderer = this.visual.getComponent(MeshRenderer);
            if (meshRenderer) {
                // Save these when starting
                const pass = meshRenderer.material.passes[0];
                const hColor = pass.getHandle('albedo');
                // inside update function
                pass.setUniform(hColor, color);
            }
        }*/
        return HexPiece;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "visual", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NeighborController.ts', './LevelAsset.ts', './HexGridController.ts', './index.ts', './DragDropComponent.ts', './HexVisual.ts', './HexPiece.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Node, instantiate, MeshRenderer, Color, randomRange, randomRangeInt, Component, NeighborController, PieceColor, ObstacleType, HexGridController, DragDropComponent, DragDropMode, HexVisual, HexPiece, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
      Color = module.Color;
      randomRange = module.randomRange;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      NeighborController = module.NeighborController;
    }, function (module) {
      PieceColor = module.PieceColor;
      ObstacleType = module.ObstacleType;
    }, function (module) {
      HexGridController = module.HexGridController;
    }, null, function (module) {
      DragDropComponent = module.DragDropComponent;
      DragDropMode = module.DragDropMode;
    }, function (module) {
      HexVisual = module.HexVisual;
    }, function (module) {
      HexPiece = module.HexPiece;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec6, _dec7, _dec8, _dec9, _dec10, _class4, _class5, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class7, _class8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "e4a5456GZREe4z7onEgwwEB", "HexSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var PieceStack = exports('PieceStack', (_dec = ccclass('PieceStack'), _dec2 = property(), _dec3 = property({
        type: Enum(PieceColor),
        visible: function visible() {
          return this.isColor;
        }
      }), _dec4 = property({
        type: Enum(ObstacleType),
        visible: function visible() {
          return !this.isColor;
        }
      }), _dec5 = property(), _dec(_class = executeInEditMode(_class = (_class2 = function PieceStack() {
        _initializerDefineProperty(this, "isColor", _descriptor, this);
        _initializerDefineProperty(this, "pieceColor", _descriptor2, this);
        _initializerDefineProperty(this, "obstacleType", _descriptor3, this);
        //@property({ min: 1, max: 9, step: 1, slide: true })
        _initializerDefineProperty(this, "amount", _descriptor4, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isColor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pieceColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PieceColor.Red;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "obstacleType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ObstacleType.Ad;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class) || _class));
      var HexData = exports('HexData', (_dec6 = ccclass('HexData'), _dec7 = property(), _dec8 = property(), _dec9 = property(), _dec10 = property({
        type: [PieceStack]
      }), _dec6(_class4 = (_class5 = function HexData() {
        _initializerDefineProperty(this, "x", _descriptor5, this);
        _initializerDefineProperty(this, "y", _descriptor6, this);
        _initializerDefineProperty(this, "isActiveSlot", _descriptor7, this);
        _initializerDefineProperty(this, "piecesStack", _descriptor8, this);
      }, (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "x", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "y", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "isActiveSlot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "piecesStack", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));
      var HexSlot = exports('HexSlot', (_dec11 = ccclass('HexSlot'), _dec12 = property({
        type: HexData
      }), _dec13 = property({
        type: NeighborController,
        group: 'Components'
      }), _dec14 = property({
        type: HexVisual,
        group: 'Components'
      }), _dec15 = property({
        type: Node,
        group: 'Components'
      }), _dec16 = property({
        type: Node,
        group: 'Components'
      }), _dec17 = property({
        type: Node,
        group: 'Components'
      }), _dec18 = property({
        type: DragDropComponent,
        group: 'Components'
      }), _dec19 = property({
        group: 'Debug'
      }), _dec20 = property({
        group: 'Debug'
      }), _dec21 = property({
        group: 'Debug'
      }), _dec22 = property({
        group: 'Debug'
      }), _dec23 = property({
        group: 'Debug'
      }), _dec24 = property({
        group: 'Debug'
      }), _dec25 = property({
        group: 'Debug'
      }), _dec26 = property({
        type: [HexSlot]
      }), _dec11(_class7 = (_class8 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HexSlot, _Component);
        function HexSlot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "data", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "neighbor", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "visualControl", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "visual", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inactiveEditorVisual", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "childPiecesStackNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragComponent", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canMovePieceStack", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isAnimationLocked", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "possibleMatches", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hasPossibleMatches", _descriptor19, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HexSlot.prototype;
        //#endregion   
        _proto.initilize = function initilize(x, y) {
          this.data.x = x;
          this.data.y = y;
        };
        _proto.onLoad = function onLoad() {
          this.setSlotActive(false);
        };
        _proto.loadUpdatePiecesVisual = function loadUpdatePiecesVisual() {
          // Clear existing children
          this.childPiecesStackNode.destroyAllChildren();
          this.visualControl.clearVisual();
          var thikness = 0.1;
          var spawnedSomething = false;
          var amountSpawned = 0;
          // Instantiate pieces and add them to the childPiecesStackNode
          for (var i = 0; i < this.data.piecesStack.length; i++) {
            var pieceStack = this.data.piecesStack[i];
            if (pieceStack !== null) {
              if (pieceStack.isColor) {
                for (var j = 0; j < pieceStack.amount; j++) {
                  //console.log(`(${this.data.x},${this.data.y}) loadUpdatePiecesVisual() isColor: ${pieceStack.isColor}`);
                  var piecePrefab = Singleton.get(HexGridController).getPrefabFromColor(pieceStack.pieceColor);
                  var newPiece = instantiate(piecePrefab);
                  amountSpawned++;
                  this.visualControl.addPiece(newPiece.getComponent(HexPiece));
                  newPiece.setParent(this.childPiecesStackNode);
                  newPiece.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + thikness * amountSpawned, this.node.worldPosition.z);
                  spawnedSomething = true;
                }
              } else {
                var _piecePrefab = Singleton.get(HexGridController).getPrefabFromObstacle(pieceStack.obstacleType);
                var _newPiece = instantiate(_piecePrefab);
                amountSpawned++;
                _newPiece.setParent(this.childPiecesStackNode);
                _newPiece.setWorldPosition(this.node.worldPosition.x, this.node.worldPosition.y + thikness * amountSpawned, this.node.worldPosition.z);
                spawnedSomething = true;
              }
            }
          }
          this.updateActiveSlotVisual(this.data.isActiveSlot);

          // If this slot has pieces, make it active
          if (spawnedSomething) {
            this.setSlotActive(true);
            this.updateNodeName();
          }
        };
        _proto.setSlotActive = function setSlotActive(value) {
          this.data.isActiveSlot = value;
          this.updateActiveSlotVisual(value);
        };
        _proto.updateActiveSlotVisual = function updateActiveSlotVisual(value) {
          this.visual.active = value;
        };
        _proto.setPiecesStack = function setPiecesStack(piecesStack) {
          this.data.piecesStack = [];
          this.data.piecesStack = piecesStack;
          this.loadUpdatePiecesVisual();
        };
        _proto.getData = function getData() {
          return this.data;
        };
        _proto.setData = function setData(data) {
          this.data = data;
        }

        //#region Movement and Merge
        ;

        _proto.explodeTower = function explodeTower(callback) {
          var _this2 = this;
          //Lock this stack?
          this.isAnimationLocked = true;

          //Lock interaction
          this.setCurrentInteractionMode(DragDropMode.Disabled);
          this.visualControl.explodeTower(this.getTopStack().amount, function () {
            return _this2.onExplodeAnimationFinished(callback);
          });
          this.updateNodeName();
        };
        _proto.onExplodeAnimationFinished = function onExplodeAnimationFinished(callback) {
          this.removeTopStack();

          //this.data.isActiveSlot = true;
          this.isAnimationLocked = false;
          if (this.data.piecesStack.length == 0) {
            this.setCurrentInteractionMode(DragDropMode.Drop);
          }
          this.updateNodeName();
          if (callback) callback();
        };
        _proto.getTopStack = function getTopStack() {
          return this.data.piecesStack[this.data.piecesStack.length - 1];
        };
        _proto.removeTopStack = function removeTopStack() {
          this.data.piecesStack.splice(this.data.piecesStack.length - 1);
          this.updateNodeName();
        };
        _proto.removeLock = function removeLock() {
          this.removeTopStack();
          //this.visualControl.
          this.loadUpdatePiecesVisual();
          if (this.data.piecesStack.length == 0) this.setCurrentInteractionMode(DragDropMode.Drop);
        };
        _proto.addTopStack = function addTopStack(stack) {
          if (this.getTopStack().pieceColor === stack.pieceColor) {
            this.getTopStack().amount += stack.amount;
          } else {
            this.data.piecesStack.push(stack);
          }
          this.updateNodeName();
        };
        _proto.isSingleColor = function isSingleColor() {
          if (this.data.piecesStack.length == 1) return true;else return false;
        };
        _proto.isMultiColor = function isMultiColor() {
          if (this.data.piecesStack.length > 1) return true;else return false;
        };
        _proto.getColorAmount = function getColorAmount() {
          return this.data.piecesStack.length;
        };
        _proto.isEmpty = function isEmpty() {
          return this.getColorAmount() == 0;
        };
        _proto.updatePossibleNeighborMatches = function updatePossibleNeighborMatches() {
          //acho que vou passar isso pro NeightborController
          this.hasPossibleMatches = false;
          this.possibleMatches = [];

          //If it is "locked"
          if (this.isAnimationLocked) return;
          if (this.getTopStack() == null) return;

          //Doesn't check neighboors for obstacles?
          if (!this.getTopStack().isColor) return;
          var thisTopColor = this.getTopStack().pieceColor;
          var allWithStacks = this.neighbor.getAllContainingStacks();
          for (var i = 0; i < allWithStacks.length; i++) {
            var element = allWithStacks[i];
            var neighborTopStack = element.getTopStack();
            var isLocked = element.isAnimationLocked;
            if (neighborTopStack.isColor && neighborTopStack.pieceColor === thisTopColor && !isLocked) {
              this.possibleMatches.push(element);
              // Mark this as a slot with possible matches
              this.hasPossibleMatches = true;
            }
          }
        }

        //#endregion
        ;

        _proto.clickSlot = function clickSlot() {
          var _this3 = this;
          console.log("clickSlot() Clicked on slot: " + this.node.name);
          Singleton.get(HexGridController).watchAdPlaceholder(function () {
            return _this3.removeAd();
          });
        };
        _proto.removeAd = function removeAd() {
          //Put animation here?
          this.data.piecesStack = [];
          this.loadUpdatePiecesVisual();
          this.setCurrentInteractionMode(DragDropMode.Drop);
        };
        _proto.updateData = function updateData(isActiveSlot, piecesStack) {
          this.data.isActiveSlot = isActiveSlot;
          this.data.piecesStack = [];
          this.data.piecesStack = piecesStack;
        };
        _proto.setCurrentInteractionMode = function setCurrentInteractionMode(mode) {
          this.dragComponent.setCurrenMode(mode);
        };
        _proto.debugToggleSelection = function debugToggleSelection(active) {
          var meshRenderer = this.visual.getComponent(MeshRenderer);
          if (meshRenderer) {
            // Save these when starting
            var pass = meshRenderer.material.passes[0];
            var hColor = pass.getHandle('albedo');
            // inside update function

            if (active) pass.setUniform(hColor, Color.CYAN);else pass.setUniform(hColor, Color.WHITE);
          }
        };
        _proto.updateNodeName = function updateNodeName() {
          return;
        };
        _createClass(HexSlot, [{
          key: "debug_RandomizePieces",
          get:
          //#endregion
          //#region DEBUG
          function get() {
            return false;
          },
          set: function set(v) {
            var randomColorCombinations = randomRange(2, 3);
            for (var i = 0; i < randomColorCombinations; i++) {
              var newPieceStack = new PieceStack();
              newPieceStack.pieceColor = randomRangeInt(1, 6);
              newPieceStack.amount = randomRangeInt(2, 5);
              this.data.piecesStack.push(newPieceStack);
            }
            this.loadUpdatePiecesVisual();
          }
        }, {
          key: "debug_ClearStack",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.data.piecesStack = [];
            this.loadUpdatePiecesVisual();
          }
        }, {
          key: "debug_MarkSlotActive",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.setSlotActive(true);
          }
        }, {
          key: "debug_loadUpdatePiecesVisual",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.loadUpdatePiecesVisual();
          }
        }, {
          key: "debug_MarkSlotSelected",
          get: function get() {
            return false;
          },
          set: function set(v) {
            return;
          }
        }, {
          key: "debug_MarkSlotNotSelect",
          get: function get() {
            return false;
          },
          set: function set(v) {
            return;
          }
        }, {
          key: "debug_ShowData",
          get: function get() {
            return false;
          },
          set: function set(v) {
            console.log(this.data);
            //console.log(`[${this.data.x}, ${this.data.y}] | ${this.data.piecesStack[ 0 ].amount} - ${PieceColor[ this.data.piecesStack[ 0 ].pieceColor ]}`);
          }
        }]);

        return HexSlot;
      }(Component), (_descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "data", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new HexData();
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "neighbor", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "visualControl", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class8.prototype, "visual", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class8.prototype, "inactiveEditorVisual", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class8.prototype, "childPiecesStackNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class8.prototype, "dragComponent", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class8.prototype, "canMovePieceStack", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class8.prototype, "isAnimationLocked", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class8.prototype, "debug_RandomizePieces", [_dec19], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_RandomizePieces"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_ClearStack", [_dec20], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_ClearStack"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_MarkSlotActive", [_dec21], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_MarkSlotActive"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_loadUpdatePiecesVisual", [_dec22], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_loadUpdatePiecesVisual"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_MarkSlotSelected", [_dec23], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_MarkSlotSelected"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_MarkSlotNotSelect", [_dec24], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_MarkSlotNotSelect"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "debug_ShowData", [_dec25], Object.getOwnPropertyDescriptor(_class8.prototype, "debug_ShowData"), _class8.prototype), _descriptor18 = _applyDecoratedDescriptor(_class8.prototype, "possibleMatches", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class8.prototype, "hasPossibleMatches", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class8)) || _class7));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexVisual.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HexPiece.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, tween, Vec3, math, Component, director, HexPiece;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Vec3 = module.Vec3;
      math = module.math;
      Component = module.Component;
      director = module.director;
    }, function (module) {
      HexPiece = module.HexPiece;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "afea9ggvM1J9YNwZRyzNVxP", "HexVisual", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HexVisual = exports('HexVisual', (_dec = ccclass('HexVisual'), _dec2 = property(), _dec3 = property(), _dec4 = property({
        type: [HexPiece]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HexVisual, _Component);
        function HexVisual() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "animationDuration", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "explodePieceDuration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pieces", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HexVisual.prototype;
        _proto.clearVisual = function clearVisual() {
          this.pieces = [];
        };
        _proto.addPiece = function addPiece(piece) {
          this.pieces.push(piece);
        };
        _proto.getTopPiece = function getTopPiece() {
          return this.pieces[this.pieces.length - 1];
        }

        //#region Explode Tower
        ;

        _proto.explodeTower = function explodeTower(size, callback) {
          //console.log("HexVisual.explodeTower()");

          var objs = [];
          var length = this.pieces.length - 1;
          for (var i = 0; i < size; i++) {
            var element = this.pieces[length - i].node;
            objs.push(element);
          }
          this.explodeTowerAnimation(objs, this.explodePieceDuration, callback);
        };
        _proto.explodeTowerAnimation = /*#__PURE__*/function () {
          var _explodeTowerAnimation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(objs, duration, callback) {
            var _iterator, _step, obj, _iterator2, _step2, _obj, length, i, element;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _iterator = _createForOfIteratorHelperLoose(objs);
                case 1:
                  if ((_step = _iterator()).done) {
                    _context.next = 7;
                    break;
                  }
                  obj = _step.value;
                  _context.next = 5;
                  return this.explodePiece(obj, duration);
                case 5:
                  _context.next = 1;
                  break;
                case 7:
                  //destroy all objs
                  for (_iterator2 = _createForOfIteratorHelperLoose(objs); !(_step2 = _iterator2()).done;) {
                    _obj = _step2.value;
                    _obj.destroy();
                  }
                  length = this.pieces.length - 1;
                  for (i = 0; i < objs.length; i++) {
                    element = this.pieces[length - i];
                    this.pieces.remove(element);
                  }
                  if (callback) {
                    callback();
                  }
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function explodeTowerAnimation(_x, _x2, _x3) {
            return _explodeTowerAnimation.apply(this, arguments);
          }
          return explodeTowerAnimation;
        }();
        _proto.explodePiece = function explodePiece(obj, duration) {
          return new Promise(function (resolve) {
            tween(obj).parallel(
            // Scale the object down to 0
            tween().to(duration, {
              scale: new Vec3(0, 0, 0)
            }, {
              easing: 'quadIn'
            }) // Scale down
            ).call(function () {
              resolve(); // Resolve the promise
            }).start();
          });
        }

        //#endregion

        //#region Move Pieces
        ;

        _proto.movePieces = function movePieces(size, targetPos, callback) {
          //console.log("HexVisual.movePieces()");

          var objs = [];
          var length = this.pieces.length - 1;
          for (var i = 0; i < size; i++) {
            var element = this.pieces[length - i].node;
            objs.push(element);
          }
          this.moveObjectsToPosition(objs, targetPos.worldPosition, this.animationDuration, callback);
        };
        _proto.moveObjectsToPosition = /*#__PURE__*/function () {
          var _moveObjectsToPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(objs, targetPos, duration, callback) {
            var _iterator3, _step3, obj, currentWorldPos, _iterator4, _step4, _obj2;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _iterator3 = _createForOfIteratorHelperLoose(objs);
                case 1:
                  if ((_step3 = _iterator3()).done) {
                    _context2.next = 11;
                    break;
                  }
                  obj = _step3.value;
                  obj.scale = new Vec3(1, 1, 1);

                  //console.log(`Moving object: ${obj.name} to ${targetPos}`);
                  currentWorldPos = obj.worldPosition.clone(); // Get the current global position
                  obj.setParent(director.getScene()); // Ensure the object is in the root of the scene
                  targetPos.y += 0.1;
                  _context2.next = 9;
                  return this.moveObjectToPosition(obj, currentWorldPos, targetPos, duration);
                case 9:
                  _context2.next = 1;
                  break;
                case 11:
                  //console.log("All objects have been moved in sequence.");

                  //destroy all objs
                  for (_iterator4 = _createForOfIteratorHelperLoose(objs); !(_step4 = _iterator4()).done;) {
                    _obj2 = _step4.value;
                    _obj2.destroy();
                  }
                  if (callback) {
                    callback();
                  }
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function moveObjectsToPosition(_x4, _x5, _x6, _x7) {
            return _moveObjectsToPosition.apply(this, arguments);
          }
          return moveObjectsToPosition;
        }();
        _proto.moveObjectToPosition = function moveObjectToPosition(obj, startPos, targetPos, duration) {
          var peakPos = targetPos.clone();
          peakPos.x = math.lerp(startPos.x, targetPos.x, 0.75); // Calculate peak position for a smooth jump
          peakPos.y += 0.3;
          var targetRotation = obj.eulerAngles.clone();
          targetRotation.z -= 180; // Rotate 180 degrees around the Z-axis

          return new Promise(function (resolve) {
            obj.setWorldPosition(startPos); // Ensure the object starts at the correct global position
            tween(obj).parallel(tween().to(duration * 0.75, {
              worldPosition: peakPos
            }, {
              easing: 'quadOut'
            }) // Move up
            .to(duration * 0.25, {
              worldPosition: targetPos
            }, {
              easing: 'quadIn'
            }),
            // Move down
            tween().to(duration, {
              eulerAngles: targetRotation
            }, {
              easing: 'linear'
            }) // Rotate
            ).call(function () {
              //console.log(`Destroying object: ${obj.name}`);
              //obj.destroy(); // Destroy the object after the animation ends
              resolve(); // Resolve the promise
            }).start();
          });
        }
        //#endregion
        ;

        return HexVisual;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animationDuration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.20;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "explodePieceDuration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.20;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pieces", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc', './Singleton.ts', './Game.ts', './AudioController.ts', './TweenSequence.ts', './EventOnNodeState.ts', './ProgressController.ts', './GameProgress.ts', './SimplePool.ts', './ObjectPool.ts', './LocalizedLabel.ts', './LocalizedRichText.ts', './LocalizationExtensions.ts', './InputKey.ts', './EventOnProgress.ts', './EventOnDelay.ts', './SfxPlayer.ts', './Wait.ts', './RaycastUtils.ts', './JsonUtils.ts', './CameraUtils.ts', './Action.ts', './Polymorphism.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('Singleton', module.Singleton);
    }, function (module) {
      exports('Game', module.Game);
    }, function (module) {
      exports('AudioController', module.AudioController);
    }, function (module) {
      exports('TweenSequence', module.TweenSequence);
    }, function (module) {
      exports('EventOnNodeState', module.EventOnNodeState);
    }, function (module) {
      exports('ProgressController', module.ProgressController);
    }, function (module) {
      exports('GameProgress', module.GameProgress);
    }, function (module) {
      exports('SimplePool', module.SimplePool);
    }, function (module) {
      exports('ObjectPool', module.ObjectPool);
    }, function (module) {
      exports('LocalizedLabel', module.LocalizedLabel);
    }, function (module) {
      exports('LocalizedRichText', module.LocalizedRichText);
    }, function (module) {
      exports('LocalizationExtensions', module.LocalizationExtensions);
    }, function (module) {
      exports('InputKey', module.InputKey);
    }, function (module) {
      exports('EventOnProgress', module.EventOnProgress);
    }, function (module) {
      exports('EventOnDelay', module.EventOnDelay);
    }, function (module) {
      exports('SfxPlayer', module.SfxPlayer);
    }, function (module) {
      exports('Wait', module.Wait);
    }, function (module) {
      exports('RaycastUtils', module.RaycastUtils);
    }, function (module) {
      exports('JsonUtils', module.JsonUtils);
    }, function (module) {
      exports('CameraUtils', module.CameraUtils);
    }, function (module) {
      exports('Action', module.Action);
    }, function (module) {
      exports('polymorphism', module.polymorphism);
    }],
    execute: function () {
      cclegacy._RF.push({}, "69769WrZ+dEvbUGbcjk0n2t", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Script, js, Asset;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Script = module.Script;
      js = module.js;
      Asset = module.Asset;
    }],
    execute: function () {
      exports('bh', void 0);
      cclegacy._RF.push({}, "92ec6nW85hK3pRCxzJ+nj+u", "index", undefined);
      var serializable = _decorator.serializable,
        property = _decorator.property,
        ccclass = _decorator.ccclass;
      var bh;
      (function (_bh, _dec, _dec2, _class, _class2, _descriptor) {
        /**
         * 标记类为scriptable
         * @param name 
         * @returns 
         */
        function scriptable(name) {
          var cccdec = ccclass(name);
          return function (target) {
            var decedClas = cccdec(target);
            if (js.isChildClassOf(decedClas, bh.ScriptableAsset)) {
              // @ts-ignore
              var frame = cc._RF.peek();
              if (frame.uuid) {
                js._setClassId(frame.uuid, decedClas);
                // end.prototype["__scriptUuid"] = EditorExtends.UuidUtils.decompressUuid(frame.uuid);
              }
            }

            return decedClas;
          };
        }
        _bh.scriptable = scriptable;
        /**
         * 用于ScriptableAsset字段的属性装饰器
         */
        function scriptableAsset(target, propertyKey, descriptorOrInitializer, opt) {
          opt = Object.assign(opt ? opt : {}, {
            type: bh.ScriptableAsset
          });
          if (target && propertyKey) {
            // @scriptableAsset
            property(opt)(target, propertyKey, descriptorOrInitializer);
            return undefined;
          } else if (target === undefined) {
            // @scriptableAsset()
            return property(opt);
          } else if (typeof target === "boolean") {
            //  @scriptableAsset(true|false)

            if (target) {
              opt = Object.assign(opt ? opt : {}, {
                type: [bh.ScriptableAsset]
              });
              return property(opt);
            }
            return property(opt);
          } else {
            //  @scriptableAsset(any)
            return property(opt);
          }
        }
        _bh.scriptableAsset = scriptableAsset;
        function createAssetMenu(fileName, menuPath, desc, order) {
          return function (ctor) {
            // 

            return;
            // console.log(`注册创建资源菜单项完成,${className}`, TI.saEditor);
          };
        }

        _bh.createAssetMenu = createAssetMenu;
        var ScriptableAsset = (_dec = ccclass("ScriptableAsset"), _dec2 = property({
          displayName: "Script",
          type: Script,
          tooltip: "scriptable_asset_script",
          animatable: false
        }), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
          _inheritsLoose(ScriptableAsset, _Asset);
          function ScriptableAsset() {
            var _this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
            _initializerDefineProperty(_this, "__scriptUuid", _descriptor, _assertThisInitialized(_this));
            return _this;
          }
          ScriptableAsset.createInstance = function createInstance(clas) {
            return clas ? new clas() : new this();
          }
          /**
           * 运行时保存asset，需要有uuid
           * @param asset 
           */;
          ScriptableAsset.saveAsset = function saveAsset(asset) {
            {
              console.warn("env is not in Editor,please use api in Editor");
            }
          }
          /**
           * 创建指定类型的ScriptableAsset
           * @param assetType 
           * @param filePath 无需后缀
           */;
          ScriptableAsset.createAsset = /*#__PURE__*/
          function () {
            var _createAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(assetType, filePath) {
              var pkgJson, pkgName, scriptable_asset_ext, url;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    {
                      _context.next = 14;
                      break;
                    }
                  case 4:
                    pkgJson = require("../../../package.json");
                    pkgName = pkgJson.name || "scriptable-asset";
                    scriptable_asset_ext = pkgJson.__scriptable_asset_ext || ".asset";
                    url = "db://assets/" + filePath + scriptable_asset_ext;
                    _context.next = 10;
                    return Editor.Message.request('scene', 'execute-scene-script', {
                      name: pkgName,
                      method: "createScriptableAsset",
                      args: [url, js.getClassName(assetType)]
                    });
                  case 10:
                    _context.sent;
                    return _context.abrupt("return");
                  case 14:
                    console.warn("env is not in Editor,please use api in Editor");
                  case 15:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            function createAsset(_x, _x2) {
              return _createAsset.apply(this, arguments);
            }
            return createAsset;
          }()
          /**
           * 将资源保存到磁盘
           */;

          var _proto = ScriptableAsset.prototype;
          _proto.saveAsset = function saveAsset() {
            ScriptableAsset.saveAsset(this);
          };
          _createClass(ScriptableAsset, [{
            key: "__scriptAsset",
            get: function get() {
              return null;
            }
          }]);
          return ScriptableAsset;
        }(Asset), (_applyDecoratedDescriptor(_class2.prototype, "__scriptAsset", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "__scriptAsset"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "__scriptUuid", [serializable], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class);
        _bh.ScriptableAsset = ScriptableAsset;
      })(bh || (bh = exports('bh', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InputKey.ts", ['cc'], function (exports) {
  var cclegacy, Input;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Input = module.Input;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "42306Phc9hKXJUydQByTR3d", "InputKey", undefined);
      var InputKey = exports('InputKey', function InputKey() {});
      _class = InputKey;
      InputKey.inputInstance = new Input();
      InputKey.Up = {
        on: function on(keyCode, callback) {
          _class.inputInstance.on(Input.EventType.KEY_UP, function (event) {
            if (event.keyCode === keyCode) {
              callback();
            }
          }, _class);
        }
      };
      InputKey.Down = {
        on: function on(keyCode, callback) {
          _class.inputInstance.on(Input.EventType.KEY_DOWN, function (event) {
            if (event.keyCode === keyCode) {
              callback();
            }
          }, _class);
        }
      };
      InputKey.Pressing = {
        on: function on(keyCode, callback) {
          _class.inputInstance.on(Input.EventType.KEY_PRESSING, function (event) {
            if (event.keyCode === keyCode) {
              callback();
            }
          }, _class);
        }
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonUtils.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2fd5dThZoxBzJIrg3jddLHN", "JsonUtils", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JsonUtils = exports('JsonUtils', (_dec = ccclass('JsonUtils'), _dec(_class = function JsonUtils() {}) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LayerCheckerTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Layers, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Layers = module.Layers;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "1f4027+dCFAla6NQlMuUfB2", "LayerCheckerTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LayerCheckerTest = exports('LayerCheckerTest', (_dec = ccclass('LayerCheckerTest'), _dec2 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: Number,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: Number,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: String,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LayerCheckerTest, _Component);
        function LayerCheckerTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "currentNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layerCode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layerNumber", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layerName", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LayerCheckerTest.prototype;
        _proto.start = function start() {
          this.checkLayer();
        };
        _proto.checkLayer = function checkLayer() {
          var code = this.node.layer;
          var numberString = this.getLayerIndices(code);
          var name = Layers.layerToName(numberString[0]); // 0 == Custom0 == DraggableSlot
          console.log(this.node.name + " Layer number is: " + code + " |" + numberString + "| Layer name: " + name);
          this.layerCode = code;
          this.layerName = "" + name;
          this.node.name = this.node.name + " [" + name + " - " + code + "]";
        };
        _proto.getLayerName = function getLayerName(layer) {
          for (var key in Layers.Enum) {
            if (Layers.Enum[key] === layer) {
              return key;
            }
          }
          return "Unknown";
        }

        /**
        * Converts a layer bitmask to an array of layer indices (0 to 31).
        */;
        _proto.getLayerIndices = function getLayerIndices(layerBitmask) {
          var indices = [];
          for (var i = 0; i < 32; i++) {
            if (layerBitmask & 1 << i) {
              indices.push(i);
            }
          }
          return indices;
        };
        _createClass(LayerCheckerTest, [{
          key: "pressBooleanButton",
          get:
          // Example of a simple type of "editor button" we can use
          function get() {
            return false;
          },
          set: function set(v) {
            this.checkLayer();
          }
        }]);
        return LayerCheckerTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layerCode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layerNumber", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "layerName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Null';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "pressBooleanButton", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "pressBooleanButton"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelAsset.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Vec2, bh;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec2 = module.Vec2;
    }, function (module) {
      bh = module.bh;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class7, _class8, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "7a38eQYqfRFmJyEs+YSnUwu", "LevelAsset", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AddRule = exports('AddRule', /*#__PURE__*/function (AddRule) {
        AddRule[AddRule["None"] = 0] = "None";
        AddRule[AddRule["AddNewRule"] = 1] = "AddNewRule";
        return AddRule;
      }({}));
      var ObstacleType = exports('ObstacleType', /*#__PURE__*/function (ObstacleType) {
        ObstacleType[ObstacleType["Ad"] = 1] = "Ad";
        ObstacleType[ObstacleType["Lock"] = 2] = "Lock";
        ObstacleType[ObstacleType["Wood"] = 3] = "Wood";
        return ObstacleType;
      }({}));
      var ObjectiveType = exports('ObjectiveType', /*#__PURE__*/function (ObjectiveType) {
        ObjectiveType[ObjectiveType["MergePieces"] = 0] = "MergePieces";
        ObjectiveType[ObjectiveType["DestroyWood"] = 1] = "DestroyWood";
        return ObjectiveType;
      }({}));
      var ObjectiveData = exports('ObjectiveData', (_dec = ccclass('ObjectiveData'), _dec2 = property({
        type: Enum(ObjectiveType)
      }), _dec3 = property({
        type: Number
      }), _dec(_class = (_class2 = function ObjectiveData() {
        _initializerDefineProperty(this, "type", _descriptor, this);
        _initializerDefineProperty(this, "amount", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ObjectiveType.MergePieces;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      var PieceColor = exports('PieceColor', /*#__PURE__*/function (PieceColor) {
        PieceColor[PieceColor["Red"] = 1] = "Red";
        PieceColor[PieceColor["Blue"] = 2] = "Blue";
        PieceColor[PieceColor["Green"] = 3] = "Green";
        PieceColor[PieceColor["Purple"] = 4] = "Purple";
        PieceColor[PieceColor["Orange"] = 5] = "Orange";
        PieceColor[PieceColor["Black"] = 6] = "Black";
        return PieceColor;
      }({}));
      var RuleExpiritionType = exports('RuleExpiritionType', /*#__PURE__*/function (RuleExpiritionType) {
        RuleExpiritionType[RuleExpiritionType["Never"] = 0] = "Never";
        RuleExpiritionType[RuleExpiritionType["AfterNumberOfMatchedPieces"] = 1] = "AfterNumberOfMatchedPieces";
        RuleExpiritionType[RuleExpiritionType["AfterNumberOfOptionTrays"] = 2] = "AfterNumberOfOptionTrays";
        RuleExpiritionType[RuleExpiritionType["AfterTheObjectiveReacherPercentage"] = 3] = "AfterTheObjectiveReacherPercentage";
        RuleExpiritionType[RuleExpiritionType["AfterSpecificObjectiveIsCompleted"] = 4] = "AfterSpecificObjectiveIsCompleted";
        return RuleExpiritionType;
      }({})); // this rule expires after a specific objective is completed
      var LevelRuleSet = exports('LevelRuleSet', (_dec4 = ccclass('LevelRuleSet'), _dec5 = property({
        type: Enum(RuleExpiritionType)
      }), _dec6 = property({
        type: Number
      }), _dec7 = property({
        type: [Enum(PieceColor)]
      }), _dec8 = property({
        type: Vec2
      }), _dec9 = property({
        type: Vec2
      }), _dec4(_class4 = (_class5 = function LevelRuleSet() {
        _initializerDefineProperty(this, "type", _descriptor3, this);
        _initializerDefineProperty(this, "ruleValue", _descriptor4, this);
        _initializerDefineProperty(this, "colorsAllowed", _descriptor5, this);
        _initializerDefineProperty(this, "colorCombinationsAllowed", _descriptor6, this);
        _initializerDefineProperty(this, "stackAmountAllowed", _descriptor7, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "type", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RuleExpiritionType.Never;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "ruleValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "colorsAllowed", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [PieceColor.Red];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "colorCombinationsAllowed", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 1);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "stackAmountAllowed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(3, 5);
        }
      })), _class5)) || _class4));
      var LevelAsset = exports('LevelAsset', (_dec10 = bh.createAssetMenu("level-0001", "LevelEditor/LevelAsset"), _dec11 = bh.scriptable('LevelAsset'), _dec12 = property({
        multiline: true
      }), _dec13 = property({
        type: [ObjectiveData]
      }), _dec14 = property({
        type: [LevelRuleSet]
      }), _dec15 = property({
        type: Enum(AddRule)
      }), _dec10(_class7 = _dec11(_class7 = (_class8 = /*#__PURE__*/function (_bh$ScriptableAsset) {
        _inheritsLoose(LevelAsset, _bh$ScriptableAsset);
        function LevelAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _bh$ScriptableAsset.call.apply(_bh$ScriptableAsset, [this].concat(args)) || this;
          // As pieces do grid foram salvas aqui de alguma forma//
          _initializerDefineProperty(_this, "gridSavedAsJson", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectives", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionTrayRules", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        _createClass(LevelAsset, [{
          key: "Action",
          get: function get() {
            return AddRule.None;
          },
          set: function set(value) {
            switch (value) {
              case AddRule.AddNewRule:
                var wrapper = new LevelRuleSet();
                if (this.optionTrayRules.length > 0) {
                  var last = this.optionTrayRules[this.optionTrayRules.length - 1];
                  wrapper = last;
                }
                this.optionTrayRules.push(wrapper);
                console.log("New rule added");
                break;
            }
            this.saveAsset();
          }
        }]);
        return LevelAsset;
      }(bh.ScriptableAsset), (_descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "gridSavedAsJson", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "objectives", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new ObjectiveData()];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "optionTrayRules", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class8.prototype, "Action", [_dec15], Object.getOwnPropertyDescriptor(_class8.prototype, "Action"), _class8.prototype)), _class8)) || _class7) || _class7));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './ObjectivesController.ts', './OptionsTray.ts', './ObstaclesController.ts', './LevelAsset.ts', './TurnController.ts', './ComboController.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, ObjectivesController, OptionsTray, ObstaclesController, LevelAsset, LevelRuleSet, RuleExpiritionType, ObjectiveType, TurnController, ComboController, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, null, function (module) {
      ObjectivesController = module.ObjectivesController;
    }, function (module) {
      OptionsTray = module.OptionsTray;
    }, function (module) {
      ObstaclesController = module.ObstaclesController;
    }, function (module) {
      LevelAsset = module.LevelAsset;
      LevelRuleSet = module.LevelRuleSet;
      RuleExpiritionType = module.RuleExpiritionType;
      ObjectiveType = module.ObjectiveType;
    }, function (module) {
      TurnController = module.TurnController;
    }, function (module) {
      ComboController = module.ComboController;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "779e3e9blVLa6hCrN8DoTgR", "LevelController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelController = exports('LevelController', (_dec = ccclass('LevelController'), _dec2 = property({
        type: LevelAsset
      }), _dec3 = property({
        type: LevelRuleSet
      }), _dec4 = property(), _dec5 = property({
        type: [LevelRuleSet]
      }), _dec6 = property({
        type: ObjectivesController,
        group: 'Components'
      }), _dec7 = property({
        type: ObstaclesController,
        group: 'Components'
      }), _dec8 = property({
        type: OptionsTray,
        group: 'Components'
      }), _dec9 = property({
        type: TurnController,
        group: 'Components'
      }), _dec10 = property({
        type: ComboController,
        group: 'Components'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelController, _Component);
        function LevelController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "currentLevelAsset", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentRuleSet", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentRuleId", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadedRules", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectivesControl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstaclesControl", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionsTray", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turnControl", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comboControl", _descriptor9, _assertThisInitialized(_this));
          _this.onNewOptiontrayGeneratedLambda = void 0;
          _this.onMergedPiecesAmountUpdateLambda = void 0;
          _this.onMergedPiecesPercentUpdateLambda = void 0;
          _this.onSpecificObjetiveCompletedLambda = void 0;
          return _this;
        }
        var _proto = LevelController.prototype;
        _proto.initialize = function initialize(levelAsset) {
          Singleton.set(this);
          this.currentLevelAsset = levelAsset;
          this.loadedRules = this.currentLevelAsset.optionTrayRules;
          this.optionsTray.initialize();
          this.turnControl.initialize();
          this.comboControl.initialize();
          this.objectivesControl.initialize(this.currentLevelAsset.objectives);
          this.obstaclesControl.initialize(this.objectivesControl);
          this.setEvents();
        };
        _proto.setEvents = function setEvents() {
          var _this2 = this;
          this.onNewOptiontrayGeneratedLambda = function (num) {
            _this2.handleOnNewOptiontrayGenerated(num);
          };
          this.onMergedPiecesAmountUpdateLambda = function (num) {
            _this2.handleOnMergedPiecesAmountUpdate(num);
          };
          this.onMergedPiecesPercentUpdateLambda = function (num) {
            _this2.handleOnObjectivesPercentUpdate(num);
          };
          this.onSpecificObjetiveCompletedLambda = function (num) {
            _this2.handleOnObjectivesCompleted(num);
          };
        };
        _proto.getLocks = function getLocks() {
          return this.obstaclesControl.getLocks();
        };
        _proto.startLevel = function startLevel() {
          console.log("GameplayController.startLevel()");
          this.currentRuleId = 0;
          this.updateRuleSet();
          this.optionsTray.generateNewOptionsTray();
        };
        _proto.nextRound = function nextRound() {
          //RoundId ++
          //Load another options Tray
          //Maybe make a round controller

          this.optionsTray.generateNewOptionsTray();
        };
        _proto.nextRuleSet = function nextRuleSet() {
          this.endCurrentRuleSet();
          this.currentRuleId++;
          this.updateRuleSet();
        };
        _proto.updateRuleSet = function updateRuleSet() {
          this.currentRuleSet = this.currentLevelAsset.optionTrayRules[this.currentRuleId];
          this.optionsTray.updateRuleSet(this.currentRuleSet);
          if (this.currentRuleSet.type == RuleExpiritionType.AfterNumberOfOptionTrays) {
            this.optionsTray.onNewTrayGenerated.addListener(this.onNewOptiontrayGeneratedLambda);
          } else if (this.currentRuleSet.type == RuleExpiritionType.AfterNumberOfMatchedPieces) {
            var objetiveId = this.objectivesControl.getIdByObjective(ObjectiveType.MergePieces);
            this.objectivesControl.trackedObjectives[objetiveId].onAmountChanged.addListener(this.onMergedPiecesAmountUpdateLambda);
          } else if (this.currentRuleSet.type == RuleExpiritionType.AfterTheObjectiveReacherPercentage) {
            var _objetiveId = this.objectivesControl.getIdByObjective(ObjectiveType.MergePieces);
            this.objectivesControl.trackedObjectives[_objetiveId].onPercentChanged.addListener(this.onMergedPiecesPercentUpdateLambda);
          } else if (this.currentRuleSet.type == RuleExpiritionType.AfterSpecificObjectiveIsCompleted) {
            var firstConvertion = this.currentLevelAsset.objectives[this.currentRuleSet.ruleValue - 1].type;
            var _objetiveId2 = this.objectivesControl.getIdByObjective(firstConvertion);
            this.objectivesControl.trackedObjectives[_objetiveId2].onObjectiveCompleted.addListener(this.onSpecificObjetiveCompletedLambda);
          }
        };
        _proto.endCurrentRuleSet = function endCurrentRuleSet() {
          if (this.currentRuleSet.type == RuleExpiritionType.AfterNumberOfOptionTrays) {
            this.optionsTray.onNewTrayGenerated.removeListener(this.onNewOptiontrayGeneratedLambda);
          } else if (this.currentRuleSet.type == RuleExpiritionType.AfterNumberOfMatchedPieces) {
            var objetiveId = this.objectivesControl.getIdByObjective(ObjectiveType.MergePieces);
            this.objectivesControl.trackedObjectives[objetiveId].onAmountChanged.removeListener(this.onMergedPiecesAmountUpdateLambda);
          } else if (this.currentRuleSet.type == RuleExpiritionType.AfterTheObjectiveReacherPercentage) {
            var _objetiveId3 = this.objectivesControl.getIdByObjective(ObjectiveType.MergePieces);
            this.objectivesControl.trackedObjectives[_objetiveId3].onPercentChanged.removeListener(this.onMergedPiecesPercentUpdateLambda);
          } else if (this.currentRuleSet.type == RuleExpiritionType.AfterSpecificObjectiveIsCompleted) {
            var firstConvertion = this.currentLevelAsset.objectives[this.currentRuleSet.ruleValue - 1].type;
            var _objetiveId4 = this.objectivesControl.getIdByObjective(firstConvertion);
            this.objectivesControl.trackedObjectives[_objetiveId4].onObjectiveCompleted.removeListener(this.onSpecificObjetiveCompletedLambda);
          }
        }

        //#region Events
        ;

        _proto.handleOnNewOptiontrayGenerated = function handleOnNewOptiontrayGenerated(count) {
          console.log("LevelController.handleOnNewOptiontrayGenerated " + count);
          if (this.currentRuleSet.type == RuleExpiritionType.AfterNumberOfOptionTrays) {
            if (count === this.currentRuleSet.ruleValue) {
              //Move to next rule  
              this.nextRuleSet();
            }
          }
        };
        _proto.handleOnMergedPiecesAmountUpdate = function handleOnMergedPiecesAmountUpdate(amount) {
          console.log("LevelController.handleOnMergedPiecesAmountUpdate " + amount);
          if (amount >= this.currentRuleSet.ruleValue) {
            this.nextRuleSet();
          }
        };
        _proto.handleOnObjectivesPercentUpdate = function handleOnObjectivesPercentUpdate(percent) {
          var convertedPercent = percent * 100;
          console.log("LevelController.handleOnObjectivesPercentUpdate " + percent + " = " + convertedPercent + "%");
          if (convertedPercent >= this.currentRuleSet.ruleValue) {
            this.nextRuleSet();
          }
        };
        _proto.handleOnObjectivesCompleted = function handleOnObjectivesCompleted(id) {
          var convertedName = id;
          console.log("LevelController.handleOnObjectivesCompleted " + id + " = " + ObjectiveType[convertedName]);
          if (convertedName == this.currentRuleSet.ruleValue) {
            this.nextRuleSet();
          }
        }
        //#endregion
        ;

        return LevelController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentLevelAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentRuleSet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentRuleId", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadedRules", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "objectivesControl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "obstaclesControl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "optionsTray", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "turnControl", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "comboControl", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelEditorController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelAsset.ts', './EditorRulesController.ts', './index.ts', './HexSlot.ts', './EditorStackController.ts', './HexGridController.ts', './EditorObjectivesController.ts', './GameplayController.ts', './OptionsTray.ts', './UI_GameplayHUD.ts', './Singleton.ts', './RaycastUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Camera, Node, input, Input, KeyCode, find, EventMouse, Layers, Component, LevelAsset, EditorRulesController, HexSlot, EditorStackController, HexGridController, EditorObjectivesController, GameplayController, OptionsTray, UI_GameplayHUD, Singleton, RaycastUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      find = module.find;
      EventMouse = module.EventMouse;
      Layers = module.Layers;
      Component = module.Component;
    }, function (module) {
      LevelAsset = module.LevelAsset;
    }, function (module) {
      EditorRulesController = module.EditorRulesController;
    }, null, function (module) {
      HexSlot = module.HexSlot;
    }, function (module) {
      EditorStackController = module.EditorStackController;
    }, function (module) {
      HexGridController = module.HexGridController;
    }, function (module) {
      EditorObjectivesController = module.EditorObjectivesController;
    }, function (module) {
      GameplayController = module.GameplayController;
    }, function (module) {
      OptionsTray = module.OptionsTray;
    }, function (module) {
      UI_GameplayHUD = module.UI_GameplayHUD;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      RaycastUtils = module.RaycastUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "010e1uVH+NGaaJWBZCUd+XU", "LevelEditorController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelEditorController = exports('LevelEditorController', (_dec = ccclass('LevelEditorController'), _dec2 = property({
        type: Boolean,
        group: 'Debug'
      }), _dec3 = property({
        group: 'Debug'
      }), _dec4 = property({
        type: LevelAsset
      }), _dec5 = property({
        type: EditorRulesController,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: EditorStackController,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: EditorObjectivesController,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: OptionsTray,
        group: {
          name: "Components"
        }
      }), _dec9 = property({
        type: Camera,
        group: 'Runtime'
      }), _dec10 = property({
        type: HexGridController,
        group: 'Runtime'
      }), _dec11 = property({
        type: Node,
        group: 'Runtime'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelEditorController, _Component);
        function LevelEditorController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region DEBUG
          _initializerDefineProperty(_this, "isGameplayMode", _descriptor, _assertThisInitialized(_this));
          //#endregion
          //#region Variables
          _initializerDefineProperty(_this, "currentLevelAsset", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rulesController", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackController", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectivesController", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "previewTray", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hexGridController", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiParent", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LevelEditorController.prototype;
        //#endregion
        _proto.onLoad = function onLoad() {
          Singleton.set(this);
        };
        _proto.start = function start() {
          this.findComponents();
          this.objectivesController.initialize(this.currentLevelAsset.objectives);
          this.rulesController.initialize(this.currentLevelAsset.optionTrayRules);
          this.stackController.initialize(this.currentLevelAsset);
          this.hexGridController.setLevelAsset(this.currentLevelAsset);
          this.hexGridController.loadGridData();
          input.on(Input.EventType.MOUSE_DOWN, this.mouseClick, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          if (this.isGameplayMode) {
            this.start_level = true;
          } else {
            this.uiParent.active = false;
          }
        };
        _proto.onKeyDown = function onKeyDown(event) {
          if (this.isGameplayMode) return;
          if (event.keyCode === KeyCode.SPACE) {
            this.start_level = true;
          }
        };
        _proto.findComponents = function findComponents() {
          if (!this.camera) {
            var cameraNode = find('Main Camera'); // Replace 'Main Camera' with the name of your camera node
            if (cameraNode) {
              this.camera = cameraNode.getComponent(Camera);
              if (!this.camera) {
                console.error("Camera component not found on the node.");
              }
            } else {
              console.error("Camera node not found.");
            }
          }
          this.hexGridController = Singleton.get(HexGridController);
          this.uiParent = Singleton.get(UI_GameplayHUD).node.parent;
        };
        _proto.saveLevelConfigs = function saveLevelConfigs(saveGrid) {
          if (saveGrid === void 0) {
            saveGrid = false;
          }
          if (!this.currentLevelAsset) {
            return;
          }
          console.log("<SAVE> LevelEditorController.saveLevelConfigs()");
          if (saveGrid) Singleton.get(HexGridController).saveGridData();
          this.currentLevelAsset.saveAsset();
        };
        _proto.updateRuleset = function updateRuleset(loadedRules) {
          if (loadedRules === void 0) {
            loadedRules = [];
          }
          //console.log("LevelEditorController.updateRuleset()");
          this.currentLevelAsset.optionTrayRules = loadedRules;
          this.saveLevelConfigs();
        };
        _proto.updateObjectives = function updateObjectives(objectives) {
          this.currentLevelAsset.objectives = objectives;
          this.saveLevelConfigs();
        };
        _proto.getListOfObjectives = function getListOfObjectives() {
          var objectives = [];
          for (var i = 0; i < this.currentLevelAsset.objectives.length; i++) {
            objectives.push(this.currentLevelAsset.objectives[i].type);
          }
          return objectives;
        }

        //#region Inputs
        ;

        _proto.mouseClick = function mouseClick(event) {
          if (this.isGameplayMode) return;
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            var slot = this.performRaycastExternal(event);
            if (slot !== null) {
              if (slot.getData().piecesStack.length > 0) return;
              slot.setSlotActive(!slot.data.isActiveSlot);
              this.saveLevelConfigs(true);
            }
          } else if (event.getButton() === EventMouse.BUTTON_RIGHT) {
            var _slot = this.performRaycastExternal(event);
            if (_slot !== null) {
              //TODO: Aqui vai ser pra abrir o menu de "editar stack de pieces"
              this.hexGridController.debug_DeselectAll = true;
              this.stackController.selectSlot(_slot);
            } else {
              this.hexGridController.debug_DeselectAll = true;
            }
          } else if (event.getButton() === EventMouse.BUTTON_MIDDLE) {
            var _slot2 = this.performRaycastExternal(event);
            if (_slot2 !== null) {
              //TODO: Aqui vai ser pra abrir o menu de "editar stack de pieces"
              _slot2.debug_RandomizePieces = true;
            }
          }
        }

        // TODO: Remover essa logica daqui e colocar dentro de um "LevelEditorController"
        ;

        _proto.performRaycastExternal = function performRaycastExternal(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var outResult = {
            result: null
          };
          var distance = 500;
          var layerMask = Layers.Enum.ALL; // Change this to the desired layer
          var success = RaycastUtils.mousePositionRaycast3D(event, this.camera, outResult, distance, layerMask);
          if (success && outResult.result) {
            var collider = outResult.result.collider;
            return collider.node.parent.getComponent(HexSlot);
          }
          return null;
        }
        //#endregion
        ;

        _createClass(LevelEditorController, [{
          key: "start_level",
          get: function get() {
            return false;
          },
          set: function set(v) {
            this.isGameplayMode = true;
            this.rulesController.node.active = false;
            this.stackController.node.active = false;
            this.previewTray.node.active = false;
            this.objectivesController.node.active = false;
            Singleton.get(GameplayController).currentLevelAsset = this.currentLevelAsset;
            Singleton.get(GameplayController).startLevel();
            this.uiParent.active = true;
          }
        }]);
        return LevelEditorController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isGameplayMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "start_level", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "start_level"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentLevelAsset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rulesController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "stackController", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "objectivesController", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "previewTray", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hexGridController", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "uiParent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalizationExtensions.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, assetManager, JsonAsset;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      JsonAsset = module.JsonAsset;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "e8a0dW9iulH17or5AxbdUPh", "LocalizationExtensions", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LanguageFunctionType = exports('LanguageFunctionType', /*#__PURE__*/function (LanguageFunctionType) {
        LanguageFunctionType[LanguageFunctionType["None"] = 0] = "None";
        LanguageFunctionType[LanguageFunctionType["Save"] = 1] = "Save";
        LanguageFunctionType[LanguageFunctionType["Load"] = 2] = "Load";
        LanguageFunctionType[LanguageFunctionType["CreateNewRandomKey"] = 3] = "CreateNewRandomKey";
        return LanguageFunctionType;
      }({}));
      var LocalizationExtensions = exports('LocalizationExtensions', (_dec = ccclass('LocalizationExtensions'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function LocalizationExtensions() {}
        LocalizationExtensions.getLanguageJson = function getLanguageJson(callback, langCode) {
          if (langCode === void 0) {
            langCode = 'en';
          }
          if (LocalizationExtensions.loadedLanguage !== null) {
            console.log('Already Loaded stuff:', LocalizationExtensions.loadedLanguage);
            if (callback) callback();
            return;
          }
          var bundleName = 'resources'; // Name of the bundle
          var jsonPath = 'language'; // Path within the bundle without the .json extension

          // Load the bundle
          assetManager.loadBundle(bundleName, function (err, bundle) {
            if (err) {
              console.error('Failed to load bundle:', err);
              return;
            }
            console.log('Bundle loaded successfully:', bundleName);

            // Load the JSON file from the bundle
            bundle.load(jsonPath, JsonAsset, function (err, jsonAsset) {
              if (err) {
                console.error('Failed to load JSON file:', err);
                return;
              }

              //console.log('JSON file loaded successfully:', jsonPath);
              // Assuming the JSON file is loaded as a JsonAsset
              var languageData = jsonAsset.json;
              LocalizationExtensions.loadedJson = jsonAsset;
              LocalizationExtensions.loadedLanguage = languageData[langCode];
              console.log('Loaded language data:', languageData);
              if (callback) callback();
            });
          });
        };
        LocalizationExtensions.localizeText = function localizeText(key) {
          console.log("LocalizationExtensions.localizeText() key " + key);
          if (LocalizationExtensions.loadedLanguage === null) {
            LocalizationExtensions.getLanguageJson(function () {
              return LocalizationExtensions.localizeText(key);
            });
            return "TNF " + key;
          }
          var mainText = "TNF " + key;
          if (LocalizationExtensions.loadedLanguage && LocalizationExtensions.loadedLanguage[key]) {
            mainText = LocalizationExtensions.loadedLanguage[key];
          }
          console.log("LocalizationExtensions.localizeText() text content: " + mainText);
          return mainText;
        };
        LocalizationExtensions.editorSaveToLanguageJson = function editorSaveToLanguageJson(key, value, langCode) {
          if (langCode === void 0) {
            langCode = 'en';
          }
          LocalizationExtensions.getLanguageJson(function () {
            var json = LocalizationExtensions.loadedJson.json;
            var node = json[langCode];
            node[key] = value;
            ///const languageJSONFilePath = 'language.json';
            //const langFilePath = join(assetManager.cacheManager.cacheDir, languageJSONFilePath);
            //if (existsSync(langFilePath)) {
            //    writeFileSync(langFilePath, JSON.stringify(json, null, 2));
            //
            console.log("<color=cyan>File language.json was updated</color>: <color=white>[" + key + "]: " + node[key] + "</color>");
            LocalizationExtensions.loadedJson.json = json;
            //}
          }, langCode);
        };
        return LocalizationExtensions;
      }(), _class2.loadedJson = null, _class2.loadedLanguage = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalizedLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './LocalizationExtensions.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Label, LanguageFunctionType, LocalizationExtensions;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
    }, null, function (module) {
      LanguageFunctionType = module.LanguageFunctionType;
      LocalizationExtensions = module.LocalizationExtensions;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9d0eamA2tdEYoRyhY5Gyo6x", "LocalizedLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LocalizedLabel = exports('LocalizedLabel', (_dec = ccclass('LocalizedLabel'), _dec2 = property({
        group: 'Localization',
        tooltip: 'The key to use for localization'
      }), _dec3 = property({
        type: Enum(LanguageFunctionType),
        group: 'Localization',
        tooltip: 'Localization and language functions'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Label) {
        _inheritsLoose(LocalizedLabel, _Label);
        function LocalizedLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Label.call.apply(_Label, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "key", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LocalizedLabel.prototype;
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _Label.prototype.onEnable.call(this);
          LocalizationExtensions.getLanguageJson(function () {
            _this2.updateText();
          });
        };
        _proto.updateText = function updateText() {
          this.string = LocalizationExtensions.localizeText(this.key);
        };
        _proto.setKey = function setKey(key) {
          this.key = key;
          this.updateText();
        };
        _createClass(LocalizedLabel, [{
          key: "runLanguageFunction",
          get: function get() {
            return LanguageFunctionType.None;
          },
          set: function set(value) {
            switch (value) {
              case LanguageFunctionType.Save:
                LocalizationExtensions.editorSaveToLanguageJson(this.key, this.string);
                console.log('Saved text!');
                break;
              case LanguageFunctionType.Load:
                this.updateText();
                console.log('Load text!');
                break;
              case LanguageFunctionType.CreateNewRandomKey:
                console.log('Random Key Created!');
                break;
            }
          }
        }]);
        return LocalizedLabel;
      }(Label), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "runLanguageFunction", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "runLanguageFunction"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalizedRichText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './LocalizationExtensions.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, RichText, LanguageFunctionType, LocalizationExtensions;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      RichText = module.RichText;
    }, null, function (module) {
      LanguageFunctionType = module.LanguageFunctionType;
      LocalizationExtensions = module.LocalizationExtensions;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2cb59hISJtPCYbmFKDID13+", "LocalizedRichText", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LocalizedRichText = exports('LocalizedRichText', (_dec = ccclass('LocalizedRichText'), _dec2 = property({
        group: 'Localization',
        tooltip: 'The key to use for localization'
      }), _dec3 = property({
        type: Enum(LanguageFunctionType),
        group: 'Localization',
        tooltip: 'Localization and language functions'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_RichText) {
        _inheritsLoose(LocalizedRichText, _RichText);
        function LocalizedRichText() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _RichText.call.apply(_RichText, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "key", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LocalizedRichText.prototype;
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _RichText.prototype.onEnable.call(this);
          LocalizationExtensions.getLanguageJson(function () {
            _this2.updateText();
          });
        };
        _proto.updateText = function updateText() {
          this.string = LocalizationExtensions.localizeText(this.key);
        };
        _proto.setKey = function setKey(key) {
          this.key = key;
          this.updateText();
        };
        _createClass(LocalizedRichText, [{
          key: "runLanguageFunction",
          get: function get() {
            return LanguageFunctionType.None;
          },
          set: function set(value) {
            switch (value) {
              case LanguageFunctionType.Save:
                LocalizationExtensions.editorSaveToLanguageJson(this.key, this.string);
                console.log('Saved text!');
                break;
              case LanguageFunctionType.Load:
                this.updateText();
                console.log('Load text!');
                break;
              case LanguageFunctionType.CreateNewRandomKey:
                console.log('Random Key Created!');
                break;
            }
          }
        }]);
        return LocalizedRichText;
      }(RichText), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "runLanguageFunction", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "runLanguageFunction"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LockObstacleSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HexSlot.ts', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, HexSlot, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      HexSlot = module.HexSlot;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "6203ajoAVpOw5Xt+Z+JKYUN", "LockObstacleSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LockObstacleSlot = exports('LockObstacleSlot', (_dec = ccclass('LockObstacleSlot'), _dec2 = property(), _dec3 = property(), _dec4 = property(), _dec5 = property({
        type: HexSlot
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LockObstacleSlot, _Component);
        function LockObstacleSlot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "currentAmount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mergedAmount", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxAmount", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetSlot", _descriptor4, _assertThisInitialized(_this));
          //onPausedLambda: (num: boolean) => void;
          _this.onCurrentAmountUpdate = new Action();
          return _this;
        }
        var _proto = LockObstacleSlot.prototype;
        _proto.initialize = function initialize(lockAmount) {
          this.maxAmount = lockAmount;
          this.currentAmount = lockAmount;
          this.mergedAmount = 0;
          this.targetSlot = this.node.getComponent(HexSlot);
        };
        _proto.updateCurrentMergedAmount = function updateCurrentMergedAmount(amount) {
          this.mergedAmount = amount;
          this.currentAmount = Math.max(0, this.maxAmount - this.mergedAmount);
          //console.log(`LockObstacleSlot.updateCurrentMergedAmount: ${amount}`);
          this.onCurrentAmountUpdate.invoke(this.currentAmount);
        };
        return LockObstacleSlot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentAmount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mergedAmount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxAmount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetSlot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AudioController.ts', './SfxPlayer.ts', './CommandSequence.ts', './SetActiveCommand.ts', './TweenPositionCommand.ts', './TweenScaleCommand.ts', './WaitCommand.ts', './AsyncCommand.ts', './Command.ts', './ClassScanner.ts', './CommandDecorator.ts', './EventOnDelay.ts', './EventOnNodeState.ts', './EventOnProgress.ts', './DummyReferenceScript.ts', './Game.ts', './index.ts', './InputKey.ts', './LocalizationExtensions.ts', './LocalizedLabel.ts', './LocalizedRichText.ts', './Polymorphism.ts', './PolymorphismDemo.ts', './ObjectPool.ts', './SimplePool.ts', './GameProgress.ts', './ProgressController.ts', './Singleton.ts', './TweenSequence.ts', './Action.ts', './ArrayUtils.ts', './CameraUtils.ts', './EventHandlerUtils.ts', './JsonUtils.ts', './NodeUtils.ts', './RaycastUtils.ts', './Wait.ts', './HexGridController.ts', './HexPiece.ts', './HexSlot.ts', './NeighborController.ts', './OptionsTray.ts', './ComboController.ts', './GameplayController.ts', './LevelController.ts', './ObjectivesController.ts', './ObstaclesController.ts', './TurnController.ts', './HexVisual.ts', './LockObstacleSlot.ts', './DragDropComponent.ts', './DragInputManager.ts', './LevelAsset.ts', './LevelEditorController.ts', './EditorObjectivesController.ts', './EditorObjectivesDisplay.ts', './EditorColorButton.ts', './EditorColorSelector.ts', './EditorDropdownOption.ts', './EditorExpirationDisplay.ts', './EditorRangeSelector.ts', './EditorRuleButton.ts', './EditorRulesController.ts', './EditorSingleRuleDisplay.ts', './SimpleEditorDropdown.ts', './EditorExpirationAmount.ts', './EditorExpirationId.ts', './EditorExpirationPercent.ts', './EditorSingleStack.ts', './EditorSliderControl.ts', './EditorStackColorBlock.ts', './EditorStackController.ts', './EditorStackObstacleBlock.ts', './EditorButtonSequence.ts', './EditorSequenceButton.ts', './EditorRangeEditbox.ts', './UI_GameplayHUD.ts', './UI_ObjectivesDisplay.ts', './UI_SingleObjective.ts', './UI_LockDisplay.ts', './BundleLoad2.ts', './BundleLoadTest.ts', './eventTestTrigger.ts', './DraggableItem.ts', './DraggableSlot.ts', './DraggableComponent.ts', './FilteredRaycastTest.ts', './LayerCheckerTest.ts', './PlaneIntersectionExample.ts', './RaycastTests.ts', './SelectNode.ts', './SimpleDragTest.ts', './SimpleMouseTest.ts', './SimpleRaycastTest.ts', './tweenMovementTests.ts', './FollowWorldTests.ts', './WorldToUIPosition.ts', './index2.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/NeighborController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HexSlot.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, MeshRenderer, Component, HexSlot;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      HexSlot = module.HexSlot;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "00372GRf3hAIo0/UDf/Oc7f", "NeighborController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var NeighborController = exports('NeighborController', (_dec = ccclass('NeighborController'), _dec2 = property({
        type: [HexSlot]
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NeighborController, _Component);
        function NeighborController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "allActive", _descriptor, _assertThisInitialized(_this));
          //all neighbors that are active for this level
          _this.topLeft = null;
          _this.top = null;
          _this.topRight = null;
          _this.botLeft = null;
          _this.bot = null;
          _this.botRight = null;
          return _this;
        }
        var _proto = NeighborController.prototype;
        _proto.assignAllNeighborsList = function assignAllNeighborsList(array) {
          this.allActive = array;
        };
        _proto.getAllContainingStacks = function getAllContainingStacks() {
          var slots = [];
          for (var _iterator = _createForOfIteratorHelperLoose(this.allActive), _step; !(_step = _iterator()).done;) {
            var hexSlot = _step.value;
            if (hexSlot.getData().piecesStack.length > 0) {
              slots.push(hexSlot);
            }
          }
          return slots;
        };
        _proto.debugNeighbors = function debugNeighbors(color) {
          this.allActive.forEach(function (neighbor) {
            if (neighbor) {
              var meshRenderer = neighbor.getComponentInChildren(MeshRenderer);
              if (meshRenderer) {
                // Save these when starting
                var pass = meshRenderer.material.passes[0];
                var hColor = pass.getHandle('albedo');
                // inside update function
                pass.setUniform(hColor, color);
              }
            }
          });
        };
        return NeighborController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "allActive", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NodeUtils.ts", ['cc'], function () {
  var cclegacy, Node, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "68bf2ZTUhVCAbkagNMvGu1q", "NodeUtils", undefined);

      // Extending the Node class to add a "move" method

      // Adding the move method to Node prototype
      Node.prototype.move = function (direction, distance) {
        // Create a new Vec3 from the direction to avoid modifying the original vector
        var movement = new Vec3().set(direction.x, direction.y, direction.z);

        // Multiply the direction vector by the distance
        movement.multiplyScalar(distance);

        // Add the movement vector to the current position
        var newPosition = this.position.clone().add(movement);

        // Update the node's position
        this.setPosition(newPosition);
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObjectivesController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelAsset.ts', './index.ts', './Singleton.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, ObjectiveData, ObjectiveType, Singleton, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ObjectiveData = module.ObjectiveData;
      ObjectiveType = module.ObjectiveType;
    }, null, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec3, _dec4, _dec5, _dec6, _class4, _class5, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "7928bDu5TxFBor4qqVHxMy7", "ObjectivesController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ActiveObjectiveTracker = exports('ActiveObjectiveTracker', (_dec = ccclass('ActiveObjectiveTracker'), _dec2 = property({
        type: ObjectiveData
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function ActiveObjectiveTracker(objectiveData) {
          _initializerDefineProperty(this, "loadedObjectives", _descriptor, this);
          _initializerDefineProperty(this, "currentAmount", _descriptor2, this);
          //Will it need objectiveId?
          _initializerDefineProperty(this, "objetiveId", _descriptor3, this);
          _initializerDefineProperty(this, "isCompleted", _descriptor4, this);
          this.onAmountChanged = new Action();
          this.onPercentChanged = new Action();
          this.onObjectiveCompleted = new Action();
          this.loadedObjectives = objectiveData;
          this.currentAmount = 0;
        }
        var _proto = ActiveObjectiveTracker.prototype;
        _proto.updateCurrentAmount = function updateCurrentAmount(amount) {
          if (this.isCompleted) return;
          this.currentAmount = amount;
          if (this.currentAmount >= this.loadedObjectives.amount) {
            console.log("ActiveObjectiveTracker.Completed Objetive " + ObjectiveType[this.loadedObjectives.type]);
            this.currentAmount = this.loadedObjectives.amount;
            this.isCompleted = true;
          }
          this.onAmountChanged.invoke(this.currentAmount);
          this.onPercentChanged.invoke(this.currentAmount / this.loadedObjectives.amount);
          if (this.isCompleted) this.onObjectiveCompleted.invoke(this.loadedObjectives.type);
        };
        return ActiveObjectiveTracker;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadedObjectives", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentAmount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "objetiveId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isCompleted", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      var ObjectivesController = exports('ObjectivesController', (_dec3 = ccclass('ObjectivesController'), _dec4 = property({
        type: [ObjectiveData]
      }), _dec5 = property({
        type: [ActiveObjectiveTracker]
      }), _dec6 = property({
        type: [Number]
      }), _dec3(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ObjectivesController, _Component);
        function ObjectivesController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadedObjectives", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trackedObjectives", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressList", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto2 = ObjectivesController.prototype;
        // @property({ type: HexGridController, group: 'Runtime' })
        // hexGrid: HexGridController | null = null;
        //public onMergePieces = new Action<number>();
        //Figure out how I'll identify the objetive ids for an expanding list of objectives
        _proto2.initialize = function initialize(objectives) {
          Singleton.set(this);
          this.loadedObjectives = objectives;
          for (var i = 0; i < objectives.length; i++) {
            this.trackedObjectives.push(new ActiveObjectiveTracker(objectives[i]));
          }
        };
        _proto2.addObjectiveProgress = function addObjectiveProgress(objective, score) {
          console.log("ObjectivesController.addObjectiveProgress(" + ObjectiveType[objective] + " , " + score + ")");
          var equivalentId = this.getIdByObjective(objective);
          var newValue = this.trackedObjectives[equivalentId].currentAmount + score;
          this.trackedObjectives[equivalentId].updateCurrentAmount(newValue);

          //Check if objective completed

          //Update Locks?
          // if (objective === ObjectiveType.MergePieces) {
          //     this.onMergePieces.invoke();
          // }
        }

        //#region gets
        ;

        _proto2.getIdByObjective = function getIdByObjective(objective) {
          for (var i = 0; i < this.loadedObjectives.length; i++) {
            var current = this.loadedObjectives[i];
            if (current.type === objective) {
              return i;
            }
          }
          return -1;
        };
        _proto2.getProgressById = function getProgressById(id) {
          return this.progressList[id];
        }
        //#endregion
        ;

        return ObjectivesController;
      }(Component), (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "loadedObjectives", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "trackedObjectives", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "progressList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObjectPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, instantiate;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f60bawcN1pBYpA6OoWoUPNh", "ObjectPool", undefined);
      var ObjectPool = exports('ObjectPool', /*#__PURE__*/function () {
        function ObjectPool(prefab, parent, defaultPoolCount, componentType) {
          this.prefab = void 0;
          this.parent = void 0;
          this.pooledObjects = [];
          this.componentType = void 0;
          console.log("Component Type:", componentType);
          this.prefab = prefab;
          this.parent = parent;
          this.componentType = componentType;
          for (var i = 0; i < defaultPoolCount; i++) {
            this.createNew();
          }
        }
        var _proto = ObjectPool.prototype;
        _proto.spawn = function spawn() {
          var objectToBorrow = this.pooledObjects.find(function (o) {
            return !o.IsSpawned;
          });
          if (objectToBorrow != null) {
            return objectToBorrow.spawn();
          }
          return this.createNew().spawn();
        };
        _proto.despawn = function despawn(object) {
          var objectToDespawn = this.pooledObjects.find(function (o) {
            return o.Equals(object);
          });
          if (objectToDespawn == null) {
            throw new Error("Object " + this.prefab.name + " is not a member of the pool");
          }
          objectToDespawn.despawn();
        };
        _proto.createNew = function createNew() {
          var newPooledObject = new PooledObject(this.prefab, this.parent, this.componentType);
          this.pooledObjects.push(newPooledObject);
          newPooledObject.instancedNode.name = this.prefab.name + " (Pooled " + this.pooledObjects.length + ")";
          return newPooledObject;
        };
        return ObjectPool;
      }());
      var PooledObject = /*#__PURE__*/function () {
        function PooledObject(prefab, defaultParent, componentType) {
          this.isSpawned = false;
          this.defaultParent = void 0;
          this.instancedNode = void 0;
          this.instancedComponent = void 0;
          this.defaultParent = defaultParent;
          this.instancedNode = instantiate(prefab);
          this.instancedComponent = this.instancedNode.getComponent(componentType);
          if (!this.instancedComponent) {
            console.error("Object " + prefab.name + " does not have component " + componentType.name);
          }
          this.clear();
        }
        var _proto2 = PooledObject.prototype;
        _proto2.Equals = function Equals(component) {
          return this.instancedComponent == component;
        };
        _proto2.spawn = function spawn() {
          this.isSpawned = true;
          this.instancedNode.active = true;
          return this.instancedComponent;
        };
        _proto2.despawn = function despawn() {
          this.clear();
        };
        _proto2.clear = function clear() {
          this.instancedNode.active = false;
          this.instancedNode.parent = this.defaultParent;
          this.isSpawned = false;
        };
        _createClass(PooledObject, [{
          key: "IsSpawned",
          get: function get() {
            return this.isSpawned;
          }
        }]);
        return PooledObject;
      }();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObstaclesController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LockObstacleSlot.ts', './HexGridController.ts', './Singleton.ts', './LevelAsset.ts', './ObjectivesController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, LockObstacleSlot, HexGridController, Singleton, ObstacleType, ObjectiveType, ObjectivesController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      LockObstacleSlot = module.LockObstacleSlot;
    }, function (module) {
      HexGridController = module.HexGridController;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      ObstacleType = module.ObstacleType;
      ObjectiveType = module.ObjectiveType;
    }, function (module) {
      ObjectivesController = module.ObjectivesController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "e94eerds6ZJ+aE8UM6gcrSZ", "ObstaclesController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ObstaclesController = exports('ObstaclesController', (_dec = ccclass('ObstaclesController'), _dec2 = property({
        type: [LockObstacleSlot]
      }), _dec3 = property({
        type: HexGridController,
        group: 'Runtime'
      }), _dec4 = property({
        type: ObjectivesController,
        group: 'Runtime'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ObstaclesController, _Component);
        function ObstaclesController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "locks", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hexGrid", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectivesControl", _descriptor3, _assertThisInitialized(_this));
          _this.onMergeUpdateLambda = void 0;
          return _this;
        }
        var _proto = ObstaclesController.prototype;
        _proto.initialize = function initialize(objControl) {
          this.objectivesControl = objControl;
          this.hexGrid = Singleton.get(HexGridController);
          this.initializeObstacles();
          this.setEvents();
        };
        _proto.initializeObstacles = function initializeObstacles() {
          for (var y = 0; y < this.hexGrid.gridHeight; y++) {
            for (var x = 0; x < this.hexGrid.gridWidth; x++) {
              var slot = this.hexGrid.grid[y][x];
              if (slot.data.isActiveSlot) {
                var topStack = slot.getTopStack();
                if (topStack != null) {
                  if (!topStack.isColor && topStack.obstacleType === ObstacleType.Lock) {
                    var lock = slot.getComponent(LockObstacleSlot);
                    lock.initialize(topStack.amount);
                    this.locks.push(lock);
                  }
                }
              }
            }
          }
        };
        _proto.setEvents = function setEvents() {
          var _this2 = this;
          this.onMergeUpdateLambda = function (num) {
            _this2.handleOnMergedPiecesAmountUpdate(num);
          };
          var objectivesControl = Singleton.get(ObjectivesController);
          var mergeId = objectivesControl.getIdByObjective(ObjectiveType.MergePieces);
          objectivesControl.trackedObjectives[mergeId].onAmountChanged.addListener(this.onMergeUpdateLambda);
        };
        _proto.handleOnMergedPiecesAmountUpdate = function handleOnMergedPiecesAmountUpdate(amount) {
          var toRemove = [];
          for (var i = 0; i < this.locks.length; i++) {
            var element = this.locks[i];
            element.updateCurrentMergedAmount(amount);
            if (element.currentAmount === 0) {
              toRemove.push(element);
            }
          }
          for (var _i = 0, _toRemove = toRemove; _i < _toRemove.length; _i++) {
            var _element = _toRemove[_i];
            var slot = _element.targetSlot;
            this.locks.remove(_element);

            //remove component?
            slot.removeLock();
          }
        };
        _proto.getLocks = function getLocks() {
          return this.locks;
        };
        return ObstaclesController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "locks", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hexGrid", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "objectivesControl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OptionsTray.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HexSlot.ts', './LevelAsset.ts', './DragDropComponent.ts', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Vec3, randomRangeInt, Component, HexSlot, PieceStack, LevelRuleSet, PieceColor, DragDropMode, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      HexSlot = module.HexSlot;
      PieceStack = module.PieceStack;
    }, function (module) {
      LevelRuleSet = module.LevelRuleSet;
      PieceColor = module.PieceColor;
    }, function (module) {
      DragDropMode = module.DragDropMode;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a29787S+uJCfZTj7+SlDqoK", "OptionsTray", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var OptionsTray = exports('OptionsTray', (_dec = ccclass('OptionsTray'), _dec2 = property(), _dec3 = property({
        type: [HexSlot]
      }), _dec4 = property({
        type: [LevelRuleSet]
      }), _dec5 = property({
        type: Prefab,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: [Node],
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OptionsTray, _Component);
        function OptionsTray() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "traysCount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hexOptions", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentRuleset", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionsPositions", _descriptor5, _assertThisInitialized(_this));
          _this.onNewTrayGenerated = new Action();
          return _this;
        }
        var _proto = OptionsTray.prototype;
        _proto.initialize = function initialize() {
          this.generateEmptySlots();
        };
        _proto.updateRuleSet = function updateRuleSet(ruleset) {
          console.log("OptionsTray.generateNewOptions()");
          this.currentRuleset = ruleset;
        };
        _proto.generateNewOptionsTray = function generateNewOptionsTray() {
          console.log("OptionsTray.refreshOptionsTray()");
          for (var i = 0; i < this.hexOptions.length; i++) {
            this.hexOptions[i].setPiecesStack(this.generatePiecesStack(this.currentRuleset));
            this.hexOptions[i].canMovePieceStack = true;
            this.hexOptions[i].setCurrentInteractionMode(DragDropMode.Drag);
          }
          this.traysCount++;
          this.onNewTrayGenerated.invoke(this.traysCount);
        };
        _proto.generateEmptySlots = function generateEmptySlots() {
          this.hexOptions = [];
          for (var i = 0; i < this.optionsPositions.length; i++) {
            var slot = instantiate(this.slotPrefab);
            slot.parent = this.optionsPositions[i];
            slot.position = new Vec3(0, 0, 0);
            this.hexOptions.push(slot.getComponent(HexSlot));
          }
        };
        _proto.generatePiecesStack = function generatePiecesStack(ruleset) {
          var pieceStack = [];

          //Maximum amount of pieces in the stack //+1 because max is exclusive
          var totalAmount = randomRangeInt(ruleset.stackAmountAllowed.x, ruleset.stackAmountAllowed.y + 1);

          //Number of different colors in the stack
          var clampedColorMin = Math.min(ruleset.colorCombinationsAllowed.x, totalAmount, ruleset.colorsAllowed.length);
          var clampedColorMax = Math.min(ruleset.colorCombinationsAllowed.y, totalAmount, ruleset.colorsAllowed.length);
          var randomColorCombinations = randomRangeInt(clampedColorMin, clampedColorMax + 1);
          var validColors = this.generateColorOptions(randomColorCombinations, ruleset.colorsAllowed);
          var remainingPieces = totalAmount;
          var remainingSlots = randomColorCombinations;

          //console.log(`total: ${totalAmount} | colors: ${randomColorCombinations}`);

          //Generate the color options
          for (var i = 0; i < randomColorCombinations; i++) {
            var newPieceStack = new PieceStack();
            newPieceStack.pieceColor = validColors[i];

            //+1 because max is exclusive
            var amount = 1;
            if (randomColorCombinations != totalAmount) {
              //amount = randomRangeInt(1, (remainingPieces-1)+1);            
              //let max = (remainingPieces - 1);
              var max = remainingPieces - remainingSlots + 1;
              //console.log(`remainingPieces: ${remainingPieces} | remainingSlots: ${remainingSlots} = [${max}]`);
              amount = randomRangeInt(1, max + 1);
              if (i == randomColorCombinations - 1) {
                amount = remainingPieces;
              }
            }
            newPieceStack.amount = amount;
            remainingPieces -= amount;
            remainingSlots--;
            pieceStack.push(newPieceStack);
          }

          //console.log(`generatePiecesStack() totalAmount: ${totalAmount} colors: ${randomColorCombinations}| ${this.debug_PrintPiecesArray(pieceStack)}`);
          return pieceStack;
        };
        _proto.generateColorOptions = function generateColorOptions(amount, allOptions) {
          var colors = [];
          //let possibleColors:number[] = [];

          allOptions = this.shuffleArray(allOptions);
          for (var i = 0; i < amount; i++) {
            //colors.push(randomRangeInt(1, 6));
            colors.push(allOptions[i]);
          }
          return colors;
        };
        _proto.shuffleArray = function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [array[j], array[i]];
            array[i] = _ref[0];
            array[j] = _ref[1];
          }
          return array;
        };
        _proto.debug_PrintPiecesArray = function debug_PrintPiecesArray(pieceStack) {
          var str = "";
          for (var i = 0; i < pieceStack.length; i++) {
            str += PieceColor[pieceStack[i].pieceColor] + " - " + pieceStack[i].amount + " |";
          }
          return str;
        };
        return OptionsTray;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "traysCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hexOptions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentRuleset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "slotPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "optionsPositions", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlaneIntersectionExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Camera, input, Input, EventMouse, Vec3, geometry, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Camera = module.Camera;
      input = module.input;
      Input = module.Input;
      EventMouse = module.EventMouse;
      Vec3 = module.Vec3;
      geometry = module.geometry;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "338d7JC1A1OE4d0513IM3rf", "PlaneIntersectionExample", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PlaneIntersectionExample = exports('PlaneIntersectionExample', (_dec = ccclass('PlaneIntersectionExample'), _dec2 = property({
        type: Prefab,
        group: {
          name: "Components"
        }
      }), _dec3 = property({
        type: Camera,
        group: {
          name: "Components"
        }
      }), _dec4 = property(Number), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlaneIntersectionExample, _Component);
        function PlaneIntersectionExample() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "simpleNodePrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "planeHeight", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PlaneIntersectionExample.prototype;
        _proto.start = function start() {
          console.log("start() is the last one before update.");
          input.on(Input.EventType.MOUSE_DOWN, this.mouseClick, this);
        };
        _proto.mouseClick = function mouseClick(event) {
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            this.checkIntersction(event);
          }
        };
        _proto.checkIntersction = function checkIntersction(event) {
          var planeNormal = new Vec3(0, 1, 0); // Plane facing upwards
          var pointOnPlane = new Vec3(0, this.planeHeight, 0); // Any point on the plane

          // Define the ray (origin and direction)
          // const rayOrigin = new Vec3(0, 0, 0); // Ray starts at the origin
          // const rayDirection = new Vec3(0, -1, 0); // Ray pointing upwards

          var ray = new geometry.Ray();
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          var rayOrigin = ray.o; // Ray starts at the origin
          var rayDirection = ray.d; // Ray pointing upwards

          // Calculate the intersection point
          var intersectionPoint = this.rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal);
          if (intersectionPoint) {
            console.log("Intersection point:", intersectionPoint);
            var newNode = instantiate(this.simpleNodePrefab);
            newNode.setPosition(intersectionPoint);
            this.node.scene.addChild(newNode);
          } else {
            console.log("Ray does not intersect the plane.");
          }
        }

        /*
         * Calculates the intersection point between a ray and a plane.
         * @param rayOrigin - Origin of the ray.
         * @param rayDirection - Direction of the ray (normalized).
         * @param pointOnPlane - A point on the plane.
         * @param planeNormal - Normal vector of the plane.
         * @returns The intersection point, or null if there is no intersection.
         */;
        _proto.rayPlaneIntersection = function rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal) {
          var denominator = Vec3.dot(rayDirection, planeNormal);

          // Check if the ray is parallel to the plane
          if (Math.abs(denominator) < 1e-6) {
            return null; // No intersection (ray is parallel to the plane)
          }

          // Calculate the distance along the ray to the intersection point
          var t = Vec3.dot(Vec3.subtract(new Vec3(), pointOnPlane, rayOrigin), planeNormal) / denominator;

          // Check if the intersection is in front of the ray
          if (t >= 0) {
            // Calculate the intersection point
            var intersectionPoint = new Vec3();
            Vec3.scaleAndAdd(intersectionPoint, rayOrigin, rayDirection, t);
            return intersectionPoint;
          }
          return null; // Intersection is behind the ray
        };

        return PlaneIntersectionExample;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "simpleNodePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "planeHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Polymorphism.ts", ['cc'], function (exports) {
  var cclegacy, js, ccenum, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
      ccenum = module.ccenum;
      _decorator = module._decorator;
    }],
    execute: function () {
      exports('polymorphism', polymorphism);
      cclegacy._RF.push({}, "edea7gkzGRDIrybnBCAOHFw", "Polymorphism", undefined);
      function polymorphism(_ref) {
        var types = _ref.types,
          displayName = _ref.displayName,
          baseClass = _ref.baseClass;
        return function (target, propertyKey) {
          if (typeof propertyKey !== 'string') {
            throw new Error("Only string named fields are supported.");
          }

          // Map types to constructors
          var resolvedTypes = types.map(function (type) {
            if (typeof type === 'string') {
              var cls = js.getClassByName(type);
              return cls;
            } else if (Array.isArray(type)) {
              return null;
            } else {
              return type;
            }
          }).filter(function (result) {
            var isValid = result && typeof result === 'function';
            return isValid;
          });

          // Early return if no valid types
          if (!resolvedTypes.length) {
            console.warn('No valid types resolved');
            return;
          }
          var typePropertyKey = propertyKey + "__type";
          var typePropertyDescriptor = {
            get: function get() {
              var currentValue = this[propertyKey];
              var typeIndex = resolvedTypes.findIndex(function (constructor) {
                return currentValue.constructor === constructor;
              });
              if (typeIndex < 0) {
                throw new Error(currentValue + " is not a registered type.");
              }
              return typeIndex;
            },
            set: function set(value) {
              var constructor = resolvedTypes[value];
              if (this[propertyKey].constructor === constructor) {
                return;
              }
              var object = new constructor();
              this[propertyKey] = object;
            }
          };
          var formatCamelCase = function formatCamelCase(str) {
            var _baseClass$name;
            if (!str) {
              console.warn('Received undefined class name');
              return 'Unknown';
            }
            // Remove the base class name if present
            var baseClassName = (_baseClass$name = baseClass == null ? void 0 : baseClass.name) != null ? _baseClass$name : '';
            var withoutBase = str.replace(baseClassName, '');
            // Add spaces before capital letters and trim extra whitespace
            return withoutBase.replace(/([A-Z])/g, ' $1').trim();
          };
          var typeEnums = resolvedTypes.reduce(function (result, constructor, index) {
            // Use the formatted class name with safety check
            var className = constructor == null ? void 0 : constructor.name;
            var displayName = formatCamelCase(className);
            result[displayName] = index;
            return result;
          }, {});
          ccenum(typeEnums);
          _decorator.property({
            displayName: displayName != null ? displayName : "Type",
            type: typeEnums
          })(target, typePropertyKey, typePropertyDescriptor);
          Object.defineProperty(target, typePropertyKey, typePropertyDescriptor);
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PolymorphismDemo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _dec2, _class4, _class5, _descriptor2, _descriptor3, _dec3, _class7, _class8, _descriptor4, _dec4, _dec5, _dec6, _class10, _class11, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "9eb74BGnaJGaJeqAC5j57Bx", "PolymorphismDemo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Shape = function Shape() {};
      var Circle = (_dec = ccclass('Circle'), _dec(_class = (_class2 = /*#__PURE__*/function (_Shape) {
        _inheritsLoose(Circle, _Shape);
        function Circle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Shape.call.apply(_Shape, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "radius", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return Circle;
      }(Shape), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _class2)) || _class);
      var Rectangle = (_dec2 = ccclass('Rectangle'), _dec2(_class4 = (_class5 = /*#__PURE__*/function (_Shape2) {
        _inheritsLoose(Rectangle, _Shape2);
        function Rectangle() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _Shape2.call.apply(_Shape2, [this].concat(args)) || this;
          _initializerDefineProperty(_this2, "width", _descriptor2, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "height", _descriptor3, _assertThisInitialized(_this2));
          return _this2;
        }
        return Rectangle;
      }(Shape), (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "width", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "height", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      })), _class5)) || _class4);
      var CustomCollider = (_dec3 = ccclass('CustomCollider'), _dec3(_class7 = (_class8 = function CustomCollider() {
        _initializerDefineProperty(this, "shape", _descriptor4, this);
      }, _descriptor4 = _applyDecoratedDescriptor(_class8.prototype, "shape", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Circle();
        }
      }), _class8)) || _class7);
      var PolymorphismDemo = exports('PolymorphismDemo', (_dec4 = ccclass('PolymorphismDemo'), _dec5 = property({
        type: CustomCollider
      }), _dec6 = property({
        type: [CustomCollider]
      }), _dec4(_class10 = (_class11 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PolymorphismDemo, _Component);
        function PolymorphismDemo() {
          var _this3;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this3 = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this3, "shape", _descriptor5, _assertThisInitialized(_this3));
          _initializerDefineProperty(_this3, "customCollider", _descriptor6, _assertThisInitialized(_this3));
          _initializerDefineProperty(_this3, "shapesArray", _descriptor7, _assertThisInitialized(_this3));
          return _this3;
        }
        _createClass(PolymorphismDemo, [{
          key: "AddNewShape",
          get: function get() {
            return false;
          },
          set: function set(value) {
            var customCollider = new CustomCollider();
            customCollider.shape = new Shape();
            this.shapesArray.push(customCollider);
            console.log("adsajidsjhai");
          }

          /*
                  // Dropwdown "Button" to add new tweens
                  @property({ type: Enum(MyShapeType) })
                  get addToSequence() {
                      return MyShapeType.None;
                  }
                  set addToSequence(value: MyShapeType) {
                      const customCollider = new CustomCollider();
                      switch (value) {
                          case MyShapeType.Circle:
                              customCollider.shapeB = new Circle();
              
                              break;
                          case MyShapeType.Rectangle:
                              customCollider.shapeB = new Rectangle();
                              break;
                      }        
                      this.shapesAArray.push(customCollider);
                  }*/

          /*
          @property
          @polymorphism({
              types: [
                  [Circle, 'Circulo'],
                  [Rectangle, 'Retangulo'],
              ]
          })
          public shapeA: Shape = new Circle();
          /*
          @property
          @polymorphism({
              types: [
                  [Circle, 'Circulo'],
                  [Rectangle, 'Retangulo'],
              ]
          })
          public shapeB: Shape = new Circle();
            @property
          @polymorphism({
              types: [
                  [Circle, 'Circulo'],
                  [Rectangle, 'Retangulo'],
              ],
              displayName: 'Lista de Formas',
          })
          public shapesArray: Shape[] = [new Circle(), new Rectangle()];*/
        }]);

        return PolymorphismDemo;
      }(Component), (_descriptor5 = _applyDecoratedDescriptor(_class11.prototype, "shape", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Circle();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class11.prototype, "customCollider", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new CustomCollider();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class11.prototype, "shapesArray", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new CustomCollider()];
        }
      }), _applyDecoratedDescriptor(_class11.prototype, "AddNewShape", [property], Object.getOwnPropertyDescriptor(_class11.prototype, "AddNewShape"), _class11.prototype)), _class11)) || _class10));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressController.ts", ['cc', './index.ts', './GameProgress.ts'], function (exports) {
  var cclegacy, director, Director, sys, GameProgress;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      sys = module.sys;
    }, null, function (module) {
      GameProgress = module.GameProgress;
    }],
    execute: function () {
      cclegacy._RF.push({}, "feea3k1EkROS71fhwvMoaiH", "ProgressController", undefined);
      var ProgressController = exports('ProgressController', /*#__PURE__*/function () {
        function ProgressController() {} // Prevent instantiation
        ProgressController.initialize = function initialize() {
          console.log(">>> ProgressController: initialized!");
          if (!this.gameProgress) {
            // TODO: The number of levels of the games should come from somewhere else (in Unity, we checked the number of levels in the levels folder)
            // Maybe here on Cocos, since levels will come from the level editor json, we can get the number of levels from the list of levels in the json
            // but we should update it on BUILD TIME and/or on pre-initialize on editor.
            this.gameProgress = this.load() || new GameProgress(10);
            director.on(Director.EVENT_AFTER_SCENE_LAUNCH, this.onSceneChanged, this);
          }
        };
        ProgressController.onSceneChanged = function onSceneChanged() {
          console.log(">>> ProgressController: Scene was changed!");
        };
        ProgressController.save = function save() {
          if (this.gameProgress) {
            sys.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.gameProgress));
            console.log(">>> ProgressController: SAVE!");
          }
        };
        ProgressController.load = function load() {
          var data = sys.localStorage.getItem(this.STORAGE_KEY);
          console.log(">>> ProgressController: LOAD!");
          return data ? Object.assign(new GameProgress(10), JSON.parse(data)) : null;
        };
        return ProgressController;
      }());

      // TODO: Make sure the "Director.EVENT_BEFORE_SCENE_LAUNCH" event below is only run once even after changing to other scenes.
      // Test that by making the "loading" scene that will be the first scene of the game.

      // *Auto-run when game starts*
      ProgressController.STORAGE_KEY = "gameProgress";
      ProgressController.gameProgress = void 0;
      director.once(Director.EVENT_BEFORE_SCENE_LAUNCH, function () {
        ProgressController.initialize();
      });

      /*
      // *Auto-run when game starts*
      director.once(Director.EVENT_BEFORE_SCENE_LAUNCH, () => {
          if (EDITOR_NOT_IN_PREVIEW) return;
          resources.load('audio_manager', (err, prefab) => {
              if (err) {
                  console.error('Failed to load AudioManager prefab:', err);
                  return;
              }
              const audioManager = instantiate(prefab) as unknown as Node;
              director.getScene().addChild(audioManager);
          });
      });
      */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RaycastTests.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, geometry, Vec3, PhysicsSystem, Layers;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      geometry = module.geometry;
      Vec3 = module.Vec3;
      PhysicsSystem = module.PhysicsSystem;
      Layers = module.Layers;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "47e71aRxcVBnbEi1zuSHG+G", "RaycastTests", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RaycastTests = exports('RaycastTests', (_dec = ccclass('RaycastTests'), _dec(_class = /*#__PURE__*/function () {
        function RaycastTests() {}
        RaycastTests.screenRaycast3D = function screenRaycast3D(event, camera, outResult, distance, layerMask) {
          var ray = new geometry.Ray();
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          var cResult = PhysicsSystem.instance.raycastClosest(ray, layerMask, distance);
          console.log("Layer mask: " + layerMask + " | Layer name: " + this.getLayerName(layerMask));
          if (cResult) {
            var raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            outResult.result = raycastClosestResult;
            return true;
          } else {
            console.log("RaycastClosest: No object detected.");
            outResult.result = null;
            return false;
          }
        };
        RaycastTests.rayPlaneIntersection = function rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal) {
          var denominator = Vec3.dot(rayDirection, planeNormal);

          // Check if the ray is parallel to the plane
          if (Math.abs(denominator) < 1e-6) {
            return null; // No intersection (ray is parallel to the plane)
          }

          // Calculate the distance along the ray to the intersection point
          var t = Vec3.dot(Vec3.subtract(new Vec3(), pointOnPlane, rayOrigin), planeNormal) / denominator;

          // Check if the intersection is in front of the ray
          if (t >= 0) {
            // Calculate the intersection point
            var intersectionPoint = new Vec3();
            Vec3.scaleAndAdd(intersectionPoint, rayOrigin, rayDirection, t);
            return intersectionPoint;
          }
          return null; // Intersection is behind the ray
        };

        RaycastTests.getLayerName = function getLayerName(layer) {
          for (var key in Layers.Enum) {
            if (Layers.Enum[key] === layer) {
              return key;
            }
          }
          return "Unknown";
        };
        return RaycastTests;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RaycastUtils.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, geometry, Vec3, PhysicsSystem, Layers;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      geometry = module.geometry;
      Vec3 = module.Vec3;
      PhysicsSystem = module.PhysicsSystem;
      Layers = module.Layers;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "80cc4YjvXlJ8aVCZZiZBFqm", "RaycastUtils", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RaycastUtils = exports('RaycastUtils', (_dec = ccclass('RaycastUtils'), _dec(_class = /*#__PURE__*/function () {
        function RaycastUtils() {}
        RaycastUtils.mousePositionRaycast3D = function mousePositionRaycast3D(event, camera, outResult, distance, layerMask) {
          var ray = new geometry.Ray();
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          return this.filteredRaycast3D(ray, outResult, distance, layerMask);
        };
        RaycastUtils.screenRaycast3D = function screenRaycast3D(screenPos, camera, outResult, distance, layerMask) {
          var ray = new geometry.Ray();
          camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          return this.filteredRaycast3D(ray, outResult, distance, layerMask);
        };
        RaycastUtils.raycast3D = function raycast3D(ray, outResult, distance, layerMask) {
          var queryTrigger = true;
          var cResult = PhysicsSystem.instance.raycastClosest(ray, layerMask, distance, queryTrigger);
          if (cResult) {
            var raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            outResult.result = raycastClosestResult;
            return true;
          } else {
            outResult.result = null;
            return false;
          }
        };
        RaycastUtils.filteredRaycast3D = function filteredRaycast3D(ray, outResult, distance, layerMask) {
          var queryTrigger = true;
          var cResult = PhysicsSystem.instance.raycast(ray, 1 << Layers.Enum.DEFAULT, distance, queryTrigger);
          if (cResult) {
            var raycastClosestResult = PhysicsSystem.instance.raycastResults;
            var validResults = [];
            for (var i = 0; i < raycastClosestResult.length; i++) {
              var collider = raycastClosestResult[i].collider;
              var convertedNumber = this.getLayerIndices(collider.node.layer)[0];
              if (collider.node.layer == layerMask || layerMask == Layers.Enum.ALL) {
                outResult.result = raycastClosestResult[i];
                validResults.push(raycastClosestResult[i]);
              }
              outResult.result = raycastClosestResult[i];
            }
            if (validResults.length == 0) {
              outResult.result = null;
              return false;
            } else if (validResults.length == 1) {
              outResult.result = validResults[0];
              return true;
            } else {
              validResults.sort(function (a, b) {
                var distanceA = Vec3.distance(ray.o, a.hitPoint);
                var distanceB = Vec3.distance(ray.o, b.hitPoint);
                return distanceA - distanceB;
              });
              outResult.result = validResults[0];
              return true;
            }
          } else {
            outResult.result = null;
            return false;
          }
        };
        RaycastUtils.rayPlaneIntersection = function rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal) {
          var denominator = Vec3.dot(rayDirection, planeNormal);
          // Check if the ray is parallel to the plane
          if (Math.abs(denominator) < 1e-6) {
            return null; // No intersection (ray is parallel to the plane)
          }

          // Calculate the distance along the ray to the intersection point
          var t = Vec3.dot(Vec3.subtract(new Vec3(), pointOnPlane, rayOrigin), planeNormal) / denominator;

          // Check if the intersection is in front of the ray
          if (t >= 0) {
            // Calculate the intersection point
            var intersectionPoint = new Vec3();
            Vec3.scaleAndAdd(intersectionPoint, rayOrigin, rayDirection, t);
            return intersectionPoint;
          }
          return null; // Intersection is behind the ray
        };

        RaycastUtils.getLayerName = function getLayerName(layer) {
          for (var key in Layers.Enum) {
            if (Layers.Enum[key] === layer) {
              return key;
            }
          }
          return "Unknown";
        };
        RaycastUtils.getLayerIndices = function getLayerIndices(layerBitmask) {
          var indices = [];
          for (var i = 0; i < 32; i++) {
            if (layerBitmask & 1 << i) {
              indices.push(i);
            }
          }
          return indices;
        };
        return RaycastUtils;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SelectNode.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "df9bai2V+9PPYqVVifFgn2X", "SelectNode", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SetActiveCommand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Command.ts', './CommandDecorator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Command, commandclass;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      Command = module.Command;
    }, function (module) {
      commandclass = module.commandclass;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1237eLIpBhHm7yfbUWqsJ6N", "SetActiveCommand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SetActiveCommand = exports('SetActiveCommand', (_dec = commandclass('SetActiveCommand'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Command) {
        _inheritsLoose(SetActiveCommand, _Command);
        function SetActiveCommand() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Command.call.apply(_Command, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "active", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SetActiveCommand.prototype;
        _proto.execute = function execute() {
          this.node.active = this.active;
        };
        return SetActiveCommand;
      }(Command), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "active", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SfxPlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Singleton.ts', './AudioController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, randomRangeInt, Component, Singleton, AudioController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, null, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      AudioController = module.AudioController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f16c9qsoehL5Zf/CNMW5XkA", "SfxPlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SfxPlayer = exports('SfxPlayer', (_dec = ccclass('SfxPlayer'), _dec2 = property({
        type: [AudioClip],
        tooltip: 'Play() function will choose a random Sfx from this list.'
      }), _dec3 = property({
        type: Number,
        range: [0, 1]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SfxPlayer, _Component);
        function SfxPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playOnEnable", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioClips", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "volumeScale", _descriptor3, _assertThisInitialized(_this));
          _this.audioController = void 0;
          return _this;
        }
        var _proto = SfxPlayer.prototype;
        _proto.onEnable = function onEnable() {
          var _this$audioController;
          (_this$audioController = this.audioController) != null ? _this$audioController : this.audioController = Singleton.get(AudioController);
          if (this.playOnEnable) {
            this.play();
          }
        };
        _proto.play = function play() {
          if (this.audioClips.length > 0) {
            var clip = this.audioClips[randomRangeInt(0, this.audioClips.length)];
            console.log("Play " + clip.name);
            this.audioController.playSFX(clip, this.volumeScale);
          }
        };
        _proto.playSelectedIndex = function playSelectedIndex(index) {
          if (this.audioClips.length > index) {
            var clip = this.audioClips[index];
            this.audioController.playSFX(clip, this.volumeScale);
          }
        };
        return SfxPlayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playOnEnable", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioClips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "volumeScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SimpleDragTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './RaycastUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Layers, Camera, Prefab, Node, Vec3, input, Input, EventMouse, geometry, PhysicsSystem, instantiate, Component, RaycastUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Layers = module.Layers;
      Camera = module.Camera;
      Prefab = module.Prefab;
      Node = module.Node;
      Vec3 = module.Vec3;
      input = module.input;
      Input = module.Input;
      EventMouse = module.EventMouse;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      instantiate = module.instantiate;
      Component = module.Component;
    }, null, function (module) {
      RaycastUtils = module.RaycastUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "757eef5KHpIm4Y4R5msoAQs", "SimpleDragTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SimpleDragTest = exports('SimpleDragTest', (_dec = ccclass('SimpleDragTest'), _dec2 = property({
        type: Layers.Enum,
        group: {
          name: "Layers"
        },
        tooltip: "Layer for raycasting"
      }), _dec3 = property({
        type: Number,
        group: {
          name: "Layers"
        }
      }), _dec4 = property({
        type: Layers.Enum,
        group: {
          name: "Layers"
        },
        tooltip: "Layer for instantiated objects"
      }), _dec5 = property({
        type: Camera,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Prefab,
        group: {
          name: "Components"
        }
      }), _dec7 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec8 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SimpleDragTest, _Component);
        function SimpleDragTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "raycastLayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layerNumber", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "instantiateLayer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectPrefab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "heightPlane", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedNode", _descriptor7, _assertThisInitialized(_this));
          _this.originalY = null;
          _this.currentMousePos = new Vec3();
          return _this;
        }
        var _proto = SimpleDragTest.prototype;
        _proto.start = function start() {
          console.log("start() is the last one before update.");
          input.on(Input.EventType.MOUSE_DOWN, this.mouseClick, this);
          input.on(Input.EventType.MOUSE_MOVE, this.mouseMove, this);
        };
        _proto.mouseClick = function mouseClick(event) {
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            this.performRaycastExternal(event);
          } else if (event.getButton() === EventMouse.BUTTON_RIGHT) {
            //this.instantiateObjectAtScreenPosition(event);
            this.selectedNode = null;
          }
        };
        _proto.mouseMove = function mouseMove(event) {
          this.currentMousePos.set(event.getLocationX(), event.getLocationY(), 0);
        };
        _proto.performRaycastExternal = function performRaycastExternal(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var outResult = {
            result: null
          };
          var distance = 500;
          var layerMask = 1 << Layers.Enum.DEFAULT; // Change this to the desired layer
          var success = RaycastUtils.mousePositionRaycast3D(event, this.camera, outResult, distance, layerMask);
          if (success && outResult.result) {
            var collider = outResult.result.collider;
            console.log("RaycastExternal - Found obj: " + collider.node.name + " in layer " + this.getLayerName(collider.node.layer));
            this.originalY = collider.node.worldPosition.y; // Store the original y position
            this.selectedNode = collider.node;
          } else {
            console.log("RaycastExternal: No object detected.");
            this.selectedNode = null;
          }
        }

        //Cocos doesn't add colliders to 3d objects by default
        ;

        _proto.performRaycastClosest = function performRaycastClosest(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var ray = new geometry.Ray();
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);

          //1 << 20 = ignore raycast
          //const layerMask = this.raycastLayer; // Explicitly convert to number
          // const layerMask = 0xffffffff; // All layers
          //const layerMask = 1 << 0; // All layers
          //const layerMask = 1 << Layers.Enum.DEFAULT; // Only the default layer
          //const layerMask = 1 << this.raycastLayer;  // 1 << 20 = ignore raycast
          //console.log(`Layer mask: ${layerMask} | Layer name: ${this.getLayerName(layerMask)}`);

          var layerMask = 1 << 0;
          var maxDistance = 500;
          console.log("Layer mask: " + layerMask + " | Layer name: " + this.getLayerName(layerMask));
          var physics = PhysicsSystem.instance;
          var cResult = physics.raycastClosest(ray, layerMask, maxDistance);
          if (cResult) {
            var raycastClosestResult = physics.raycastClosestResult;
            var hitPoint = raycastClosestResult.hitPoint;
            //const hitNormal = raycastClosestResult.hitNormal;
            var collider = raycastClosestResult.collider;
            //const distance = raycastClosestResult.distance;

            console.log("RaycastClosest - Found obj: " + collider.node.name + " in layer " + this.getLayerName(collider.node.layer));
            this.originalY = collider.node.worldPosition.y; // Store the original y position
            this.selectedNode = collider.node;
          } else {
            console.log("RaycastClosest: No object detected.");
          }
        };
        _proto.performLayerRaycast = function performLayerRaycast(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var layerMask = 1 << Layers.Enum.DEFAULT; // Change this to the desired layer
          var ray = new geometry.Ray();
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          var maxDistance = 500;
          var bResult = PhysicsSystem.instance.raycast(ray, layerMask, maxDistance);
          console.log("Layer mask: " + layerMask + " | Layer name: " + this.getLayerName(layerMask));
          if (bResult) {
            console.log("Found objs.");
            var results = PhysicsSystem.instance.raycastResults;
            for (var i = 0; i < results.length; i++) {
              var result = results[i];
              if (result.collider.node.layer == layerMask) {
                console.log("Hit object:", result.collider.node.name);
              }
              //console.log("Hit object:", result.collider.node.name);
            }
          } else {
            console.log("RaycastAll: No objects detected.");
          }
        };
        _proto.instantiateObjectAtScreenPosition = function instantiateObjectAtScreenPosition(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          if (!this.objectPrefab) {
            console.error("Object prefab is not assigned.");
            return;
          }
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          var worldPos = new Vec3();
          this.camera.screenToWorld(screenPos, worldPos);
          var predefinedY = -2.5; // Set your predefined Y position here
          worldPos.y = predefinedY;
          var newNode = instantiate(this.objectPrefab);
          newNode.setPosition(worldPos);
          this.node.scene.addChild(newNode);
          console.log("Instantiated object at world position:", worldPos);
        };
        _proto.update = function update() {
          if (this.selectedNode) {
            var worldPos = this.getDragPosition();
            if (worldPos) this.selectedNode.setWorldPosition(worldPos);
          }

          // if (this.selectedNode && this.originalY !== null) {
          //     const screenPos = new Vec3();
          //     this.camera?.worldToScreen(this.selectedNode.worldPosition, screenPos);
          //     screenPos.z = 0;
          //     const targetPos = this.camera?.screenToWorld(screenPos);
          //     if (targetPos) {
          //         targetPos.y = this.originalY; // Keep the original y position
          //         this.selectedNode.setPosition(targetPos);
          //     }
          // }
        };

        _proto.getDragPosition = function getDragPosition() {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var ray = new geometry.Ray();
          var screenPos = new Vec3(this.currentMousePos.x, this.currentMousePos.y, 0);
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);

          //Old version
          // let rayEnd = new Vec3();
          // const maxDistance = 10;
          // Vec3.scaleAndAdd(rayEnd, ray.o, ray.d, maxDistance); // Assuming a distance of 500 units
          // rayEnd.y = this.originalY; // Keep the original y position

          var rayOrigin = ray.o; // Ray starts at the origin
          var rayDirection = ray.d; // Ray pointing upwards

          var planeNormal = new Vec3(0, 1, 0); // Plane facing upwards
          var pointOnPlane = new Vec3(0, this.originalY, 0); // Any point on the plane

          // Calculate the intersection point
          var intersectionPoint = RaycastUtils.rayPlaneIntersection(rayOrigin, rayDirection, pointOnPlane, planeNormal);
          if (intersectionPoint) {
            //console.log("Intersection point:", intersectionPoint);
            return intersectionPoint;
          } else {
            console.log("Ray does not intersect the plane.");
            return null;
          }

          //return rayEnd;
        };

        _proto.getLayerName = function getLayerName(layer) {
          for (var key in Layers.Enum) {
            if (Layers.Enum[key] === layer) {
              return key;
            }
          }
          return "Unknown";
        };
        return SimpleDragTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "raycastLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Layers.Enum.DEFAULT;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layerNumber", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "instantiateLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Layers.Enum.DEFAULT;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "objectPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "heightPlane", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "selectedNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SimpleEditorDropdown.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EditorDropdownOption.ts', './index.ts', './Action.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Component, Button, EditorDropdownOption, Action;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
      Button = module.Button;
    }, function (module) {
      EditorDropdownOption = module.EditorDropdownOption;
    }, null, function (module) {
      Action = module.Action;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "a465etGkWdMmYX9dp5ECSGu", "SimpleEditorDropdown", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SimpleEditorDropdown = exports('SimpleEditorDropdown', (_dec = ccclass('SimpleEditorDropdown'), _dec2 = property({
        type: Boolean,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Number,
        group: {
          name: "Runtime"
        }
      }), _dec4 = property({
        type: Boolean,
        group: {
          name: "Configs"
        }
      }), _dec5 = property({
        type: Node,
        visible: function visible() {
          return this.canExpandLayout;
        },
        group: {
          name: "Configs"
        }
      }), _dec6 = property({
        type: Node,
        visible: function visible() {
          return this.canExpandLayout;
        },
        group: {
          name: "Configs"
        }
      }), _dec7 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec9 = property({
        type: [EditorDropdownOption],
        group: {
          name: "Components"
        }
      }), _dec10 = property({
        group: 'Debug'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SimpleEditorDropdown, _Component);
        function SimpleEditorDropdown() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#region Variables
          _initializerDefineProperty(_this, "isExpanded", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canExpandLayout", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandedParent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandAfterNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expandedBlock", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dropdownOption", _descriptor8, _assertThisInitialized(_this));
          _this.onOptionSelected = new Action();
          return _this;
        }
        var _proto = SimpleEditorDropdown.prototype;
        //#endregion
        _proto.initialize = function initialize(loadedId) {
          var _this2 = this;
          var _loop = function _loop() {
            _this2.dropdownOption[i].initialize(i);
            var id = _this2.dropdownOption[i].id;
            _this2.dropdownOption[i].button.node.on(Button.EventType.CLICK, function () {
              return _this2.selectOption(id);
            }, _this2);
          };
          //this.callback = callback;
          for (var i = 0; i < this.dropdownOption.length; i++) {
            _loop();
          }
          this.updateDisplay(loadedId);
          this.isExpanded = true;
          this.toggleDropdownBlock();
        };
        _proto.selectOption = function selectOption(id, toggleBlock, runCallback) {
          if (toggleBlock === void 0) {
            toggleBlock = true;
          }
          if (runCallback === void 0) {
            runCallback = true;
          }
          // console.log("selectOption: ", id);
          this.updateDisplay(id);
          if (toggleBlock) this.toggleDropdownBlock();
          if (runCallback) {
            //console.log("beforeOnOptionSelected: ", id);
            this.onOptionSelected.invoke(id);
          }
        };
        _proto.updateDisplay = function updateDisplay(id) {
          this.selectedId = id;
          this.defaultLabel.string = this.dropdownOption[id].getText();
        };
        _proto.toggleDropdownBlock = function toggleDropdownBlock() {
          this.isExpanded = !this.isExpanded;
          if (this.expandedBlock) {
            this.expandedBlock.active = this.isExpanded;
            if (this.canExpandLayout) {
              if (this.isExpanded) {
                this.expandedBlock.parent = this.expandedParent;
                //this.expandedBlock.setSiblingIndex(this.node.getSiblingIndex() + 1);
                this.expandedBlock.setSiblingIndex(this.expandAfterNode.getSiblingIndex() + 1);
              } else {
                this.expandedBlock.parent = this.node;
              }
            }
          }
        };
        _createClass(SimpleEditorDropdown, [{
          key: "debug_ToggleCollapseDropdown",
          get: function get() {
            return false;
          },
          set: function set(v) {
            console.log("debug_ToggleCollapseDropdown");
            if (this.expandedBlock.active) this.isExpanded = true;else this.isExpanded = false;
            this.toggleDropdownBlock();
          }
        }]);
        return SimpleEditorDropdown;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isExpanded", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canExpandLayout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "expandedParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "expandAfterNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "expandedBlock", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "defaultLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "dropdownOption", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "debug_ToggleCollapseDropdown", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "debug_ToggleCollapseDropdown"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SimpleMouseTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Prefab, input, Input, KeyCode, EventMouse, geometry, Vec3, Layers, PhysicsSystem, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Prefab = module.Prefab;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      EventMouse = module.EventMouse;
      geometry = module.geometry;
      Vec3 = module.Vec3;
      Layers = module.Layers;
      PhysicsSystem = module.PhysicsSystem;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e8f80ZNyVtHBLOhzwTem47V", "SimpleMouseTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SimpleMouseTest = exports('SimpleMouseTest', (_dec = ccclass('SimpleMouseTest'), _dec2 = property(Camera), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SimpleMouseTest, _Component);
        function SimpleMouseTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "simpleNodePrefab", _descriptor2, _assertThisInitialized(_this));
          _this.rayStart = null;
          _this.rayEnd = null;
          return _this;
        }
        var _proto = SimpleMouseTest.prototype;
        _proto.start = function start() {
          console.log("start() is the last one before update.");
          input.on(Input.EventType.KEY_UP, this.keyUp, this);
          input.on(Input.EventType.MOUSE_DOWN, this.mouseClick, this);
        };
        _proto.keyUp = function keyUp(event) {
          if (event.keyCode == KeyCode.ARROW_UP) {
            console.log("Up arrow key is pressed.");
          }
        };
        _proto.mouseClick = function mouseClick(event) {
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            console.log("Left mouse button clicked.");
            this.performRaycastClosest(event);
          } else if (event.getButton() === EventMouse.BUTTON_RIGHT) {
            console.log("Right Mouse button clicked.");
            this.performRaycastAll(event);
          }
        }

        //Cocos doesn't add colliders to 3d objects by default
        ;

        _proto.performRaycastAll = function performRaycastAll(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var ray = new geometry.Ray();
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          this.rayStart = ray.o.clone();
          this.rayEnd = new Vec3();
          var layerMask = 1 << Layers.Enum.DEFAULT; // Change this to the desired layer
          var maxDistance = 500;
          var queryTrigger = true;
          Vec3.scaleAndAdd(this.rayEnd, ray.o, ray.d, maxDistance); // Assuming a distance of 500 units

          var bResult = PhysicsSystem.instance.raycast(ray, layerMask, maxDistance, queryTrigger);
          if (bResult) {
            console.log("Found objs.");
            var results = PhysicsSystem.instance.raycastResults;
            for (var i = 0; i < results.length; i++) {
              var result = results[i];
              console.log("Hit object:", result.collider.node.name);
            }
          } else {
            console.log("RaycastAll: No objects detected.");
            this.instantiateNodeAtRayTip(ray);
            this.instantiateNodesAlongRay(ray, 0.5);
          }
        }

        //Cocos doesn't add colliders to 3d objects by default
        ;

        _proto.performRaycastClosest = function performRaycastClosest(event) {
          if (!this.camera) {
            console.error("Camera is not assigned.");
            return;
          }
          var ray = new geometry.Ray();
          var screenPos = new Vec3(event.getLocationX(), event.getLocationY(), 0);
          this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);
          this.rayStart = ray.o.clone();
          this.rayEnd = new Vec3();
          var layerMask = 1 << Layers.Enum.DEFAULT; // Change this to the desired layer
          var maxDistance = 500;
          var queryTrigger = true;
          Vec3.scaleAndAdd(this.rayEnd, ray.o, ray.d, maxDistance); // Assuming a distance of 500 units

          var cResult = PhysicsSystem.instance.raycastClosest(ray, layerMask, maxDistance, queryTrigger);
          if (cResult) {
            var raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            var hitPoint = raycastClosestResult.hitPoint;
            var hitNormal = raycastClosestResult.hitNormal;
            var collider = raycastClosestResult.collider;
            var distance = raycastClosestResult.distance;
            console.log("RaycastClosest - Found obj: ", collider.node.name);
          } else {
            console.log("RaycastClosest: No object detected.");
            this.instantiateNodeAtRayTip(ray);
            this.instantiateNodesAlongRay(ray, 0.5);
          }
        };
        _proto.instantiateNodeAtRayTip = function instantiateNodeAtRayTip(ray) {
          if (!this.simpleNodePrefab) {
            console.error("Simple node prefab is not assigned.");
            return;
          }
          var newNode = instantiate(this.simpleNodePrefab);
          var originNode = instantiate(this.simpleNodePrefab);
          originNode.setPosition(ray.o);
          newNode.setPosition(this.rayEnd);
          this.node.scene.addChild(newNode);
          this.node.scene.addChild(originNode);
        };
        _proto.instantiateNodesAlongRay = function instantiateNodesAlongRay(ray, distance) {
          if (!this.simpleNodePrefab) {
            console.error("Simple node prefab is not assigned.");
            return;
          }
          var rayDirection = ray.d.clone().normalize();
          var totalDistance = 1000; // Assuming a total distance of 1000 units
          var numNodes = Math.floor(totalDistance / distance);
          for (var i = 0; i <= numNodes; i++) {
            var position = new Vec3();
            Vec3.scaleAndAdd(position, ray.o, rayDirection, i * distance);
            var newNode = instantiate(this.simpleNodePrefab);
            newNode.setPosition(position);
            this.node.scene.addChild(newNode);
          }
        };
        return SimpleMouseTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "simpleNodePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SimplePool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, Pool, instantiate, director;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Pool = module.Pool;
      instantiate = module.instantiate;
      director = module.director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f8854BpXKRD+JooN98gGgkj", "SimplePool", undefined);

      /**
       * Simple pooling for Cocos Creator.
       * 
       * Usage:
       * - Instead of calling `instantiate()`, use:
       *   `SimplePool.spawn(somePrefab, somePosition, someRotation);`
       * - Instead of destroying an object, use:
       *   `SimplePool.despawn(myNode);`
       * - To preload the pool with instances:
       *   `SimplePool.preload(somePrefab, 20);`
       */

      var SimplePool = exports('SimplePool', /*#__PURE__*/function () {
        function SimplePool() {}
        /**
         * Initialize the pool for a specific prefab.
         * @param prefab - The prefab to initialize the pool for.
         * @param qty - The initial size of the pool.
         */
        SimplePool.init = function init(prefab, qty) {
          if (qty === void 0) {
            qty = SimplePool.DEFAULT_POOL_SIZE;
          }
          var prefabId = prefab.data.uuid;
          if (!this._pools.has(prefabId)) {
            var poolData = {
              pool: null,
              // Temporary placeholder
              memberIds: new Set(),
              // Track nodes in this pool using their UUIDs (strings)
              counter: 0 // Initialize the counter
            };

            poolData.pool = new Pool(function () {
              var node = instantiate(prefab);
              node.name = prefab.name + " (Pooled " + (poolData.counter + 1) + ")";
              poolData.counter++;
              return node;
            }, qty);
            this._pools.set(prefabId, poolData);
          }
        }

        /**
         * Preload a number of instances of a prefab into the pool.
         * @param prefab - The prefab to preload.
         * @param qty - The number of instances to preload.
         */;
        SimplePool.preload = function preload(prefab, qty) {
          if (qty === void 0) {
            qty = 1;
          }
          this.init(prefab, qty);
          var nodes = [];
          for (var i = 0; i < qty; i++) {
            nodes.push(this.spawn(prefab));
          }
          for (var _i = 0; _i < qty; _i++) {
            this.despawn(nodes[_i]);
          }
        }

        /**
         * Spawn a node from the pool (or instantiate a new one if the pool is empty).
         * @param prefab - The prefab to spawn.
         * @param position - The position to spawn the node at.
         * @param rotation - The rotation to spawn the node with.
         * @param parent - The parent node to attach the spawned node to (defaults to the current scene).
         * @returns The spawned node.
         */;
        SimplePool.spawn = function spawn(prefab, position, rotation, parent) {
          this.init(prefab);
          var poolData = this._pools.get(prefab.data.uuid);
          var node = poolData.pool.alloc();

          // Track this node as belonging to the pool
          poolData.memberIds.add(node.uuid);

          // Set the parent to the current scene if not provided
          if (!parent) {
            parent = director.getScene();
          }
          node.parent = parent;
          if (position) {
            node.position = position;
          }
          if (rotation) {
            node.rotation = rotation;
          }
          node.active = true;
          return node;
        }

        /**
         * Despawn a node back into the pool.
         * @param node - The node to despawn.
         */;
        SimplePool.despawn = function despawn(node) {
          if (!node || !node.isValid) return;
          var poolFound = false;
          for (var _iterator = _createForOfIteratorHelperLoose(this._pools), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              prefabId = _step$value[0],
              poolData = _step$value[1];
            if (poolData.memberIds.has(node.uuid)) {
              node.active = false;
              poolData.pool.free(node);
              poolData.memberIds["delete"](node.uuid); // Remove from tracking
              poolFound = true;
              break;
            }
          }
          if (!poolFound) {
            console.warn("Object '" + node.name + "' wasn't spawned from a pool. Destroying it instead.");
            node.destroy();
          }
        };
        return SimplePool;
      }());

      /**
       * Data structure to hold pool and member tracking.
       */
      // Default pool size for preloading
      SimplePool.DEFAULT_POOL_SIZE = 3;
      // Dictionary to hold pools for each prefab
      SimplePool._pools = new Map();
      /**
       * Extension method for Node to allow `node.despawn()` syntax.
       */
      /*Node.prototype.despawn = function (): void {
          SimplePool.despawn(this);
      };*/
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SimpleRaycastTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c2d20ydHtVM2atsCS9URq9P", "SimpleRaycastTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SimpleRaycastTest = exports('SimpleRaycastTest', (_dec = ccclass('SimpleRaycastTest'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SimpleRaycastTest, _Component);
        function SimpleRaycastTest() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SimpleRaycastTest.prototype;
        _proto.start = function start() {
          // this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseClick, this);

          this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            console.log('Mouse down');
          }, this);
        }

        // onMouseClick(event: EventMouse) {
        //     console.log("Mouse clicked on node:", this.node.name);
        // }
        ;

        return SimpleRaycastTest;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Singleton.ts", ['cc'], function (exports) {
  var cclegacy, director, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "803d1pv0ZdLsJdTra2OKgEv", "Singleton", undefined);
      var Singleton = exports('Singleton', /*#__PURE__*/function () {
        function Singleton() {}
        /**
         * Get an instance of a component type.
         * If it doesn't exist, try to find it in the scene.
         */
        Singleton.get = function get(type) {
          var _director$getScene;
          var instance = this.instances.get(type);

          // If instance exists but is no longer valid, remove it
          if (instance && !instance.isValid) {
            this.instances["delete"](type);
            return null;
          }

          // If instance is found, return it
          if (instance) {
            return instance;
          }

          // Try to find the component in the scene
          var foundInstance = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.getComponentInChildren(type);
          if (foundInstance) {
            this.instances.set(type, foundInstance);
            return foundInstance;
          }
          return null;
        }

        /**
         * Store an instance in the singleton dictionary.
         * Will only store if no valid instance exists.
         */;
        Singleton.set = function set(instance) {
          var _this = this;
          var type = instance.constructor;
          var existingInstance = this.instances.get(type);

          // Only set if there's no existing valid instance
          if (!existingInstance || !existingInstance.isValid) {
            this.instances.set(type, instance);

            // Attach an event to remove it when it's destroyed
            instance.node.once(Node.EventType.NODE_DESTROYED, function () {
              _this.instances["delete"](type);
            });
          }
        };
        return Singleton;
      }());
      Singleton.instances = new Map();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TurnController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HexSlot.ts', './index.ts', './HexGridController.ts', './ComboController.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Component, HexSlot, HexGridController, ComboController, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      HexSlot = module.HexSlot;
    }, null, function (module) {
      HexGridController = module.HexGridController;
    }, function (module) {
      ComboController = module.ComboController;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _class5, _class6, _descriptor3, _descriptor4, _descriptor5, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class8, _class9, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "0e97bYuTPhAk7jPaXZr/V6i", "TurnController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //#region External Classes
      var SingleMovementData = exports('SingleMovementData', (_dec = ccclass('SingleMovementData'), _dec2 = property({
        type: HexSlot
      }), _dec3 = property({
        type: HexSlot
      }), _dec(_class = (_class2 = function SingleMovementData(initialHex, targetHex) {
        _initializerDefineProperty(this, "initialHex", _descriptor, this);
        _initializerDefineProperty(this, "targetHex", _descriptor2, this);
        this.initialHex = initialHex;
        this.targetHex = targetHex;
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "initialHex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetHex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var Rule = function Rule(condition, origin, target) {
        this.origin = void 0;
        this.target = void 0;
        this.contition = function () {
          return true;
        };
        this.origin = origin;
        this.target = target;
        this.contition = condition;
      };
      var TurnSortingData = exports('TurnSortingData', (_dec4 = ccclass('TurnSortingData'), _dec5 = property({
        type: HexSlot
      }), _dec6 = property(), _dec7 = property(), _dec4(_class5 = (_class6 = function TurnSortingData() {
        _initializerDefineProperty(this, "slot", _descriptor3, this);
        _initializerDefineProperty(this, "connections", _descriptor4, this);
        _initializerDefineProperty(this, "colorAmount", _descriptor5, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class6.prototype, "slot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class6.prototype, "connections", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class6.prototype, "colorAmount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class6)) || _class5));
      //#endregion

      var TurnController = exports('TurnController', (_dec8 = ccclass('TurnController'), _dec9 = property({
        type: HexGridController,
        group: 'Runtime'
      }), _dec10 = property({
        type: [HexSlot]
      }), _dec11 = property({
        type: [TurnSortingData]
      }), _dec12 = property({
        type: [SingleMovementData]
      }), _dec13 = property({
        type: [HexSlot]
      }), _dec8(_class8 = (_class9 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TurnController, _Component);
        function TurnController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hexGrid", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listOfSlotsExpectedToMove", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turnSorting", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentMovement", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towers", _descriptor10, _assertThisInitialized(_this));
          //@property({ type: [ HexSlot ] })
          _this.placedSlotQueue = [];
          //null this after everything runs
          _this.lastPlacedSlot = void 0;
          return _this;
        }
        var _proto = TurnController.prototype;
        _proto.initialize = function initialize() {
          Singleton.set(this);
          this.hexGrid = Singleton.get(HexGridController);
        }

        //player movement -> checkMovementAroundSlot -> updateListOfSlotsExpectedToMove -> decideNextStackToMove -> movementFinishedCallback

        //This will be only for player movement?
        ;

        _proto.startPlayerMovement = function startPlayerMovement(hex) {
          console.log("TurnController.startPlayerMovement()");
          if (this.turnSorting.length > 0) {
            //console.log("TurnController.startPlayerMovement() QUEUE NEXT MOVEMENT");
            this.placedSlotQueue.push(hex);
          } else {
            this.lastPlacedSlot = hex;
            this.checkMovementAroundSlot(this.lastPlacedSlot);
          }
        };
        _proto.checkMovementAroundSlot = function checkMovementAroundSlot(hex) {
          //console.log("TurnController.checkMovementAroundSlot()");

          var data = hex.getData();
          console.log("startTurnSequence: [" + data.x + ", " + data.y + "]");

          // After the slot was placed, we update the list of those that are expected to move
          this.updateListOfSlotsExpectedToMove();

          //Decide next piece/stack to move
          var movement = this.decideNextStackToMove(hex);
          if (movement !== null) {
            this.executeMovement(movement);
          }
        }

        //#region Base Rules
        ;

        _proto.executeMovement = function executeMovement(movement) {
          var _this2 = this;
          //console.log(`createTurn: [${data.x}, ${data.y}]`);
          this.currentMovement = movement;
          Singleton.get(HexGridController).moveTopPiecesToSlot(this.currentMovement.initialHex, this.currentMovement.targetHex, function () {
            return _this2.movementFinishedCallback(_this2.currentMovement);
          });
          Singleton.get(ComboController).cancelTowerExplosion();
        };
        _proto.runRules = function runRules(placed, neighbor) {
          //peça vai pra onde foi colocada a nova, somente um vizinho
          var origin = null;
          var target = null;

          //var placed = movement.initialHex;
          //var neighbor = movement.targetHex;
          var ruleStack = this.defineRules(placed, neighbor);
          // Run rules
          for (var index = 0; index < ruleStack.length; index++) {
            var element = ruleStack[index];
            if (element.contition()) {
              origin = element.origin;
              target = element.target;
              break;
            }
          }
          var movement = new SingleMovementData(origin, target);
          return movement;
          //Singleton.get(HexGridController).moveTopPiecesToSlot(origin, target, () => this.movementFinishedCallback());
        };

        _proto.defineRules = function defineRules(placed, neighbor) {
          var ruleStack = [];

          // Rules added here first will be checked first, from top to bottom.
          var placedMultiNeighborSingleRule = new Rule(function () {
            return placed.isMultiColor() && neighbor.isSingleColor();
          }, placed, neighbor);
          ruleStack.push(placedMultiNeighborSingleRule);

          // Base rule will always run if no other rules are met.
          var baseRule = new Rule(function () {
            return true;
          }, neighbor, placed);
          ruleStack.push(baseRule);
          return ruleStack;
        }
        //#endregion

        //Maybe filter this by color?
        //Will be called when certain external events happen (merge, player movement, lock destroyed, other)
        ;

        _proto.updateListOfSlotsExpectedToMove = function updateListOfSlotsExpectedToMove() {
          this.listOfSlotsExpectedToMove = [];
          for (var y = 0; y < this.hexGrid.gridHeight; y++) {
            for (var x = 0; x < this.hexGrid.gridWidth; x++) {
              var slot = this.hexGrid.grid[y][x];
              // Ignore if this is not an active slot
              if (!slot.data.isActiveSlot) continue;
              slot.debug_MarkSlotSelected = false;
              // Then if we have a valid slot, we check if this slot has possible merge-able neighbors                
              slot.updatePossibleNeighborMatches();
              // Then, assign the list with the new updated values
              if (slot.hasPossibleMatches) {
                slot.debug_MarkSlotSelected = true;
                this.listOfSlotsExpectedToMove.push(slot);
              }
            }
          }

          //Toda vez que o turnSorting mudar ele vai mover a peca de maior prioridade
          this.createTurnSortingList();

          //Sort by color amount by descending order
          this.turnSorting.sort(function (a, b) {
            return b.colorAmount - a.colorAmount;
          });

          // Sort the turnSorting list by the `connections` parameter in ascending order
          this.turnSorting.sort(function (a, b) {
            return a.connections - b.connections;
          });

          //Priority/weight to the placed piece
          //No final disso, a peca de maior prioridade se move
        }

        //Preenche a lista de turnSorting
        ;

        _proto.createTurnSortingList = function createTurnSortingList() {
          console.log("createTurnSortingList()");
          var turnSorting = Singleton.get(TurnController).turnSorting;
          turnSorting.clear();
          var listOfSlotsExpectedToMove = Singleton.get(TurnController).listOfSlotsExpectedToMove;

          //Itera em todos os slots que estao previstos para se mover, para checar quem pode realmente mover, caso nao quebre um link com algum vizinho
          for (var i = 0; i < listOfSlotsExpectedToMove.length; i++) {
            var thisPiece = listOfSlotsExpectedToMove[i];
            var iWillMoveToThisSlot = thisPiece.possibleMatches[0];
            var thisPieceCanMove = true;

            // Todos os vizinhos permitem que thisPiece se mova?
            for (var j = 0; j < thisPiece.possibleMatches.length; j++) {
              var neighbor = thisPiece.possibleMatches[j];
              var movementIsFarFromNeighbor = !neighbor.possibleMatches.contains(iWillMoveToThisSlot);
              var movementIsNotToNeighbor = neighbor != iWillMoveToThisSlot;
              if (movementIsFarFromNeighbor && movementIsNotToNeighbor) {
                // Esse vizinho nao permitiu que a piece se mova pois ela ficaria longe dele
                thisPieceCanMove = false;
                break;
              }
            }
            // Esse vizinho pode se mover com sucesso?
            if (thisPieceCanMove) {
              var turn = new TurnSortingData();
              turn.slot = thisPiece;
              turn.connections = thisPiece.possibleMatches.length;
              turn.colorAmount = thisPiece.getColorAmount();
              turnSorting.push(turn);
            }
          }
          if (turnSorting.length > 1) {
            //Singleton.get(ComboController).delayTowerExplosion();
            Singleton.get(ComboController).cancelTowerExplosion();
          }
        };
        _proto.decideNextStackToMove = function decideNextStackToMove(origin) {
          if (this.listOfSlotsExpectedToMove.length <= 1) {
            //console.log(`TurnController.decideNextStackToMove() Length: ${this.turnSorting.length}`);
            this.movementFinishedCallback(null);
            return null;
          }
          if (this.listOfSlotsExpectedToMove.length == 2) {
            //console.log(`TurnController.decideNextStackToMove() Length: ${this.turnSorting.length}`);

            //identify which is the placed one
            var placed = this.turnSorting[0].slot;
            var neighbor = this.turnSorting[1].slot;
            if (this.lastPlacedSlot === this.turnSorting[1].slot) {
              placed = this.turnSorting[1].slot;
              neighbor = this.turnSorting[0].slot;
            }
            var movement = this.runRules(placed, neighbor);
            //Do default rule
            this.executeMovement(movement); // maybe change for the equivalent turnSorting?
          } else {
            //console.log(`TurnController.decideNextStackToMove() Length: ${this.turnSorting.length}`);
            if (this.turnSorting[0].connections == 1) {
              var _origin = this.turnSorting[0].slot;
              var target = _origin.possibleMatches[0];
              var _movement = new SingleMovementData(_origin, target);
              this.executeMovement(_movement); // maybe change for the equivalent turnSorting?
            } else {
              // //Maybe this rule is wrong, because the turnsorting[1] could be far away
              // //Check what can move
              // const movement = this.runRules(this.turnSorting[ 0 ].slot, this.turnSorting[ 1 ].slot);
              // this.executeMovement(movement); // maybe change for the equivalent turnSorting?

              var _origin2 = this.turnSorting[0].slot;
              var _target = _origin2.possibleMatches[0];
              var _movement2 = new SingleMovementData(_origin2, _target);
              this.executeMovement(_movement2); // maybe change for the equivalent turnSorting?
            }
          }

          return null;
        }

        //#region Movement Finish
        ;

        _proto.movementFinishedCallback = function movementFinishedCallback(movement) {
          //console.log("TurnController.turnFinishedCallback()");

          this.lastPlacedSlot = this.placedSlotQueue.pop();
          this.placedSlotQueue.clear();
          if (this.turnSorting.length > 0) {
            this.checkMovementAroundSlot(this.turnSorting[0].slot);
          } else {
            console.log("TurnController.turnFinishedCallback() EXPLODE NOW?");
            this.checkForTowers();
          }
        };
        _proto.checkForTowers = function checkForTowers() {
          this.towers.clear();
          for (var y = 0; y < this.hexGrid.gridHeight; y++) {
            for (var x = 0; x < this.hexGrid.gridWidth; x++) {
              var slot = this.hexGrid.grid[y][x];
              if (slot.data.isActiveSlot) {
                if (slot.getTopStack() != null) {
                  // console.log(`TurnController.checkForTowers() 2 [${y},${x}] [${slot.getTopStack().amount}]`);

                  if (slot.getTopStack().isColor && slot.getTopStack().amount >= 10) {
                    //console.log("TurnController.checkForTowers() FOUND TOWER");
                    this.towers.push(slot);
                  }
                }
              }
            }
          }
          Singleton.get(ComboController).updateTowers(this.towers);
          //console.log(`TurnController.checkForTowers() SIZE 2 [${this.hexGrid.gridHeight},${this.hexGrid.gridWidth}] | count: ${count}`);
        };

        _proto.explodeAnimationStarted = function explodeAnimationStarted() {
          //Clear this.listOfSlotsExpectedToMove
          for (var i = 0; i < this.towers.length; i++) {
            this.listOfSlotsExpectedToMove.remove(this.towers[i]);
          }

          //this.towers.clear();

          // for (let i = 0; i < this.turnSorting.length; i++) {
          //     //if(this.turnSorting[i].slot ===)
          //     this.listOfSlotsExpectedToMove.remove(this.towers[ i ]);
          // }
        }

        //#endregion
        ;

        return TurnController;
      }(Component), (_descriptor6 = _applyDecoratedDescriptor(_class9.prototype, "hexGrid", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class9.prototype, "listOfSlotsExpectedToMove", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class9.prototype, "turnSorting", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class9.prototype, "currentMovement", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class9.prototype, "towers", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class9)) || _class8));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tweenMovementTests.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, math, tween, Component, RealCurve, director;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      math = module.math;
      tween = module.tween;
      Component = module.Component;
      RealCurve = module.RealCurve;
      director = module.director;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "80de0r4uf9CMZOrMJndCW94", "tweenMovementTests", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tweenMovementTests = exports('tweenMovementTests', (_dec = ccclass('tweenMovementTests'), _dec2 = property({
        type: Node,
        group: 'Components'
      }), _dec3 = property({
        type: [Node],
        group: 'Components'
      }), _dec4 = property({
        type: Node,
        group: 'Components'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tweenMovementTests, _Component);
        function tweenMovementTests() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "realCurve", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleObj", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objects", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = tweenMovementTests.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.moveObjectsToPosition(this.objects, this.targetNode.worldPosition, this.duration, function () {
            return _this2.afterAnimationMethod();
          });
        };
        _proto.moveObjectsToPosition = /*#__PURE__*/function () {
          var _moveObjectsToPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(objs, targetPos, duration, callback) {
            var _iterator, _step, obj, currentWorldPos;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _iterator = _createForOfIteratorHelperLoose(objs);
                case 1:
                  if ((_step = _iterator()).done) {
                    _context.next = 11;
                    break;
                  }
                  obj = _step.value;
                  console.log("Moving object: " + obj.name);
                  currentWorldPos = obj.worldPosition.clone(); // Get the current global position
                  obj.setParent(director.getScene()); // Ensure the object is in the root of the scene
                  //const adjustedTargetPos = targetPos.clone();
                  //adjustedTargetPos.y += 0.1; // Slightly adjust the target position for each object

                  targetPos.y += 0.1;
                  _context.next = 9;
                  return this.moveObjectToPosition(obj, currentWorldPos, targetPos, duration);
                case 9:
                  _context.next = 1;
                  break;
                case 11:
                  console.log("All objects have been moved in sequence.");

                  // Callback here
                  if (callback) {
                    callback();
                  }
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function moveObjectsToPosition(_x, _x2, _x3, _x4) {
            return _moveObjectsToPosition.apply(this, arguments);
          }
          return moveObjectsToPosition;
        }();
        _proto.moveObjectToPosition = function moveObjectToPosition(obj, startPos, targetPos, duration) {
          var peakPos = targetPos.clone();
          peakPos.x = math.lerp(startPos.x, targetPos.x, 0.75); // Calculate peak position for a smooth jump
          peakPos.y += 0.3;
          var targetRotation = obj.eulerAngles.clone();
          targetRotation.z -= 180; // Rotate 180 degrees around the Z-axis

          return new Promise(function (resolve) {
            obj.setWorldPosition(startPos); // Ensure the object starts at the correct global position
            tween(obj).parallel(tween().to(duration * 0.75, {
              worldPosition: peakPos
            }, {
              easing: 'quadOut'
            }) // Move up
            .to(duration * 0.25, {
              worldPosition: targetPos
            }, {
              easing: 'quadIn'
            }),
            // Move down
            tween().to(duration, {
              eulerAngles: targetRotation
            }, {
              easing: 'linear'
            }) // Rotate
            ).call(function () {
              return resolve();
            }) // Resolve the promise when the tween completes
            .start();
          });
        }

        // async moveObjectsToPosition(objs: Node[], targetPos: Vec3, duration: number, callback?: () => void) {
        //     for (const obj of objs) {
        //         console.log(`Moving object: ${obj.name}`);
        //         obj.setParent(director.getScene());
        //         targetPos.y += 0.1;
        //         await this.moveObjectToPosition(obj, targetPos, duration);
        //     }
        //     console.log("All objects have been moved in sequence.");
        //     //Callback here

        //     if (callback) {
        //         callback();
        //     }
        // }

        // moveObjectToPosition(obj: Node, targetPos: Vec3, duration: number): Promise<void> {

        //     const peakPos = targetPos.clone();
        //     peakPos.x = math.lerp(obj.worldPosition.x, targetPos.x, 0.75);
        //     peakPos.y += 0.3;

        //     const targetRotation = obj.eulerAngles.clone();
        //     targetRotation.z -= 180; // Rotate 180 degrees around the Y-axis

        //     return new Promise(resolve => {
        //         tween(obj)
        //             .parallel(
        //                 tween().to(duration * 0.75, { position: peakPos }, { easing: 'quadOut' }) // Move up
        //                     .to(duration * 0.25, { position: targetPos }, { easing: 'quadIn' }), // Move down
        //                 tween().to(duration, { eulerAngles: targetRotation }, { easing: 'linear' }) // Rotate
        //             )
        //             .call(() => resolve()) // Resolve the promise when the tween completes
        //             .start();
        //     });
        // }
        ;

        _proto.afterAnimationMethod = function afterAnimationMethod() {
          console.log("afterAnimationMethod() All objects have been moved in sequence.");
        };
        return tweenMovementTests;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "realCurve", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "singleObj", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objects", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TweenPositionCommand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AsyncCommand.ts', './CommandDecorator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Vec3, AsyncCommand, commandclass;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }, function (module) {
      AsyncCommand = module.AsyncCommand;
    }, function (module) {
      commandclass = module.commandclass;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5a861RJ+3dHT7Q8Bt15LCPn", "TweenPositionCommand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TweenPositionCommand = exports('TweenPositionCommand', (_dec = commandclass('TweenPositionCommand'), _dec(_class = (_class2 = /*#__PURE__*/function (_AsyncCommand) {
        _inheritsLoose(TweenPositionCommand, _AsyncCommand);
        function TweenPositionCommand() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AsyncCommand.call.apply(_AsyncCommand, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "targetPosition", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TweenPositionCommand.prototype;
        _proto.execute = /*#__PURE__*/function () {
          var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function execute() {
            return _execute.apply(this, arguments);
          }
          return execute;
        }();
        return TweenPositionCommand;
      }(AsyncCommand), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetPosition", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TweenScaleCommand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AsyncCommand.ts', './CommandDecorator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, RealCurve, Node, Vec3, tween, AsyncCommand, commandclass;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RealCurve = module.RealCurve;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      AsyncCommand = module.AsyncCommand;
    }, function (module) {
      commandclass = module.commandclass;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "59ee5ipcOlBY7geSJpHc/2i", "TweenScaleCommand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TweenScaleCommand = exports('TweenScaleCommand', (_dec = commandclass('TweenScaleCommand'), _dec2 = property({
        type: RealCurve
      }), _dec3 = property({
        type: Node
      }), _dec4 = property(), _dec5 = property({
        type: Node,
        visible: function visible() {
          return this.useNodeAsTarget;
        }
      }), _dec6 = property({
        visible: function visible() {
          return !this.useNodeAsTarget;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_AsyncCommand) {
        _inheritsLoose(TweenScaleCommand, _AsyncCommand);
        function TweenScaleCommand() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AsyncCommand.call.apply(_AsyncCommand, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "easeCurve", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeToTween", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useNodeAsTarget", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toTarget", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetScale", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TweenScaleCommand.prototype;
        _proto.execute = /*#__PURE__*/function () {
          var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    var targetScale = _this2.useNodeAsTarget ? _this2.toTarget.scale : _this2.targetScale;
                    tween(_this2.nodeToTween).to(_this2.duration, {
                      scale: targetScale
                    }, {
                      easing: function easing(t) {
                        return _this2.easeCurve.evaluate(t);
                      }
                    }).call(function () {
                      console.log('Tween scale completed');
                      resolve();
                    }).start();
                    if (!_this2.waitUntilFinished) {
                      resolve();
                    }
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function execute() {
            return _execute.apply(this, arguments);
          }
          return execute;
        }();
        return TweenScaleCommand;
      }(AsyncCommand), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "easeCurve", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return function () {
            var curve = new RealCurve();
            curve.addKeyFrame(0, 0);
            curve.addKeyFrame(1, 1);
            return curve;
          }();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeToTween", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useNodeAsTarget", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toTarget", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetScale", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TweenSequence.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Enum, RealCurve, Node, EventHandler, Vec3, Component, tween, Wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      RealCurve = module.RealCurve;
      Node = module.Node;
      EventHandler = module.EventHandler;
      Vec3 = module.Vec3;
      Component = module.Component;
      tween = module.tween;
    }, null, function (module) {
      Wait = module.Wait;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _dec10, _dec11, _dec12, _dec13, _dec14, _class4, _class5, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "e35b6aVV7lFibMdNCj8qoiy", "TweenSequence", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var TweenType = /*#__PURE__*/function (TweenType) {
        TweenType[TweenType["None"] = 0] = "None";
        TweenType[TweenType["Wait"] = 1] = "Wait";
        TweenType[TweenType["Position"] = 2] = "Position";
        TweenType[TweenType["Scale"] = 3] = "Scale";
        TweenType[TweenType["Rotation"] = 4] = "Rotation";
        TweenType[TweenType["Angle"] = 5] = "Angle";
        return TweenType;
      }(TweenType || {});
      var Tween = exports('Tween', (_dec = ccclass('Tween'), _dec2 = property({
        type: Enum(TweenType)
      }), _dec3 = property({
        visible: function visible() {
          return this.tweenType != TweenType.None;
        }
      }), _dec4 = property({
        visible: function visible() {
          return this.tweenType != TweenType.None && this.tweenType != TweenType.Wait;
        }
      }), _dec5 = property({
        type: RealCurve,
        visible: function visible() {
          return this.tweenType != TweenType.None && this.tweenType != TweenType.Wait;
        }
      }), _dec6 = property({
        visible: function visible() {
          return this.canUseNodeAsTarget();
        }
      }), _dec7 = property({
        type: Node,
        visible: function visible() {
          return this.useNodeAsTarget && this.canUseNodeAsTarget();
        }
      }), _dec8 = property({
        visible: function visible() {
          return !this.useNodeAsTarget && (this.tweenType == TweenType.Position || this.tweenType == TweenType.Scale || this.tweenType == TweenType.Rotation);
        }
      }), _dec9 = property({
        visible: function visible() {
          return !this.useNodeAsTarget && this.tweenType == TweenType.Angle;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function Tween() {
          _initializerDefineProperty(this, "tweenType", _descriptor, this);
          _initializerDefineProperty(this, "duration", _descriptor2, this);
          _initializerDefineProperty(this, "waitUntilFinished", _descriptor3, this);
          _initializerDefineProperty(this, "easeCurve", _descriptor4, this);
          _initializerDefineProperty(this, "useNodeAsTarget", _descriptor5, this);
          _initializerDefineProperty(this, "targetNode", _descriptor6, this);
          _initializerDefineProperty(this, "targetVec3", _descriptor7, this);
          _initializerDefineProperty(this, "targetAngle", _descriptor8, this);
        }
        var _proto = Tween.prototype;
        _proto.canUseNodeAsTarget = function canUseNodeAsTarget() {
          return this.tweenType == TweenType.Position || this.tweenType == TweenType.Scale || this.tweenType == TweenType.Rotation || this.tweenType == TweenType.Angle;
        };
        return Tween;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tweenType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TweenType.None;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "waitUntilFinished", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "easeCurve", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return function () {
            var curve = new RealCurve();
            curve.addKeyFrame(0, 0);
            curve.addKeyFrame(1, 1);
            return curve;
          }();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "useNodeAsTarget", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetVec3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "targetAngle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      var TweenSequence = exports('TweenSequence', (_dec10 = ccclass('TweenSequence'), _dec11 = property({
        type: Enum(TweenType)
      }), _dec12 = property({
        type: Enum(TweenType)
      }), _dec13 = property({
        type: [Tween],
        visible: function visible() {
          return this.tweenSequence.length > 0;
        }
      }), _dec14 = property({
        type: [EventHandler],
        visible: function visible() {
          return this.tweenSequence.length > 0;
        }
      }), _dec10(_class4 = executeInEditMode(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TweenSequence, _Component);
        function TweenSequence() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playOnEnable", _descriptor9, _assertThisInitialized(_this));
          // Dropwdown "Button" to add new tweens
          _initializerDefineProperty(_this, "_addToSequence", _descriptor10, _assertThisInitialized(_this));
          // Tween list
          _initializerDefineProperty(_this, "tweenSequence", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "onSequenceComplete", _descriptor12, _assertThisInitialized(_this));
          // Cache the original values    
          _this.originalValuesSet = false;
          _this.originalPosition = new Vec3();
          _this.originalScale = new Vec3();
          _this.originalEuler = new Vec3();
          _this.originalAngle = 0;
          return _this;
        }
        var _proto2 = TweenSequence.prototype;
        _proto2.onEnable = function onEnable() {
          this.cacheOriginalValues();
          if (this.playOnEnable) {
            this.playTween();
          }
        };
        _proto2.cacheOriginalValues = function cacheOriginalValues() {
          if (this.originalValuesSet) return;
          this.originalValuesSet = true;
          this.originalAngle = this.node.angle;
          this.originalPosition.set(this.node.position);
          this.originalScale.set(this.node.scale);
          this.originalEuler.set(this.node.eulerAngles);
        };
        _proto2.resetToOriginalValues = function resetToOriginalValues() {
          // In case this is called before the original values are set
          this.cacheOriginalValues();
          this.node.angle = this.originalAngle;
          this.node.position = this.originalPosition;
          this.node.scale = this.originalScale;
          this.node.eulerAngles = this.originalEuler;
        }

        // Play the tweens in the list
        ;

        _proto2.playTween = /*#__PURE__*/
        function () {
          var _playTween = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var _loop, _iterator, _step;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var thisTween, targetPos, targetScale, targetEuler, targetAngle;
                    return _regeneratorRuntime().wrap(function _loop$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          thisTween = _step.value;
                          _context.t0 = thisTween.tweenType;
                          _context.next = _context.t0 === TweenType.Position ? 4 : _context.t0 === TweenType.Scale ? 7 : _context.t0 === TweenType.Rotation ? 10 : _context.t0 === TweenType.Angle ? 13 : 16;
                          break;
                        case 4:
                          targetPos = thisTween.useNodeAsTarget ? thisTween.targetNode.position : thisTween.targetVec3;
                          tween(_this2.node).to(thisTween.duration, {
                            position: targetPos
                          }, {
                            easing: function easing(t) {
                              return thisTween.easeCurve.evaluate(t);
                            }
                          }).start();
                          return _context.abrupt("break", 16);
                        case 7:
                          targetScale = thisTween.useNodeAsTarget ? thisTween.targetNode.scale : thisTween.targetVec3;
                          tween(_this2.node).to(thisTween.duration, {
                            scale: targetScale
                          }, {
                            easing: function easing(t) {
                              return thisTween.easeCurve.evaluate(t);
                            }
                          }).start();
                          return _context.abrupt("break", 16);
                        case 10:
                          // 3D rotation - Rotation
                          targetEuler = thisTween.useNodeAsTarget ? thisTween.targetNode.eulerAngles : thisTween.targetVec3;
                          tween(_this2.node).to(thisTween.duration, {
                            eulerAngles: targetEuler
                          }, {
                            easing: function easing(t) {
                              return thisTween.easeCurve.evaluate(t);
                            }
                          }).start();
                          return _context.abrupt("break", 16);
                        case 13:
                          // 2D rotation - Angle
                          targetAngle = thisTween.useNodeAsTarget ? thisTween.targetNode.angle : thisTween.targetAngle;
                          tween(_this2.node).to(thisTween.duration, {
                            angle: targetAngle
                          }, {
                            easing: function easing(t) {
                              return thisTween.easeCurve.evaluate(t);
                            }
                          }).start();
                          return _context.abrupt("break", 16);
                        case 16:
                          if (!(thisTween.tweenType === TweenType.Wait || thisTween.waitUntilFinished)) {
                            _context.next = 19;
                            break;
                          }
                          _context.next = 19;
                          return Wait.seconds(thisTween.duration);
                        case 19:
                        case "end":
                          return _context.stop();
                      }
                    }, _loop);
                  });
                  _iterator = _createForOfIteratorHelperLoose(this.tweenSequence);
                case 2:
                  if ((_step = _iterator()).done) {
                    _context2.next = 6;
                    break;
                  }
                  return _context2.delegateYield(_loop(), "t0", 4);
                case 4:
                  _context2.next = 2;
                  break;
                case 6:
                  // Emit event for sequence completion
                  this.onSequenceComplete.emit([]);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this);
          }));
          function playTween() {
            return _playTween.apply(this, arguments);
          }
          return playTween;
        }();
        _createClass(TweenSequence, [{
          key: "addToSequence",
          get: function get() {
            return this._addToSequence;
          },
          set: function set(value) {
            var tween = new Tween();
            tween.tweenType = value;
            this.tweenSequence.push(tween);
            // Reset selection
            this._addToSequence = TweenType.None;
          }
        }]);
        return TweenSequence;
      }(Component), (_descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "playOnEnable", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "_addToSequence", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TweenType.None;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "addToSequence", [_dec12], Object.getOwnPropertyDescriptor(_class5.prototype, "addToSequence"), _class5.prototype), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "tweenSequence", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "onSequenceComplete", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new EventHandler();
        }
      })), _class5)) || _class4) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_GameplayHUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './UI_ObjectivesDisplay.ts', './GameplayController.ts', './UI_LockDisplay.ts', './Singleton.ts', './CameraUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, UITransform, Camera, instantiate, Component, UI_ObjectivesDisplay, GameplayController, UI_LockDisplay, Singleton, CameraUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      Camera = module.Camera;
      instantiate = module.instantiate;
      Component = module.Component;
    }, null, function (module) {
      UI_ObjectivesDisplay = module.UI_ObjectivesDisplay;
    }, function (module) {
      GameplayController = module.GameplayController;
    }, function (module) {
      UI_LockDisplay = module.UI_LockDisplay;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      CameraUtils = module.CameraUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "51a67KSUQ9Ne5WIFL5B3tJy", "UI_GameplayHUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UI_GameplayHUD = exports('UI_GameplayHUD', (_dec = ccclass('UI_GameplayHUD'), _dec2 = property({
        type: UI_ObjectivesDisplay,
        group: 'Components'
      }), _dec3 = property({
        type: Node,
        group: 'Components'
      }), _dec4 = property({
        type: Prefab,
        group: 'Components'
      }), _dec5 = property({
        type: UITransform,
        group: 'Components'
      }), _dec6 = property({
        type: UITransform,
        group: 'Components'
      }), _dec7 = property({
        type: Camera,
        group: 'Runtime'
      }), _dec8 = property({
        type: [UI_LockDisplay],
        group: 'Runtime'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UI_GameplayHUD, _Component);
        function UI_GameplayHUD() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "objectivesDisplay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickblock", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lockDisplayPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lockParentTransform", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvasTransform", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lockDisplays", _descriptor7, _assertThisInitialized(_this));
          _this.onPausedLambda = void 0;
          return _this;
        }
        var _proto = UI_GameplayHUD.prototype;
        _proto.initialize = function initialize(objectives, cam, locks) {
          var _this2 = this;
          Singleton.set(this);
          this.mainCamera = cam;
          this.objectivesDisplay.initialize(objectives);
          this.onPausedLambda = function (_boolean) {
            _this2.handleOnPaused(_boolean);
          };
          Singleton.get(GameplayController).onPause.addListener(this.onPausedLambda);
          this.setUpLocks(locks);
        };
        _proto.handleOnPaused = function handleOnPaused(isPaused) {
          //this.isPaused = isPaused;
          this.clickblock.active = isPaused;
        };
        _proto.setUpLocks = function setUpLocks(locks) {
          for (var i = 0; i < locks.length; i++) {
            var element = locks[i].node;

            // Instantiate the lock display prefab
            var lockDisplay = instantiate(this.lockDisplayPrefab);

            // Set the parent to the lockParentTransform node
            lockDisplay.setParent(this.lockParentTransform.node);
            lockDisplay.setPosition(CameraUtils.worldToUIPosition(element, this.mainCamera, this.canvasTransform));
            var uiComponent = lockDisplay.getComponent(UI_LockDisplay);
            uiComponent.initialize(locks[i]);
            this.lockDisplays.push(uiComponent);
            //this.lockDisplays[ this.lockDisplays.length - 1 ].initialize(locks[ i ]);
          }
        };

        return UI_GameplayHUD;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objectivesDisplay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickblock", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lockDisplayPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lockParentTransform", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "canvasTransform", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lockDisplays", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_LockDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f3fe050QWBE8qigE1EkDqNa", "UI_LockDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UI_LockDisplay = exports('UI_LockDisplay', (_dec = ccclass('UI_LockDisplay'), _dec2 = property({
        type: Label,
        group: 'Components'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UI_LockDisplay, _Component);
        function UI_LockDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "display", _descriptor, _assertThisInitialized(_this));
          _this.onValueUpdatedLambda = void 0;
          return _this;
        }
        var _proto = UI_LockDisplay.prototype;
        _proto.initialize = function initialize(lock) {
          var _this2 = this;
          this.display.string = lock.currentAmount.toString();
          this.onValueUpdatedLambda = function (num) {
            _this2.handleOnValueUpdate(num);
          };
          lock.onCurrentAmountUpdate.addListener(this.onValueUpdatedLambda);
        };
        _proto.handleOnValueUpdate = function handleOnValueUpdate(amount) {
          //console.log("UI_LockDisplay.handleOnValueUpdate: ", amount);
          this.display.string = amount.toString();
          if (amount === 0) {
            this.display.node.active = false;
          }
        };
        return UI_LockDisplay;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "display", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_ObjectivesDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelAsset.ts', './UI_SingleObjective.ts', './ObjectivesController.ts', './index.ts', './Singleton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, Enum, Prefab, Node, instantiate, Component, ObjectiveType, ObjectiveData, UI_SingleObjective, ObjectivesController, Singleton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Enum = module.Enum;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ObjectiveType = module.ObjectiveType;
      ObjectiveData = module.ObjectiveData;
    }, function (module) {
      UI_SingleObjective = module.UI_SingleObjective;
    }, function (module) {
      ObjectivesController = module.ObjectivesController;
    }, null, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "ed034FINgpB0LhKhvdIR5Dq", "UI_ObjectivesDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ObjectiveSprite = exports('ObjectiveSprite', (_dec = ccclass('ObjectiveSprite'), _dec2 = property({
        type: SpriteFrame
      }), _dec3 = property({
        type: Enum(ObjectiveType)
      }), _dec(_class = (_class2 = function ObjectiveSprite() {
        _initializerDefineProperty(this, "sprite", _descriptor, this);
        _initializerDefineProperty(this, "objective", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "objective", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ObjectiveType.MergePieces;
        }
      })), _class2)) || _class));
      var UI_ObjectivesDisplay = exports('UI_ObjectivesDisplay', (_dec4 = ccclass('UI_ObjectivesDisplay'), _dec5 = property({
        type: [ObjectiveData]
      }), _dec6 = property({
        type: [UI_SingleObjective]
      }), _dec7 = property({
        type: Prefab,
        group: {
          name: "Components"
        }
      }), _dec8 = property({
        type: Node,
        group: {
          name: "Components"
        }
      }), _dec9 = property({
        type: [ObjectiveSprite],
        group: {
          name: "Components"
        }
      }), _dec4(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UI_ObjectivesDisplay, _Component);
        function UI_ObjectivesDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadedObjectives", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blocks", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "displayPrefab", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockParent", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectiveSprites", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UI_ObjectivesDisplay.prototype;
        _proto.initialize = function initialize(objectives) {
          this.loadedObjectives = objectives;
          this.setEvents();
          this.createButtons(objectives);
        };
        _proto.setEvents = function setEvents() {

          //Register self on event in some objectives controller class
          // this.handleDisplaySelected = (num) => {
          //     this.onObjectiveSelected(num);
          // }

          // this.dropdown.onOptionSelected.addListener(this.dropdownEventLambda);
        };
        _proto.createButtons = function createButtons(objectives) {
          for (var i = 0; i < objectives.length; i++) {
            this.createObjectiveBlock(i, objectives[i].type, objectives[i].amount);
          }
        };
        _proto.createObjectiveBlock = function createObjectiveBlock(id, objective, amount) {
          //console.log(`EditorObjectivesController.createObjectiveBlock ${id}: ${ObjectiveType[objective]} `);

          var newButton = instantiate(this.displayPrefab);
          newButton.parent = this.blockParent;
          newButton.setSiblingIndex(id);
          var objectiveDisplay = newButton.getComponent(UI_SingleObjective);
          objectiveDisplay.initialize(id, this.getSpriteFromObjective(objective), amount);
          Singleton.get(ObjectivesController).trackedObjectives[id].onAmountChanged.addListener(objectiveDisplay.amountUpdatedLambda);
          this.blocks.push(objectiveDisplay);
        };
        _proto.getSpriteFromObjective = function getSpriteFromObjective(objective) {
          //console.log(`getPrefabFromColor( ${PieceColor[color]} )`);
          for (var _iterator = _createForOfIteratorHelperLoose(this.objectiveSprites), _step; !(_step = _iterator()).done;) {
            var sprite = _step.value;
            if (sprite.objective === objective) {
              return sprite.sprite;
            }
          }
          return null;
        };
        return UI_ObjectivesDisplay;
      }(Component), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "loadedObjectives", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "blocks", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "displayPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "blockParent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "objectiveSprites", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UI_SingleObjective.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, ProgressBar, Label, math, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b703dlEEGhA777xuJYP5EKZ", "UI_SingleObjective", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UI_SingleObjective = exports('UI_SingleObjective', (_dec = ccclass('UI_SingleObjective'), _dec2 = property({
        type: Number,
        group: {
          name: "Runtime"
        }
      }), _dec3 = property({
        type: Sprite,
        group: {
          name: "Components"
        }
      }), _dec4 = property({
        type: ProgressBar,
        group: {
          name: "Components"
        }
      }), _dec5 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec6 = property({
        type: Label,
        group: {
          name: "Components"
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UI_SingleObjective, _Component);
        function UI_SingleObjective() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "displaySprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minDisplay", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDisplay", _descriptor5, _assertThisInitialized(_this));
          _this.maxAmount = 0;
          _this.currentAmount = 0;
          _this.amountUpdatedLambda = void 0;
          return _this;
        }
        var _proto = UI_SingleObjective.prototype;
        _proto.initialize = function initialize(id, sprite, amount) {
          var _this2 = this;
          this.id = id;
          this.displaySprite.spriteFrame = sprite;
          this.maxDisplay.string = amount.toString();
          this.maxAmount = amount;
          this.minDisplay.string = this.currentAmount.toString();
          this.updateCurrentAmount(this.currentAmount);
          this.amountUpdatedLambda = function (num) {
            _this2.updateCurrentAmount(num);
          };
        };
        _proto.updateCurrentAmount = function updateCurrentAmount(amount) {
          this.currentAmount = amount;
          this.minDisplay.string = amount.toString();
          this.updateCurrentPercentage();
        };
        _proto.updateCurrentPercentage = function updateCurrentPercentage() {
          var percentage = math.inverseLerp(0, this.maxAmount, this.currentAmount);
          this.progressBar.progress = percentage;
        };
        return UI_SingleObjective;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "displaySprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minDisplay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxDisplay", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Wait.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "657060zw8dJbo3z/8IvaK/H", "Wait", undefined);
      var Wait = exports('Wait', /*#__PURE__*/function () {
        function Wait() {}
        /**
         * Waits for the specified number of seconds.
         * @param seconds - The delay duration in seconds.
         * @returns A promise that resolves after the delay.
         */
        Wait.seconds = function seconds(_seconds) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, _seconds * 1000);
          });
        }

        /**
         * Waits for the specified number of milliseconds.
         * @param milliseconds - The delay duration in milliseconds.
         * @returns A promise that resolves after the delay.
         */;
        Wait.milliseconds = function milliseconds(_milliseconds) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, _milliseconds);
          });
        }

        /**
         * Waits until a condition is met.
         * @param condition - A function that returns a boolean.
         * @param interval - The interval (in milliseconds) to check the condition.
         * @returns A promise that resolves when the condition is met.
         */;
        Wait.until = function until(condition, interval) {
          if (interval === void 0) {
            interval = 100;
          }
          return new Promise(function (resolve) {
            var check = function check() {
              if (condition()) {
                resolve();
              } else {
                setTimeout(check, interval);
              }
            };
            check();
          });
        };
        return Wait;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaitCommand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './AsyncCommand.ts', './CommandDecorator.ts', './Wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AsyncCommand, commandclass, Wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, null, function (module) {
      AsyncCommand = module.AsyncCommand;
    }, function (module) {
      commandclass = module.commandclass;
    }, function (module) {
      Wait = module.Wait;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e4716C0KHFAE6LB5HJkyUtM", "WaitCommand", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WaitCommand = exports('WaitCommand', (_dec = commandclass('WaitCommand'), _dec2 = property({
        visible: function visible() {
          return false;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_AsyncCommand) {
        _inheritsLoose(WaitCommand, _AsyncCommand);
        function WaitCommand() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AsyncCommand.call.apply(_AsyncCommand, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "waitUntilFinished", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = WaitCommand.prototype;
        _proto.execute = /*#__PURE__*/function () {
          var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Wait.seconds(this.duration);
                case 2:
                  console.log('Executing async command');
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function execute() {
            return _execute.apply(this, arguments);
          }
          return execute;
        }();
        return WaitCommand;
      }(AsyncCommand), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "waitUntilFinished", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WorldToUIPosition.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Camera, Vec3, UITransform, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Camera = module.Camera;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "07b68cO7gBMRJ3mNKmUOc7y", "WorldToUIPosition", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WorldToUIPosition = exports('WorldToUIPosition', (_dec = ccclass('WorldToUIPosition'), _dec2 = property(Node), _dec3 = property(Camera), _dec4 = property(Vec3), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WorldToUIPosition, _Component);
        function WorldToUIPosition() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target3DObject", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "offset", _descriptor3, _assertThisInitialized(_this));
          _this.uiTransform = null;
          return _this;
        }
        var _proto = WorldToUIPosition.prototype;
        _proto.onLoad = function onLoad() {
          this.uiTransform = this.node.getComponent(UITransform);
          if (!this.mainCamera) {
            this.mainCamera = this.node.scene.getComponentInChildren(Camera);
          }
        };
        _proto.update = function update() {
          if (!this.target3DObject || !this.mainCamera) return;

          // 1. Convert world position to screen position
          var screenPos = new Vec3();
          this.mainCamera.worldToScreen(screenPos, this.target3DObject.worldPosition);

          // 2. Apply offset
          Vec3.add(screenPos, screenPos, this.offset);

          // 3. Handle object behind camera case
          if (screenPos.z < 0) {
            this.node.active = false;
            return;
          }
          this.node.active = true;

          // 4. Convert screen coordinates to UI space (NEW CORRECT WAY)
          // const uiPos = new Vec3(
          //     screenPos.x - screen.windowSize.width * 0.5,
          //     screenPos.y - screen.windowSize.height * 0.5,
          //     0
          // );

          // Alternative conversion method
          var uiPos = new Vec3();
          this.mainCamera.screenToWorld(uiPos, screenPos);

          // 5. Update UI position
          this.node.setPosition(uiPos);
        };
        return WorldToUIPosition;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target3DObject", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});