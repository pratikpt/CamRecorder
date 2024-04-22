import Link from "next/link";
import VideoRecorder from "./video-player";

export default async function RoomPage(props: { params: { roomId: string } }) {

  return (
    <div className="min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <VideoRecorder />
      </div>

    </div>
  );
}
