import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { InteractionMode } from "@/contexts/AppStateContext";
import { useAppState } from "@/hooks/useAppState";
import emitter from "@/lib/eventEmitter";
import {
  useRTVIClient,
  useRTVIClientMediaDevices,
  useRTVIClientTransportState,
} from "@pipecat-ai/client-react";
import {
  BotIcon,
  LoaderCircleIcon,
  MicIcon,
  PaletteIcon,
  SpeakerIcon,
  TriangleAlertIcon,
  WebcamIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Props {
  vision?: boolean;
}

function isSafari(userAgent: string): boolean {
  const isSafariBrowser = /Safari/.test(userAgent) && /Version/.test(userAgent);
  const isChromeBrowser = /Chrome/.test(userAgent);
  return isSafariBrowser && !isChromeBrowser;
}

export default function Settings({ vision }: Props) {
  const {
    conversationId,
    conversationType,
    interactionMode,
    setInteractionMode,
  } = useAppState();
  const [isOpen, setIsOpen] = useState(false);
  const {
    availableCams,
    availableMics,
    availableSpeakers,
    selectedCam,
    selectedMic,
    selectedSpeaker,
  } = useRTVIClientMediaDevices();

  const rtviClient = useRTVIClient();
  const transportState = useRTVIClientTransportState();

  const [deviceError, setDeviceError] = useState(false);

  const gUM = useCallback(
    () =>
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: vision,
        })
        .then(() => {
          setDeviceError(false);
          rtviClient?.initDevices().then(async () => {
            const mics = await rtviClient.getAllMics();
            rtviClient.updateMic(
              rtviClient.selectedMic?.deviceId ?? mics[0]?.deviceId,
            );
            const cams = await rtviClient.getAllCams();
            rtviClient.updateCam(
              rtviClient.selectedCam?.deviceId ?? cams[0]?.deviceId,
            );
          });
        })
        .catch(() => {
          setDeviceError(true);
        }),
    [rtviClient, vision],
  );

  useEffect(() => {
    const handleToggle = async () => {
      if (transportState === "disconnected") gUM();
      setIsOpen((open) => !open);
    };

    emitter.on("toggleSettings", handleToggle);
    return () => {
      emitter.off("toggleSettings", handleToggle);
    };
  }, [gUM, rtviClient, transportState]);

  const filteredSpeakers = availableSpeakers.filter(
    (s) => s.deviceId !== "default",
  );
  const filteredSelectedSpeaker =
    selectedSpeaker?.deviceId === "default"
      ? filteredSpeakers.find((s) => s.groupId === selectedSpeaker.groupId)
      : selectedSpeaker;

  const handleClickDelete = async () => {
    emitter.emit("deleteConversation", conversationId);
  };

  const loadingMics =
    !availableMics.length || availableMics.every((d) => d.deviceId === "");
  const loadingCams =
    !availableCams.length || availableCams.every((d) => d.deviceId === "");
  const loadingSpeakers =
    !filteredSpeakers.length ||
    filteredSpeakers.every((d) => d.deviceId === "");

  const safari = isSafari(navigator.userAgent);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col" side="right">
        <SheetTitle className="-m-6 mb-0 p-6 border-b border-b-input">
          Settings
        </SheetTitle>
        <SheetDescription className="absolute"></SheetDescription>
        <div className="flex-grow flex flex-col gap-6">
          {/* Voice Settings */}
          <div className="flex flex-col gap-2">
            {/* <h3 className="text-sm font-semibold mb-2">Voice</h3> */}
            {deviceError && (
              <div className="border border-destructive rounded-lg p-2 flex flex-col gap-2">
                <strong className="text-destructive">Media device error</strong>
                <p>Reset permissions and try again.</p>
                <Button
                  className="hover:bg-secondary hover:text-foreground"
                  onClick={() => gUM()}
                  variant="outline"
                >
                  Try again
                </Button>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <Label className="text-base font-normal" htmlFor="microphone">
                Microphone
              </Label>
              <Select
                disabled={deviceError}
                onValueChange={(id) => rtviClient?.updateMic(id)}
                value={selectedMic?.deviceId}
              >
                <SelectTrigger className="w-full flex gap-2" id="microphone">
                  <MicIcon className="flex-none text-muted" size={24} />
                  <SelectValue
                    className="overflow-hidden text-ellipsis"
                    placeholder={
                      deviceError ? (
                        <TriangleAlertIcon size={16} />
                      ) : (
                        <LoaderCircleIcon className="animate-spin" size={16} />
                      )
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {!loadingMics &&
                    availableMics.map((mic) => (
                      <SelectItem key={mic.deviceId} value={mic.deviceId}>
                        {mic.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Vision Settings */}
          {vision && (
            <div className="flex flex-col gap-2">
              {/* <h3 className="text-sm font-semibold mb-2">Vision</h3> */}
              <div className="flex flex-col gap-1">
                <Label className="text-base font-normal" htmlFor="camera">
                  Camera
                </Label>
                <Select
                  disabled={deviceError}
                  onValueChange={(id) => rtviClient?.updateCam(id)}
                  value={selectedCam?.deviceId}
                >
                  <SelectTrigger className="w-full text-start" id="camera">
                    <WebcamIcon className="flex-none text-muted" size={24} />
                    <SelectValue
                      className="overflow-hidden text-ellipsis"
                      placeholder={
                        deviceError ? (
                          <TriangleAlertIcon size={16} />
                        ) : (
                          <LoaderCircleIcon
                            className="animate-spin"
                            size={16}
                          />
                        )
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {!loadingCams &&
                      availableCams.map((cam) => (
                        <SelectItem key={cam.deviceId} value={cam.deviceId}>
                          {cam.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Speakers */}
          {!safari && (
            <div className="flex flex-col gap-2">
              {/* <h3 className="text-sm font-semibold mb-2">Vision</h3> */}
              <div className="flex flex-col gap-1">
                <Label className="text-base font-normal" htmlFor="speakers">
                  Speakers
                </Label>
                <Select
                  disabled={deviceError}
                  onValueChange={(id) => rtviClient?.updateSpeaker(id)}
                  value={filteredSelectedSpeaker?.deviceId}
                >
                  <SelectTrigger className="w-full text-start" id="speakers">
                    <SpeakerIcon className="flex-none text-muted" size={24} />
                    <SelectValue
                      className="overflow-hidden text-ellipsis"
                      placeholder={
                        deviceError ? (
                          <TriangleAlertIcon size={16} />
                        ) : loadingSpeakers ? (
                          <LoaderCircleIcon
                            className="animate-spin"
                            size={16}
                          />
                        ) : (
                          "Select…"
                        )
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {!loadingSpeakers &&
                      filteredSpeakers.map((speaker) => (
                        <SelectItem
                          key={speaker.deviceId}
                          value={speaker.deviceId}
                        >
                          {speaker.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Interaction mode */}
          {conversationType === "text-voice" && (
            <div className="flex flex-col gap-2">
              {/* <h3 className="text-sm font-semibold mb-2">Vision</h3> */}
              <div className="flex flex-col gap-1">
                <Label className="text-base font-normal" htmlFor="camera">
                  Interaction mode
                </Label>
                <Select
                  onValueChange={(mode: InteractionMode) =>
                    setInteractionMode(mode)
                  }
                  value={interactionMode}
                >
                  <SelectTrigger className="w-full text-start" id="camera">
                    <BotIcon className="flex-none text-muted" size={24} />
                    <SelectValue
                      className="overflow-hidden text-ellipsis"
                      placeholder="Select…"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conversational">
                      Conversational
                    </SelectItem>
                    <SelectItem value="informational">Informational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Style Settings */}
          <div className="flex flex-col gap-2">
            {/* <h3 className="text-sm font-semibold mb-2">Style</h3> */}
            <div className="flex flex-col gap-1">
              <Label className="text-base font-normal" htmlFor="microphone">
                Color Scheme
              </Label>
              <Select
                onValueChange={(theme) => {
                  switch (theme) {
                    case "light":
                      document.body.classList.add("light");
                      document.body.classList.remove("dark");
                      break;
                    case "dark":
                      document.body.classList.add("dark");
                      document.body.classList.remove("light");
                      break;
                    default:
                      document.body.classList.remove("dark");
                      document.body.classList.remove("light");
                      break;
                  }
                }}
                defaultValue="system"
              >
                <SelectTrigger className="w-full">
                  <PaletteIcon size={24} className="flex-none text-muted" />
                  <SelectValue placeholder="System" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="flex flex-col gap-4 mt-auto">
            <Button
              disabled={!conversationId}
              onClick={handleClickDelete}
              variant="destructive"
            >
              Delete conversation
            </Button>
            <SheetClose asChild>
              <Button variant="ghost">Close</Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
