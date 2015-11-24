class WorkerItemRenderer extends eui.ItemRenderer {
    public constructor() {
        super();
        this.skinName = new WorkerItemRenderSkin();
    }

    private iconSp:eui.Image;
    private outCoinTF:eui.BitmapLabel;
    private outSoilSp:eui.Image;
    private outSoilTF:eui.BitmapLabel;
    private costCoinTF:eui.BitmapLabel;
    private costSoilTF:eui.BitmapLabel;
    private costGemTF:eui.BitmapLabel;
    private costSoilIcon:eui.Image;
    private costGemIcon:eui.Image;
    private buyBtn:eui.Button;
    private getedSp:eui.Image;

    public createChildren() {
        super.createChildren();

        UIUtils.addButtonScaleEffects(this);

        this.buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuyClick, this);
    }

    private onBuyClick() {
        //TODO buy
    }

    protected dataChanged() {
        super.dataChanged();

        var vo:WorkerVo = this.data;
        this.buyBtn.visible = this.getedSp.visible = false;
        if (vo.level >= vo.maxLevel) {
            this.getedSp.visible = true;
        } else {
            this.buyBtn.visible = true;
        }
        this.iconSp.source = vo.name+"_png";
        this.outCoinTF.text = "+" + vo.outCoin;
        this.outSoilTF.text = "+" + vo.outSoil;
        this.outSoilSp.source = "box_soil_0" + vo.id + "_png";
        this.costCoinTF.text = Util.getBigNumberShow(vo.costCoin);
        this.costGemTF.text = vo.costGem + "";
        this.costGemIcon.source = "rubies_" + (vo.costGemType - 1) + "_png";
        this.costSoilTF.text = vo.costSoil + "";
        this.costSoilIcon.source = "box_soil_0" + (vo.id) + "_png";

        //判断颜色
        if (vo.level >= vo.maxLevel) {
            this.costCoinTF.font = "fontWhite_fnt";
            this.costGemTF.font = "fontWhite_fnt";
            this.costSoilTF.font = "fontWhite_fnt";
        } else {
            if (DataManager.instance.coin >= vo.costCoin) {
                this.costCoinTF.font = "fontGreen_fnt";
            } else {
                this.costCoinTF.font = "fontRed_fnt";
            }
            if (DataManager.instance.gemMap.get(vo.costGemType) >= vo.costGem) {
                this.costGemTF.font = "fontGreen_fnt";
            } else {
                this.costGemTF.font = "fontRed_fnt";
            }
            if (DataManager.instance.soilMap.get(vo.costSoilType) >= vo.costSoil) {
                this.costSoilTF.font = "fontGreen_fnt";
            } else {
                this.costSoilTF.font = "fontRed_fnt";
            }
        }
    }
}