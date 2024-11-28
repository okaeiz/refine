import React, { useRef, useState } from "react";
import Head from "@docusaurus/Head";
import clsx from "clsx";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { LandingFooter } from "@site/src/refine-theme/landing-footer";
import ReactPlayer from "react-player/youtube";
import { useColorMode } from "@docusaurus/theme-common";

const title = "Refine AI";

type CommonSectionProps = {
  className?: string;
};

const RefineAIPage = () => {
  return (
    <>
      <Head>
        <html data-active-page="index" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <link
          rel="preload"
          href="https://refine.new/embed-form"
          as="document"
        />
      </Head>
      <CommonLayout description="Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.">
        <div>
          <CommonHeader />
        </div>

        <div
          style={{
            backgroundRepeat: "repeat, no-repeat, no-repeat",
          }}
          className={clsx(
            "not-prose",
            "relative",
            "bg-refine-ai-page-bg-light",
            "dark:bg-refine-ai-page-bg-dark",
            "dark:bg-[position:0_0,50%_30%]",
            "dark:bg-[length:4px_4px,960px_600px]",
            "bg-[position:0_0,50%_35%,50%_5%]",
            "bg-[length:4px_4px,960px_200px,960px_600px]",
          )}
        >
          <div
            className={clsx(
              "absolute",
              "pointer-events-none",
              "z-[1]",
              "w-[960px]",
              "h-[600px]",
              "left-1/2",
              "top-[350px]",
              "-translate-x-1/2",
              "dark:bg-[radial-gradient(46.3%_35.37%_at_50%_35.37%,rgba(38,217,126,0.25)_0%,rgba(38,217,126,0)_100%)]",
              "bg-[radial-gradient(46.3%_35.37%_at_50%_35.37%,rgba(51,51,255,0.15)_0%,rgba(51,51,255,0)_100%)]",
            )}
          />
          <Hero
            className={clsx(
              "mx-auto",
              "mt-8 landing-sm:mt-12 landing-md:mt-20",
              "px-6 landing-sm:px-8 landing-md:px-0",
            )}
          />
          <Player
            className={clsx(
              "mx-2 landing-sm:mx-8",
              "mt-8 landing-sm:mt-12 landing-md:mt-20",
            )}
          />
          <JoinTheWaitlistButton
            className={clsx("mt-6", "mb-12 landing-sm:mb-20", "mx-auto")}
          />
        </div>
        <div className="mt-auto">
          <LandingFooter />
        </div>
      </CommonLayout>
    </>
  );
};

const Hero = (props: CommonSectionProps) => {
  return (
    <div
      className={clsx(
        "w-full",
        "not-prose",
        "flex flex-col",
        "items-center",
        props.className,
      )}
    >
      <div>
        <h2
          className={clsx(
            "text-center",
            "text-xs font-semibold",
            "tracking-wider",
            "text-refine-indigo dark:text-refine-green-alt",
            "dark:drop-shadow-[0_0_20px_#26D97F]",
          )}
        >
          ENTERPRISE-READY AI CODE GENERATION
        </h2>
      </div>

      <h1
        className={clsx(
          "pt-6",
          "max-w-[900px]",
          "text-center",
          "tracking-tight",
          "text-[32px] leading-[40px] md:text-[56px] md:leading-[72px]",
          "font-bold",
          "dark:text-white text-gray-900",
        )}
      >
        Build production-grade web applications in minutes, with the power of{" "}
        <span
          className={clsx(
            "text-refine-indigo dark:text-refine-green-alt",
            "dark:drop-shadow-[0_0_30px_#26D97F]",
          )}
        >
          Refine AI
        </span>
        .
      </h1>
    </div>
  );
};

