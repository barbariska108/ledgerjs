import "./index.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import TransportU2F from "@ledgerhq/hw-transport-u2f";
import Skycoin from "@ledgerhq/hw-app-sky";


class App extends Component {
  state = {
    address: null,
    error: null
  };
  onGetLedgerSkycoinAddress = async () => {
    try {
      this.setState({ error: null });
      const transport = await TransportU2F.create();
      const sky = new Btc(transport);
      const { skycoinAddress } = await sky.getWalletPublicKey("44'/0'/0'/0");
      this.setState({ address: skycoinAddress });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { address, error } = this.state;
    return (
      <div>
        <p>
          <button onClick={this.onGetLedgerSkycoinAddress}>
            Get Ledger Skycoin Address
          </button>
        </p>
        <p>
          <button onClick={this.onGetLedgerEthereumAddress}>
            Get Ledger Ethereum Address
          </button>
        </p>
        <p>
          {error ? (
            <code className="error">{error.toString()}</code>
          ) : (
            <code className="address">{address}</code>
          )}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
