class ArticlesController < ApplicationController
  def index
      @articles = Article.all
  end

  def show
    if user_signed_in?  
      @article = Article.find(params[:id])
    end 
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
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update 
    @article = Article.find(params[:id])
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
    params.require(:article).permit(:title, :body)
  end
end
