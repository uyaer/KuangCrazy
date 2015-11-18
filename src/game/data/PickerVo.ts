class PickerVo {
    /**
     * 锤子编号
     */
    public id:number;
    /**
     * 等级
     */
    public level:number;

    private _data:Object;

    public constructor(id:number) {
        this.id = id;
        this._data = DataManager.instance.getPickDataById(id);

    }

    private _costCoinArr:number[];
    private _costSoilArr:number[];
    private _costGemArr:number[];

    /**
     * 消耗金币
     * @returns {number}
     */
    public get costCoin() {
        return this._costCoinArr[this.level];
    }

    /**
     * 消耗泥土
     * @returns {number}
     */
    public get costSoil() {
        return this._costCoinArr[this.level];
    }

    /**
     * 消耗宝石
     * @returns {number}
     */
    public get costGem() {
        return this._costCoinArr[this.level];
    }
}