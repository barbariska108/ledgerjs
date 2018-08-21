import Sky from "@ledgerhq/hw-app-sky";

export default async transport => {
  const sky = new Sky(transport);
  const result = await sky.getWalletPublicKey("44'/0'/0'/0");
  return result;
};
