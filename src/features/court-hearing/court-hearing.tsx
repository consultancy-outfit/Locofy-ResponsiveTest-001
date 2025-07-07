"use client";


import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProcessBox from "@/components/periodic-box";
import PeriodicTable from "@/components/periodic-table";
import { periodicTableArray, PeriodicBoxData } from "./court-hearing-data";
import { cobiTLogo } from "@/assets";
import Image from "next/image";


export const CourtHearingSection = () => {
  return (
    <Box>
      <Box display={{ xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }} justifyContent="space-between" alignItems="center">
          <table style={{ width: "100%", }}>
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
      <Box display={{ xs: "block", sm: "blok", md: "none", lg: "none", xl: "none" }}>
        <Box sx={{ my: 5, textAlign: "center" }}>
          <Image src={cobiTLogo} alt="" width={150} height={150} />
          <Typography variant="h4" fontWeight="700" p={0.5} textAlign="center" >
            IT Management & Governance Framework.
          </Typography>
        </Box>
        <Grid container spacing={2}>
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
        </Grid>
      </Box>
    </Box>
  );
};
