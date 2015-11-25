class HurtSoil {
    /**
     * soil对象池
     * @type {Array}
     */
    private static pool:egret.Bitmap[] = [];

    public static getSoil(type:number) {
        var bm:egret.Bitmap = null;
        if (HurtSoil.pool.length > 0) {
            bm = HurtSoil.pool.pop();
        } else {
            bm = new egret.Bitmap();
        }
        bm.bitmapData = RES.getRes("box_soil_0" + type + "_png");
        bm.x = Util.rangFloat(0.25, 0.75) * Const.WIN_W;
        bm.y = Util.rangFloat(0.45, 0.55) * Const.WIN_H;
        egret.Tween.get(bm)
            .wait(Util.rangInt(50, 350))
            .to({x: 10, y: 155 + (type - 1) * 55}, 1000, egret.Ease.backIn)
            .call(()=> {
                HurtSoil.recycle(bm);
            }, this);
        return bm;
    }

    public static recycle(bm:egret.Bitmap) {
        if (HurtSoil.pool.length < 50) {
            HurtSoil.pool.push(bm);
        }
        egret.Tween.removeTweens(bm);
        UIUtils.removeSelf(bm);
    }
}