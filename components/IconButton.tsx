"use client";

import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";
import { Icons } from "@/utils/helpers";
import { useWindowSize } from "@/hooks";
import { copy, downArrow, download } from "@/assets/icons";
import Image from "next/image";
import { createMeistericon } from "@/utils/createMeistericon";
import toast from "react-hot-toast";
import * as Select from "@radix-ui/react-select";

interface IIconButton {
  name: string;
  component: React.FC<any>;
  icons?: Icons;
}
export default function IconButton({
  icons,
  name,
  component: IconComponent,
}: Readonly<IIconButton>) {
  const { width } = useWindowSize();

  const iconRef = React.useRef<HTMLSpanElement>(null);

  const relatedIcons = React.useMemo(
    () => (icons ? icons.filter(([iconName]) => iconName !== name) : []),
    [icons, name]
  );

  const getCssCode = () => {
    navigator.clipboard.writeText(`<i class="min mni-${name}"></i>`);
    toast("Css code Copied", {
      position: "bottom-center",
      style: { background: "#304254", color: "#F0F5F9" },
    });
  };

  const handleCopySvg = () => {
    const svg = (iconRef.current?.firstChild as SVGAElement).outerHTML;

    navigator.clipboard.writeText(svg);
    toast("SVg Copied", {
      position: "bottom-center",
      style: { background: "#304254", color: "#F0F5F9" },
    });
  };

  const handleDownloadpng = (size = "24") => {
    const svgElement = iconRef.current?.firstChild as SVGAElement;

    svgElement.setAttribute("width", `${size}`);
    svgElement.setAttribute("height", `${size}`);

    const svg = svgElement.outerHTML;

    const blob = new Blob([svg], { type: "image/png" });
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.download = `${name}.png`;
    a.target = "_blank";
    a.href = blobUrl;

    a.click();
    svgElement.removeAttribute("width");
    svgElement.removeAttribute("height");
  };

  const handleDownloadsvg = () => {
    const svg = (iconRef.current?.firstChild as SVGAElement).outerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Tooltip.Trigger asChild>
              <button
                type="button"
                title={name}
                className="p-5 rounded-[20px]
hover:bg-grey-100 hover:cursor-pointer"
              >
                <IconComponent />
              </button>
            </Tooltip.Trigger>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/30" />
            <Dialog.Content
              className="data-[state=open]:animate-contentShow 
              w-full max-w-[62.5rem] rounded-[2.5rem] bg-white p-6 text-left align-middle shadow-xl transition-all min-h-[90vh] h-full
              fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%]  focus:outline-none"
            >
              <Dialog.Close>
                <button
                  title="close"
                  className="absolute top-[3.25rem] right-10 text-2xl 
                hover:cursor-pointer"
                >
                  &#x2715;
                </button>
              </Dialog.Close>
              <div
                className={`py-10 pl-10 pr-[2.75rem] items-center w-full flex flex-col justify-center gap-8
                md:flex-row`}
              >
                <span
                  ref={iconRef}
                  className="p-[4.75rem] rounded-[2rem] bg-grey-100 flex items-center justify-center
                  md:h-60"
                >
                  <IconComponent size={width < 768 ? 40 : 162} />
                </span>
                <div className="flex flex-col gap-5 w-full">
                  <p
                    data-title="icon name"
                    className="before:content-[attr(data-title)] before:text-grey-700 before:text-base before:font-semibold before:tracking-[0.12rem] before:uppercase before:block
                       font-bold text-2xl text-grey-800 -tracking-[0.03rem]"
                  >
                    {name}
                  </p>
                  <span
                    className="flex flex-wrap gap-3 items-center border border-grey-300 w-fit  rounded-xl
                    text-base font-semibold text-grey-700 -tracking-[0.02rem]  md:flex-nowrap"
                  >
                    <button
                      onClick={handleDownloadsvg}
                      className="pl-4 flex items-center gap-2 py-3 hover:bg-grey-100 border-none outline-none"
                    >
                      <Image
                        src={download}
                        alt={"mni-download"}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      Download Svg
                    </button>
                    <button
                      onClick={handleCopySvg}
                      className="border-x flex items-center gap-2 border-x-grey-300 px-4 py-3 hover:bg-grey-100 outline-none"
                    >
                      <Image
                        src={copy}
                        alt={"mni-copy"}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      Copy Svg
                    </button>
                    <span
                      // onClick={(value) => handleDownloadpng(value, 24)}
                      className=" py-3 pr-4 flex items-center gap-2 hover:bg-grey-100 border-none outline-none"
                    >
                      Download Png
                      <Select.Root onValueChange={handleDownloadpng}>
                        <Select.Trigger asChild className="">
                          {/* <button
                            className=" w-6 h-6 border-l outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                            aria-label="mni png download"
                          > */}
                          <Select.Icon className="w-6 h-6 border-l outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                            <Image
                              src={downArrow}
                              alt="mni-down-arrow"
                              width={18}
                              height={18}
                              className="w-full h-full"
                            />
                          </Select.Icon>
                        </Select.Trigger>
                        <Select.Portal>
                          <Select.Content
                            position="popper"
                            className="w-full bg-white rounded-md  will-change-[opacity,transform] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]  max-h-[396px] overflow-y-scroll data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                            sideOffset={5}
                          >
                            <Select.Viewport className="group  w-full bg-white rounded-xl py-4 h-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                              {["512", "168", "64", "24"].map((size) => (
                                <Select.Item
                                  key={size}
                                  value={size}
                                  className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-4 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-grey-700 data-[highlighted]:text-grey-100"
                                >
                                  {size}
                                </Select.Item>
                              ))}
                            </Select.Viewport>
                          </Select.Content>
                        </Select.Portal>
                        {/* </button> */}
                      </Select.Root>
                    </span>
                  </span>
                  <span className="flex items-center justify-between bg-grey-900 rounded-xl p-5 font-bold text-sm text-grey-50">
                    <span>
                      {"<i"} <span className="text-[#8BA2FF]">class</span>{" "}
                      {"=“"}
                      <span className="text-[#FFA83F]">mni&nbsp;</span>
                      <span className="text-[#77B876]">mni-{name}</span>{" "}
                      {"”></i>"}
                    </span>
                    <button
                      title="mni-css-code"
                      onClick={getCssCode}
                      className="w-fit"
                    >
                      <Image
                        src={copy}
                        alt={"mni-down-arrow"}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </button>
                  </span>
                </div>
              </div>
              {icons ? <RelatedIcons icons={relatedIcons} name={name} /> : null}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none 
            bg-grey-900 text-[#F2F2F2] px-3 py-[0.375rem] rounded-[0.625rem] 
            shadow-[0px 15px 99px 0px #E1E8F0] will-change-[transform,opacity]"
            sideOffset={5}
          >
            {name}
            <Tooltip.Arrow className="fill-grey-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

type IRelatedIcons = { icons: Icons; name: string };
const RelatedIcons = ({ icons, name }: IRelatedIcons) => {
  return (
    <>
      <strong className="uppercase  text-grey-700 tracking-[0.12rem] font-semibold mt-10">
        Related Icons
      </strong>
      <div className="mt-8 grid grid-cols-10 gap-10 place-items-center">
        {icons?.map(([name, iconNode]) => (
          <IconButton
            key={name}
            name={name}
            component={createMeistericon(name, iconNode)}
            icons={icons}
          />
        ))}
      </div>
    </>
  );
};
