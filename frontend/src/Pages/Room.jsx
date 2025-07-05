import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./Room.css";

function Room() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 640725414;
    const serverSecret = "025334bfa1b2385104fee3d5fcb14e57";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Enter your name!"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div className="room-container">
      <div className="zego-meeting" ref={myMeeting} />
    </div>
  );
}

export default Room;
