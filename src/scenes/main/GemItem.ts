class GemItem extends eui.Component {
    /**
     * 类型
     */
    private type:number;

    public constructor(type) {
        super();
        this.type = type;
        this.skinName = new GemItemSkin();
        this.right = 10;
    }

    private iconSp:eui.Image;
    private numTF:eui.BitmapLabel;

    public createChildren() {
        super.createChildren();

        this.iconSp.source = "rubies_" + this.type + "_png";
        this.numTF.text = "0";
    }
}