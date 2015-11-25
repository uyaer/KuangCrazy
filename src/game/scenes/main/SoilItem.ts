class SoilItem extends eui.Component {
    /**
     * 类型
     */
    private type:number;

    public constructor(type) {
        super();
        this.type = type;
        this.skinName = new SoilItemSkin();
    }

    private iconSp:eui.Image;
    private numTF:eui.BitmapLabel;

    public createChildren() {
        super.createChildren();

        this.iconSp.source = "box_soil_0" + this.type + "_png";
        this.numTF.text = "0";
    }

    public updateView() {
        var num = DataManager.instance.soilMap.get(this.type) || 0;
        this.numTF.text = num + "";
    }
}