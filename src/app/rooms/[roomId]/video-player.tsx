"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import useRecordingTimer from './useRecordingTimer';
import { formatTime } from '@/lib/utils';

const VideoRecorder = () => {
	const [isPermissionGranted, setPermissionGranted] = useState<boolean>(true);
	const [isRecording, setIsRecording] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [stream, setStream] = useState<any>(null);
	const [videoChunks, setVideoChunks] = useState<Blob[]>([]);
	const [video, setVideo] = useState<any>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);

	const { seconds, startTimer, pauseTimer, resetTimer } = useRecordingTimer();

	useEffect(() => {
		if ('MediaRecorder' in window) {
			navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(
				mediaStream => {
					setPermissionGranted(true);
					let video: any = videoRef.current;
					video.srcObject = mediaStream;
					setStream(mediaStream);
					video.addEventListener('loadedmetadata', () => {
						video.play();
					});
				},
				() => {
					setPermissionGranted(false);
				}
			);
		} else {
			alert('Not supported.');
		}
	}, []);

	const startRecord = useCallback(() => {
		setIsRecording(true);
		const media = new MediaRecorder(stream, { mimeType: 'video/webm' });
		mediaRecorderRef.current = media;
		mediaRecorderRef.current.start();

		startTimer();

		const videoRecChunks: Blob[] = [];

		mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
			if (event.data.size > 0) {
				videoRecChunks.push(event.data);
			}
		};

		setVideoChunks(videoRecChunks);
	}, [stream, startTimer]);

	const pauseRecord = useCallback(() => {
		setIsPaused(true);
		mediaRecorderRef.current?.pause();
		pauseTimer();
	}, [pauseTimer]);

	const resumeRecord = useCallback(() => {
		setIsPaused(false);
		mediaRecorderRef.current?.resume();
		startTimer();
	}, [startTimer]);

	const stopRecord = useCallback(() => {
		if (stream) {
			stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
			setStream(null);
			if (videoRef.current) {
				videoRef.current.srcObject = null;
			}
		}
		setIsRecording(false);
		resetTimer();
		if (mediaRecorderRef.current) {
			mediaRecorderRef.current?.stop();
			mediaRecorderRef.current.onstop = () => {
				const videoBlob = new Blob(videoChunks, { type: 'video/webm' });
				const videoURL = URL.createObjectURL(videoBlob);
				setVideo(videoURL);
			};
		}
	}, [stream, videoChunks, resetTimer]);

	return (
		<div className="flex flex-col items-center justify-center">
			{!video ? (
				<div className="flex flex-col items-center justify-center">
					{!isPermissionGranted && (
						<div className="text-red-700 font-bold text-xl">
							Please grant audio / video permission and reload.
						</div>
					)}
					<div className="">
						<video className="h-full w-[890px] rounded-lg" ref={videoRef}></video>
					</div>
					<div className="border rounded-3xl px-8 py-2 mt-10 flex items-center justify-center border-indigo-700">
						{isRecording ? (
							<>
								<div className="pr-4 opacity-60">Recording</div>
								{isPaused ? (
									<img
										onClick={resumeRecord}
										src="/play.svg"
										alt="play"
										className="h-9 w-auto cursor-pointer"
									/>
								) : (
									<img
										onClick={pauseRecord}
										src="/pause.svg"
										alt="pause"
										className="h-9 w-auto cursor-pointer"
									/>
								)}
								<img
									onClick={stopRecord}
									src="/stop.svg"
									alt="stop"
									className="h-9 w-auto cursor-pointer"
								/>
								<div className="pl-4 opacity-60">{formatTime(seconds)}</div>
							</>
						) : (
							<div onClick={startRecord}>
								<div className=" flex text-center border-l-2 text-4xl font-extrabold">Record</div>
							</div>
						)}
					</div>
				</div>
			) : (
				<div className=" flex flex-col items-center justify-center border rounded-md p-12 w-[890px] h-auto">
					<video src={video} className="h-auto w-full" controls></video>
					<div className="flex gap-4  items-center justify-center w-full p-7">
						<button
							className="border rounded-md shadow px-4 py-2"
							onClick={() => {
								window.location.reload();
							}}
						>
							🡠 Record another video
						</button>
						<a className="border rounded-md shadow px-4 py-2 font-bold" download href={video}>
							⬇ Download
						</a>
					</div>
				</div>
			)}

			<div
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
		</div>
	);
};

export default VideoRecorder;