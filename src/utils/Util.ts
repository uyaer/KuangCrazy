class Util {

    /**
     * 获取从min-max之间的值
     * @param min
     * @param max
     */
    public static  rang(min:number, max:number):number {
        return Math.round(Math.random() * (max - min) + min);
    }

    /**
     * 判断是否在范围
     * @param val
     * @param min
     * @param max
     * @returns {boolean}
     */
    public static isRang(val:number, min:number, max:number):boolean {
        return val >= min && val <= max;
    }

    /**
     * 将val的值限制起来
     * @param val
     * @param min
     * @param max
     * @returns {number}
     */
    public static  limit(val:number, min:number, max:number):number {
        return Math.max(min, Math.min(max, val));
    }

    /**
     * 修复movieclip bug
     * @param fac
     */
    public static layoutMovieClip(fac:egret.MovieClipDataFactory) {
        var mcList:any = fac.mcDataSet.mc;
        for (var key in mcList) {
            var frames:any = mcList[key].frames;
            var minX:number = 100000;
            var minY:number = 100000;
            for (var i = 0; i < frames.length; i++) {
                if (frames[i].x < minX)minX = frames[i].x;
                if (frames[i].y < minY)minY = frames[i].y;
            }
            for (var i = 0; i < frames.length; i++) {
                frames[i].x -= minX;
                frames[i].y -= minY;
            }
        }
    }

    /**
     * 返回mc的偏移值
     * @param mc
     * @returns {egret.Point}
     */
    public static getMovieClipOffset(mc:egret.MovieClip):egret.Point {
        var obj = mc.movieClipData.getKeyFrameData(1);
        return new egret.Point(obj.x + mc.width / 2, obj.y + mc.height / 2);
    }

    /**
     * 角度转化弧度
     * @param val
     */
    public static ang2rad(val:number):number {
        return val / 180 * Math.PI;
    }

    /**
     * 弧度转化角度
     * @param val
     */
    public static rad2ang(val:number):number {
        return val / Math.PI * 180;
    }

}