document.addEventListener('DOMContentLoaded', () => {
  const webcam = document.getElementById('webcam');
  const startRecordBtn = document.getElementById('startRecord');
  const stopRecordBtn = document.getElementById('stopRecord');
  const saveRecordBtn = document.getElementById('saveRecord');
  const cameraSelector = document.getElementById('cameraSelector');

  let mediaRecorder;
  let chunks = [];

  // Fix for iOS Safari from https://leemartin.dev/hello-webrtc-on-safari-11-e8bcb5335295
  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '')

  // Function to update the camera list
  const updateCameraList = () => {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        cameraSelector.innerHTML = '<option value="">Select Camera</option>';
        devices.forEach(device => {
          if (device.kind === 'videoinput') {
            const option = document.createElement('option');
            option.value = device.deviceId;
            option.text = device.label || `Camera ${cameraSelector.length + 1}`;
            cameraSelector.appendChild(option);
          }
        });
      });
  };

  // Update the camera list on page load
  updateCameraList();

  // Function to start the webcam with the selected camera
  const startWebcam = (deviceId) => {
    navigator.mediaDevices.getUserMedia({ video: { deviceId } })
      .then((stream) => {
        webcam.srcObject = stream;
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data);
          }
        };
      })
      .catch((err) => console.error('Error accessing webcam:', err));
  };

  // Event listener for camera selection change
  cameraSelector.addEventListener('change', (event) => {
    const selectedDeviceId = event.target.value;
    if (selectedDeviceId) {
      startWebcam(selectedDeviceId);
    }
  });

  startRecordBtn.addEventListener('click', () => {
    chunks = [];
    mediaRecorder.start();
    startRecordBtn.disabled = true;
    stopRecordBtn.disabled = false;
  });

  stopRecordBtn.addEventListener('click', () => {
    mediaRecorder.stop();
    startRecordBtn.disabled = false;
    stopRecordBtn.disabled = true;
  });

  saveRecordBtn.addEventListener('click', () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const videoUrl = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = videoUrl;
    anchor.download = 'webcamRecording.webm';
    anchor.click();
  });
});
