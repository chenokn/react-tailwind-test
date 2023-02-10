import { FC } from "react";
import Button from "@/components/core/Button";
import P from "@/components/core/Paragraph";
import H1 from "@/components/core/Headings/H1";
import H3 from "@/components/core/Headings/H3";
import Pill from "../Pill";

import type BaseTheme from "@/utils/BaseTheme";

type PillTypes = typeof BaseTheme.pillTypes[number];

type InsightDetails = {
  title: string;
  description: string;
};

type InsightData = {
  title?: string;
  onTrackDescription?: string;
  offTrackDescription?: string;
  details?: [InsightDetails];
};

type DrawerProps = {
  hide?: boolean;
  track?: PillTypes;
  className?: string;
  data?: InsightData;
  onClose?: any;
};

const defaultProps = {
  hide: false,
  className: "",
};

const Drawer: FC<DrawerProps> = (props) => {
  const { data, hide, track, onClose } = props;

  const trackMessage =
    track === "on" ? data?.onTrackDescription : data?.offTrackDescription;

  return (
    <>
      <div
        className={`${
          hide === true ? "invisible" : "visible"
        } bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30`}
      ></div>
      <div
        className={`${
          hide === true ? "translate-x-full" : "translate-x-0"
        } fixed w-[410px] p-xl top-0 right-0 h-screen overflow-y-auto transition-transform z-40 bg-white`}
      >
        <div className="w-full relative">
          <Button
            className="absolute right-0"
            onClick={() => onClose()}
          ></Button>
        </div>
        <div className="p-xl">
          <Pill pillType={track} />
        </div>
        <H1 className="pb-md">{data?.title}</H1>
        <P className="text-base pb-xl">{trackMessage}</P>
        <div>
          {data?.details?.map(({ title, description }) => (
            <div>
              <H3 className="pb-sm font-bold">{title}</H3>
              <P className="text-base pb-xl">{description}</P>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Drawer.defaultProps = defaultProps;

export default Drawer;
