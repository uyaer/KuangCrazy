
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/common/Const.js",
	"bin-debug/common/events/EventManager.js",
	"bin-debug/common/events/EventName.js",
	"bin-debug/common/ui/GameLayerManager.js",
	"bin-debug/common/ui/PanelBase.js",
	"bin-debug/common/ui/PanelName.js",
	"bin-debug/common/ui/UIManager.js",
	"bin-debug/game/data/DataManager.js",
	"bin-debug/game/data/PickerVo.js",
	"bin-debug/game/data/WorkerVo.js",
	"bin-debug/game/panel/shop/ShopPanel.js",
	"bin-debug/game/panel/shop/box/BoxItemRenderer.js",
	"bin-debug/game/panel/shop/pick/PickItemRenderer.js",
	"bin-debug/game/panel/shop/soil/SoilItemRenderer.js",
	"bin-debug/game/panel/shop/work/WorkerItemRenderer.js",
	"bin-debug/game/scenes/main/GemItem.js",
	"bin-debug/game/scenes/main/Hurt.js",
	"bin-debug/game/scenes/main/MainScene.js",
	"bin-debug/game/scenes/main/Picker.js",
	"bin-debug/game/scenes/main/SoilItem.js",
	"bin-debug/utils/HashMap.js",
	"bin-debug/utils/UIUtils.js",
	"bin-debug/utils/Util.js",
	"bin-debug/utils/md5.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 960,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};