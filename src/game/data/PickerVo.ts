class PickerVo {
    /**
     * ���ӱ��
     */
    public id:number;
    /**
     * �ȼ�
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
     * ���Ľ��
     * @returns {number}
     */
    public get costCoin() {
        return this._costCoinArr[this.level];
    }

    /**
     * ��������
     * @returns {number}
     */
    public get costSoil() {
        return this._costCoinArr[this.level];
    }

    /**
     * ���ı�ʯ
     * @returns {number}
     */
    public get costGem() {
        return this._costCoinArr[this.level];
    }
}