"use client";


import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProcessBox from "@/components/periodic-box";
import PeriodicTable from "@/components/periodic-table";
import { logo2 } from "@/assets";
import Image from "next/image";
import { PeriodicBoxData, periodicTableArray } from "./cobit-data";


const CobitFeature = () => {
  return (
    <Box>
      <Box display={{ xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }} m={2} justifyContent="space-between" alignItems="center">
        <table style={{ width: "100%" }}>
          <tbody>
            {periodicTableArray.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.mainTable.map((cell, colIndex) =>
                  cell && Object.keys(cell).length > 0 ? (
                    <PeriodicTable key={colIndex} cell={cell} colIndex={colIndex} />
                  ) : (
                    <td key={colIndex}></td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      <Box display={{ xs: "block", sm: "blok", md: "none", lg: "none", xl: "none" }} m={0.5}>
        <Box sx={{ my: 5, textAlign: "center" }}>
          <Image src={logo2} alt="" width={300} height={300} style={{ width: "100%", height: "100%" }} />
          <Typography variant="h4" fontWeight="700" p={0.5} textAlign="center" >
            IT Management & Governance Framework.
          </Typography>
        </Box>
        <Stack flexDirection={"row"} justifyContent={"center"} alignContent={"center"} flexWrap={"wrap"} gap={5}>
          {PeriodicBoxData.map((item: any,) => (
            <Box key={item.id}>
              <ProcessBox
                color={item?.color}
                link={item?.link}
                boxIcon={item?.boxIcon}
                topTitle={item.topTitle}
                tileText={item.tileText}
                title={item.title}
                reverse={item.reverse}
              />
            </Box>
          ))}
        </Stack>
        {/* <Grid container spacing={2}>
          {PeriodicBoxData.map((item: any,) => (
            <Grid size={{ xs: 12, sm: 4, }} key={item.id}>
              <ProcessBox
                color={item?.color}
                link={item?.link}
                boxIcon={item?.boxIcon}
                topTitle={item.topTitle}
                tileText={item.tileText}
                title={item.title}
                reverse={item.reverse}
              />
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Box>
  )
}

export default CobitFeature