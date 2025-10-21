System.register("chunks:///_virtual/DemoScript.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PokiPlatform.ts"],(function(e){"use strict";var t,o,a,r,i,n,c,u,l,s,p,d,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.defineProperty},function(e){n=e.cclegacy,c=e._decorator,u=e.Label,l=e.game,s=e.AudioSource,p=e.log,d=e.Component},function(e){h=e.CCPokiSDK}],execute:function(){var m,S,y,f,R;n._RF.push({},"02a8cG1kBZMb6HG0cbbzmxL","DemoScript",void 0);var k=c.ccclass,b=c.property;e("DemoScript",(m=k("DemoScript"),S=b({type:u}),m((R=t((f=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return t=e.call.apply(e,[this].concat(n))||this,a(r(t),"outputLabel",R,r(t)),i(r(t),"audioSource",null),t}o(t,e);var n=t.prototype;return n.start=function(){l.on(h.EVENT_REWARD_BREAK_DONE,this.onRewardBreakDone,this),l.on(h.EVENT_COMMERCIAL_BREAK_DONE,this.onCommercialBreakDone,this),l.on(h.EVENT_SHRABLE_URL_READY,this.onSharableLinkReady,this),this.audioSource=this.getComponent(s)},n.onShareableLinkClicked=function(e){h.shareableURL({difficulty:"easy",lives:3})},n.onSharableLinkReady=function(){var e=arguments[0];p("SharableURL:",e),this.outputLabel.string=e},n.onRewardBreakClicked=function(e){this.audioSource.pause(),h.gameplayStop(),h.rewardBreak()},n.onRewardBreakDone=function(){var e=arguments[0];e?(this.outputLabel.string="Reward video success.",p("Revive Player"),h.gameplayStart()):p("Game End Screen"),this.audioSource.play()},n.onCommercialBreakClicked=function(e){this.audioSource.pause(),h.gameplayStop(),h.commercialBreak()},n.onCommercialBreakDone=function(){h.gameplayStart(),this.audioSource.play()},t}(d)).prototype,"outputLabel",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=f))||y));n._RF.pop()}}}));

System.register("chunks:///_virtual/PokiPlatform.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.defineProperty},function(e){n=e.cclegacy,r=e.game}],execute:function(){n._RF.push({},"5a510DDQhJLeKan+foOx3ch","PokiPlatform",void 0);var o=window.PokiSDK,a=e("CCPokiSDK",function(){function e(){}return e.rewardBreak=function(){try{var t=r;o.rewardedBreak().then((function(n){t.emit(e.EVENT_REWARD_BREAK_DONE,n)}))}catch(e){console.log(e)}},e.commercialBreak=function(){var t=r;o.commercialBreak().then((function(){t.emit(e.EVENT_COMMERCIAL_BREAK_DONE)}))},e.gameplayStop=function(){o.gameplayStop()},e.gameplayStart=function(){o.gameplayStart()},e.shareableURL=function(t){var n=r;o.shareableURL(t).then((function(t){console.log(t),n.emit(e.EVENT_SHRABLE_URL_READY,t)}))},e.isAdBlocked=function(){return o.isAdBlocked()},e.getURLParam=function(e){return o.getURLParam(e)},e}());t(a,"EVENT_REWARD_BREAK_DONE","prbr"),t(a,"EVENT_COMMERCIAL_BREAK_DONE","pcvr"),t(a,"EVENT_SHRABLE_URL_READY","psur"),n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./PokiPlatform.ts","./DemoScript.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

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