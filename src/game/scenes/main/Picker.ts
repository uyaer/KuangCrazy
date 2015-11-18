class Picker extends eui.Group {
    private sp:eui.Image;

    private isStarting:boolean = false;

    /**
     * 当前周期已经击打的次数
     * @type {number}
     */
    private pickCount:number = 0;
    /**
     * 一个循环的最大次数
     * @type {number}
     */
    private pickMax:number = 3;

    public constructor() {
        super();

        this.isStarting = true;

        //TODO 挖掘id
        this.sp = new eui.Image("pick_0_png");
        this.addChild(this.sp);
        this.sp.width = 442;
        this.sp.height = 442;
        this.sp.x = -this.sp.width;
        this.sp.y = -this.sp.height;
        this.width = this.sp.width;
        this.height = this.sp.height;
    }

    /**
     * 挖掘
     */
    public pick() {
        if (this.isStarting) {
            this.pickCount++;
            if (this.pickCount == this.pickMax) {
                this.pickCount = 0;
                EventManager.instance.dispatch(EventName.PICK_HURT_OK);
            }
        }
        egret.Tween.get(this).to({
            rotation: -35,
            x: this.x - 20,
            y: this.y + 55
        }, 80)
            .to({
                rotation: 0,
                x: this.x,
                y: this.y
            }, 50);
    }

}