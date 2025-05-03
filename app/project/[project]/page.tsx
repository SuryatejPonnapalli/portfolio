"use client";

import { useParams } from "next/navigation";
import ProjectPage from "@/components/Project";
import {
  ridemamaProjectData,
  digitalDinerProjectData,
  videoStreamingDRMProjectData,
} from "@/components/Projects/ProjectData";

export default function Page() {
  const params = useParams<{ project: string }>();
  console.log(params);
  return (
    <>
      {params.project === "ridemama" && (
        <ProjectPage project={ridemamaProjectData} />
      )}
      {params.project === "digitalDiner" && (
        <ProjectPage project={digitalDinerProjectData} />
      )}
      {params.project === "drmSystem" && (
        <ProjectPage project={videoStreamingDRMProjectData} />
      )}
    </>
  );
}
