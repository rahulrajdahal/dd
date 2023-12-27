"use client";

import { figma, npm, react, vue, vueLatest } from "@/assets/images";
import Image from "next/image";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { copy } from "@/assets/icons";
import toast from "react-hot-toast";

const figmaSteps = [
  {
    id: 1,
    step: (
      <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
        <strong className="font-bold">Right Click on Figma</strong> and head
        over to <strong className="font-bold">Plugins.</strong>
      </p>
    ),
  },
  {
    id: 2,
    step: (
      <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
        Select{" "}
        <strong className="font-bold">“Browse plugins in Community”.</strong>
      </p>
    ),
  },
  {
    id: 3,
    step: (
      <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
        Search for <strong className="font-bold"> “MeisterIcons”.</strong>
      </p>
    ),
  },
  {
    id: 4,
    step: (
      <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
        Click <strong className="font-bold"> “Install”.</strong>
      </p>
    ),
  },
  {
    id: 5,
    step: (
      <p className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
        Then, go to your Figma File and{" "}
        <strong className="font-bold">
          {`Right Click > Plugins > MeisterIcons`}{" "}
        </strong>
      </p>
    ),
  },
];

const npmSteps = [
  {
    id: 1,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          yarn add meistericons
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText("yarn add meistericons");
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          {`import {DeleteB} from 'meistericons'`}
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "import {DeleteB} from 'meistericons'"
                  );
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">{`<DeleteB/>`}</code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText("<DeleteB/>");
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 4,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">{`<i class="mni mni-deleteB"></i>`}</code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "<i class='mni mni-deleteB'></i>"
                  );
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
];

const reactSteps = [
  {
    id: 1,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          yarn add meistericons-react
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText("yarn add meistericons-react");
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          {`import {DeleteB} from 'meistericons-react'`}
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `import {DeleteB} from 'meistericons-react'`
                  );
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">{`<DeleteB/>`}</code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText(`<DeleteB/>`);
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
];

const vueSteps = [
  {
    id: 1,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          yarn add meistericons-vue
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText("yarn add meistericons-vue");
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          {`import {DeleteB} from 'meistericons-vue'`}
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `import {DeleteB} from 'meistericons-vue'`
                  );
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <div>
          <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
            <script>
        `}
          </code>
          <code className="mt-2 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
              import {ArrowDown} from "meistericons-vue"
              `}
          </code>

          <code className="mt-4 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
            
              export default {
                `}
          </code>
          <code className="mt-2 ml-12 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
                name:'My Component',
                `}
          </code>
          <code className="mt-2 ml-12 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
                components: {ArrowDown}
                `}
          </code>
          <code className="mt-2 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
              
            }
            `}
          </code>
          <code className="mt-2 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
            </script>
            `}
          </code>

          <code className="mt-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
            <template>
            `}
          </code>
          <code className="mt-2 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
              < ArrowDown />
              `}
          </code>
          <code className="mt-2 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
        </template>
            `}
          </code>
        </div>
      </div>
    ),
  },
];

const vue3Steps = [
  {
    id: 1,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          yarn add meistericons-vue-latest
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText("yarn add meistericons");
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
          {`import {DeleteB} from 'meistericons-vue-latest'`}
        </code>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                title={"Copy"}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `import {DeleteB} from 'meistericons-vue-latest'`
                  );
                  toast("Copied", { position: "bottom-center" });
                }}
              >
                <Image
                  src={copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-grey-800"
                />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={5}
                className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2"
              >
                Copy
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="flex items-start justify-between px-4 py-2">
        <div>
          <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
            <script>
        `}
          </code>
          <code className="mt-2 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
              import {ArrowDown} from "meistericons-vue-latest"
              `}
          </code>

          <code className="mt-2 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
            </script>
            `}
          </code>

          <code className="mt-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
            <template>
            `}
          </code>
          <code className="mt-2 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
              < ArrowDown />
              `}
          </code>
          <code className="mt-2 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`
        </template>
            `}
          </code>
        </div>
      </div>
    ),
  },
];

type IPage = Readonly<{ params: { slug: string } }>;
export default function Page({ params: { slug } }: IPage) {
  const renderDescription = () => {
    switch (slug) {
      case "figma":
        return "MeisterIcons is available on Figma as a Plugin. The plugin lets you quickly search for the icons you’re looking for.";

      case "npm":
        return "MeisterIcons is available on npm as a javaScript library. The library lets you quickly search for the icons you’re looking for.";
      case "react":
        return "MeisterIcons is available on react as a javaScript library. The library lets you quickly search for the icons you’re looking for.";

      case "vue3":
        return "MeisterIcons is available on vue as a javaScript library. The library lets you quickly search for the icons you’re looking for.";

      case "vue":
        return "MeisterIcons is available on vue as a javaScript library. The library lets you quickly search for the icons you’re looking for.";

      default:
        return "MeisterIcons is available on Figma as a Plugin. The plugin lets you quickly search for the icons you’re looking for.";
    }
  };

  const renderImage = () => {
    switch (slug) {
      case "figma":
        return figma;
      case "npm":
        return npm;
      case "vue":
        return vue;
      case "vue3":
        return vueLatest;
      case "react":
        return react;

      default:
        return figma;
    }
  };

  const steps = React.useMemo(() => {
    switch (slug) {
      case "figma":
        return figmaSteps;
      case "npm":
        return npmSteps;

      case "react":
        return reactSteps;

      case "vue":
        return vueSteps;

      case "vue3":
        return vue3Steps;

      default:
        return figmaSteps;
    }
  }, [slug]);

  return (
    <>
      <strong className=" text-grey-700 text-[2rem] leading-[3rem] -tracking-[0.04rem] font-normal">
        /{slug}
      </strong>
      <p className="mt-8 mb-6 text-grey-800 text-lg leading-8 font-normal -tracking-[0.0225rem]">
        {renderDescription()}
      </p>

      <Image
        src={renderImage()}
        alt="how-to-use"
        className="w-full h-[25rem] rounded-3xl object-cover"
        width={200}
        height={250}
      />

      <ul className="flex flex-col gap-8 mt-[2.8rem]">
        {steps.map(({ id, step }) => (
          <li key={id} className="flex flex-col gap-1">
            <p className="text-grey-700 font-base font-semibold leading-6 tracking-[0.12rem]">
              STEP {id}
            </p>
            {step}
          </li>
        ))}
      </ul>
    </>
  );
}
