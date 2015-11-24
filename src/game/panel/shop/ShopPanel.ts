class ShopPanel extends PanelBase {
    private itemRenderArr:any[];

    public constructor() {
        super();

        this.itemRenderArr = [PickItemRenderer, WorkerItemRenderer,
            SoilItemRenderer, BoxItemRenderer];

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

    private oldIndex:number = -1;

    private changeShopList(index:number, force:boolean = false) {
        if (this.oldIndex == index && !force)return;
        this.oldIndex = index;
        this.list.useVirtualLayout = true;
        this.list.itemRenderer = this.itemRenderArr[index];
        var arr;
        if (index == 0)arr = DataManager.instance.getShopPickDataArr();
        else if (index == 1)arr = DataManager.instance.getShopWorkerDataArr();
        else if (index == 2)arr = DataManager.instance.getShopMapDataArr();
        else if (index == 3)arr = DataManager.instance.getShopBoxDataArr();
        this.list.dataProvider = new eui.ArrayCollection(arr);
        if (force) {
            this.list.validateNow();
            if (this.list.contentHeight > this.list.height) {
                this.list.scrollV = this.list.contentHeight - this.list.height;
            }
        }
    }

    private onPickLevelUp() {
        this.changeShopList(this.oldIndex, true);
    }

    public onShow() {
        super.onShow();

        EventManager.instance.addEvent(EventName.PICK_LEVEL_UP, this.onPickLevelUp, this);
    }

    public onHide() {
        super.onHide();

        EventManager.instance.removeEvent(EventName.PICK_LEVEL_UP, this.onPickLevelUp, this);
    }
}