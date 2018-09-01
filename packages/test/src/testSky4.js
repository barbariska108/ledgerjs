import Sky from "@ledgerhq/hw-app-sky";

export default async transport => {
  const sky = new Sky(transport);
  const result = await sky.signMessageNew(
    "44'/0'/0'/0",
    Buffer.from("test").toString("hex")
  );
  const v = result["v"] + 27 + 4;
  const signature = Buffer.from(
    v.toString(16) + result["r"] + result["s"],
    "hex"
  ).toString("base64");
  return "Signature : " + signature;
};
