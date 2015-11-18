class MainScene extends eui.Component {
    public constructor() {
        super();

        this.skinName = new MainSkin();
    }

    public createChildren() {
        super.createChildren();

        this.initHurt();
        this.initPicker();
        this.initSoil();
        this.initGem();

        UIUtils.addButtonScaleEffects(this);

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        EventManager.instance.addEvent(EventName.PICK_HURT_OK, this.pickHurtOk, this);
        EventManager.instance.addEvent(EventName.MAP_CHANGE, this.changeMapJpg, this);
    }

    private mapBg:eui.Image;
    private currMapIndex:number = 1;

    private changeMapJpg(e:egret.Event) {
        this.currMapIndex++;
        if (this.currMapIndex > 3) { //TODO 根据玩家开放的数据进行判断
            this.currMapIndex = 1;
        }
        this.mapBg.source = "soil_0" + this.currMapIndex + "_png";
    }

    private pickHurtOk(e:egret.Event) {
        this.hurt.play();
    }

    private shopBtn:eui.Button;
    private honorBtn:eui.Button;
    private musicBtn:eui.Button;

    private onTouchTap(e:egret.TouchEvent) {
        var y:number = e.localY;
        if (Util.isRang(y, 135, Const.WIN_H - 241)) {
            this.picker.pick();
        }else{
            var btn:eui.Button = <eui.Button>e.target;
            switch (btn){
                case this.shopBtn:
                    UIManager.instance.showPanel(PanelName.SHOP,btn.localToGlobal(btn.width/2,btn.height/2));
                    break;
            }
        }
    }

    private pickerGroup:eui.Group;
    private picker:Picker;
    private hurt:Hurt;

    private initHurt() {
        this.hurt = new Hurt();
        this.hurt.x = Const.WIN_W / 2;
        this.hurt.y = Const.WIN_H / 2;
        this.pickerGroup.addChild(this.hurt);
    }

    private initPicker() {
        this.picker = new Picker();
        this.picker.x = Const.WIN_W - 30;
        this.picker.y = (Const.WIN_H + this.picker.height) / 2 - 100;
        this.pickerGroup.addChild(this.picker);
    }

    private soilItemArr:SoilItem[];
    private gemItemArr:GemItem[];

    private initSoil() {
        this.soilItemArr = [];
        var len = DataManager.instance.SOIL_MAX;
        for (var i = 0; i < len; i++) {
            var item = new SoilItem(i + 1);

            item.x = 10;
            item.y = 155 + i * 55;
            this.addChild(item);
            this.soilItemArr.push(item);
        }
    }

    private initGem() {
        this.gemItemArr = [];
        var len = DataManager.instance.GEM_MAX;
        for (var i = 0; i < len; i++) {
            var item = new GemItem(i);
            item.y = 155 + i * 55;
            this.addChild(item);
            this.gemItemArr.push(item);
        }
    }
}