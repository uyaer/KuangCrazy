class Player {
    private static _instance = null;

    public static get instance():Player {
        if (Player._instance == null) {
            Player._instance = new Player();
        }
        return Player._instance;
    }

    /**
     * 锤子击打出产金币的数量
     * @type {number}
     */
    public  pickOutCoinRate:number = 1;

}