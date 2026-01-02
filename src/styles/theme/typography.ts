
import { ThemeOptions } from "@mui/material/styles";
import { ibmPlexSans } from "./font";

export const typography: ThemeOptions["typography"] = {
    fontFamily: ibmPlexSans.style.fontFamily,
    h1: {
        fontWeight: 700,
<<<<<<< HEAD
        fontSize: "clamp(0.2rem, 2vw, 1.1rem)", 
=======
        fontSize: "clamp(0.6rem, 2vw, 1.1rem)", 
>>>>>>> da2866334ef6b50889af4a13d207280958fc7b5a
        "@media (max-width:1838px)": {          
            fontSize: "1rem",                    
        },
        "@media (max-width:1711px)": {
            fontSize: "0.8rem",                    
        },
        "@media (max-width:1450px)": {
<<<<<<< HEAD
            fontSize: "0.6rem",                    
        },
        "@media (max-width:1024px)": {
            fontSize: "0.4rem",                    
        },
    },

=======
            fontSize: "0.44rem",                    
        },
        
    },

    h3: {
        fontWeight: 700,
        fontSize: "clamp(0.6rem, 2vw, 1.1rem)",
        "@media (max-width:1838px)": {
            fontSize: "1rem",
        },
        "@media (max-width:1711px)": {
            fontSize: "0.8rem",
        },
        
    },
>>>>>>> da2866334ef6b50889af4a13d207280958fc7b5a
    h2: {
        fontWeight: 700, fontSize: "2rem",
        "@media (max-width:1838px)": {
            fontSize: "1.6rem",
        },
        "@media (max-width:1024px)": {
            fontSize: "1.2rem",
        },
 },


    body1: { fontWeight: 400, fontSize: "16px" },
    body2: { fontWeight: 400, fontSize: "14px" },

};
