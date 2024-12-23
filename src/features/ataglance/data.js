import { ReactComponent as Tag } from "../../assets/svg/Tag-sm.svg";
import { ReactComponent as ChatTeardrop } from "../../assets/svg/ChatTeardrop.svg";
import { ReactComponent as CheckFat } from "../../assets/svg/CheckFat.svg";
import { ReactComponent as Coins } from "../../assets/svg/Coins.svg";
import { ReactComponent as Ordervalue } from "../../assets/svg/Ordervalue.svg";
import { ReactComponent as PiggyBank } from "../../assets/svg/PiggyBank.svg";

export const data = [
  {
    label: "consultations",
    count: "24",
    move: "up",
    movement: 15,
    icon: Tag,
  },
  {
    label: "ORDERS PLACED",
    count: "12",
    move: "down",
    movement: 15,
    icon: ChatTeardrop,
  },
  {
    label: "CONVERSION",
    count: "50%",
    move: "down",
    movement: 15,
    icon: CheckFat,
  },
  {
    label: "TOTAL SALES VALUE",
    count: "$2,400",
    move: "up",
    movement: 15,
    icon: Coins,
  },
  {
    label: "AVG ORDER VALUE",
    count: "$240",
    move: "up",
    movement: 15,
    icon: Ordervalue,
  },
  {
    label: "COMMISSION PAID",
    count: "$240",
    move: "up",
    movement: 15,
    icon: PiggyBank,
  },
];
