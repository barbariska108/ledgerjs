import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
import AppSky from "@ledgerhq/hw-app-sky";

async function example() {
  const transport = await TransportNodeHid.create(5000);
  transport.setDebugMode(true);
  const appSky = new AppSky(transport);
  const o = await appSky.getWalletPublicKey("44'/0'/0'/0");
  console.log("getWalletPublicKey:", o);
}

example();
