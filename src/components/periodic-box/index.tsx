// import { dashboardIcon1 } from "@/assets";
// import { Paper, TableContainer, Table, TableBody, TableRow, TableCell, Typography, Box } from "@mui/material";
// import Image from "next/image";

// type PeriodicBoxProps = {
//   cell: any;
// };


//   const PeriodicBox: React.FC<PeriodicBoxProps> = ({ cell }) => {
//   return (
// <TableCell
//       colSpan={cell?.colspan || 1}
//       sx={{
//         background: cell?.background, 
//         border: "none",
//         borderRadius: "10.062px",
//         p: 0,
//       }}
//     >
//       {/* Main Heading */}
//       {cell?.mainHeading && (
//         <Typography variant="h6" sx={{ margin: 0, pl: 5 }}>
//           {cell?.mainHeading}
//         </Typography>
//       )}

//       {/* Main Images */}
//       {cell?.mainImage && (
//         <Box sx={{ display: "flex", alignItems: "center", gap: 5, my: 1 }}>
//           {cell?.mainImage?.orcalo && (
//             <img
//               src={cell?.mainImage?.orcalo}
//               alt="orcalo"
//               style={{ marginRight: "50px" }}
//             />
//           )}
//           {cell?.mainImage?.cobit && (
//             <img
//               src={cell?.mainImage?.cobit}
//               alt="cobit"
//               style={{ marginRight: "100px" }}
//             />
//           )}
//         </Box>
//       )}

//       {/* Main Title */}

//       {cell?.mainTitle && (
//         <Typography
//           variant="body1"
//           sx={{
//             color: cell?.color,
//             fontSize: "20px",
//             fontWeight: 700,
//           }}
//         >
//           {cell?.mainTitle}
//         </Typography>
//       )}

//       {/* Top Left Code */}
//       <Box
//         sx={{
//           backgroundColor: "transparent",
//           width: "60px",
//           p: 0.5,
//           textAlign: "center",
//           borderRadius: "10.062px 0px 0px 0px",
//         }}
//       >
//         <Typography fontSize="12px" fontWeight="400" color="#ffffff">
//           {cell?.code}
//         </Typography>
//       </Box>

//       {/* Logo + Name */}
//       <Box sx={{ py: 2 }}>
//         {cell?.image && cell?.code && (
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               mt: 1,
//               px: 2,
//             }}
//           >
//             <Image
//               src={cell?.image}
//               alt="logo"
//               width={40}
//               height={40}
//             />
//           </Box>
//         )}

//         {cell?.name && (
//           <Typography variant="body2" sx={{ mt: 2, fontSize: 16, px: 2 }}>
//             {cell?.name}
//           </Typography>
//         )}
//       </Box>
//     </TableCell>
//   );
// };
// export default PeriodicBox;


import React from "react";
import { Box, Typography, Card, CardActions } from "@mui/material";
import Image from "next/image";
import { dashboardIcon1 } from "@/assets";

type PeriodicBoxProps = {
  reverse?: string;
  color?: string;
  topTitle?: string;
  title?: string;
  tileText?: string;
};

const PeriodicBox: React.FC<PeriodicBoxProps> = ({
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: reverse ? "column-reverse" : "column",
          borderRadius: "10.062px",
          height: "100%",
          margin: "0px",
          boxShadow: "none"
        }}

      >
        {topTitle && (
          <Box
            sx={{
              background: color && colors[color] ? colors[color] : "transparent",
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
            bgcolor={color && tileColors[color] ? tileColors[color] : undefined}
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
    </>
  );
};

export default PeriodicBox;
