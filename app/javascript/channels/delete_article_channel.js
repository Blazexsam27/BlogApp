import consumer from "channels/consumer";
var articleList = document.getElementById("articleListAccordian");

consumer.subscriptions.create("DeleteArticleChannel", {
  connected() {
    console.log("Delete Articles channel connected");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var deleted_article = document.getElementById(data);
    deleted_article.remove();
  },
});
