function HeadImage() {
    var img = {
        src: "/images/foods/maman_f1.jpg",
        title: "title",
        price: "1000"
    };
    var img_list = [];
    for (let i = 0; i < 10; i++) {
        img_list.push(
            <li>
                <a>
                    <img src={img.src} />
                </a>
            </li>
        );
    }
    return (
        <div class="content head-area">
            <span>
                <center>
                    <img src="/images/title0.png" alt="フレンチ食堂ママン" style={styles.maman_title} />
                </center>
            </span>
        </div>
    );
}
export default HeadImage;

const styles = {
    content_blur: {
        width: "100%",
        filter: "blur(2px) contrast(120%) brightness(40%)"
    },
    maman_title: {
        width: "80vw",
        padding: "0",
        margin: "0"
    }
};
