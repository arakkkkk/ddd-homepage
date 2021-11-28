function Home() {
    return (
        <div class="container">
            <h2>メニュー</h2>
            <div class="card mb-3" style={{ height:"150px", borderRadius:"20px" }}>
                <div class="row no-gutters">
                    <div class="col-3">
                        <img src="images/foods/maman_f1.jpg" alt="" style={styles.list_img} />
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h4 class="card-title">オードブル</h4>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{ height:"150px", borderRadius:"20px" }}>
                <div class="row no-gutters">
                    <div class="col-3">
                        <img src="images/foods/maman_f1.jpg" alt="" style={styles.list_img} />
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h4 class="card-title">ランチ</h4>
                            <p class="card-text"><small class="text-muted">11:00~14:00</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{ height:"150px", borderRadius:"20px" }}>
                <div class="row no-gutters">
                    <div class="col-3">
                        <img src="images/foods/maman_f1.jpg" alt="" style={styles.list_img} />
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h4 class="card-title">ディナー</h4>
                            <p class="card-text"><small class="text-muted">17:30~20:00</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{ height:"150px", borderRadius:"20px" }}>
                <div class="row no-gutters">
                    <div class="col-3">
                        <img src="images/foods/maman_f1.jpg" alt="" style={styles.list_img} />
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h4 class="card-title">単品</h4>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{ height:"150px", borderRadius:"20px" }}>
                <div class="row no-gutters">
                    <div class="col-3">
                        <img src="images/foods/maman_f1.jpg" alt="" style={styles.list_img} />
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h4 class="card-title">お持ち帰り</h4>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
            <h2>イベント</h2>
            <div class="card mb-3" style={{ height:"150px", borderRadius:"20px" }}>
                <div class="row no-gutters">
                    <div class="col-3">
                        <img src="images/foods/maman_f1.jpg" alt="" style={styles.list_img} />
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h4 class="card-title">クリスマス</h4>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{ height:"150px", borderRadius:"20px" }}>
                <div class="row no-gutters">
                    <div class="col-3">
                        <img src="images/foods/maman_f1.jpg" alt="" style={styles.list_img} />
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h4 class="card-title">おせち料理</h4>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;

const styles = {
    list_img: {
        height: "150px",
        width: "200px",
        borderRadius: "20px 0px 0px 20px"
    }
}
