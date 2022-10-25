import { BigNumber } from 'ethers'
import { useContractRead } from 'wagmi'
import { DAI } from '../constants'
import { formatBigNumber } from '../helpers'

const useDaiBalance = (address?: string) => {
  const res = useContractRead({
    addressOrName: DAI.address,
    contractInterface: DAI.abi,
    functionName: 'balanceOf',
    args: address,
  })

  return {
    ...res,
    formatted: formatBigNumber(BigNumber.from(res.data || 0), 2) || '0.00',
  }
}

/**
 * Exports
 */

export default useDaiBalance