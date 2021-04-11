const admin = require("firebase-admin");
const functions = require("firebase-functions");

module.exports.processChangeRole = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    console.log(context.auth.uid);
    return admin.auth().setCustomUserClaims(context.auth.uid, { admin: true });
    // return { message: "success"};
  }
);