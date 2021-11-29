import React from "react";

class OwnerHome extends React.Component {
    render() {
        return (
            <div class="container" style={{ marginTop: "100px" }}>
                <div class="card px-4 pt-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <p>
                        <a href="/owner/service/">サービスの追加</a>
                    </p>
                    <p>
                        <a href="/owner/menu">メニューの追加</a>
                    </p>
                </div>
            </div>
        );
    }
}
export default OwnerHome;
