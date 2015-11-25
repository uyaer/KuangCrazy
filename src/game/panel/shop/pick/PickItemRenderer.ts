class PickItemRenderer extends eui.ItemRenderer {
    public constructor() {
        super();
        this.skinName = new PickItemRenderSkin();
    }

    private iconSp:eui.Image;
    private outCoinTF:eui.BitmapLabel;
    private costCoinTF:eui.BitmapLabel;
    private gemTF:eui.BitmapLabel;
    private buyBtn:eui.Button;
    private getedSp:eui.Image;
    private gemSp:eui.Image;

    public createChildren() {
        super.createChildren();

        UIUtils.addButtonScaleEffects(this);

        this.buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuyClick, this);
    }

    private onBuyClick() {
        //TODO 判断金钱 buy
        var vo:PickerVo = this.data;
        var gemNum:number = DataManager.instance.gemMap.get(vo.costGemType);
        DataManager.instance.coin -= vo.costCoin;
        DataManager.instance.gemMap.set(vo.costGemType, gemNum - vo.costGem);
        DataManager.instance.pickLevelUp();
        EventManager.instance.dispatch(EventName.GEM_CHANGE);
    }

    protected dataChanged() {
        super.dataChanged();

        var vo:PickerVo = this.data;
        this.buyBtn.visible = this.getedSp.visible = false;
        if (vo.isPass) {
            this.getedSp.visible = true;
        } else {
            this.buyBtn.visible = true;
        }
        this.iconSp.source = "pick_" + (vo.id - 1) + "_png";
        this.outCoinTF.text = "+" + vo.outCoin;
        this.costCoinTF.text = Util.getBigNumberShow(vo.costCoin);
        this.gemTF.text = vo.costGem + "";
        this.gemSp.source = "rubies_" + (vo.costGemType - 1) + "_png";

        //判断颜色
        if (vo.isPass) {
            this.costCoinTF.font = "fontWhite_fnt";
        } else if (DataManager.instance.coin >= vo.costCoin) {
            this.costCoinTF.font = "fontGreen_fnt";
        } else {
            this.costCoinTF.font = "fontRed_fnt";
        }
    }
}