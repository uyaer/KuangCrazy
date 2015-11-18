class Hurt extends eui.Group {
    private sp:eui.Image;
    private maxPhase:number = 5;
    private currPhase:number = 0;

    public constructor() {
        super();

        this.sp = new eui.Image();
        this.addChild(this.sp);
        this.sp.visible = false;
    }

    /**
     * 切换受伤效果
     */
    public play() {
        this.currPhase++;
        if (this.currPhase > this.maxPhase) {
            this.currPhase = 0;
            EventManager.instance.dispatch(EventName.MAP_CHANGE);
        }
        if (this.currPhase > 0) {
            var texture:egret.Texture = RES.getRes("soil_damage_" + this.currPhase + "_png");
            this.sp.source = texture;
            this.sp.x = -texture.textureWidth / 2;
            this.sp.y = -texture.textureHeight / 2;
        }
        this.sp.visible = this.currPhase > 0;
    }
}