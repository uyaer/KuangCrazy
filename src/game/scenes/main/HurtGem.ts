class HurtGem {
    /**
     * gem对象池
     * @type {Array}
     */
    private static pool:egret.Bitmap[] = [];

    public static getGem(type:number) {
        var bm:egret.Bitmap = null;
        if (HurtGem.pool.length > 0) {
            bm = HurtGem.pool.pop();
        } else {
            bm = new egret.Bitmap();
        }
        bm.bitmapData = RES.getRes("rubies_"+(type-1)+"_png");
        bm.x = Util.rangFloat(0.25, 0.75) * Const.WIN_W;
        bm.y = Util.rangFloat(0.45, 0.55) * Const.WIN_H;
        egret.Tween.get(bm)
            .wait(Util.rangInt(50, 350))
            .to({x: Const.WIN_W - 25, y: 155 + (type - 1) * 55}, 1000, egret.Ease.backIn)
            .call(()=> {
                HurtGem.recycle(bm);
            }, this);
        return bm;
    }

    public static recycle(bm:egret.Bitmap) {
        if (HurtGem.pool.length < 50) {
            HurtGem.pool.push(bm);
        }
        egret.Tween.removeTweens(bm);
        UIUtils.removeSelf(bm);
    }
}