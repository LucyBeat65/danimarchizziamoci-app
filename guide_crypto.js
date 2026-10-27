// Sblocco della guida: i contenuti a pagamento sono cifrati (AES-256-CBC, IV + testo cifrato).
// La chiave arriva solo con il link dopo il pagamento (?purchase=guide&k=...) e resta sul dispositivo.

const GUIDE_KEY_STORAGE = 'dk_guide_key';

function loadGuideKeyHex() {
  try { return localStorage.getItem(GUIDE_KEY_STORAGE) || ''; } catch (e) { return ''; }
}

function hexToBytes(hex) {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out;
}

function base64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function importGuideKey(hex) {
  if (!/^[0-9a-f]{64}$/i.test(hex || '')) return null;
  return crypto.subtle.importKey('raw', hexToBytes(hex), { name: 'AES-CBC' }, false, ['decrypt']);
}

async function decryptBytes(key, bytes) {
  return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-CBC', iv: bytes.slice(0, 16) }, key, bytes.slice(16)));
}

async function decryptText(key, b64) {
  return new TextDecoder().decode(await decryptBytes(key, base64ToBytes(b64)));
}

// Restituisce la chiave solo se apre davvero i contenuti (controllo su GUIDE_CHECK).
async function validGuideKey(hex) {
  try {
    const key = await importGuideKey(hex);
    if (!key) return null;
    return (await decryptText(key, GUIDE_CHECK)) === 'danimarchizziamoci-ok' ? key : null;
  } catch (e) {
    return null;
  }
}
