class HurtLabel {
    /**
     * 文字对象池
     * @type {Array}
     */
    private static pool:egret.BitmapText[] = [];

    public static getLabel(str:string) {
        var tf:egret.BitmapText = null;
        if (HurtLabel.pool.length > 0) {
            tf = HurtLabel.pool.pop();
        } else {
            tf = new egret.BitmapText();
            tf.font = RES.getRes("fontWhite_fnt");
        }
        tf.text = str;
        tf.x = Util.rangFloat(0.25, 0.75) * Const.WIN_W;
        tf.y = Util.rangFloat(0.45, 0.55) * Const.WIN_H;
        egret.Tween.get(tf)
            .to({y: tf.y - 100}, 400, egret.Ease.backIn)
            .call(()=> {
                HurtLabel.recycle(tf);
            }, this);
        return tf;
    }

    public static recycle(tf:egret.BitmapText) {
        if (HurtLabel.pool.length < 50) {
            HurtLabel.pool.push(tf);
        }
        egret.Tween.removeTweens(tf);
        UIUtils.removeSelf(tf);
    }
}