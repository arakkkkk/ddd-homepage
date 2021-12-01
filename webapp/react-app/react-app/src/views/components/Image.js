export const Image = (props) => {
    switch (props.component.type_id) {
        case "A":
            <img
                src={props.component.images[0]}
                class="img-fluid"
                alt="image"
                style={{ width: "100%", padding: 0, margin: 0 }}
            />;
            return;
            break;

        default:
            return "not found";
    }
};
