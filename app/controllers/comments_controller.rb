class CommentsController < ApplicationController

    def new
        @comment = Comment.new()
        @article = Article.find(params[:article_id])
    end

    def create
        @article = Article.find(params[:article_id])
        @comment = @article.comments.create(comment_params)
        @comment.save
        redirect_to user_article_path(current_user.id, @article.id)
    end

    private
    def comment_params
        params.require(:comment).permit(:commenter, :body)
    end
    
end
