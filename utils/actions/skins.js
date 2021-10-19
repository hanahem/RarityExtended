/******************************************************************************
**	@Author:				Rarity Extended
**	@Twitter:				@RXtended
**	@Date:					Monday October 18th 2021
**	@Filename:				skins.js
******************************************************************************/

import { ethers } from 'ethers';

export async function getSkinNFT({ provider, tokenID }, callback) {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
        process.env.RARITY_SKINS_ADDR,
        process.env.RARITY_SKINS_ABI,
        signer
    );
    try {
        const skin = await contract.tokenURI(tokenID)
        return fetch(skin)
            .then(res => res.json().then(json => {
                return json.image
            }))
        // return imgUri
    } catch (error) {
        callback({ error, data: undefined });
        return;
    }
}