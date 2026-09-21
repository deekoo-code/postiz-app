import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

// Documentele legale ale operatorului instantei. Implicit raman cele ale
// upstream-ului; cine gazduieste sub propria marca pune TERMS_URL si
// PRIVACY_URL in mediu.
//
// Conteaza mai mult decat pare: pe ecranul de inregistrare, aceste doua
// linkuri sunt singura afirmatie juridica facuta utilizatorului. Daca
// trimit catre alta firma decat cea declarata in portalurile de audit
// (TikTok, Meta), cele doua se contrazic.
const implicit = (cale: string) =>
  isGeneralServerSide() ? `https://postiz.com/${cale}` : `https://gitroom.com/${cale}`;

export const termsUrl = () => process.env.TERMS_URL || implicit('terms');
export const privacyUrl = () => process.env.PRIVACY_URL || implicit('privacy');
