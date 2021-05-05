/**                                                                                                    
   * Waits until the iframe is attached and then returns it to the caller                        
   *                                                                                                     
   * @access public
   * @param {object} page - The Puppeteer page API object 
   * @param {string} nameOrId - The name or id of the target iframe                                                                                                                                      
   * @returns {object} The Puppeteer iframe element                                                            
**/
async function iframeAttached(page, nameOrId) {
    return new Promise(async resolve => {
        const pollingInterval = 1000;
        const poll = setInterval(async function waitForIFrameToLoad() {
            const iFrame = page.frames().find(frame => frame.name() === nameOrId);
            if (iFrame) {
                clearInterval(poll);
                resolve(iFrame);
            }
        }, pollingInterval);
    });
}

module.exports = {
    iframeAttached
}