const Player = (props: CommonSectionProps) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [videoState, setVideoState] = useState<"playing" | "paused" | "stop">(
    "stop",
  );

  const showPreview = videoState === "stop";
  const showVideo = videoState === "playing" || videoState === "paused";

  return (
    <div className={clsx(props.className)}>
      <div
        className={clsx(
          "cursor-pointer",
          "relative",
          "z-[5]",
          "w-full max-w-[1200px]",
          "h-auto",
          "mx-auto",
        )}
      >
        <div
          className={clsx(
            "absolute",
            "left-1/2",
            "-translate-x-1/2",
            "h-[1px]",
            "w-[calc(100%-64px)]",
            "z-[6]",
            "bg-gradient-to-r from-[#EDF2F7] dark:from-transparent dark:via-[#26D97F] via-[#3333FF] to-transparent",
          )}
        />

        <div
          className={clsx(
            "relative",
            "z-[5]",
            "bg-gradient-to-b from-[#EDF2F7] dark:from-white/20 via-90% via-transparent",
            "w-full",
            "h-full",
            "p-px",
            "rounded-[32px]",
          )}
        >
          <div
            className={clsx(
              "p-4",
              "bg-white dark:bg-gray-900",
              "dark:bg-gradient-to-b dark:from-white/10 via-transparent",
              "rounded-[32px]",
              "h-full",
            )}
          >
            <div className="aspect-video relative">
              <div
                className={clsx(
                  {
                    "opacity-0": videoState === "stop",
                    "opacity-100": videoState !== "stop",
                  },
                  "rounded-2xl",
                  "overflow-hidden",
                  "h-full w-full",
                )}
              >
                {/* @ts-expect-error ReactPlayer have type issues */}
                <ReactPlayer
                  ref={playerRef}
                  url="https://www.youtube.com/watch?v=mt0loXDwjZo"
                  width="100%"
                  height="100%"
                  controls={false}
                  playing={videoState === "playing"}
                  onEnded={() => {
                    setVideoState("stop");
                  }}
                  onPlay={() => {
                    setVideoState("playing");
                  }}
                  onPause={() => {
                    setVideoState("paused");
                  }}
                />
              </div>

              <div
                className={clsx(
                  {
                    "opacity-0": showVideo,
                    "pointer-events-none": showVideo,
                    "opacity-100": showPreview,
                  },
                  "transition-opacity duration-500 delay-300 ease-in-out",
                  "absolute",
                  "inset-0",
                  "w-full",
                  "h-full",
                  "rounded-2xl",
                )}
              >
                <img
                  src="/assets/refine-ai-video-preview.png"
                  alt="Refine AI"
                  className={clsx(
                    "w-full",
                    "h-full",
                    "rounded-2xl",
                    "object-cover",
                  )}
                />
              </div>

              <div
                className={clsx(
                  {
                    "opacity-0": videoState === "playing",
                    "pointer-events-none": videoState === "playing",
                    "opacity-100": videoState !== "playing",
                  },
                  "bg-white/30",
                  "absolute",
                  "inset-0",
                  "rounded-2xl",
                  "transition-all",
                  "duration-200",
                  "ease-in-out",
                )}
              >
                <PlayButton
                  onClick={() => {
                    setVideoState("playing");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayButton = (props: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        props.onClick();
      }}
      className={clsx(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "flex items-center justify-center",
        "z-[2]",
        "rounded-full",
        "border border-transparent",
        "appearance-none",
        "outline-none",
        props.className,
      )}
    >
      <img
        src="/assets/refine-ai-video-play-button-bg.png"
        style={{
          animationDuration: "2s",
        }}
        className={clsx(
          "w-[144px]",
          "h-[144px]",
          "animate-spin",
          "select-none",
        )}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={45}
        fill="none"
        className={clsx(
          "ml-0.5",
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        )}
        {...props}
      >
        <path
          fill="url(#play-icon-a)"
          fillRule="evenodd"
          d="M4.214 1.505a7.308 7.308 0 0 1 7.395.156l23.75 14.615a7.307 7.307 0 0 1 0 12.447L11.609 43.34A7.308 7.308 0 0 1 .47 37.115V7.885a7.308 7.308 0 0 1 3.743-6.38Z"
          clipRule="evenodd"
        />
        <defs>
          <radialGradient
            id="play-icon-a"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(48.814 -.247 1.143) scale(58.2614)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED5EC9" />
            <stop offset={0.3} stopColor="#8000FF" />
            <stop offset={1} stopColor="#33F" />
          </radialGradient>
        </defs>
      </svg>
    </button>
  );
};

const JoinTheWaitlistButton = (props: CommonSectionProps) => {
  const { colorMode } = useColorMode();

  return (
    <a
      href="https://form.typeform.com/to/htzq03hP"
      target="_blank"
      rel="noreferrer"
      className={clsx(
        "block",
        "text-inherit",
        "no-underline",
        "w-max",
        "p-4",
        "rounded-full",
        "border border-[#dee5ed] dark:border-[#303450]",
        props.className,
      )}
    >
      <div
        className={clsx(
          "relative",
          "flex",
          "items-center",
          "justify-center",
          "rounded-full",
          "p-px",
          "overflow-hidden",
          "border border-transparent",
        )}
      >
        <div
          className={clsx(
            "w-[300px] h-[300px]",
            "z-[1]",
            "p-px",
            "absolute",
            "dark:bg-join-ai-waitlist-button-border-dark",
            "bg-join-ai-waitlist-button-border-light",
            "animate-new-badge-border",
          )}
        />
        <img
          src="/assets/join-the-waitlist-button-bg-light.png"
          className={clsx(
            {
              hidden: colorMode === "dark",
              block: colorMode === "light",
            },
            "block",
            "w-[240px] h-auto",
            "z-[2]",
            "rounded-full",
            "dark:bg-gray-900 bg-gray-0",
          )}
        />
        <img
          src="/assets/join-the-waitlist-button-bg-dark.png"
          className={clsx(
            {
              hidden: colorMode === "light",
              block: colorMode === "dark",
            },
            "w-[240px] h-auto",
            "z-[2]",
            "rounded-full",
            "dark:bg-gray-900 bg-gray-0",
          )}
        />
      </div>
    </a>
  );
};

export default RefineAIPage;
