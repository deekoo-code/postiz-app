import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

// Numele sub care se prezinta instanta in titluri de pagina si in texte
// vizibile utilizatorului. Implicit ramane comportamentul upstream; cine
// gazduieste instanta sub propria marca pune BRAND_NAME in mediu.
//
// Nu e cosmetica: un audit de platforma (TikTok, Meta) se uita la ce scrie
// pe ecranul pe care il vede recenzentul, iar numele altui produs acolo a
// fost motiv de respingere.
export const brandName = () =>
  process.env.BRAND_NAME || (isGeneralServerSide() ? 'Postiz' : 'Gitroom');
