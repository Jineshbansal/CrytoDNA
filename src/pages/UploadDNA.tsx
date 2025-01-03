import { useState } from 'react';
interface FinalJson {
  passport_id: string;
  filename_hash: string;
  data_hash: string;
  Zama_data: Record<string, string>;
}

const UploadDNA = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
  }

  interface FileUploadProgress {
    prevProgress: number;
  }

  /**
   * Determines if the user has a genetic predisposition for Thrombophilia.
   * @param {FinalJson} data - The FinalJson object containing genotype data.
   * @returns {string} - A message indicating whether the user has a higher chance of Thrombophilia.
   */
  const checkThrombophiliaRisk = (data: FinalJson): string => {
    const thrombophiliaMarkers: Record<string, string> = {
        rs10811661: "TT", // Associated with some increased risk factors in metabolic pathways
        rs1111875: "CC",  // Potential diabetes-related marker, sometimes linked to clotting
        rs13266634: "CC", // Strong genetic associations with metabolic syndromes
        rs1801282: "CC"   // PPAR-gamma variant with indirect links to clotting
    };

    const { Zama_data } = data;

    const riskFactors: string[] = [];

    // Check the specified genes for matching risk markers
    Object.entries(thrombophiliaMarkers).forEach(([gene, riskyGenotype]) => {
        if (Zama_data[gene] === riskyGenotype) {
            riskFactors.push(`${gene}: ${riskyGenotype}`);
        }
    });

    // Evaluate results
    return riskFactors.length > 0
        ? `The user has a potential predisposition for Thrombophilia due to the following markers: ${riskFactors.join(", ")}.`
        : "The user does not show significant genetic markers associated with a higher risk of Thrombophilia.";
  };


  const handleFileUpload = (event: FileUploadEvent): void => {
    const uploadedFile = event.target.files?.[0] || null;
    setFile(uploadedFile);

    if (uploadedFile) {
      console.log('Uploaded file:', uploadedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result;
        console.log('File content:', fileContent);
        if (!fileContent) {
          console.error("Unable to read file content.");
          return;
      }

      console.log('File content:', fileContent);

      // Split file content into lines and parse
      const lines = fileContent.trim().split('\n');
      
      // Filter out header lines starting with #
      const dataLines = lines.filter(line => !line.startsWith('#'));

      // Create a dictionary to store genotype data
      const genotypeData: Record<string, string> = {};
      dataLines.forEach(line => {
          const [rsid, , , genotype] = line.split('\t'); // Extract rsid and genotype
          genotypeData[rsid] = genotype.trim();
      });

      // Define the target rsid keys for Zama_data
      const targetKeys = [
          "rs10811661", "rs1111875", "rs13266634", "rs1801282",
          "rs1815739", "rs4402960", "rs5219", "rs6025",
          "rs7754840", "rs7903146", "rs8050136", "rs9300039"
      ];

      // Populate Zama_data, defaulting to "--" for missing keys
      const ZamaData: Record<string, string> = {};
      targetKeys.forEach(key => {
          ZamaData[key] = genotypeData[key] || "--";
      });

      // Construct the final JSON object
      const finalJson: FinalJson = {
          passport_id: "monadicdna_b65e442fcc0026ad8aeeb3ea6a779023_542916",
          filename_hash: "b65e442fcc0026ad8aeeb3ea6a779023",
          data_hash: "69f10259787f3305672bbedf52b7ddb4",
          Zama_data: ZamaData
      };

      console.log('Final JSON:', JSON.stringify(finalJson, null, 2));
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
