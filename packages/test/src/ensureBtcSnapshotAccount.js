import Sky from "@ledgerhq/hw-app-sky";

const expectedSkycoinAddress = "13KE6TffArLh4fVM6uoQzvsYq5vwetJcVM";
export default async transport => {
  const sky = new Sky(transport);
  const result = await sky.getWalletPublicKey("44'/0'/0'/0");
  if (result.skycoinAddress !== expectedSkycoinAddress) {
    console.log(
      "Expected skycoinAddress to be " +
        expectedSkycoinAddress +
        " but got " +
        result.skycoinAddress
    );
    throw new Error(
      "snapshot test can only be run with a Ledger device set up with the same testing seed.\nSee packages/test/README.md for more information."
    );
  }
};
