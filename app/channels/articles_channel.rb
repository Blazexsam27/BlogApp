class ArticlesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "articles_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
