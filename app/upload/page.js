"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);
  const inputFile = useRef(null);

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });

      if (res.status === 401) {
        alert("Unauthorized: Please check your PINATA_JWT.");
        setUploading(false);
        return;
      }

      const resData = await res.json();
      setCid(resData.IpfsHash);
      setUploading(false);
    } catch (error) {
      console.error("Failed Attempt: ", error);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    uploadFile(selectedFile);
  };

  return (
    <main className="w-full min-h-screen m-auto flex flex-col justify-center items-center">
      <input
        type="file"
        id="file"
        ref={inputFile}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button disabled={uploading} onClick={() => inputFile.current.click()}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {cid && (
        <Image
          src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`}
          alt="Image from IPFS"
          width={500}
          height={500}
        />
      )}
    </main>
  );
};

export default Upload;
