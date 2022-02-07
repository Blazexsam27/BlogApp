import consumer from "channels/consumer";

consumer.subscriptions.create("ArticlesChannel", {
  connected() {
    console.log("Articles channel connected");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("Article List Updated !");
  },
});
