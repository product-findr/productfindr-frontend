export function truncateAddress(address) {
    if (!address.startsWith('0x') || address.length !== 42) {
      throw new Error('Invalid Ethereum address');
    }
  
    return `${address.substring(0, 4)}...${address.substring(address.length - 3)}`;
}


/**
 * @param {*} amount - the amount of ETH to be converted
 * @notice this function returns the converted inputted ETH amount to USD
 * @returns a promise - hence function call must be awaited
 */
export async function ethToUSD(amount) {
  try {
    // uses the coingecko API to fetch ETH price to USD
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
    const data = await res.json();
    // extracts the USD price from the data
    const ethPrice = data.ethereum.usd;
    // converts the ETH price by multiplying by the amount by the current ETH price
    const convertedAmount = ethPrice * amount;
    return convertedAmount;
  } catch (error) {
    console.error("Error fetching ETH to USD conversion:", error);
  }
}

/**
 * @param {*} amountInUSD - the amount in USD to be converted to ETH
 * @notice this function returns the converted inputted USD amount to ETH
 * @returns a promise - hence function call must be awaited
 */
export async function usdToETH(amountInUSD) {
  try {
    // uses the coingecko API to fetch ETH price to USD
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
    const data = await res.json();
    // extracts the USD price from the data
    const ethPrice = data.ethereum.usd;
    // converts the USD amount to ETH by dividing the amount by the current ETH price
    const ethAmount = (amountInUSD / ethPrice).toFixed(6); // Adjust the decimal places as needed
    return ethAmount;
  } catch (error) {
    console.error("Error fetching USD to ETH conversion:", error);
  }
}

  