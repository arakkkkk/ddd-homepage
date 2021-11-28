import React from "react";

class OwnerHome extends React.Component {
    render() {
        return (
            <div class="container" style={{ marginTop: "100px" }}>
                <p>
                    <a href="/owner/service/">サービスの追加</a>
                </p>
                <p>
                    <a href="/owner/menu">メニューの追加</a>
                </p>
            </div>
        );
    }
}
export default OwnerHome;
