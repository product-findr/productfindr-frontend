"use client";
import { useState } from 'react';
import { ProductAddress, ProductABI } from '@/constant/constant';
import { useWriteContract } from 'wagmi';
export default function DeleteProduct() {
  const [productID, setProductID] = useState('');

  const { writeContractAsync } = useWriteContract();

  const handleInputChange = (e) => {
    setProductID(e.target.value);
  };

  const handleDelete = async () => {
    // Handle the delete action here
    try {
        const tx = await writeContractAsync({
            abi: ProductABI,
            address: ProductAddress,
            functionName: "deleteProduct",
            args: [productID],
        });

    } catch (error) {
        console.error("Failed, Reason: ", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Delete Product</h1>
      <input 
        type="number" 
        value={productID} 
        onChange={handleInputChange} 
        placeholder="Enter Product ID" 
        style={styles.input} 
      />
      <button onClick={handleDelete} style={styles.button}>Delete</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
