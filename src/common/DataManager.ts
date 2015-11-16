class DataManager {
    private static _instance = null;

    public static get instance():DataManager{
         if(DataManager._instance == null){
             DataManager._instance = new DataManager();
         }
        return DataManager._instance;
    }

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
     * 保存数据
     * 判断是否是游客账户
     */
    public save(){


    }

}