import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Link from '@mui/material/Link';

export interface MainImage {
  cobit: string;
}

export interface TableCellData {
  name?: string;
  code?: string;
  image?: string;
  background?: string;
  border?: boolean;
  colspan?: number | null;
  mainTitle?: string;
  color?: string;
  mainHeading?: string;
  mainImage?: MainImage;
  textRight?: boolean;
  reverse?: string;
  link?: any;
}

interface PeriodicTableProps {
  cell: TableCellData;
  colIndex: number;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ cell, colIndex, }) => {
  const router = useRouter();

  const colors: any = {
    "#27475E": "linear-gradient(175deg, rgba(39, 71, 94, 0.04) 21.82%, rgba(39, 71, 94, 0.46) 95.91%)",

    "#222AA1": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #4184BB 95.91%)",

    "#B89959": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #B89959 95.91%)",

    "#4184BB": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #4184BB 95.91%)",

    "#7A1F48": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #7A1F48 95.91%)",

    "#4A516B": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #4A516B 95.91%)",

    "#FF6D41": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #FF6D41 95.91%)",

    "#1E807F": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #1E807F 95.91%)",

    "#BC6B3C": "linear-gradient(175deg, rgba(65, 132, 187, 0.00) 21.82%, #BC6B3C 95.91%)",
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
    <td
      key={colIndex}
      colSpan={cell.colspan ?? 1}
      style={{ background: cell.mainTitle ? (cell.color ? colors[cell.color] : undefined) : cell.background, borderRadius: "10.062px", marginBottom: "30px", cursor: cell.mainHeading || cell?.mainImage ? "default" : "pointer" }}
      className={cell.border ? "no-border" : ""}
      onClick={() => {
        if (cell.link) {
          router.push(cell.link);
        }
      }}
    >
      <Link href={cell.link} sx={{textDecoration:"none"}}>
      {cell.mainHeading && (
        <h1 style={{ margin: 0, paddingLeft: "40px", textAlign: "center", }} >{cell.mainHeading}</h1>
      )}
      {cell?.mainImage && (
        <div>
          <Image src={cell?.mainImage?.cobit} style={{ width: "100%", height: "100%", }} alt='img' />
        </div>
      )}
      <div>
        {cell.mainTitle && (
          <p
            style={{
              color: cell.color,
              padding: "10px",
              fontSize: "20px",
              fontWeight: 700,
              textAlign: "left",

            }}
          >
            {cell.mainTitle}
          </p>
        )}

        <div style={{ width: "100%", maxWidth: "100px", borderRadius: "10.062px 0 0 0", color: "#fff", background: cell.background ? tileColors[cell.background] : undefined, padding: 0.3, textAlign: "center" }}>
          <small style={{ fontSize: "13.92px" }}>{cell.code}</small>
        </div>

        <div style={{ padding: 20, }}>
          {cell.image && cell.code && (
            <Image
              src={cell.image}
              alt="logo"
              width={41}
              height={41}
            />
          )}

          {cell.name && (
            <p style={{ marginTop: "20px", fontSize: "16px", color: "#fff" }}>{cell.name}</p>
          )}
        </div>
      </div>
      </Link>
    </td>
  );
};

export default PeriodicTable;
