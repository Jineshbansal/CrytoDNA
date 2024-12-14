import { useState } from 'react';

const UploadDNA = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
  }

  interface FileUploadProgress {
    prevProgress: number;
  }

  const handleFileUpload = (event: FileUploadEvent): void => {
    const uploadedFile = event.target.files?.[0] || null;
    setFile(uploadedFile);

    if (uploadedFile) {
      console.log('Uploaded file:', uploadedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result;
        console.log('File content:', fileContent);
      };
      reader.readAsText(uploadedFile);
    }

    const interval = setInterval(() => {
      setUploadProgress((prevProgress: FileUploadProgress['prevProgress']) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);
  };

  return (
    <div>
      {/* Upload DNA Section */}
      <div
        style={{ background: '#F1FAEE', padding: '2rem', textAlign: 'center' }}
      >
        <h1>Upload Your Raw Genomic Data</h1>
        <p>
          We accept files from 23andMe and other personal genomics services.
          Your data will remain encrypted and private.
        </p>
        <div
          style={{
            border: '2px dashed #ccc',
            padding: '2rem',
            margin: '2rem auto',
            maxWidth: '500px',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('fileInput')?.click()}
        >
          <div style={{ fontSize: '4rem', animation: 'pulse 2s infinite' }}>
            📤
          </div>
          <p>Drag and drop your file here or Click to Browse</p>
          <p style={{ color: '#888' }}>Supported formats: .txt, .zip, .json</p>
          <input
            id='fileInput'
            type='file'
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
        </div>
        {file && (
          <div style={{ width: '100%', marginTop: '1rem' }}>
            <progress
              value={uploadProgress}
              max='100'
              style={{ width: '100%' }}
            />
            <p style={{ color: '#888' }}>{uploadProgress}%</p>
          </div>
        )}
        <button
          style={{
            backgroundColor: '#FF6F61',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          Upload and Encrypt
        </button>
      </div>

      {/* Security Assurance Section */}
      <div
        style={{ background: '#A8DADC', padding: '2rem', textAlign: 'center' }}
      >
        <div style={{ fontSize: '4rem' }}>🔒</div>
        <h2>Your Privacy is Our Priority</h2>
        <p>
          Your genomic data is encrypted during upload and securely stored. Only
          you have access to the results.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <div style={{ textAlign: 'center', margin: '0 1rem' }}>
            <h6>Upload</h6>
            <p>Your data is uploaded securely.</p>
          </div>
          <div style={{ textAlign: 'center', margin: '0 1rem' }}>
            <h6>Encrypt</h6>
            <p>Your data is encrypted during the upload process.</p>
          </div>
          <div style={{ textAlign: 'center', margin: '0 1rem' }}>
            <h6>Insights</h6>
            <p>Only you have access to the insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDNA;
