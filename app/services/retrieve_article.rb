class RetrieveArticle
    def get_latest_articles
        @latest_article = Article.order("created_at").last(2)
        @latest_article
    end

    def get_oldest_articles
        @oldest_article = Article.order("created_at").first(2)
        @oldest_article
    end

end