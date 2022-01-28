import consumer from "channels/consumer";
var articleList = document.getElementById("articleListAccordian");
consumer.subscriptions.create("ArticlesChannel", {
  connected() {
    console.log("Articles channel connected");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(articleList);
    articleList.innerHTML = articleList.innerHTML + data;
  },
});
