"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorLegends, appLogo } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

const PlayCircleRoundedSVG = `<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>`;
const StopCircleRoundedSVG = `<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 14V8h8v8H8z'/>`;
const NotesRoundedSVG = `<path d='M4 14h6v-2H4v2zm0-5h9V7H4v2zm0 10h9v-2H4v2zm13-1l-4 4V8l4 4h-3l3 3V9l-3-3h3l3 3V6.5l3-3.5L22 4.5V20l-3 3-3-3h3zm-4 4z'/>`;

const renderSvgIcon = (path: string, color: string): JSX.Element => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill={color}>
    <g dangerouslySetInnerHTML={{ __html: path }} />
  </svg>
);

interface Area {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: "rect";
  type: "link" | "audio";
  audioSrc?: string;
}

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const preloadedAudiosRef = useRef<{ [id: string]: HTMLAudioElement }>({});
  const router = useRouter();

  const originalImageWidth = 1860;
  const originalImageHeight = 2427;

  // IMPORTANT: The order and mapping here are crucial.
  // Each entry in this array corresponds to an <area> tag in your HTML.
  // I've used the "alt" or "title" attributes from your HTML map,
  // and assigned audio files where applicable.
  // For areas with no specific title or alt in your HTML, I've assigned
  // titles based on the audio content they might represent, and set them as "audio" type.
  const interactiveAreas: Area[] = [
    {
      alt: "CQC Overview Diagram (Applicant Logs In and Initiates Application)",
      title: "Applicant Logs In and Initiates Application",
      href: "#applicant-logs-in",
      coords: "385,26,415,60",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/1.%20Applicant%20Logs%20In%20and%20Initiates%20Application.mp4",
    },
    {
      alt: "SC2: Submit Application to Register as a Manager",
      title: "🔗 SC2: Submit Application to Register as a Manager",
      href: "/submit-application-manager", // Assuming this is a link as it was previously
      coords: "1108,90,1350,129",
      shape: "rect",
      type: "link", // Changed to 'link' based on previous context
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/5.%20SC2%20Submit%20Application%20to%20Register%20as%20a%20Manager.mp4", // Kept audio if it's dual-purpose
    },
    {
      alt: "Log in to Portal",
      title: "Log in to Portal",
      href: "#log-in-to-portal",
      coords: "1357,92,1592,131",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/2.%20Log%20in%20to%20Portal.mp4",
    },
    {
      alt: "CQC Breakdown Diagram",
      title: "CQC Breakdown Diagram",
      href: "/cqc-breakdown-diagram", // This was explicitly a link in your HTML
      coords: "1599,92,1830,129",
      shape: "rect",
      type: "link",
    },
    {
      alt: "SC1: Submit Application to Register as a Provider",
      title: "🔗 SC1: Submit Application to Register as a Provider",
      href: "/submit-application-provider", // This was explicitly a link in your HTML
      coords: "95,521,355,562",
      shape: "rect",
      type: "link",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/4.%20SC1%20Submit%20Application%20to%20Register%20as%20a%20Provider.mp4", // Kept audio if it's dual-purpose
    },
    {
      alt: "Application Options Displayed",
      title: "Application Options Displayed",
      href: "#application-options-displayed",
      coords: "410,590,684,638",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/3.%20Application%20Options%20Displayed.mp4",
    },
    {
      alt: "Choose or Modify Regulated Activities",
      title: "Choose or Modify Regulated Activities",
      href: "#choose-modify-regulated-activities",
      coords: "104,774,284,798",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/6.%20Choose%20or%20Modify%20Regulated%20Activities.mp4",
    },
    {
      alt: "Verify Supporting Documents (Coords 120,966,272,987 - Close to Upload Docs)",
      title: "Verify Supporting Documents (Near Upload Docs)",
      href: "#verify-supporting-documents-alt", // Using a unique ID to distinguish if needed
      coords: "120,966,272,987",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/31.%20Verify%20Supporting%20Documents.mp4",
    },
    {
      alt: "Select Regulated Activities",
      title: "Select Regulated Activities",
      href: "#select-regulated-activities",
      coords: "111,1208,290,1235",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/7.%20Select%20Regulated%20Activities.mp4",
    },
    {
      alt: "Activities Confirmed",
      title: "Activities Confirmed",
      href: "#activities-confirmed",
      coords: "293,1599,510,1630",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/8.%20Activities%20Confirmed.mp4",
    },
    {
      alt: "Add/Remove Locations",
      title: "Add/Remove Locations",
      href: "#add-remove-locations",
      coords: "553,373,578,397",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/10.%20AddRemove%20Locations.mp4",
    },
    {
      alt: "Submit Location Details",
      title: "Submit Location Details",
      href: "#submit-location-details",
      coords: "198,417,223,440",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/12.%20Submit%20Location%20Details.mp4",
    },
    {
      alt: "Location Updated",
      title: "Location Updated",
      href: "#location-updated",
      coords: "701,473,730,500",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/13.%20Location%20Updated.mp4",
    },
    {
      alt: "Location Details Received",
      title: "Location Details Received",
      href: "#location-details-received",
      coords: "372,524,396,551",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/14.%20Location%20Details%20Received.mp4",
    },
    {
      alt: "Attach Service-Specific Information",
      title: "Attach Service-Specific Information",
      href: "#attach-service-specific-information",
      coords: "692,593,721,622",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/15.%20Attach%20Service-Specific%20Information.mp4",
    },
    {
      alt: "Complete Additional Forms",
      title: "Complete Additional Forms",
      href: "#complete-additional-forms",
      coords: "540,730,564,752",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/16.%20Complete%20Additional%20Forms.mp4",
    },
    {
      alt: "Forms Submitted",
      title: "Forms Submitted",
      href: "#forms-submitted",
      coords: "300,775,325,804",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/17.%20Forms%20Submitted.mp4",
    },
    {
      alt: "Add Conditions or Notices",
      title: "Add Conditions or Notices",
      href: "#add-conditions-or-notices",
      coords: "699,831,725,860",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/18.%20Add%20Conditions%20or%20Notices.mp4",
    },
    {
      alt: "Upload Supporting Documents",
      title: "Upload Supporting Documents",
      href: "#upload-supporting-documents",
      coords: "278,967,309,992",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/28.%20Upload%20Supporting%20Documents.mp4",
    },
    {
      alt: "Upload Documents",
      title: "Upload Documents",
      href: "#upload-documents",
      coords: "242,1066,213,1095", // Note: x2 < x1, check if intended for vertical mapping
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/29.%20Upload%20Documents.mp4",
    },
    {
      alt: "System Validation & Pre-Screening",
      title: "System Validation & Pre-Screening",
      href: "#system-validation-pre-screening",
      coords: "535,1164,562,1191",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/30.%20System%20Validation%20&%20Pre-Screening.mp4",
    },
    {
      alt: "Verify Supporting Documents (Coords 298,1209,329,1243)",
      title: "Verify Supporting Documents",
      href: "#verify-supporting-documents",
      coords: "298,1209,329,1243",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/31.%20Verify%20Supporting%20Documents.mp4",
    },
    {
      alt: "Approved Documents",
      title: "Approved Documents",
      href: "#approved-documents",
      coords: "217,1267,240,1294",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/32.%20Approved%20Documents.mp4",
    },
    {
      alt: "Verification Complete",
      title: "Verification Complete",
      href: "#verification-complete",
      coords: "499,1382,531,1411",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/33.%20Verification%20Complete.mp4",
    },
    {
      alt: "Application Routed to CQC Assessor",
      title: "Application Routed to CQC Assessor",
      href: "#application-routed-to-cqc-assessor",
      coords: "519,1601,542,1621",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/34.%20Application%20Routed%20to%20CQC%20Assessor.mp4",
    },
    {
      alt: "Assign Application",
      title: "Assign Application",
      href: "#assign-application",
      coords: "282,1646,307,1673",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/35.%20Assign%20Application.mp4",
    },
    {
      alt: "Decision Issued",
      title: "Decision Issued",
      href: "#decision-issued",
      coords: "242,1704,271,1731",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/36.%20Decision%20Issued.mp4",
    },
    {
      alt: "Request Clarification",
      title: "Request Clarification",
      href: "#request-clarification",
      coords: "468,1964,493,1993",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/37.%20Request%20Clarification.mp4",
    },
    {
      alt: "Notification of Approval/Rejection",
      title: "Notification of Approval/Rejection",
      href: "#notification-approval-rejection",
      coords: "336,2047,363,2073",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/38.%20Notification%20of%20ApprovalRejection.mp4",
    },
    {
      alt: "End of Monitoring Process",
      title: "End of Monitoring Process",
      href: "#end-of-monitoring-process",
      coords: "327,2190,356,2214",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/39.%20End%20of%20Monitoring%20Process.mp4",
    },
    // The following areas were in your HTML but didn't have alt/title and no obvious direct audio mapping.
    // I've assigned placeholder titles and set them as type 'audio' if they seem to be part of the flow,
    // otherwise, 'link' if they appear to be navigation or unassigned.
    // **You will need to confirm the intended purpose and correct audio/link for these.**
    {
      alt: "Location Configuration (coords: 884,1988,914,2017)",
      title: "Location Configuration (Secondary)",
      href: "#location-configuration-secondary",
      coords: "884,1988,914,2017",
      shape: "rect",
      type: "audio", // Assuming audio based on similar mapping
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/9.%20Location%20Configuration.mp4", // This audio already mapped to 1005,952,1030,972. Verify if this is a duplicate or refers to another stage.
    },
    {
      alt: "Undefined Area 2",
      title: "Undefined Area 2",
      href: "#undefined-area-2",
      coords: "927,1932,956,1961",
      shape: "rect",
      type: "audio", // Defaulting to audio; verify purpose
      audioSrc: "", // No audio provided for this specific area, keep empty for now.
    },
    {
      alt: "Undefined Area 3",
      title: "Undefined Area 3",
      href: "#undefined-area-3",
      coords: "1028,1892,1059,1921",
      shape: "rect",
      type: "audio", // Defaulting to audio; verify purpose
      audioSrc: "", // No audio provided for this specific area, keep empty for now.
    },
    {
      alt: "Undefined Area 4",
      title: "Undefined Area 4",
      href: "#undefined-area-4",
      coords: "889,1740,916,1769",
      shape: "rect",
      type: "audio", // Defaulting to audio; verify purpose
      audioSrc: "", // No audio provided for this specific area, keep empty for now.
    },
    {
      alt: "Undefined Area 5",
      title: "Undefined Area 5",
      href: "#undefined-area-5",
      coords: "958,1679,985,1708",
      shape: "rect",
      type: "audio", // Defaulting to audio; verify purpose
      audioSrc: "", // No audio provided for this specific area, keep empty for now.
    },
    {
      alt: "Undefined Area 6",
      title: "Undefined Area 6",
      href: "#undefined-area-6",
      coords: "1205,1637,1231,1664",
      shape: "rect",
      type: "audio", // Defaulting to audio; verify purpose
      audioSrc: "", // No audio provided for this specific area, keep empty for now.
    },
    {
      alt: "Undefined Area 7 (Near Location Config)",
      title: "Undefined Area 7",
      href: "#undefined-area-7",
      coords: "914,1064,938,1090",
      shape: "rect",
      type: "audio", // Defaulting to audio; verify purpose
      audioSrc: "", // No audio provided for this specific area, keep empty for now.
    },
    {
      alt: "Undefined Area 8 (Near Location Config)",
      title: "Undefined Area 8",
      href: "#undefined-area-8",
      coords: "922,1008,949,1034",
      shape: "rect",
      type: "audio", // Defaulting to audio; verify purpose
      audioSrc: "", // No audio provided for this specific area, keep empty for now.
    },
    {
      alt: "Location Configuration",
      title: "Location Configuration",
      href: "#audio-location-configuration", // Changed to a unique ID to distinguish from the link
      coords: "1005,952,1030,972",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/9.%20Location%20Configuration.mp4",
    },
  ];

  useEffect(() => {
    // Cleanup function to stop and reset audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      // Clean up preloaded audios
      Object.values(preloadedAudiosRef.current).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        // Consider if removing src is necessary; it can sometimes lead to issues if audio is reused
        // audio.removeAttribute('src');
        // audio.load();
      });
      preloadedAudiosRef.current = {}; // Clear the ref
    };
  }, []);

  // Preload audio files
  useEffect(() => {
    interactiveAreas.forEach(area => {
      if (area.type === "audio" && area.audioSrc && !preloadedAudiosRef.current[area.href]) {
        const audio = new Audio(area.audioSrc);
        audio.load(); // Preload the audio
        preloadedAudiosRef.current[area.href] = audio;
      }
    });
  }, [interactiveAreas]);

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        legendRef.current &&
        !legendRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleAreaClick = useCallback((area: Area) => {
    if (area.type === "link") {
      router.push(area.href);
    } else if (area.type === "audio" && area.audioSrc) {
      const id = area.href;
      const existingAudio = preloadedAudiosRef.current[id];

      // If there's an audio currently playing, stop it and reset its state
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        // If the audio being stopped was the one currently tracked as playingAudioId, clear it
        if (playingAudioId) {
          setPlayingAudioId(null);
        }
      }

     
      if (playingAudioId !== id) {
        if (existingAudio) {
          audioRef.current = existingAudio;
          existingAudio.currentTime = 0; 
          existingAudio.play().catch(error => {
            console.error("Error playing audio:", error);
          });
          setPlayingAudioId(id);
          existingAudio.onended = () => {
            setPlayingAudioId(null);
            audioRef.current = null; // Clear the current audio ref when done
          };
        } else {
          // Fallback for audio not preloaded (should ideally not happen)
          console.warn(`Audio for ${area.title} not preloaded, attempting to create new Audio object.`);
          const fallback = new Audio(area.audioSrc);
          audioRef.current = fallback;
          fallback.play().catch(error => {
            console.error("Error playing fallback audio:", error);
          });
          setPlayingAudioId(id);
          fallback.onended = () => {
            setPlayingAudioId(null);
            audioRef.current = null;
          };
        }
      }
    }
  }, [playingAudioId, router]);

  const getScaledCoords = useCallback((coords: string) => {
    const [x1, y1, x2, y2] = coords.split(",").map(Number);
    const currentImage = document.querySelector('img[usemap="#image-map"]');
    if (!currentImage) return "0,0,0,0";

    const { clientWidth, clientHeight } = currentImage;
    const scaleX = clientWidth / originalImageWidth;
    const scaleY = clientHeight / originalImageHeight;

    const scaledX1 = x1 * scaleX;
    const scaledY1 = y1 * scaleY;
    const scaledX2 = x2 * scaleX;
    const scaledY2 = y2 * scaleY;

    return `${scaledX1},${scaledY1},${scaledX2},${scaledY2}`;
  }, [originalImageWidth, originalImageHeight]);

  return (
    <Box sx={{ p: 3, position: "relative" }}>
      <Stack flexDirection="row" alignItems="center" mt={{ md: 2, xs: 1 }}>
        <img src={appLogo.src} alt="CQC Logo" width={98} height={31} />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: -2, xs: 1 }}
        >
          CQC Listing Process
        </Typography>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between" mt={2}>
        <Typography
          variant="h3"
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
        >
          Sequence Diagram
        </Typography>

        <Typography variant="h3" fontWeight={600} ml={2} display="flex" alignItems="center">
          <Typography
            component="span"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
            fontWeight={600}
            color="#5A5867"
            sx={{ mr: 1 }}
          >
            Colour Legend
          </Typography>
          <span ref={iconRef}>
            <KeyboardArrowDownIcon
              onClick={toggleDropdown}
              sx={{
                fontSize: { xs: 28, md: 30 },
                color: "#5A5867",
                border: "2px solid",
                borderRadius: "40px",
                cursor: "pointer",
              }}
            />
          </span>
        </Typography>
      </Stack>

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <img
          src="CQCListingProcess.svg" 
          useMap="#image-map"
          alt="CQC Application Process Diagram"
          style={{ width: "100%", height: "auto" }}
        />
        <map name="image-map">
          {interactiveAreas.map((area, index) => (
            <area
              key={index}
              alt={area.alt}
              title={area.title}
              href={area.type === "link" ? area.href : "#"} // If it's an audio, keep href="#"
              coords={area.coords}
              shape={area.shape}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior for all areas
                handleAreaClick(area);
              }}
              style={{ cursor: "pointer" }}
            />
          ))}
        </map>
      </Box>

      {/* SVG Overlay for Hover Effects (Optional but good for visual feedback) */}
      <svg
        style={{ width: "100%", position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${originalImageWidth} ${originalImageHeight}`}
      >
        <style>
          {`
            .image-mapper-shape {
              fill: rgba(0, 0, 0, 0);
              stroke: transparent;
              stroke-width: 2px;
              transition: stroke 0.2s ease-in-out;
            }
            /* Apply hover effect to the SVG overlay shape when the corresponding area is hovered */
            area:hover + .svg-overlay .image-mapper-shape[data-index="${interactiveAreas.findIndex(area => area.type === "link" || area.type === "audio")}"] { /* This selector is tricky if you have many areas. A more robust solution might involve state or more specific IDs. */
              stroke: white;
              opacity: 0.2;
            }
          `}
        </style>
        <g className="svg-overlay" style={{ pointerEvents: "none" }}>
          {interactiveAreas.map((area, index) => {
            const [x1, y1, x2, y2] = area.coords.split(",").map(Number);
            const width = x2 - x1;
            const height = y2 - y1;
            return (
              <rect
                key={`svg-rect-${index}`}
                x={x1}
                y={y1}
                width={width}
                height={height}
                className="image-mapper-shape"
                data-index={index} // Add data-index for potential CSS targeting
              />
            );
          })}
        </g>
      </svg>

      {isOpen && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />
          <Box
            ref={legendRef}
            sx={{
              position: "absolute",
              top: "150px",
              right: "50px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              p: 1,
              zIndex: 1300,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={colorLegends.src}
              alt="Color Legend"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};