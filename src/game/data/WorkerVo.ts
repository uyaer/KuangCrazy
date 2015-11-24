/**
 * 奴隶
 */
class WorkerVo {
    /**
     * 奴隶编号
     */
    public id:number;
    /**
     * 等级
     */
    public level:number = 0;

    private _data:Object;

    public constructor(id:number) {
        this.id = id;
        this._data = DataManager.instance.getWorkerDataById(id);

        this._costCoinMap = DataManager.instance.getGrowDataArr(this.maxLevel, 1, this._data["costCoinBase"], this._data["costCoinRate"]);
        this._costSoilMap = DataManager.instance.getGrowDataArr(this.maxLevel, 1, this._data["costSoilBase"], this._data["costSoilRate"], true);
        this._costGemMap = DataManager.instance.getGrowDataArr(this.maxLevel, 1, this._data["costGemBase"], this._data["costGemRate"], true);
        this._outCoinMap = DataManager.instance.getGrowDataArr(this.maxLevel, 1, this._data["outCoinBase"], this._data["outCoinRate"], true);
    }

    private _costCoinMap:HashMap<number,number>;
    private _costSoilMap:HashMap<number,number>;
    private _costGemMap:HashMap<number,number>;
    private _outCoinMap:HashMap<number,number>;

    /**
     * 名称
     */
    public get name() {
        return this._data["name"];
    }

    /**
     * 最大等级
     * @returns {number}
     */
    public get maxLevel() {
        return this._data["maxLevel"];
    }

    /**
     * 消耗金币
     * @returns {number}
     */
    public get costCoin() {
        return Math.min(this._costCoinMap.get(this.level + 1), this._data["costCoinMax"]);
    }

    /**
     * 消耗泥土
     * @returns {number}
     */
    public get costSoil() {
        return this._costSoilMap.get(this.level || 1);
    }

    /**
     * 消耗泥土的种类
     * @returns {number}
     */
    public get costSoilType() {
        return this._data["costSoilType"];
    }

    /**
     * 消耗宝石
     * @returns {number}
     */
    public get costGem() {
        return this._costGemMap.get(this.level || 1);
    }

    /**
     * 消耗宝石的种类
     * @returns {number}
     */
    public get costGemType() {
        return this._data["costGemType"];
    }

    /**
     * 获得金币
     * @returns {number}
     */
    public get outCoin() {
        return this._outCoinMap.get(this.level || 1);
    }

    /**
     * 获得单次泥土数量
     * @returns {number}
     */
    public get outSoil() {
        return 1 + Math.floor(this.level / 10);
    }

    /**
     * 获取产生泥土的类型
     * @returns {number}
     */
    public get outSoilType() {
        return this._data["outSoilType"];
    }
}