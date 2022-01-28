class AddLikeCountToArticle < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :like_count, :integer
  end
end
