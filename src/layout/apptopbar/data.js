import { ReactComponent as Tag } from "../../assets/svg/Tag.svg";
import { ReactComponent as ChartPieSlice } from "../../assets/svg/ChartPieSlice.svg";
import { ReactComponent as ChatTeardropText } from "../../assets/svg/ChatTeardropText.svg";

export const icons = [
  { label: "Summary", component: ChartPieSlice, link: "dashboard" },
  { label: "Sales", component: Tag, link: "sales" },
  { label: "Chats", component: ChatTeardropText, link: "chat" },
];
