class DataManager {
    private static _instance = null;

    public static get instance():DataManager {
        if (DataManager._instance == null) {
            DataManager._instance = new DataManager();
        }
        return DataManager._instance;
    }

    /**
     * 金币数量
     * @type {number}
     */
    public coin:number = 0;
    /**
     * 每秒金币增加数量
     * @type {number}
     */
    public coinAddRate:number = 0;

    /**
     * 泥土的数据
     * @type {HashMap<number, number>}
     */
    public soilMap:HashMap<number,number> = new HashMap<number,number>();
    /**
     * 宝石的数据
     * @type {HashMap<number, number>}
     */
    public gemMap:HashMap<number,number> = new HashMap<number,number>();
    /**
     * 奴隶数据
     * @type {HashMap<number, WorkerVo>}
     */
    public workerMap:HashMap<number,WorkerVo> = new HashMap<number,WorkerVo>();
    /**
     * 铁锤数据
     * @type {HashMap<number, PickerVo>}
     */
    public pickMap:HashMap<number,PickerVo> = new HashMap<number,PickerVo>();
    /**
     * 已经获得了的铁锤数据(正在使用的铁锤)
     */
    public hasGetedPickMaxType:number = 1;
    /**
     * 铁锤等级
     * @type {number}
     */
    public pickerLevel:number = 1;
    /**
     * 已经开放了的地图编号
     */
    public hasGetedMapIndex:number = 1;
    /**
     * 泥土种类
     * @type {number}
     */
    public SOIL_MAX:number = 9;
    /**
     * 宝石种类
     * @type {number}
     */
    public GEM_MAX:number = 5;
    /**
     * 铁锤种类
     * @type {number}
     */
    public PICK_MAX:number = 9;
    /**
     * 工人种类
     * @type {number}
     */
    public WORKER_MAX:number = 9;
    /**
     * 地图种类
     * @type {number}
     */
    public MAP_MAX:number = 9;

    /**
     * 保存数据
     * 判断是否是游客账户
     */
    public save() {


    }

    /**
     * 刷新自动工作的产出
     */
    public refreshAutoWork() {
        //TODO  自动工作的产出数据
    }

    /**
     * 获取商店中的铁锤数据
     * @returns {PickerVo[]}
     */
    public getShopPickDataArr():PickerVo[] {
        var lv = Math.min(this.PICK_MAX, this.hasGetedPickMaxType + 1);
        var arr:PickerVo[] = [];
        for (var i = 1; i <= lv; i++) {
            arr.push(this.pickMap.get(i));
        }
        return arr;
    }

    /**
     * 获取商店中的工人数据
     * @returns {WorkerVo[]}
     */
    public getShopWorkerDataArr():WorkerVo[] {
        var arr:WorkerVo[] = [];
        for (var i = 1; i <= this.WORKER_MAX; i++) {
            arr.push(this.workerMap.get(i));
        }
        return arr;
    }

    /**
     * 获取商店中的地图开放数据
     * @returns {number[]}
     */
    public getShopMapDataArr():number[] {
        var lv = Math.min(this.MAP_MAX, this.hasGetedMapIndex + 1);
        var arr:number[] = [];
        for (var i = 1; i <= lv; i++) {
            arr.push(i);
        }
        return arr;
    }

    public getShopBoxDataArr():number[] {
        return [1, 2];
    }

    /**
     * 获取铁锤的数据
     * @param id
     */
    public getPickDataById(id:number) {
        var arr = RES.getRes("data_json")["pick"];
        for (var i = 0; i < arr.length; i++) {
            var data = arr[i];
            if (data["id"] == id) {
                return data;
            }
        }
        return null;
    }

    /**
     * 获取奴隶的数据
     * @param id
     */
    public getWorkerDataById(id:number) {
        var arr = RES.getRes("data_json")["worker"];
        for (var i = 0; i < arr.length; i++) {
            var data = arr[i];
            if (data["id"] == id) {
                return data;
            }
        }
        return null;
    }

    /**
     * 根据参数获取数据的成长
     * @param maxLv
     * @param startLv
     * @param base
     * @param rate
     * @returns {HashMap<number, number>}
     */
    public getGrowDataArr(maxLv:number, startLv:number, base:number, rate:number):HashMap<number,number> {
        var cost = base;
        var result:HashMap<number,number> = new HashMap<number,number>();
        var lv = maxLv;
        var multi = rate;
        result.set(startLv, cost);
        for (var i = startLv + 1; i <= lv; i++) {
            cost *= multi;
            result.set(i, cost);
        }
        return result;
    }
}