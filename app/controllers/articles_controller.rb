class ArticlesController < ApplicationController
  def index
    @user_id = User.find(params[:user_id])
    @articles = Article.find_by(user_id:@user_id.id)
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
    # @article = Article.new(article_params)
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

  private
  def article_params
    params.require(:article).permit(:title, :body)
  end

end
