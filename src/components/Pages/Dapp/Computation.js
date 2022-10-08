const forge = require("node-forge");
let SERVER_URL = "http://46.101.250.145:3003/";
class Computation {
  static async sendPublicKey(publicKey) {
    let res = await fetch(SERVER_URL + "publickey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        publicKey: publicKey,
      }),
    });

    let response = await res.json();
    return response["url_file"];
  }

  static async decryptPrediction(privateKeyImported, prediction_encrypted) {
    let privateKey = forge.pki.privateKeyFromPem(privateKeyImported);
    var prediction_decrypted = privateKey.decrypt(
      forge.util.decode64(prediction_encrypted),
      "RSAES-PKCS1-V1_5"
    );
    console.log("decrypted", prediction_decrypted);
    return prediction_decrypted;
  }



}

export { Computation }
