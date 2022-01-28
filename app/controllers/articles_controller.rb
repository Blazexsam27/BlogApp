class ArticlesController < ApplicationController
  def index
      @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new()
  end

  def create
    @user = User.find(params[:user_id])
    @article = @user.articles.create(article_params)
    print(@user)
    if @article.save
      flash[:notice] = "Article Created Successfully!"
      html = ApplicationController.render(partial: "articles/single_article", locals: {article: @article})
      ActionCable.server.broadcast('articles_channel', html)
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end

  end

  def edit
    @article = Article.find(params[:id])
  end

  def update 
    @user = User.find(params[:user_id])
    @article = @user.articles.update(article_params)
    if @article.update(article_params)
      flash[:notice] = "Article Updated Successfully!"
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    flash[:notice] = "Article Deleted Successfully!"
    ActionCable.server.broadcast('delete_article_channel', "article_" + @article.id.to_s)
    redirect_to root_path, status: :see_other
  end

  def show_my_articles
    @articles = []
    if user_signed_in?
      Article.where(user_id: current_user.id).find_each do |article|
        @articles.push(article)
      end
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :body, :image)
  end
end
