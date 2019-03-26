import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from "@patternfly/react-table";
import { DataTableToolbar } from "../index";
import { IFeedFile } from "../../api/models/feed-file.model";

type AllProps = {
  files: IFeedFile[];
};

interface IfsRow {
  StructName: string;
  NumVert: number;
  SurfArea: number;
  GrayVol: number;
  ThickAvg: number;
  ThickStd: number;
  MeanCurv: number;
  GausCurv: number;
  FoldInd: number;
  CurvInd: number;
}

const FreesurferDataTable: React.FunctionComponent<AllProps> = (
  props: AllProps
) => {
  const onSearch = (term: string) => {
    // console.log("search", term);
  };
  const headers = ["Basic Structure", "Surf Area (mm^2)", "Volume (mm^3)", "Thick Avg(mm)", "Thick Std(mm)"];
  const buildTableData = () => {
    const rowArr = new Array();
    data.forEach((obj: IfsRow) => {
      rowArr.push([
        obj.StructName,
        obj.SurfArea,
        obj.GrayVol,
        obj.ThickAvg,
        obj.ThickStd,
      ]);
    });

    return rowArr;
  };

  return (
    <div className="dataTable-viewer pf-u-px-lg">
      <DataTableToolbar onSearch={onSearch} label="brain structure" />
      <Table
        aria-label="Data table"
        variant={TableVariant.compact}
        cells={headers}
        rows={buildTableData()} >
        <TableHeader />
        <TableBody />
      </Table>
    </div>
  );
};

