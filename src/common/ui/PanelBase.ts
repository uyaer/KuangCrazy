class PanelBase extends eui.Panel {
    public constructor() {
        super();

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }

    private closeBtn:eui.Button;
    public startPos:egret.Point

    public init(startPos:egret.Point) {
        this.startPos = startPos;
    }

    public createChildren() {
        super.createChildren();

        UIUtils.addButtonScaleEffects(this);

        this.onShow();
    }

    public onTouchTap(e:egret.TouchEvent) {
        var target = <eui.Button>e.target;
        if (target == this.closeBtn) {
            this.onHide();
        }
    }

    public onShow() {
        this.x = Const.WIN_W;
        this.y = Const.WIN_H / 2;
        if (this.startPos) {
            this.x = this.startPos.x;
            this.y = this.startPos.y;
        }
        var toX = (Const.WIN_W - this.width) / 2;
        var toY = (Const.WIN_H - this.height) / 2;
        this.scaleX = this.scaleY = 0;
        egret.Tween.get(this).to({
            x: toX,
            y: toY,
            scaleX: 1,
            scaleY: 1
        }, 250, egret.Ease.backOut);
    }

    public onHide() {
        var toX = Const.WIN_W;
        var toY = Const.WIN_H / 2;
        if (this.startPos) {
            toX = this.startPos.x;
            toY = this.startPos.y;
        }
        egret.Tween.get(this).to({
            x: toX,
            y: toY,
            scaleX: 0,
            scaleY: 0
        }, 250, egret.Ease.backIn).call(UIUtils.removeSelf, this, [this]);
    }
}