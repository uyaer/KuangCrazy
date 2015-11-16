class ShopPanel extends PanelBase {
    private itemRenderArr:any[];

    public constructor() {
        super();

        this.itemRenderArr = [PickItemRenderer, WorkerItemRenderer,
            SoilItemRenderer,BoxItemRenderer];

        this.skinName = new ShopPanelSkin();
    }

    public init(startPos:egret.Point) {
        this.startPos = new egret.Point(-100, Const.WIN_H / 2);
    }

    private tab1:eui.RadioButton;
    private tab2:eui.RadioButton;
    private tab3:eui.RadioButton;
    private tab4:eui.RadioButton;
    private list:eui.List;

    public createChildren() {
        super.createChildren();

        this.changeShopList(0);
    }

    public onTouchTap(e:egret.TouchEvent) {
        super.onTouchTap(e);
        var btn:eui.Button = <eui.Button>e.target;
        if (egret.is(btn, egret.getQualifiedClassName(eui.RadioButton))) {
            this.onTabChange(btn);
        }
    }

    private onTabChange(btn:eui.Button) {
        switch (btn) {
            case this.tab1:
                this.changeShopList(0);
                break;
            case this.tab2:
                this.changeShopList(1);
                break;
            case this.tab3:
                this.changeShopList(2);
                break;
            case this.tab4:
                this.changeShopList(3);
                break;
        }
    }

    private changeShopList(index:number) {
        this.list.useVirtualLayout = true;
        this.list.itemRenderer = this.itemRenderArr[index];
        this.list.dataProvider = new eui.ArrayCollection([1, 2, 34, 5, 61, 2, 3, 4, 5, 6]);
    }
}