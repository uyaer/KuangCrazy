class SoilItemRenderer extends eui.ItemRenderer {
    public constructor() {
        super();
        this.skinName = new SoilItemRenderSkin();
    }

    private iconSp:eui.Image;
    private soilIcon:eui.Image;
    private costSoilTF:eui.BitmapLabel;
    private buyBtn:eui.Button;

    public createChildren() {
        super.createChildren();

        this.updateView();
    }

    public dataChanged() {
        super.dataChanged();
        this.updateView();
    }

    private updateView() {
        if (!this.data)return;
        if (!this.iconSp)return;

        var lv:number = this.data;
        this.iconSp.source = "box_soil_0" + lv + "_png";
        if (DataManager.instance.hasGetedMapIndex >= lv) {
            this.soilIcon.visible = false;
            this.costSoilTF.text = "";
            this.buyBtn.enabled = false;
        } else {
            this.buyBtn.enabled = true;
            this.soilIcon.visible = true;
            this.soilIcon.source = "box_soil_0" + (lv - 1) + "_png";
            this.costSoilTF.text = "500";
        }
    }
}