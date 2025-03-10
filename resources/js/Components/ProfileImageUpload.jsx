import React, { useState, useRef, useEffect } from 'react';

const ProfileImageUpload = ({ onImageCaptured }) => {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    // Check browser compatibility before accessing camera
    const checkBrowserCompatibility = () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setError("Your browser doesn't support camera access. Please try another browser.");
            setIsLoading(false);
            return false;
        }
        return true;
    };

    // Helper to initialize video after stream is obtained
    const initializeVideo = async (stream) => {
        if (videoRef.current) {
            console.log("Setting video source object");
            videoRef.current.srcObject = stream;
            streamRef.current = stream;

            // Set up a timeout in case video never loads
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error("Camera stream timeout")), 10000);
            });
            
            try {
                // Set up event listeners for video element
                const playPromise = new Promise((resolve) => {
                    videoRef.current.onloadedmetadata = () => {
                        console.log("Video metadata loaded");
                        videoRef.current.play()
                            .then(() => {
                                console.log("Video started playing");
                                resolve();
                            })
                            .catch(err => {
                                console.error("Play error:", err);
                                throw err;
                            });
                    };
                    
                    videoRef.current.onerror = (err) => {
                        console.error("Video element error:", err);
                        throw new Error("Video element error");
                    };
                });
                
                // Wait for either timeout or successful play
                await Promise.race([playPromise, timeoutPromise]);
                console.log("Camera initialized successfully");
                setIsCameraActive(true);
                setIsLoading(false);
            } catch (err) {
                console.error("Error initializing video:", err);
                setError(`Could not initialize camera: ${err.message}`);
                stopCamera();
                setIsLoading(false);
            }
        }
    };

    // Start camera when requested
    const startCamera = async () => {
        setIsLoading(true);
        setError(null);
        
        // Check browser compatibility first
        if (!checkBrowserCompatibility()) return;
        
        try {
            console.log("Requesting camera access");
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: 'user',
                    width: { ideal: 640 },
                    height: { ideal: 480 } 
                },
                audio: false 
            });
            
            console.log("Camera access granted");
            await initializeVideo(stream);
        } catch (err) {
            console.error("Error accessing camera:", err);
            
            let errorMessage = "Could not access camera";
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                errorMessage = "Camera access denied. Please allow camera access in your browser settings.";
            } else if (err.name === 'NotFoundError') {
                errorMessage = "No camera found on this device.";
            } else if (err.name === 'NotReadableError') {
                errorMessage = "Camera is already in use by another application.";
            } else if (err.name === 'OverconstrainedError') {
                errorMessage = "Camera doesn't meet the required constraints.";
            } else if (err.name === 'SecurityError') {
                errorMessage = "Camera access blocked due to security restrictions.";
            }
            
            setError(errorMessage);
            setIsLoading(false);
        }
    };

    // Stop camera stream
    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
            setIsCameraActive(false);
        }
    };

    // Cleanup when component unmounts
    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    // Capture photo from camera
    const capturePhoto = () => {
        if (!videoRef.current || !streamRef.current) return;

        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        
        // Get image as blob
        canvas.toBlob((blob) => {
            // Create a File object from the blob
            const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" });
            
            // Set captured image preview
            setCapturedImage(URL.createObjectURL(blob));
            
            // Send to parent component
            onImageCaptured({ file, dataUrl: URL.createObjectURL(blob) });
            
            // Stop the camera
            stopCamera();
        }, 'image/jpeg');
    };

    // Reset capturing process
    const retakePhoto = () => {
        setCapturedImage(null);
        startCamera();
    };

    return (
        <div className="profile-image-upload">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3">
                    <p>{error}</p>
                    <button 
                        className="underline text-sm mt-1"
                        onClick={() => setError(null)}
                    >
                        Try again
                    </button>
                </div>
            )}

            {!isCameraActive && !capturedImage && !isLoading && (
                <button 
                    type="button"
                    onClick={startCamera}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-2"
                >
                    Take Photo with Camera
                </button>
            )}

            {isLoading && (
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
                    <span className="text-sm text-gray-600">Accessing camera...</span>
                    <button 
                        className="text-xs text-red-500 mt-2"
                        onClick={() => {
                            stopCamera();
                            setIsLoading(false);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            )}

            {isCameraActive && (
                <div className="camera-container">
                    <video 
                        ref={videoRef}
                        autoPlay 
                        playsInline
                        muted
                        style={{ 
                            width: '100%', 
                            maxWidth: '320px', 
                            borderRadius: '8px',
                            backgroundColor: '#000'  // Add background to make video more visible
                        }}
                        className="mb-2 border border-gray-300"
                    />
                    
                    <div className="flex space-x-2">
                        <button 
                            type="button"
                            onClick={capturePhoto}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                        >
                            Capture
                        </button>
                        <button 
                            type="button"
                            onClick={stopCamera}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {capturedImage && (
                <div className="captured-image-container">
                    <img 
                        src={capturedImage} 
                        alt="Captured" 
                        className="mb-2 rounded-lg border border-gray-300"
                        style={{ maxWidth: '320px' }}
                    />
                    <button 
                        type="button"
                        onClick={retakePhoto}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
                    >
                        Retake Photo
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileImageUpload;