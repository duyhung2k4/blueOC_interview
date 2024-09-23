import { CSSProperties, createTheme } from "@mantine/core";

const themeOverride = createTheme({
    components: {
        Input: {
            styles: {
                input: {
                    borderRadius: 8,
                    border: 0,
                    backgroundColor: "#efefef"
                } as CSSProperties
            }
        },
        InputWrapper: {
            styles: {
                root: {
                } as CSSProperties
            }
        },
        Button: {
            styles: {
                root: {
                    borderRadius: 8,
                    //   backgroundColor: "#000",
                } as CSSProperties
            }
        },
        Modal: {
            styles: {
                content: {
                    backgroundColor: "#000",
                    boxShadow: "0px 0px 5px 0px rgba(255,255,255,0.75)",
                    WebkitBoxShadow: "0px 0px 5px 0px rgba(255,255,255,0.75)",
                    MozBoxShadow: "0px 0px 5px 0px rgba(255,255,255,0.75)",
                } as CSSProperties,
                body: {
                    backgroundColor: "#000"
                } as CSSProperties,
                header: {
                    backgroundColor: "#000"
                } as CSSProperties
            }
        }
    },
});

export default themeOverride;