import { Box, Typography } from "@mui/material";
import { HomeText } from "@/types/hometext";

const hometext = ({ title, subtitle, hint }: HomeText) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: "url('/Images/Factory.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                pt: 8,
                px: 6,
                color: "white",
            }}
        >
            <Typography variant="h3" fontWeight={600}>
                {title}
            </Typography>

            <Typography variant="h6" mt={1}>
                {subtitle}
            </Typography>

            <Typography
                variant="body2"
                mt={2}
                color="grey.400"
            >
                {hint}
            </Typography>
        </Box>
    );
};

export default hometext;
