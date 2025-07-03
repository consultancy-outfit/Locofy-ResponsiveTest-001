import React from "react";
import { Box, Typography, Card, CardActions } from "@mui/material";
import Image from "next/image";
import { dashboardIcon1 } from "@/assets";

type ProcessBoxProps = {
  reverse?: string;
  color?: string;
  topTitle?: string;
  title?: string;
  tileText?: string;
};

const ProcessBox: React.FC<any> = ({
  reverse,
  color,
  topTitle,
  title,
  tileText,
}) => {
  const colors: any = {
    "#27475E": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(39, 71, 94, 0.04) 21.82%, rgba(39, 71, 94, 0.46) 95.91%)`}`,

    "#222AA1": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #4184BB 95.91%)`}`,
    "#B89959": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #B89959 95.91%)`}`,

    "#4184BB": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #4184BB 95.91%)`}`,

    "#7A1F48": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #7A1F48 95.91%)`}`,
    "#4A516B": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #4A516B 95.91%)`}`,
    "#FF6D41": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #FF6D41 95.91%)`}`,

    "#1E807F": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #1E807F 95.91%)`}`,

    "#BC6B3C": `${`linear-gradient(${reverse ? "0deg" : "175deg"
      }, rgba(65, 132, 187, 0.00) 21.82%, #BC6B3C 95.91%)`}`,
  };

  const tileColors: any = {
    "#27475E": "#3D6E92",
    "#222AA1": "#091077",
    "#B89959": "#9F6C02",
    "#4184BB": "#20537D",
    "#7A1F48": "#4E0D2B",
    "#BC6B3C": "#8D4318",
    "#1E807F": "#024E4E",
    "#FF6D41": "#C83408",
    "#4A516B": "#091077",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse ? "column-reverse" : "column",
      }}
      
    >
      {topTitle && (
        <Box
          sx={{
            background: colors[color],
            flexShrink: 0,
            p: 2,
            marginTop: reverse ? "-10px" : "0px",
            paddingTop: reverse ? "30px" : "30px",
            paddingBottom: reverse ? "70px" : "50px",
            zIndex: -1,
          }}
        >
          <Typography variant="h6" fontWeight="700" p={0.5} color={color}>
            {topTitle}
          </Typography>
        </Box>
      )}
      <Card
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          borderRadius: "10.062px",
          marginTop: reverse ? "0px" : "-6px",
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="400"
          color="#ffffff"
          bgcolor={tileColors[color]}
          p={0.5}
          width={70}
          textAlign={"center"}
          style={{ borderRadius: "10.062px 0px 0px 0px" }}
        >
          {tileText}
        </Typography>
        <CardActions>
          <Box sx={{ p: 2 }}>
            <Image
              src={dashboardIcon1}
              alt=""
              width={70}
              height={70}
              style={{ margin: "20px 0" }}
            />
            <Typography variant="subtitle1" fontWeight="500" color="#ffffff">
              {title}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProcessBox;
