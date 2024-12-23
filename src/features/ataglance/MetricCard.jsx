import React from "react";
import { Card } from "../../components/card";
import { ReactComponent as TrendUp } from "../../assets/svg/TrendUp.svg";
import { ReactComponent as TrendDown } from "../../assets/svg/TrendDown.svg";
import { data } from "./data";
import { labels } from "../../constants/labels";

function MetricCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((stat) => (
        <Card boxshadow="0px 0px 0px 1px #0000000F" className="flex-column">
          <div class="flex items-center gap-2 mb-2">
            <stat.icon />
            <p class="text text-gray w-600 s-12 uppercase">{stat.label}</p>
          </div>
          <div className="text s-32 w-500">{stat.count}</div>
          <div className="text s-14 flex items-center gap-1 ">
            {stat.move === labels.up ? (
              <>
                <TrendUp />
                <span className="text s-14 trend-up text-gray">
                  {stat.movement}{" "}
                </span>
                <span className="text s-14 text-gray">{labels.increase}</span>
              </>
            ) : (
              <>
                <TrendDown />
                <span className="text s-14 trend-down text-gray">
                  {stat.movement}{" "}
                </span>
                <span className="text s-14 text-gray">{labels.decrease}</span>
              </>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default MetricCard;