const data: IfsRow[] = [
  {
    StructName: "G_and_S_frontomargin",
    NumVert: 1054,
    SurfArea: 710,
    GrayVol: 2623,
    ThickAvg: 3.099,
    ThickStd: 0.686,
    MeanCurv: 0.144,
    GausCurv: 0.06,
    FoldInd: 24,
    CurvInd: 2.6
  },
  {
    StructName: "G_and_S_occipital_inf",
    NumVert: 1652,
    SurfArea: 1153,
    GrayVol: 3654,
    ThickAvg: 2.87,
    ThickStd: 0.521,
    MeanCurv: 0.151,
    GausCurv: 0.055,
    FoldInd: 34,
    CurvInd: 3.3
  },
  {
    StructName: "G_and_S_paracentral",
    NumVert: 1743,
    SurfArea: 1007,
    GrayVol: 3608,
    ThickAvg: 2.77,
    ThickStd: 0.676,
    MeanCurv: 0.175,
    GausCurv: 0.145,
    FoldInd: 116,
    CurvInd: 10.3
  },
  {
    StructName: "G_and_S_subcentral",
    NumVert: 1379,
    SurfArea: 907,
    GrayVol: 3549,
    ThickAvg: 3.292,
    ThickStd: 0.579,
    MeanCurv: 0.157,
    GausCurv: 0.123,
    FoldInd: 52,
    CurvInd: 3.5
  },
  {
    StructName: "G_and_S_transv_frontopol",
    NumVert: 791,
    SurfArea: 548,
    GrayVol: 2575,
    ThickAvg: 3.385,
    ThickStd: 0.635,
    MeanCurv: 0.216,
    GausCurv: 0.156,
    FoldInd: 46,
    CurvInd: 3.8
  },
  {
    StructName: "G_and_S_cingul-Ant",
    NumVert: 2838,
    SurfArea: 1856,
    GrayVol: 6628,
    ThickAvg: 3.591,
    ThickStd: 0.63,
    MeanCurv: 0.13,
    GausCurv: 0.09,
    FoldInd: 43,
    CurvInd: 5.4
  },
  {
    StructName: "G_and_S_cingul-Mid-Ant",
    NumVert: 1850,
    SurfArea: 1238,
    GrayVol: 4752,
    ThickAvg: 4.065,
    ThickStd: 0.62,
    MeanCurv: 0.155,
    GausCurv: 0.137,
    FoldInd: 64,
    CurvInd: 11.5
  },
  {
    StructName: "G_and_S_cingul-Mid-Post",
    NumVert: 1316,
    SurfArea: 899,
    GrayVol: 3184,
    ThickAvg: 3.217,
    ThickStd: 0.578,
    MeanCurv: 0.166,
    GausCurv: 0.075,
    FoldInd: 35,
    CurvInd: 3.5
  },
  {
    StructName: "G_cingul-Post-dorsal",
    NumVert: 553,
    SurfArea: 367,
    GrayVol: 1810,
    ThickAvg: 3.621,
    ThickStd: 0.407,
    MeanCurv: 0.157,
    GausCurv: 0.062,
    FoldInd: 11,
    CurvInd: 1.4
  },
  {
    StructName: "G_cingul-Post-ventral",
    NumVert: 525,
    SurfArea: 317,
    GrayVol: 985,
    ThickAvg: 2.843,
    ThickStd: 0.967,
    MeanCurv: 0.195,
    GausCurv: 0.359,
    FoldInd: 25,
    CurvInd: 10.3
  },
  {
    StructName: "G_cuneus",
    NumVert: 1497,
    SurfArea: 1017,
    GrayVol: 2930,
    ThickAvg: 2.483,
    ThickStd: 0.536,
    MeanCurv: 0.188,
    GausCurv: 0.083,
    FoldInd: 44,
    CurvInd: 5.6
  },
  {
    StructName: "G_front_inf-Opercular",
    NumVert: 1370,
    SurfArea: 905,
    GrayVol: 4492,
    ThickAvg: 3.438,
    ThickStd: 0.563,
    MeanCurv: 0.174,
    GausCurv: 0.08,
    FoldInd: 40,
    CurvInd: 4.6
  },
  {
    StructName: "G_front_inf-Orbital",
    NumVert: 211,
    SurfArea: 136,
    GrayVol: 724,
    ThickAvg: 3.567,
    ThickStd: 0.478,
    MeanCurv: 0.174,
    GausCurv: 0.075,
    FoldInd: 6,
    CurvInd: 0.6
  },
  {
    StructName: "G_front_inf-Triangul",
    NumVert: 1120,
    SurfArea: 788,
    GrayVol: 3991,
    ThickAvg: 3.399,
    ThickStd: 0.539,
    MeanCurv: 0.173,
    GausCurv: 0.077,
    FoldInd: 34,
    CurvInd: 3.7
  },
  {
    StructName: "G_front_middle",
    NumVert: 3564,
    SurfArea: 2379,
    GrayVol: 10097,
    ThickAvg: 3.08,
    ThickStd: 0.596,
    MeanCurv: 0.166,
    GausCurv: 0.083,
    FoldInd: 123,
    CurvInd: 13.3
  },
  {
    StructName: "G_front_sup",
    NumVert: 8465,
    SurfArea: 5661,
    GrayVol: 26988,
    ThickAvg: 3.784,
    ThickStd: 0.68,
    MeanCurv: 0.181,
    GausCurv: 0.102,
    FoldInd: 408,
    CurvInd: 33.5
  },
  {
    StructName: "G_Ins_lg_and_S_cent_ins",
    NumVert: 446,
    SurfArea: 271,
    GrayVol: 1294,
    ThickAvg: 3.749,
    ThickStd: 0.582,
    MeanCurv: 0.153,
    GausCurv: 0.18,
    FoldInd: 17,
    CurvInd: 2.7
  },
  {
    StructName: "G_insular_short",
    NumVert: 704,
    SurfArea: 436,
    GrayVol: 2545,
    ThickAvg: 4.062,
    ThickStd: 0.682,
    MeanCurv: 0.142,
    GausCurv: 0.146,
    FoldInd: 37,
    CurvInd: 2.7
  },
  {
    StructName: "G_occipital_middle",
    NumVert: 2243,
    SurfArea: 1408,
    GrayVol: 5499,
    ThickAvg: 3.039,
    ThickStd: 0.503,
    MeanCurv: 0.164,
    GausCurv: 0.063,
    FoldInd: 69,
    CurvInd: 5.5
  },
  {
    StructName: "G_occipital_sup",
    NumVert: 1580,
    SurfArea: 1017,
    GrayVol: 3428,
    ThickAvg: 2.715,
    ThickStd: 0.565,
    MeanCurv: 0.155,
    GausCurv: 0.059,
    FoldInd: 33,
    CurvInd: 3.5
  },
  {
    StructName: "G_oc-temp_lat-fusifor",
    NumVert: 2279,
    SurfArea: 1486,
    GrayVol: 6716,
    ThickAvg: 3.216,
    ThickStd: 0.579,
    MeanCurv: 0.162,
    GausCurv: 0.082,
    FoldInd: 66,
    CurvInd: 6.3
  },
  {
    StructName: "G_oc-temp_med-Lingual",
    NumVert: 2611,
    SurfArea: 1681,
    GrayVol: 5455,
    ThickAvg: 2.693,
    ThickStd: 0.67,
    MeanCurv: 0.176,
    GausCurv: 0.081,
    FoldInd: 70,
    CurvInd: 8.3
  },
  {
    StructName: "G_oc-temp_med-Parahip",
    NumVert: 1214,
    SurfArea: 746,
    GrayVol: 3389,
    ThickAvg: 3.074,
    ThickStd: 0.788,
    MeanCurv: 0.115,
    GausCurv: 0.041,
    FoldInd: 16,
    CurvInd: 2
  },
  {
    StructName: "G_orbital",
    NumVert: 2052,
    SurfArea: 1379,
    GrayVol: 7357,
    ThickAvg: 3.765,
    ThickStd: 0.528,
    MeanCurv: 0.172,
    GausCurv: 0.077,
    FoldInd: 55,
    CurvInd: 6.2
  },
  {
    StructName: "G_pariet_inf-Angular",
    NumVert: 2544,
    SurfArea: 1636,
    GrayVol: 7749,
    ThickAvg: 3.247,
    ThickStd: 0.638,
    MeanCurv: 0.15,
    GausCurv: 0.085,
    FoldInd: 81,
    CurvInd: 6.5
  },
  {
    StructName: "G_pariet_inf-Supramar",
    NumVert: 2960,
    SurfArea: 1906,
    GrayVol: 8183,
    ThickAvg: 3.143,
    ThickStd: 0.584,
    MeanCurv: 0.132,
    GausCurv: 0.048,
    FoldInd: 60,
    CurvInd: 5.5
  },
  {
    StructName: "G_parietal_sup",
    NumVert: 3265,
    SurfArea: 2244,
    GrayVol: 7886,
    ThickAvg: 2.706,
    ThickStd: 0.535,
    MeanCurv: 0.153,
    GausCurv: 0.061,
    FoldInd: 75,
    CurvInd: 7.8
  },
  {
    StructName: "G_postcentral",
    NumVert: 2287,
    SurfArea: 1481,
    GrayVol: 4935,
    ThickAvg: 2.536,
    ThickStd: 0.593,
    MeanCurv: 0.149,
    GausCurv: 0.064,
    FoldInd: 64,
    CurvInd: 6.9
  },
  {
    StructName: "G_precentral",
    NumVert: 2397,
    SurfArea: 1503,
    GrayVol: 6504,
    ThickAvg: 3.137,
    ThickStd: 0.445,
    MeanCurv: 0.134,
    GausCurv: 0.043,
    FoldInd: 41,
    CurvInd: 4.2
  },
  {
    StructName: "G_precuneus",
    NumVert: 2588,
    SurfArea: 1727,
    GrayVol: 7706,
    ThickAvg: 3.192,
    ThickStd: 0.602,
    MeanCurv: 0.17,
    GausCurv: 0.091,
    FoldInd: 82,
    CurvInd: 10.6
  },
  {
    StructName: "G_rectus",
    NumVert: 899,
    SurfArea: 635,
    GrayVol: 3239,
    ThickAvg: 3.418,
    ThickStd: 0.667,
    MeanCurv: 0.185,
    GausCurv: 0.103,
    FoldInd: 47,
    CurvInd: 3.4
  },
  {
    StructName: "G_subcallosal",
    NumVert: 239,
    SurfArea: 129,
    GrayVol: 341,
    ThickAvg: 2.296,
    ThickStd: 1.034,
    MeanCurv: 0.187,
    GausCurv: 0.391,
    FoldInd: 194,
    CurvInd: 5.8
  },
  {
    StructName: "G_temp_sup-G_T_transv",
    NumVert: 477,
    SurfArea: 294,
    GrayVol: 1119,
    ThickAvg: 2.963,
    ThickStd: 0.422,
    MeanCurv: 0.122,
    GausCurv: 0.03,
    FoldInd: 6,
    CurvInd: 0.6
  },
  {
    StructName: "G_temp_sup-Lateral",
    NumVert: 2345,
    SurfArea: 1508,
    GrayVol: 7672,
    ThickAvg: 3.442,
    ThickStd: 0.631,
    MeanCurv: 0.15,
    GausCurv: 0.061,
    FoldInd: 60,
    CurvInd: 5.5
  },
  {
    StructName: "G_temp_sup-Plan_polar",
    NumVert: 551,
    SurfArea: 370,
    GrayVol: 1578,
    ThickAvg: 3.647,
    ThickStd: 0.683,
    MeanCurv: 0.16,
    GausCurv: 1.762,
    FoldInd: 204,
    CurvInd: 5.5
  },
  {
    StructName: "G_temp_sup-Plan_tempo",
    NumVert: 903,
    SurfArea: 610,
    GrayVol: 1862,
    ThickAvg: 2.87,
    ThickStd: 0.364,
    MeanCurv: 0.097,
    GausCurv: 0.021,
    FoldInd: 6,
    CurvInd: 0.7
  },
  {
    StructName: "G_temporal_inf",
    NumVert: 3104,
    SurfArea: 2041,
    GrayVol: 9710,
    ThickAvg: 3.296,
    ThickStd: 0.776,
    MeanCurv: 0.168,
    GausCurv: 0.099,
    FoldInd: 111,
    CurvInd: 10.1
  },
  {
    StructName: "G_temporal_middle",
    NumVert: 2990,
    SurfArea: 2011,
    GrayVol: 10146,
    ThickAvg: 3.459,
    ThickStd: 0.651,
    MeanCurv: 0.153,
    GausCurv: 0.066,
    FoldInd: 72,
    CurvInd: 8.5
  },
  {
    StructName: "Lat_Fis-ant-Horizont",
    NumVert: 248,
    SurfArea: 179,
    GrayVol: 513,
    ThickAvg: 2.982,
    ThickStd: 0.595,
    MeanCurv: 0.111,
    GausCurv: 0.018,
    FoldInd: 2,
    CurvInd: 0.2
  },
  {
    StructName: "Lat_Fis-ant-Vertical",
    NumVert: 205,
    SurfArea: 137,
    GrayVol: 337,
    ThickAvg: 3.158,
    ThickStd: 0.536,
    MeanCurv: 0.122,
    GausCurv: 0.035,
    FoldInd: 2,
    CurvInd: 0.2
  },
  {
    StructName: "Lat_Fis-post",
    NumVert: 1142,
    SurfArea: 764,
    GrayVol: 1926,
    ThickAvg: 2.924,
    ThickStd: 0.568,
    MeanCurv: 0.11,
    GausCurv: 0.027,
    FoldInd: 7,
    CurvInd: 1.3
  },
  {
    StructName: "Pole_occipital",
    NumVert: 2027,
    SurfArea: 1197,
    GrayVol: 3501,
    ThickAvg: 2.471,
    ThickStd: 0.544,
    MeanCurv: 0.165,
    GausCurv: 0.08,
    FoldInd: 55,
    CurvInd: 7.1
  },
  {
    StructName: "Pole_temporal",
    NumVert: 1919,
    SurfArea: 1358,
    GrayVol: 7050,
    ThickAvg: 3.509,
    ThickStd: 0.895,
    MeanCurv: 0.179,
    GausCurv: 0.096,
    FoldInd: 59,
    CurvInd: 7.3
  },
  {
    StructName: "S_calcarine",
    NumVert: 2261,
    SurfArea: 1496,
    GrayVol: 3075,
    ThickAvg: 2.37,
    ThickStd: 0.713,
    MeanCurv: 0.132,
    GausCurv: 0.049,
    FoldInd: 41,
    CurvInd: 3.8
  },
  {
    StructName: "S_central",
    NumVert: 2649,
    SurfArea: 1828,
    GrayVol: 3306,
    ThickAvg: 2.044,
    ThickStd: 0.547,
    MeanCurv: 0.088,
    GausCurv: 0.018,
    FoldInd: 10,
    CurvInd: 2
  },
  {
    StructName: "S_cingul-Marginalis",
    NumVert: 1237,
    SurfArea: 845,
    GrayVol: 2221,
    ThickAvg: 3.046,
    ThickStd: 0.45,
    MeanCurv: 0.116,
    GausCurv: 0.027,
    FoldInd: 8,
    CurvInd: 1.4
  },
  {
    StructName: "S_circular_insula_ant",
    NumVert: 436,
    SurfArea: 281,
    GrayVol: 1023,
    ThickAvg: 3.83,
    ThickStd: 0.557,
    MeanCurv: 0.114,
    GausCurv: 0.045,
    FoldInd: 3,
    CurvInd: 0.7
  },
  {
    StructName: "S_circular_insula_inf",
    NumVert: 1343,
    SurfArea: 895,
    GrayVol: 2519,
    ThickAvg: 3.184,
    ThickStd: 0.737,
    MeanCurv: 0.085,
    GausCurv: 0.02,
    FoldInd: 6,
    CurvInd: 1.2
  },
  {
    StructName: "S_circular_insula_sup",
    NumVert: 1558,
    SurfArea: 1048,
    GrayVol: 2679,
    ThickAvg: 3.034,
    ThickStd: 0.472,
    MeanCurv: 0.113,
    GausCurv: 0.031,
    FoldInd: 15,
    CurvInd: 2.1
  },
  {
    StructName: "S_collat_transv_ant",
    NumVert: 1238,
    SurfArea: 864,
    GrayVol: 2604,
    ThickAvg: 2.915,
    ThickStd: 0.567,
    MeanCurv: 0.149,
    GausCurv: 0.081,
    FoldInd: 24,
    CurvInd: 3.6
  },
  {
    StructName: "S_collat_transv_post",
    NumVert: 174,
    SurfArea: 120,
    GrayVol: 424,
    ThickAvg: 2.77,
    ThickStd: 0.439,
    MeanCurv: 0.178,
    GausCurv: 0.107,
    FoldInd: 16,
    CurvInd: 0.7
  },
  {
    StructName: "S_front_inf",
    NumVert: 2185,
    SurfArea: 1499,
    GrayVol: 3937,
    ThickAvg: 2.759,
    ThickStd: 0.449,
    MeanCurv: 0.123,
    GausCurv: 0.039,
    FoldInd: 24,
    CurvInd: 2.8
  },
  {
    StructName: "S_front_middle",
    NumVert: 1382,
    SurfArea: 948,
    GrayVol: 2606,
    ThickAvg: 2.523,
    ThickStd: 0.53,
    MeanCurv: 0.154,
    GausCurv: 0.064,
    FoldInd: 30,
    CurvInd: 3.4
  },
  {
    StructName: "S_front_sup",
    NumVert: 3394,
    SurfArea: 2293,
    GrayVol: 7148,
    ThickAvg: 2.881,
    ThickStd: 0.465,
    MeanCurv: 0.121,
    GausCurv: 0.043,
    FoldInd: 45,
    CurvInd: 6
  },
  {
    StructName: "S_interm_prim-Jensen",
    NumVert: 275,
    SurfArea: 182,
    GrayVol: 483,
    ThickAvg: 3.163,
    ThickStd: 0.415,
    MeanCurv: 0.115,
    GausCurv: 0.03,
    FoldInd: 2,
    CurvInd: 0.5
  },
  {
    StructName: "S_intrapariet_and_P_trans",
    NumVert: 3137,
    SurfArea: 2119,
    GrayVol: 5893,
    ThickAvg: 2.733,
    ThickStd: 0.45,
    MeanCurv: 0.124,
    GausCurv: 0.041,
    FoldInd: 39,
    CurvInd: 5
  },
  {
    StructName: "S_oc_middle_and_Lunatus",
    NumVert: 1472,
    SurfArea: 983,
    GrayVol: 2339,
    ThickAvg: 2.599,
    ThickStd: 0.445,
    MeanCurv: 0.149,
    GausCurv: 0.055,
    FoldInd: 24,
    CurvInd: 3.5
  },
  {
    StructName: "S_oc_sup_and_transversal",
    NumVert: 1513,
    SurfArea: 1027,
    GrayVol: 2493,
    ThickAvg: 2.649,
    ThickStd: 0.392,
    MeanCurv: 0.132,
    GausCurv: 0.034,
    FoldInd: 18,
    CurvInd: 2.1
  },
  {
    StructName: "S_occipital_ant",
    NumVert: 709,
    SurfArea: 494,
    GrayVol: 1251,
    ThickAvg: 2.623,
    ThickStd: 0.463,
    MeanCurv: 0.123,
    GausCurv: 0.034,
    FoldInd: 8,
    CurvInd: 1.2
  },
  {
    StructName: "S_oc-temp_lat",
    NumVert: 1137,
    SurfArea: 766,
    GrayVol: 1811,
    ThickAvg: 2.746,
    ThickStd: 0.416,
    MeanCurv: 0.109,
    GausCurv: 0.028,
    FoldInd: 8,
    CurvInd: 1.3
  },
  {
    StructName: "S_oc-temp_med_and_Lingual",
    NumVert: 2453,
    SurfArea: 1764,
    GrayVol: 4681,
    ThickAvg: 2.96,
    ThickStd: 0.568,
    MeanCurv: 0.138,
    GausCurv: 0.056,
    FoldInd: 33,
    CurvInd: 6.5
  },
  {
    StructName: "S_orbital_lateral",
    NumVert: 387,
    SurfArea: 270,
    GrayVol: 636,
    ThickAvg: 2.591,
    ThickStd: 0.328,
    MeanCurv: 0.13,
    GausCurv: 0.041,
    FoldInd: 3,
    CurvInd: 0.7
  },
  {
    StructName: "S_orbital_med-olfact",
    NumVert: 648,
    SurfArea: 481,
    GrayVol: 1735,
    ThickAvg: 3.374,
    ThickStd: 0.895,
    MeanCurv: 0.149,
    GausCurv: 0.05,
    FoldInd: 11,
    CurvInd: 1.2
  },
  {
    StructName: "S_orbital-H_Shaped",
    NumVert: 1125,
    SurfArea: 761,
    GrayVol: 2190,
    ThickAvg: 3.067,
    ThickStd: 0.674,
    MeanCurv: 0.112,
    GausCurv: 0.032,
    FoldInd: 7,
    CurvInd: 1.6
  },
  {
    StructName: "S_parieto_occipital",
    NumVert: 1947,
    SurfArea: 1318,
    GrayVol: 3305,
    ThickAvg: 2.631,
    ThickStd: 0.582,
    MeanCurv: 0.109,
    GausCurv: 0.03,
    FoldInd: 18,
    CurvInd: 2.3
  },
  {
    StructName: "S_pericallosal",
    NumVert: 1038,
    SurfArea: 630,
    GrayVol: 1756,
    ThickAvg: 3.067,
    ThickStd: 0.987,
    MeanCurv: 0.137,
    GausCurv: 0.08,
    FoldInd: 22,
    CurvInd: 3.2
  },
  {
    StructName: "S_postcentral",
    NumVert: 2933,
    SurfArea: 2030,
    GrayVol: 4993,
    ThickAvg: 2.63,
    ThickStd: 0.497,
    MeanCurv: 0.12,
    GausCurv: 0.033,
    FoldInd: 31,
    CurvInd: 3.9
  },
  {
    StructName: "S_precentral-inf-part",
    NumVert: 1337,
    SurfArea: 891,
    GrayVol: 2417,
    ThickAvg: 2.8,
    ThickStd: 0.455,
    MeanCurv: 0.089,
    GausCurv: 0.019,
    FoldInd: 5,
    CurvInd: 1.1
  },
  {
    StructName: "S_precentral-sup-part",
    NumVert: 1437,
    SurfArea: 972,
    GrayVol: 2312,
    ThickAvg: 2.748,
    ThickStd: 0.459,
    MeanCurv: 0.107,
    GausCurv: 0.026,
    FoldInd: 11,
    CurvInd: 1.5
  },
  {
    StructName: "S_suborbital",
    NumVert: 794,
    SurfArea: 547,
    GrayVol: 1955,
    ThickAvg: 3.362,
    ThickStd: 0.506,
    MeanCurv: 0.182,
    GausCurv: 0.087,
    FoldInd: 25,
    CurvInd: 2.8
  },
  {
    StructName: "S_subparietal",
    NumVert: 1387,
    SurfArea: 944,
    GrayVol: 2903,
    ThickAvg: 2.995,
    ThickStd: 0.615,
    MeanCurv: 0.139,
    GausCurv: 0.049,
    FoldInd: 22,
    CurvInd: 2.9
  },
  {
    StructName: "S_temporal_inf",
    NumVert: 1421,
    SurfArea: 965,
    GrayVol: 2456,
    ThickAvg: 2.871,
    ThickStd: 0.495,
    MeanCurv: 0.114,
    GausCurv: 0.032,
    FoldInd: 12,
    CurvInd: 1.6
  },
  {
    StructName: "S_temporal_sup",
    NumVert: 5996,
    SurfArea: 4096,
    GrayVol: 12094,
    ThickAvg: 2.93,
    ThickStd: 0.49,
    MeanCurv: 0.111,
    GausCurv: 0.031,
    FoldInd: 58,
    CurvInd: 6.7
  },
  {
    StructName: "S_temporal_transverse",
    NumVert: 249,
    SurfArea: 184,
    GrayVol: 480,
    ThickAvg: 3.13,
    ThickStd: 0.313,
    MeanCurv: 0.098,
    GausCurv: 0.018,
    FoldInd: 1,
    CurvInd: 0.2
  }
 ];
export default React.memo(FreesurferDataTable);
