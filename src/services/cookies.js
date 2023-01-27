function addCookie(documentStore, uuid) {
  documentStore.cookie += `uuid=${uuid};max-age=360`;
}

function findCookieBins(documentStore, binData) {
  const cookieUUIDS = documentStore.cookie.split(/;|uuid=/);
  return binData.filter(bin => cookieUUIDS.includes(bin.uuid));
}

export { addCookie, findCookieBins };


